import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles, GrammarColors } from '@/lib/Theme';
import type { VisualToken } from '@/lib/Theme';

/**
 * /components/common/MorphologyBlock.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Décomposition visuelle d'une forme verbale (ou d'un mot) en segments colorés :
 *   préfixe (bleu) · radical (vert) · suffixe (violet) · particule (gris) ·
 *   exception (rouge), selon la charte GrammarColors.
 *
 * ⚠️  Les données actuelles (VerbConjugation) ne contiennent PAS encore de
 *     découpage prefix/root/suffix. Ce composant prévoit donc l'architecture
 *     SANS inventer de segmentation :
 *       - Si `segments` est fourni → affichage décomposé et coloré.
 *       - Sinon → FALLBACK lisible : la forme entière est affichée telle quelle,
 *         avec une note discrète indiquant que la décomposition n'est pas encore
 *         disponible.
 *
 * Quand les données seront enrichies, il suffira de passer `segments` sans
 * toucher au composant.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Rôle morphologique d'un segment, aligné sur GrammarColors */
export type MorphRole = 'prefix' | 'root' | 'suffix' | 'particle' | 'exception';

/** Un segment d'une forme décomposée */
export interface MorphSegment {
  /** Texte du segment (ex: "n", "kteb", "ou") */
  text: string;
  role: MorphRole;
}

interface MorphologyBlockProps {
  /**
   * Forme complète (toujours requise — sert de fallback et d'accessibilité).
   * Ex: "niktbou"
   */
  surface: string;
  /** Translittération ou forme arabe affichée en légende sous la forme */
  secondary?: string;
  /**
   * Découpage morphologique optionnel. Si absent ou vide → fallback.
   * La concaténation des segments devrait reformer `surface`, mais ce n'est
   * pas imposé (les données peuvent être partielles).
   */
  segments?: MorphSegment[];
  /** Taille du texte principal */
  size?: 'md' | 'lg';
  style?: ViewStyle;
}

const ROLE_TOKEN: Record<MorphRole, VisualToken> = {
  prefix: GrammarColors.prefix,
  root: GrammarColors.root,
  suffix: GrammarColors.suffix,
  particle: GrammarColors.particle,
  exception: GrammarColors.exception,
};

export function MorphologyBlock({
  surface,
  secondary,
  segments,
  size = 'lg',
  style,
}: MorphologyBlockProps) {
  const hasSegments = segments && segments.length > 0;

  return (
    <View style={[styles.container, style]}>
      {hasSegments ? (
        // ── Affichage décomposé et coloré ──────────────────────────────────
        <View style={styles.segmentsRow}>
          {segments!.map((seg, i) => {
            const token = ROLE_TOKEN[seg.role];
            return (
              <View
                key={i}
                style={[styles.segment, { backgroundColor: token.soft }]}
              >
                <Text
                  style={[
                    size === 'lg' ? styles.segmentTextLg : styles.segmentTextMd,
                    { color: token.main },
                  ]}
                >
                  {seg.text}
                </Text>
              </View>
            );
          })}
        </View>
      ) : (
        // ── FALLBACK lisible : forme entière, non décomposée ───────────────
        <View style={styles.fallbackRow}>
          <Text style={size === 'lg' ? styles.surfaceLg : styles.surfaceMd}>
            {surface}
          </Text>
        </View>
      )}

      {/* Forme secondaire (arabe ou phonétique) */}
      {secondary ? (
        <Text style={styles.secondary}>{secondary}</Text>
      ) : null}

      {/* Note de fallback discrète */}
      {!hasSegments ? (
        <Text style={styles.fallbackNote}>Décomposition à venir</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Theme.spacing[1],
  },
  segmentsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
  },
  segment: {
    borderRadius: Theme.radii.sm,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
  },
  segmentTextLg: {
    ...TextStyles.darijaWord,
    fontSize: 26,
  },
  segmentTextMd: {
    ...TextStyles.body,
    fontWeight: '700',
    fontSize: 18,
  },
  fallbackRow: {
    alignItems: 'center',
  },
  surfaceLg: {
    ...TextStyles.darijaWord,
    fontSize: 28,
    color: Theme.colors.textPrimary,
  },
  surfaceMd: {
    ...TextStyles.body,
    fontWeight: '700',
    fontSize: 18,
    color: Theme.colors.textPrimary,
  },
  secondary: {
    ...TextStyles.phonetic,
    color: Theme.colors.primary,
    fontSize: 16,
  },
  fallbackNote: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    fontStyle: 'italic',
    fontSize: 10,
  },
});
