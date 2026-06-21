/**
 * /components/common/UniverseIllustration.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Illustration d'univers thématique.
 *
 * Présente un univers avec son identité visuelle complète :
 * couleur, icône, titre, et éléments décoratifs méditerranéens.
 * Utilisable comme carte d'accueil, bannière ou sélecteur d'univers.
 *
 * Style : éditorial méditerranéen, semi-réaliste, chaleureux, texture papier,
 * formes arrondies. Une couleur unique par univers (DÉFINITIVE).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { IllustrationBadge } from './IllustrationBadge';
import { UNIVERSE_REGISTRY } from '@/lib/colorRegistry';
import type { Universe } from '@/types';

/**
 * Couleurs définitives par univers — une couleur = un univers, jamais réutilisée.
 * Source unique : lib/colorRegistry.ts (aucune ne coïncide avec une notion grammaticale).
 */
export const UNIVERSE_COLORS: Partial<Record<Universe, string>> = UNIVERSE_REGISTRY;

/** Emojis représentatifs par univers */
export const UNIVERSE_EMOJIS: Partial<Record<Universe, string>> = {
  salutations:  '👋',
  cafe:         '☕',
  marche:       '🛒',
  maison:       '🏠',
  famille:      '👨‍👩‍👧',
  louage:       '🚌',
  plage:        '🏖️',
  hotel:        '🏨',
  emotions:     '💬',
  nourriture:   '🍽️',
  temps_meteo:  '☀️',
};

interface UniverseIllustrationProps {
  universe: Universe;
  title: string;
  subtitle?: string;
  /** Nombre de mots / progressions appris */
  progressLabel?: string;
  /** Appuyer sur la carte */
  onPress?: () => void;
  /** Mode plein (carte) ou compact (liste) */
  variant?: 'card' | 'compact';
  style?: ViewStyle;
}

export function UniverseIllustration({
  universe,
  title,
  subtitle,
  progressLabel,
  onPress,
  variant = 'card',
  style,
}: UniverseIllustrationProps) {
  const color = UNIVERSE_COLORS[universe] ?? Theme.rawColors.terracotta[400];
  const emoji = UNIVERSE_EMOJIS[universe] ?? '📚';

  const content = (
    <View style={[styles.container, variant === 'compact' && styles.containerCompact, style]}>
      {/* Bande de couleur latérale gauche (mode compact) ou top (mode card) */}
      {variant === 'card' ? (
        <View style={[styles.topAccent, { backgroundColor: color }]} />
      ) : (
        <View style={[styles.leftAccent, { backgroundColor: color }]} />
      )}

      <View style={[styles.inner, variant === 'compact' && styles.innerCompact]}>
        {/* Badge illustré */}
        <IllustrationBadge
          emoji={emoji}
          color={color}
          size={variant === 'card' ? 'xl' : 'md'}
          shape="rounded"
          textured
        />

        {/* Textes */}
        <View style={styles.textBlock}>
          <Text
            style={[styles.title, variant === 'compact' && styles.titleCompact]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </Text>
          ) : null}
          {progressLabel ? (
            <View style={[styles.progressPill, { borderColor: color + '66', backgroundColor: color + '15' }]}>
              <Text style={[styles.progressText, { color }]}>{progressLabel}</Text>
            </View>
          ) : null}
        </View>

        {/* Chevron si pressable */}
        {onPress && (
          <Text style={[styles.chevron, { color }]}>›</Text>
        )}
      </View>

      {/* Éléments décoratifs méditerranéens (mode card uniquement) */}
      {variant === 'card' && (
        <View style={styles.decorRow}>
          <Text style={[styles.decorDot, { color: color + '44' }]}>◆</Text>
          <Text style={[styles.decorDot, { color: color + '33' }]}>◆</Text>
          <Text style={[styles.decorDot, { color: color + '22' }]}>◆</Text>
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={`Univers ${title}`}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    ...Theme.shadows.md,
  },
  containerCompact: {
    borderRadius: Theme.radii.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topAccent: {
    height: 5,
    width: '100%',
  },
  leftAccent: {
    width: 4,
    alignSelf: 'stretch',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Theme.spacing[4],
    gap: Theme.spacing[4],
  },
  innerCompact: {
    padding: Theme.spacing[3],
    gap: Theme.spacing[3],
    flex: 1,
  },
  textBlock: {
    flex: 1,
    gap: Theme.spacing[1],
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
  },
  titleCompact: {
    fontSize: 15,
  },
  subtitle: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    fontSize: 13,
  },
  progressPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
    borderWidth: 1,
    marginTop: 4,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '700',
  },
  chevron: {
    fontSize: 24,
    fontWeight: '300',
  },
  decorRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: Theme.spacing[4],
    paddingBottom: Theme.spacing[2],
    gap: 4,
  },
  decorDot: {
    fontSize: 8,
  },
});
