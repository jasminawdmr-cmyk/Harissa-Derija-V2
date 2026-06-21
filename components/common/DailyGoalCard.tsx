import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { ProgressBar } from './ProgressBar';

/**
 * Carte d'objectif quotidien : montre les minutes pratiquées
 * par rapport à l'objectif du jour, avec une barre de progression.
 */

interface DailyGoalCardProps {
  /** Minutes pratiquées aujourd'hui */
  minutesDone: number;
  /** Objectif quotidien en minutes */
  goalMinutes: number;
  style?: ViewStyle;
}

export function DailyGoalCard({
  minutesDone,
  goalMinutes,
  style,
}: DailyGoalCardProps) {
  const progress = goalMinutes > 0 ? minutesDone / goalMinutes : 0;
  const reached = minutesDone >= goalMinutes;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.icon}>🎯</Text>
          <Text style={styles.title}>Objectif du jour</Text>
        </View>
        {reached && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Atteint</Text>
          </View>
        )}
      </View>

      <ProgressBar
        progress={progress}
        height={10}
        color={reached ? Theme.colors.secondary : Theme.colors.primary}
      />

      <Text style={styles.detail}>
        <Text style={styles.detailStrong}>{minutesDone} min</Text>
        <Text style={styles.detailMuted}> / {goalMinutes} min</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  icon: {
    fontSize: 18,
  },
  title: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  badge: {
    backgroundColor: Theme.rawColors.olive[100],
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
  },
  badgeText: {
    ...TextStyles.label,
    fontSize: 10,
    color: Theme.rawColors.olive[600],
  },
  detail: {
    ...TextStyles.body,
  },
  detailStrong: {
    color: Theme.colors.textPrimary,
    fontWeight: '700',
  },
  detailMuted: {
    color: Theme.colors.textMuted,
  },
});
