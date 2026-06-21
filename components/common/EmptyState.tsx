import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Button } from './Button';

interface EmptyStateProps {
  emoji?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: ViewStyle;
}

export function EmptyState({
  emoji = '🌿',
  title,
  description,
  actionLabel,
  onAction,
  style,
}: EmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
      {actionLabel && onAction && (
        <Button
          label={actionLabel}
          onPress={onAction}
          variant="outline"
          size="sm"
          style={styles.action}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing[8],
    paddingVertical: Theme.spacing[12],
    gap: Theme.spacing[3],
  },
  emoji: {
    fontSize: 48,
    marginBottom: Theme.spacing[2],
  },
  title: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    textAlign: 'center',
  },
  description: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  action: {
    marginTop: Theme.spacing[2],
  },
});
