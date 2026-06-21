import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme, TextStyles, TenseColors } from '@/lib/Theme';
import { ALL_PATTERNS } from '@/data/conjugationRules';
import type { Tense } from '@/types';

/**
 * /components/common/TensePatternCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Carte explicative d'un temps verbal, alimentée par data/conjugationRules.ts.
 *
 * Données centralisées uniquement : on lit le ConjugationPattern correspondant
 * au temps. Si aucun pattern n'existe (ex: futur pas encore modélisé), un
 * fallback lisible est affiché — sans rien inventer.
 *
 * Le bandeau est coloré selon la charte TenseColors (présent vert, passé jaune,
 * futur violet).
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface TensePatternCardProps {
  tense: Tense;
}

export function TensePatternCard({ tense }: TensePatternCardProps) {
  const token = TenseColors[tense];
  const pattern = ALL_PATTERNS.find((p) => p.tense === tense);

  return (
    <View style={styles.card}>
      {/* Bandeau de temps */}
      <View style={[styles.banner, { backgroundColor: token.soft }]}>
        <Text style={styles.bannerIcon}>{token.icon}</Text>
        <Text style={[styles.bannerLabel, { color: token.main }]}>
          {token.label}
        </Text>
      </View>

      {pattern ? (
        <>
          {/* Description du pattern (issue des données) */}
          <Text style={styles.description}>{pattern.description}</Text>

          {/* Exemple de référence (racine modèle) */}
          <View style={styles.exampleBox}>
            <Text style={styles.exampleLabel}>Racine modèle</Text>
            <View style={styles.exampleRow}>
              <Text style={styles.exampleArabic}>
                {pattern.exampleRoot.arabic}
              </Text>
              <Text style={styles.exampleArrow}>→</Text>
              <Text style={styles.exampleFrench}>
                « {pattern.exampleRoot.french} »
              </Text>
            </View>
          </View>
        </>
      ) : (
        // Fallback : temps non encore modélisé dans les données
        <View style={styles.fallback}>
          <Text style={styles.fallbackText}>
            La structure du {token.label.toLowerCase()} sera détaillée
            prochainement.
          </Text>
          <View style={styles.fallbackBadge}>
            <Text style={styles.fallbackBadgeText}>À venir</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: Theme.spacing[1],
    borderRadius: Theme.radii.full,
  },
  bannerIcon: {
    fontSize: 14,
  },
  bannerLabel: {
    ...TextStyles.label,
  },
  description: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  exampleBox: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: Theme.spacing[1],
  },
  exampleLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  exampleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  exampleArabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    fontWeight: '700',
  },
  exampleArrow: {
    ...TextStyles.body,
    color: Theme.colors.textMuted,
  },
  exampleFrench: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  fallback: {
    alignItems: 'flex-start',
    gap: Theme.spacing[2],
  },
  fallbackText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    lineHeight: 20,
  },
  fallbackBadge: {
    backgroundColor: Theme.rawColors.sand[300],
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
  },
  fallbackBadgeText: {
    ...TextStyles.label,
    fontSize: 10,
    color: Theme.rawColors.neutral[600],
  },
});
