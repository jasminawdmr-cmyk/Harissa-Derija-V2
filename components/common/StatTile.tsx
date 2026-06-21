import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * Tuile statistique compacte : une icône, une valeur, un label.
 * Réutilisable dans l'Accueil, le Profil et les écrans de stats.
 */

interface StatTileProps {
  /** Emoji ou icône textuelle */
  icon: string;
  /** Valeur principale (ex: "12", "8 min") */
  value: string;
  /** Label sous la valeur */
  label: string;
  /** Couleur d'accent optionnelle pour la valeur */
  accentColor?: string;
  /** Fond de la tuile */
  backgroundColor?: string;
  style?: ViewStyle;
}

export function StatTile({
  icon,
  value,
  label,
  accentColor = Theme.colors.textPrimary,
  backgroundColor = Theme.colors.backgroundCard,
  style,
}: StatTileProps) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.value, { color: accentColor }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Theme.spacing[4],
    paddingHorizontal: Theme.spacing[2],
    borderRadius: Theme.radii.lg,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[1],
    ...Theme.shadows.sm,
  },
  icon: {
    fontSize: 22,
    marginBottom: 2,
  },
  value: {
    ...TextStyles.sectionTitle,
    fontSize: 22,
  },
  label: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
});
