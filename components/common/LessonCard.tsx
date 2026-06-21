import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';

interface LessonCardProps {
  title: string;
  description: string;
  progressRatio?: number;
  accentColor?: string;
  culturalRef?: string;
  isLocked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export function LessonCard({
  title,
  description,
  progressRatio = 0,
  accentColor = Theme.colors.primary,
  culturalRef,
  isLocked = false,
  onPress,
  style,
}: LessonCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={isLocked ? 1 : 0.82}
      disabled={isLocked}
    >
      {/* Ref culturelle en filigrane */}
      {culturalRef ? (
        <Text style={styles.watermark}>{culturalRef}</Text>
      ) : null}

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          {isLocked ? (
            <Text style={styles.lock}>🔒</Text>
          ) : (
            <View style={[styles.dot, { backgroundColor: accentColor }]} />
          )}
        </View>

        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        {/* Barre de progression */}
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.round(progressRatio * 100)}%` as any,
                backgroundColor: accentColor,
              },
            ]}
          />
        </View>

        {progressRatio > 0 ? (
          <Text style={[styles.progressLabel, { color: accentColor }]}>
            {Math.round(progressRatio * 100)} %
          </Text>
        ) : (
          <Text style={styles.progressLabel}>Pas encore commencée</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    overflow: 'hidden',
    ...Theme.shadows.sm,
  },
  content: {
    gap: Theme.spacing[2],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
    flex: 1,
    marginRight: Theme.spacing[2],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  lock: {
    fontSize: 14,
    opacity: 0.5,
  },
  description: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  progressTrack: {
    height: 4,
    backgroundColor: Theme.colors.progressTrack,
    borderRadius: Theme.radii.full,
    marginTop: Theme.spacing[1],
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    borderRadius: Theme.radii.full,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: Theme.colors.textMuted,
  },
  watermark: {
    position: 'absolute',
    right: Theme.spacing[3],
    top: Theme.spacing[3],
    fontSize: 40,
    opacity: 0.07,
  },
});
