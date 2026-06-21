import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Badge } from './Badge';
import { Button } from './Button';
import type { GeneratedQuestion } from '@/services/quizGenerator';

/**
 * Question de remise en ordre.
 *
 * L'apprenant tape les mots dans l'ordre souhaité depuis la banque de mots ;
 * ils s'ajoutent à la zone de réponse. Il peut retirer un mot en le tapant.
 * À la validation, on compare l'ordre construit à l'ordre attendu.
 */

interface QuizOrderQuestionProps {
  question: GeneratedQuestion;
  onSubmit: (isCorrect: boolean, points: number) => void;
  onNext: () => void;
}

interface Token {
  /** Identifiant unique pour gérer les doublons de mots */
  uid: string;
  word: string;
}

export function QuizOrderQuestion({
  question,
  onSubmit,
  onNext,
}: QuizOrderQuestionProps) {
  // Banque de mots mélangés (issue de question.options)
  const [bank, setBank] = useState<Token[]>([]);
  // Mots placés dans la zone de réponse
  const [placed, setPlaced] = useState<Token[]>([]);
  const [validated, setValidated] = useState(false);

  // (Ré)initialise à chaque nouvelle question
  useEffect(() => {
    const tokens = question.options.map((word, i) => ({
      uid: `${question.id}_${i}`,
      word,
    }));
    setBank(tokens);
    setPlaced([]);
    setValidated(false);
  }, [question.id, question.options]);

  const expectedOrder = question.answer as string[];

  const handlePickFromBank = (token: Token) => {
    if (validated) return;
    setBank((b) => b.filter((t) => t.uid !== token.uid));
    setPlaced((p) => [...p, token]);
  };

  const handleRemoveFromPlaced = (token: Token) => {
    if (validated) return;
    setPlaced((p) => p.filter((t) => t.uid !== token.uid));
    setBank((b) => [...b, token]);
  };

  const handleValidate = () => {
    const builtOrder = placed.map((t) => t.word);
    const isCorrect =
      builtOrder.length === expectedOrder.length &&
      builtOrder.every((w, i) => w === expectedOrder[i]);
    setValidated(true);
    onSubmit(isCorrect, question.points);
  };

  const builtOrder = placed.map((t) => t.word);
  const isCorrect =
    validated &&
    builtOrder.length === expectedOrder.length &&
    builtOrder.every((w, i) => w === expectedOrder[i]);

  const allPlaced = bank.length === 0 && placed.length > 0;

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Badge label="Remettre en ordre" variant="terracotta" />
        <Text style={styles.points}>{question.points} pts</Text>
      </View>

      {/* Énoncé + indice (traduction française) */}
      <View style={styles.promptZone}>
        <Text style={styles.prompt}>{question.prompt}</Text>
        {question.subtitle ? (
          <Text style={styles.hint}>« {question.subtitle} »</Text>
        ) : null}
      </View>

      {/* Zone de réponse construite */}
      <View
        style={[
          styles.answerZone,
          validated && (isCorrect ? styles.answerZoneCorrect : styles.answerZoneWrong),
        ]}
      >
        {placed.length === 0 ? (
          <Text style={styles.answerPlaceholder}>
            Tapez les mots ci-dessous dans le bon ordre
          </Text>
        ) : (
          <View style={styles.tokenRow}>
            {placed.map((token) => (
              <TouchableOpacity
                key={token.uid}
                style={styles.placedToken}
                onPress={() => handleRemoveFromPlaced(token)}
                activeOpacity={0.7}
              >
                <Text style={styles.placedTokenText}>{token.word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Banque de mots */}
      {bank.length > 0 && (
        <View style={styles.bankZone}>
          <View style={styles.tokenRow}>
            {bank.map((token) => (
              <TouchableOpacity
                key={token.uid}
                style={styles.bankToken}
                onPress={() => handlePickFromBank(token)}
                activeOpacity={0.7}
              >
                <Text style={styles.bankTokenText}>{token.word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Explication après validation */}
      {validated && question.explanation ? (
        <View
          style={[
            styles.explanation,
            isCorrect ? styles.explanationCorrect : styles.explanationWrong,
          ]}
        >
          <Text style={styles.explanationTitle}>
            {isCorrect ? '✓ Correct !' : '✗ Pas tout à fait'}
          </Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      ) : null}

      {/* Actions */}
      {!validated ? (
        <Button
          label="Valider"
          onPress={handleValidate}
          disabled={!allPlaced}
          fullWidth
        />
      ) : (
        <Button label="Continuer" onPress={onNext} fullWidth />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing[4],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  points: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  promptZone: {
    gap: Theme.spacing[2],
  },
  prompt: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  hint: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    fontStyle: 'italic',
  },
  answerZone: {
    minHeight: 80,
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.md,
    borderWidth: 1.5,
    borderColor: Theme.colors.borderMedium,
    borderStyle: 'dashed',
    padding: Theme.spacing[3],
    justifyContent: 'center',
  },
  answerZoneCorrect: {
    borderColor: Theme.colors.secondary,
    backgroundColor: Theme.rawColors.olive[50],
    borderStyle: 'solid',
  },
  answerZoneWrong: {
    borderColor: Theme.rawColors.error,
    borderStyle: 'solid',
  },
  answerPlaceholder: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  bankZone: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
  },
  tokenRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[2],
  },
  placedToken: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.radii.sm,
    paddingVertical: Theme.spacing[2],
    paddingHorizontal: Theme.spacing[3],
  },
  placedTokenText: {
    ...TextStyles.button,
    color: Theme.colors.textOnAccent,
  },
  bankToken: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.sm,
    borderWidth: 1,
    borderColor: Theme.colors.borderMedium,
    paddingVertical: Theme.spacing[2],
    paddingHorizontal: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  bankTokenText: {
    ...TextStyles.button,
    color: Theme.colors.textPrimary,
  },
  explanation: {
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[4],
    gap: Theme.spacing[1],
  },
  explanationCorrect: {
    backgroundColor: Theme.rawColors.olive[50],
  },
  explanationWrong: {
    backgroundColor: Theme.rawColors.sand[100],
  },
  explanationTitle: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  explanationText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
});
