import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface ProgressBarProps {
  progress: number;       // 0 à 1
  label?: string;
  showPercent?: boolean;
  height?: number;
  color?: string;
  trackColor?: string;
  style?: ViewStyle;
}

export function ProgressBar({
  progress,
  label,
  showPercent = false,
  height = 8,
  color = Theme.colors.progressFill,
  trackColor = Theme.colors.progressTrack,
  style,
}: ProgressBarProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  const percent = Math.round(clamped * 100);

  return (
    <View style={[styles.container, style]}>
      {(label || showPercent) && (
        <View style={styles.labelRow}>
          {label && <Text style={styles.label}>{label}</Text>}
          {showPercent && (
            <Text style={styles.percent}>{percent}%</Text>
          )}
        </View>
      )}
      <View
        style={[
          styles.track,
          { height, backgroundColor: trackColor, borderRadius: height / 2 },
        ]}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${percent}%`,
              backgroundColor: color,
              borderRadius: height / 2,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing[1],
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    ...TextStyles.caption,
    color: Theme.colors.textSecondary,
  },
  percent: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    fontWeight: '600',
  },
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
