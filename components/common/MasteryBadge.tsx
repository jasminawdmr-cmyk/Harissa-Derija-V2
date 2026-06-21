import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles, getMasteryToken } from '@/lib/Theme';

/**
 * /components/common/MasteryBadge.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Badge de progression / maîtrise, coloré selon la charte MasteryColors.
 *
 * Prend un score de maîtrise (0–5) et affiche le palier correspondant :
 *   rouge (non acquis) · orange (fragile) · jaune (en progression) ·
 *   vert (maîtrisé) · étoile (automatisé).
 *
 * Si le score est undefined (mot jamais rencontré), affiche un état neutre
 * « nouveau » discret.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface MasteryBadgeProps {
  /** Score de maîtrise 0–5, ou undefined si jamais vu */
  score?: number;
  /** Affiche le libellé texte en plus du picto */
  showLabel?: boolean;
  size?: 'sm' | 'md';
  style?: ViewStyle;
}

export function MasteryBadge({
  score,
  showLabel = true,
  size = 'sm',
  style,
}: MasteryBadgeProps) {
  // État « nouveau » : mot jamais rencontré
  if (score === undefined) {
    return (
      <View style={[styles.base, styles.neutral, style]}>
        <Text style={styles.neutralIcon}>○</Text>
        {showLabel && <Text style={styles.neutralLabel}>Nouveau</Text>}
      </View>
    );
  }

  const token = getMasteryToken(score);

  return (
    <View style={[styles.base, { backgroundColor: token.soft }, style]}>
      <Text style={[styles.icon, size === 'md' && styles.iconMd]}>
        {token.icon}
      </Text>
      {showLabel && (
        <Text
          style={[
            styles.label,
            size === 'md' && styles.labelMd,
            { color: token.main },
          ]}
        >
          {token.label}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
  },
  icon: {
    fontSize: 11,
  },
  iconMd: {
    fontSize: 13,
  },
  label: {
    ...TextStyles.label,
    fontSize: 10,
  },
  labelMd: {
    fontSize: 11,
  },
  neutral: {
    backgroundColor: Theme.rawColors.sand[200],
  },
  neutralIcon: {
    fontSize: 11,
    color: Theme.colors.textMuted,
  },
  neutralLabel: {
    ...TextStyles.label,
    fontSize: 10,
    color: Theme.colors.textMuted,
  },
});
