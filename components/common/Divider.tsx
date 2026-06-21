import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface DividerProps {
  label?: string;
  style?: ViewStyle;
  color?: string;
}

export function Divider({
  label,
  style,
  color = Theme.colors.borderLight,
}: DividerProps) {
  if (label) {
    return (
      <View style={[styles.withLabel, style]}>
        <View style={[styles.line, { backgroundColor: color }]} />
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.line, { backgroundColor: color }]} />
      </View>
    );
  }

  return (
    <View
      style={[styles.line, { backgroundColor: color }, styles.full, style]}
    />
  );
}

const styles = StyleSheet.create({
  full: {
    width: '100%',
    height: 1,
    marginVertical: Theme.spacing[3],
  },
  withLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    marginVertical: Theme.spacing[4],
  },
  line: {
    flex: 1,
    height: 1,
  },
  label: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
});
