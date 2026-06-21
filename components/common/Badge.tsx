import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

export type BadgeVariant = 'sand' | 'terracotta' | 'olive' | 'azure' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

export function Badge({ label, variant = 'sand', style }: BadgeProps) {
  return (
    <View style={[styles.base, styles[`variant_${variant}`], style]}>
      <Text style={[styles.text, styles[`text_${variant}`]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
    alignSelf: 'flex-start',
  },
  text: {
    ...TextStyles.label,
    fontSize: 10,
  },

  variant_sand: {
    backgroundColor: Theme.rawColors.sand[300],
  },
  text_sand: {
    color: Theme.rawColors.neutral[600],
  },

  variant_terracotta: {
    backgroundColor: Theme.rawColors.terracotta[100],
  },
  text_terracotta: {
    color: Theme.rawColors.terracotta[500],
  },

  variant_olive: {
    backgroundColor: Theme.rawColors.olive[100],
  },
  text_olive: {
    color: Theme.rawColors.olive[600],
  },

  variant_azure: {
    backgroundColor: Theme.rawColors.azure[100],
  },
  text_azure: {
    color: Theme.rawColors.azure[500],
  },

  variant_neutral: {
    backgroundColor: Theme.rawColors.neutral[100],
  },
  text_neutral: {
    color: Theme.rawColors.neutral[500],
  },
});
