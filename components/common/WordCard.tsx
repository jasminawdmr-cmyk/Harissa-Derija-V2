import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Badge } from './Badge';
import { AudioButton } from './AudioButton';
import { MasteryBadge } from './MasteryBadge';
import type { VocabularyItem } from '@/types';
import { getCategoryToken } from '@/utils/categories';
import { LEVEL_LABELS, LEVEL_BADGE_VARIANT } from '@/utils/levels';

/**
 * /components/common/WordCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Fiche de vocabulaire colorée par catégorie (charte visuelle).
 *
 * Repliée : français, tunisien, translittération, pastille de catégorie.
 * Dépliée : phonétique, exemple, note de faux-ami, variantes régionales —
 *           uniquement si présents dans les données (aucune invention).
 *
 * Données : VocabularyItem issu de data/vocabulary.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface WordCardProps {
  key?: string | number;
  word: VocabularyItem;
  /** Score de maîtrise 0–5 (badge de progression). undefined => "nouveau" */
  masteryScore?: number;
  /** Mot en favori ? */
  isFavorite?: boolean;
  /** Bascule favori */
  onToggleFavorite?: (wordId: string) => void;
}

export function WordCard({
  word,
  masteryScore,
  isFavorite,
  onToggleFavorite,
}: WordCardProps) {
  const [expanded, setExpanded] = useState(false);
  const token = getCategoryToken(word.category);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((e) => !e);
  };

  const hasDetails =
    !!word.phonetic ||
    (!!word.exampleSentenceDarija && !!word.exampleSentenceFrench) ||
    !!word.falseFreindNote ||
    (word.regionalVariants?.length ?? 0) > 0;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggle}
      style={[styles.card, { borderLeftColor: token.main }]}
    >
      {/* Ligne principale */}
      <View style={styles.mainRow}>
        <View style={styles.textZone}>
          <View style={styles.frenchRow}>
            <Text style={styles.french}>{word.french}</Text>
            {/* Bouton audio : désactivé tant qu'aucun audio n'existe */}
            <AudioButton audioFileName={word.audioFileName} size="sm" />
          </View>
          <Text style={styles.arabic}>{word.darija}</Text>
          <Text style={styles.latin}>{word.darijaLatin}</Text>

          {/* Badges : maîtrise + favori */}
          <View style={styles.badgeRow}>
            <MasteryBadge score={masteryScore} />
            {onToggleFavorite && (
              <TouchableOpacity
                onPress={() => onToggleFavorite(word.id)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Text style={styles.favoriteIcon}>
                  {isFavorite ? '★' : '☆'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Pastille de catégorie */}
        <View style={styles.tags}>
          <View style={[styles.catChip, { backgroundColor: token.soft }]}>
            <Text style={styles.catIcon}>{token.icon}</Text>
            <Text style={[styles.catLabel, { color: token.main }]}>
              {token.label}
            </Text>
          </View>
        </View>
      </View>

      {/* Détails dépliés */}
      {expanded && hasDetails && (
        <View style={styles.details}>
          {word.phonetic ? (
            <Text style={styles.phonetic}>{word.phonetic}</Text>
          ) : null}

          {word.exampleSentenceDarija && word.exampleSentenceFrench ? (
            <View style={styles.exampleBox}>
              <Text style={styles.exampleArabic}>
                {word.exampleSentenceDarija}
              </Text>
              <Text style={styles.exampleFrench}>
                {word.exampleSentenceFrench}
              </Text>
            </View>
          ) : null}

          {word.falseFreindNote ? (
            <View style={styles.noteBox}>
              <Text style={styles.noteLabel}>💡 Bon à savoir</Text>
              <Text style={styles.noteText}>{word.falseFreindNote}</Text>
            </View>
          ) : null}

          {word.regionalVariants && word.regionalVariants.length > 0 ? (
            <View style={styles.variantsBox}>
              <Text style={styles.variantsLabel}>Variantes régionales</Text>
              {word.regionalVariants.map((v, i) => (
                <Text key={i} style={styles.variantLine}>
                  <Text style={styles.variantRegion}>{v.region}</Text> :{' '}
                  {v.formLatin} ({v.form})
                </Text>
              ))}
            </View>
          ) : null}

          <View style={styles.levelRow}>
            <Badge
              label={LEVEL_LABELS[word.level]}
              variant={LEVEL_BADGE_VARIANT[word.level]}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    borderLeftWidth: 4,
    ...Theme.shadows.sm,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Theme.spacing[3],
  },
  textZone: {
    flex: 1,
    gap: 2,
  },
  french: {
    ...TextStyles.cardTitle,
    fontSize: 17,
    color: Theme.colors.textPrimary,
  },
  frenchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Theme.spacing[2],
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
    marginTop: Theme.spacing[1],
  },
  favoriteIcon: {
    fontSize: 18,
    color: Theme.colors.streak,
  },
  arabic: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    fontSize: 16,
  },
  latin: {
    ...TextStyles.bodySmall,
    color: Theme.colors.primary,
    fontStyle: 'italic',
  },
  tags: {
    alignItems: 'flex-end',
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
    borderRadius: Theme.radii.full,
  },
  catIcon: {
    fontSize: 12,
  },
  catLabel: {
    ...TextStyles.label,
    fontSize: 10,
  },
  details: {
    marginTop: Theme.spacing[3],
    paddingTop: Theme.spacing[3],
    borderTopWidth: 1,
    borderTopColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
  },
  phonetic: {
    ...TextStyles.phonetic,
    color: Theme.colors.textMuted,
    fontSize: 15,
  },
  exampleBox: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: 4,
  },
  exampleArabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
  },
  exampleFrench: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  noteBox: {
    backgroundColor: Theme.rawColors.olive[50],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: 4,
  },
  noteLabel: {
    ...TextStyles.label,
    color: Theme.rawColors.olive[600],
  },
  noteText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  variantsBox: {
    gap: 4,
  },
  variantsLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  variantLine: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  variantRegion: {
    fontWeight: '700',
    color: Theme.colors.textPrimary,
  },
  levelRow: {
    flexDirection: 'row',
  },
});
