import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * Bande de série quotidienne : affiche les 7 derniers jours
 * avec un indicateur visuel pour chaque jour actif.
 */

export interface StreakDay {
  /** Initiale du jour (ex: "L", "M", "M", "J"…) */
  label: string;
  /** Jour complété ? */
  done: boolean;
  /** Est-ce aujourd'hui ? */
  isToday?: boolean;
}

interface StreakStripProps {
  /** Les 7 jours de la semaine */
  days: StreakDay[];
  /** Nombre de jours de série en cours */
  currentStreak: number;
  style?: ViewStyle;
}

export function StreakStrip({ days, currentStreak, style }: StreakStripProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.flame}>🔥</Text>
        <View style={styles.headerText}>
          <Text style={styles.streakValue}>
            {currentStreak} {currentStreak <= 1 ? 'jour' : 'jours'}
          </Text>
          <Text style={styles.streakLabel}>de série en cours</Text>
        </View>
      </View>

      <View style={styles.daysRow}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayColumn}>
            <View
              style={[
                styles.dayDot,
                day.done && styles.dayDotDone,
                day.isToday && styles.dayDotToday,
              ]}
            >
              {day.done && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text
              style={[
                styles.dayLabel,
                day.isToday && styles.dayLabelToday,
              ]}
            >
              {day.label}
            </Text>
          </View>
        ))}
      </View>
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
    gap: Theme.spacing[4],
    ...Theme.shadows.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  flame: {
    fontSize: 28,
  },
  headerText: {
    gap: 1,
  },
  streakValue: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  streakLabel: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayColumn: {
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  dayDot: {
    width: 32,
    height: 32,
    borderRadius: Theme.radii.full,
    backgroundColor: Theme.rawColors.sand[200],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  dayDotDone: {
    backgroundColor: Theme.colors.streak,
    borderColor: Theme.colors.streak,
  },
  dayDotToday: {
    borderColor: Theme.colors.primary,
    borderWidth: 2,
  },
  checkmark: {
    color: Theme.colors.textOnAccent,
    fontSize: 14,
    fontWeight: '700',
  },
  dayLabel: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
  dayLabelToday: {
    color: Theme.colors.primary,
    fontWeight: '700',
  },
});
