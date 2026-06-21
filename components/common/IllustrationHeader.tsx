/**
 * /components/common/IllustrationHeader.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * En-tête illustrée pour les fiches de contenu (mots, dialogues, leçons).
 *
 * Style : bande colorée chaleureux avec illustration centrale + typographie.
 * Textures douces, formes arrondies, palette méditerranéenne.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { IllustrationBadge } from './IllustrationBadge';

interface IllustrationHeaderProps {
  /** Emoji ou icône principale */
  emoji: string;
  /** Titre principal */
  title: string;
  /** Sous-titre ou contexte */
  subtitle?: string;
  /** Couleur de l'univers ou thème */
  color?: string;
  /** Texte secondaire (niveau, durée, etc.) */
  meta?: string;
  /** Afficher une bande décorative en haut */
  withBand?: boolean;
  style?: ViewStyle;
}

export function IllustrationHeader({
  emoji,
  title,
  subtitle,
  color = Theme.rawColors.terracotta[400],
  meta,
  withBand = true,
  style,
}: IllustrationHeaderProps) {
  return (
    <View style={[styles.container, { borderTopColor: color }, style]}>
      {withBand && <View style={[styles.topBand, { backgroundColor: color }]} />}

      <View style={styles.content}>
        {/* Badge illustré */}
        <IllustrationBadge
          emoji={emoji}
          color={color}
          size="lg"
          shape="rounded"
        />

        {/* Textes */}
        <View style={styles.textBlock}>
          {meta ? (
            <Text style={[styles.meta, { color: color + 'CC' }]}>{meta}</Text>
          ) : null}
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Ligne de séparation décorative */}
      <View style={[styles.divider, { backgroundColor: color + '33' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.lg,
    overflow: 'hidden',
    ...Theme.shadows.sm,
  },
  topBand: {
    height: 4,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Theme.spacing[4],
    gap: Theme.spacing[4],
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  meta: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    fontSize: 20,
  },
  subtitle: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginHorizontal: Theme.spacing[4],
    marginBottom: Theme.spacing[2],
  },
});
