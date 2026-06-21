import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import type { VisualToken } from '@/lib/Theme';

/**
 * /components/common/ColorTag.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Étiquette colorée atomique de la charte visuelle.
 *
 * Reçoit un VisualToken (issu de Theme.grammar / .tense / .person / .category /
 * .mastery / .gender) et affiche un point ou pictogramme + libellé, avec un fond
 * doux et un texte de la couleur principale. Conçu pour un repérage instantané
 * (profil très visuel / TDAH).
 *
 * Trois tailles, deux variantes (avec/sans fond), pictogramme optionnel.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type TagSize = 'sm' | 'md' | 'lg';

interface ColorTagProps {
  key?: string | number;
  /** Token de la charte visuelle */
  token: VisualToken;
  /** Surcharge éventuelle du libellé (sinon token.label) */
  label?: string;
  /** Affiche le pictogramme du token */
  showIcon?: boolean;
  /** Affiche le libellé texte */
  showLabel?: boolean;
  /** Variante : 'solid' (fond doux) ou 'dot' (juste une pastille + texte) */
  variant?: 'solid' | 'dot' | 'outline';
  size?: TagSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function ColorTag({
  token,
  label,
  showIcon = true,
  showLabel = true,
  variant = 'solid',
  size = 'md',
  style,
  textStyle,
}: ColorTagProps) {
  const displayLabel = label ?? token.label;

  const containerVariant: ViewStyle =
    variant === 'solid'
      ? { backgroundColor: token.soft }
      : variant === 'outline'
      ? { borderWidth: 1.5, borderColor: token.main, backgroundColor: 'transparent' }
      : { backgroundColor: 'transparent' };

  return (
    <View
      style={[
        styles.base,
        styles[`size_${size}`],
        containerVariant,
        style,
      ]}
    >
      {variant === 'dot' && (
        <View
          style={[
            styles.dot,
            styles[`dot_${size}`],
            { backgroundColor: token.main },
          ]}
        />
      )}
      {variant !== 'dot' && showIcon && (
        <Text style={[styles.icon, styles[`icon_${size}`]]}>{token.icon}</Text>
      )}
      {showLabel && (
        <Text
          style={[
            styles.label,
            styles[`label_${size}`],
            { color: token.main },
            textStyle,
          ]}
          numberOfLines={1}
        >
          {displayLabel}
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
    borderRadius: Theme.radii.full,
  },
  // Tailles du conteneur
  size_sm: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 2,
    gap: 4,
  },
  size_md: {
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: 4,
    gap: 6,
  },
  size_lg: {
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[2],
    gap: 8,
  },
  // Pastille (variante dot)
  dot: {
    borderRadius: Theme.radii.full,
  },
  dot_sm: { width: 8, height: 8 },
  dot_md: { width: 10, height: 10 },
  dot_lg: { width: 12, height: 12 },
  // Pictogramme
  icon: {
    textAlign: 'center',
  },
  icon_sm: { fontSize: 11 },
  icon_md: { fontSize: 13 },
  icon_lg: { fontSize: 16 },
  // Libellé
  label: {
    ...TextStyles.label,
  },
  label_sm: { fontSize: 10 },
  label_md: { fontSize: 11 },
  label_lg: { fontSize: 13 },
});
