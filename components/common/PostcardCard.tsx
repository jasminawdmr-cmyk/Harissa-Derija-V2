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

interface PostcardCardProps {
  title: string;
  subtitle: string;
  emoji: string;
  countLabel: string;
  topColor: string;
  decorEmojis?: string[];
  onPress?: () => void;
  style?: ViewStyle;
}

export function PostcardCard({
  title,
  subtitle,
  emoji,
  countLabel,
  topColor,
  decorEmojis = [],
  onPress,
  style,
}: PostcardCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.82}
    >
      {/* Bande photo du haut — comme une photo de carte postale */}
      <View style={[styles.photoStrip, { backgroundColor: topColor }]}>
        <Text style={styles.mainEmoji}>{emoji}</Text>
        {decorEmojis.map((e, i) => (
          <Text key={i} style={[styles.decorEmoji, { opacity: 0.55 - i * 0.1 }]}>
            {e}
          </Text>
        ))}
        {/* Ligne de tirets style carte postale */}
        <View style={styles.postcardLine} />
      </View>

      {/* Corps de la carte */}
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
        <View style={[styles.pill, { backgroundColor: topColor + '22' }]}>
          <Text style={[styles.pillText, { color: topColor }]}>
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
    overflow: 'hidden',
    ...Theme.shadows.md,
  },
  photoStrip: {
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing[4],
    gap: Theme.spacing[2],
    position: 'relative',
  },
  mainEmoji: {
    fontSize: 32,
  },
  decorEmoji: {
    fontSize: 20,
  },
  postcardLine: {
    position: 'absolute',
    bottom: 8,
    left: Theme.spacing[4],
    right: Theme.spacing[4],
    height: 1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  body: {
    padding: Theme.spacing[3],
    gap: Theme.spacing[1],
  },
  title: {
    ...TextStyles.cardTitle,
    fontSize: 15,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
  },
  subtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 17,
  },
  pill: {
    alignSelf: 'flex-start',
    borderRadius: Theme.radii.full,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 2,
    marginTop: Theme.spacing[1],
  },
  pillText: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
});
