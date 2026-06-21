/**
 * /components/common/IllustrationBadge.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Pastille illustrée pour accompagner un mot, une expression ou un exercice.
 *
 * Style : éditorial méditerranéen, semi-réaliste, chaleureux, texture papier,
 * formes arrondies. Utilise l'emoji + la couleur de l'univers comme identité
 * visuelle, sans images binaires externes.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Theme } from '@/lib/Theme';

interface IllustrationBadgeProps {
  /** Emoji ou icône textuelle représentant le contenu */
  emoji: string;
  /** Couleur de fond (couleur de l'univers ou couleur sémantique) */
  color?: string;
  /** Taille de la pastille */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Forme : cercle (par défaut) ou arrondie */
  shape?: 'circle' | 'rounded';
  /** Afficher l'effet « texture papier » (léger grain) */
  textured?: boolean;
  style?: ViewStyle;
}

const SIZES = {
  xs: { container: 28, emoji: 13 },
  sm: { container: 36, emoji: 17 },
  md: { container: 52, emoji: 24 },
  lg: { container: 72, emoji: 34 },
  xl: { container: 96, emoji: 44 },
} as const;

export function IllustrationBadge({
  emoji,
  color = Theme.rawColors.terracotta[400],
  size = 'md',
  shape = 'circle',
  textured = true,
  style,
}: IllustrationBadgeProps) {
  const dim = SIZES[size];
  const radius = shape === 'circle' ? dim.container / 2 : dim.container * 0.28;

  return (
    <View
      style={[
        styles.base,
        {
          width: dim.container,
          height: dim.container,
          borderRadius: radius,
          backgroundColor: color + '22',
          borderColor: color + '55',
        },
        textured && styles.textured,
        style,
      ]}
    >
      {/* Halo de couleur interne */}
      <View
        style={[
          styles.halo,
          {
            width: dim.container * 0.7,
            height: dim.container * 0.7,
            borderRadius: (dim.container * 0.7) / 2,
            backgroundColor: color + '33',
          },
        ]}
      />
      <Text style={[styles.emoji, { fontSize: dim.emoji }]}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  textured: {
    // Simule la texture papier via une ombre douce multicouches
    shadowColor: Theme.rawColors.neutral[700],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  halo: {
    position: 'absolute',
  },
  emoji: {
    textAlign: 'center',
  },
});
