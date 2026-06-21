import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Badge } from './Badge';
import type { ReviewCard, AnswerQuality } from '@/services/reviewEngine';
import { getWordById } from '@/data/vocabulary';

/**
 * Carte de flashcard avec révélation de la réponse.
 *
 * Le sens dépend de `card.cardSide` :
 *   - french_to_darija : on montre le français, on devine le tunisien
 *   - darija_to_french : on montre le tunisien, on devine le français
 *
 * Le contenu provient exclusivement du vocabulaire existant (getWordById).
 * Tant que la réponse n'est pas révélée, seuls les boutons de qualité
 * apparaissent après le tap "Voir la réponse".
 */

interface FlashcardProps {
  card: ReviewCard;
  onAnswer: (quality: AnswerQuality) => void;
}

export function Flashcard({ card, onAnswer }: FlashcardProps) {
  const [revealed, setRevealed] = useState(false);

  // Réinitialise l'état de révélation à chaque nouvelle carte
  useEffect(() => {
    setRevealed(false);
  }, [card.id]);

  const word = getWordById(card.sourceId);

  // Garde-fou : si le mot n'existe pas, on saute proprement la carte
  if (!word) {
    return (
      <View style={styles.card}>
        <Text style={styles.missingText}>
          Carte indisponible (donnée manquante)
        </Text>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => onAnswer('hesitant')}
        >
          <Text style={styles.skipText}>Passer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const isFrToDarija = card.cardSide === 'french_to_darija';

  // Face avant (question) et face arrière (réponse)
  const frontPrimary = isFrToDarija ? word.french : word.arabic;
  const frontSecondary = isFrToDarija ? null : word.arabizi;
  const directionLabel = isFrToDarija
    ? 'Français → Tunisien'
    : 'Tunisien → Français';

  return (
    <View style={styles.wrapper}>
      {/* Indicateur de sens */}
      <Badge
        label={directionLabel}
        variant={isFrToDarija ? 'terracotta' : 'azure'}
        style={styles.directionBadge}
      />

      {/* Carte */}
      <View style={styles.card}>
        {/* Question */}
        <View style={styles.questionZone}>
          <Text style={styles.questionPrimary}>{frontPrimary}</Text>
          {frontSecondary ? (
            <Text style={styles.questionSecondary}>{frontSecondary}</Text>
          ) : null}
        </View>

        {/* Réponse révélée */}
        {revealed && (
          <View style={styles.answerZone}>
            <View style={styles.separator} />
            {isFrToDarija ? (
              <>
                <Text style={styles.answerArabic}>{word.arabic}</Text>
                <Text style={styles.answerLatin}>{word.arabizi}</Text>
                <Text style={styles.answerPhonetic}>{word.phonetic}</Text>
              </>
            ) : (
              <Text style={styles.answerFrench}>{word.french}</Text>
            )}

            {/* Exemple si disponible dans les données */}
            {word.exampleSentenceArabic && word.exampleSentenceFrench ? (
              <View style={styles.exampleBox}>
                <Text style={styles.exampleArabic}>
                  {word.exampleSentenceArabic}
                </Text>
                <Text style={styles.exampleFrench}>
                  {word.exampleSentenceFrench}
                </Text>
              </View>
            ) : null}
          </View>
        )}
      </View>

      {/* Actions */}
      {!revealed ? (
        <TouchableOpacity
          style={styles.revealButton}
          onPress={() => setRevealed(true)}
          activeOpacity={0.85}
        >
          <Text style={styles.revealButtonText}>Voir la réponse</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.answerButtons}>
          <AnswerButton
            label="Je ne savais pas"
            icon="✗"
            color={Theme.rawColors.error}
            onPress={() => onAnswer('incorrect')}
          />
          <AnswerButton
            label="J'ai hésité"
            icon="~"
            color={Theme.rawColors.warning}
            onPress={() => onAnswer('hesitant')}
          />
          <AnswerButton
            label="Je savais"
            icon="✓"
            color={Theme.colors.secondary}
            onPress={() => onAnswer('correct')}
          />
        </View>
      )}
    </View>
  );
}

/** Bouton de qualité de réponse */
function AnswerButton({
  label,
  icon,
  color,
  onPress,
}: {
  label: string;
  icon: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.answerButton, { borderColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.answerButtonIcon, { backgroundColor: color }]}>
        <Text style={styles.answerButtonIconText}>{icon}</Text>
      </View>
      <Text style={styles.answerButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Theme.spacing[4],
  },
  directionBadge: {
    alignSelf: 'center',
  },
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.xl,
    padding: Theme.spacing[6],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    minHeight: 240,
    justifyContent: 'center',
    ...Theme.shadows.md,
  },
  questionZone: {
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  questionPrimary: {
    ...TextStyles.darijaWord,
    fontSize: 32,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  questionSecondary: {
    ...TextStyles.phonetic,
    color: Theme.colors.primary,
  },
  answerZone: {
    alignItems: 'center',
    gap: Theme.spacing[2],
    marginTop: Theme.spacing[4],
  },
  separator: {
    width: 48,
    height: 2,
    borderRadius: 1,
    backgroundColor: Theme.colors.borderLight,
    marginBottom: Theme.spacing[2],
  },
  answerArabic: {
    ...TextStyles.darijaWord,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  answerLatin: {
    ...TextStyles.phonetic,
    color: Theme.colors.primary,
  },
  answerPhonetic: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  answerFrench: {
    ...TextStyles.darijaWord,
    fontSize: 28,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  exampleBox: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    marginTop: Theme.spacing[3],
    gap: 4,
    alignSelf: 'stretch',
  },
  exampleArabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  exampleFrench: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
  },
  revealButton: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.radii.md,
    height: Theme.layout.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadows.accent,
  },
  revealButtonText: {
    ...TextStyles.button,
    color: Theme.colors.textOnAccent,
  },
  answerButtons: {
    gap: Theme.spacing[2],
  },
  answerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.md,
    borderWidth: 1.5,
    paddingVertical: Theme.spacing[3],
    paddingHorizontal: Theme.spacing[4],
  },
  answerButtonIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtonIconText: {
    color: Theme.rawColors.neutral[0],
    fontWeight: '700',
    fontSize: 15,
  },
  answerButtonLabel: {
    ...TextStyles.button,
    color: Theme.colors.textPrimary,
  },
  missingText: {
    ...TextStyles.body,
    color: Theme.colors.textMuted,
    textAlign: 'center',
    marginBottom: Theme.spacing[3],
  },
  skipButton: {
    alignSelf: 'center',
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[2],
  },
  skipText: {
    ...TextStyles.button,
    color: Theme.colors.primary,
  },
});
