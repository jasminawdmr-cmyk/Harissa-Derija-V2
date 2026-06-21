import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
  style?: ViewStyle;
  accentColor?: string;
}

export function ScreenHeader({
  title,
  subtitle,
  rightSlot,
  style,
  accentColor = Theme.colors.primary,
}: ScreenHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        {/* Ligne d'accentuation */}
        <View style={[styles.accent, { backgroundColor: accentColor }]} />
        <Text style={styles.title}>{title}</Text>
        {subtitle ? (
          <Text style={styles.subtitle}>{subtitle}</Text>
        ) : null}
      </View>
      {rightSlot ? (
        <View style={styles.rightSlot}>{rightSlot}</View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing[6],
  },
  textContainer: {
    flex: 1,
    gap: Theme.spacing[1],
  },
  accent: {
    width: 32,
    height: 3,
    borderRadius: Theme.radii.full,
    marginBottom: Theme.spacing[2],
  },
  title: {
    ...TextStyles.screenTitle,
    color: Theme.colors.textPrimary,
  },
  subtitle: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    marginTop: Theme.spacing[1],
  },
  rightSlot: {
    marginLeft: Theme.spacing[4],
    alignItems: 'flex-end',
  },
});
