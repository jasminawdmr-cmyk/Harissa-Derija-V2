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

interface CategoryCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  countLabel: string;
  accentColor: string;
  culturalRef?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function CategoryCard({
  emoji,
  title,
  subtitle,
  countLabel,
  accentColor,
  culturalRef,
  onPress,
  style,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.82}
    >
      {/* Bande accent gauche */}
      <View style={[styles.stripe, { backgroundColor: accentColor }]} />

      <View style={styles.body}>
        {/* Icone + ref culturelle */}
        <View style={styles.topRow}>
          <View style={[styles.bubble, { backgroundColor: accentColor + '22' }]}>
            <Text style={styles.emoji}>{emoji}</Text>
          </View>
          {culturalRef ? (
            <Text style={styles.culturalRef}>{culturalRef}</Text>
          ) : null}
        </View>

        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>

        <View style={[styles.pill, { backgroundColor: accentColor + '1A' }]}>
          <Text style={[styles.pillText, { color: accentColor }]}>
            {countLabel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    flexDirection: 'row',
    overflow: 'hidden',
    minHeight: 148,
    ...Theme.shadows.md,
  },
  stripe: {
    width: 4,
    borderTopLeftRadius: Theme.radii.lg,
    borderBottomLeftRadius: Theme.radii.lg,
  },
  body: {
    flex: 1,
    padding: Theme.spacing[4],
    gap: Theme.spacing[1],
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Theme.spacing[2],
  },
  bubble: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 22,
  },
  culturalRef: {
    fontSize: 18,
    opacity: 0.55,
  },
  title: {
    ...TextStyles.cardTitle,
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
  },
  subtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 18,
  },
  pill: {
    alignSelf: 'flex-start',
    borderRadius: Theme.radii.full,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    marginTop: Theme.spacing[2],
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
