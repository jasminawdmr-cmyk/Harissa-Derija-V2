import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';

interface DailyExpressionCardProps {
  darijaWord?: string;
  phonetic?: string;
  translation?: string;
  culturalNote?: string;
  isPlaceholder?: boolean;
  style?: ViewStyle;
}

export function DailyExpressionCard({
  darijaWord,
  phonetic,
  translation,
  culturalNote,
  isPlaceholder = false,
  style,
}: DailyExpressionCardProps) {
  return (
    <View style={[styles.card, style]}>
      {/* Motif décoratif fond */}
      <Text style={styles.bgDecor}>☕</Text>

      <Text style={styles.label}>Expression du jour</Text>

      {isPlaceholder || !darijaWord ? (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Bientôt 🌿</Text>
          <Text style={styles.placeholderSub}>
            Les expressions arrivent avec le contenu validé
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.darijaWord}>{darijaWord}</Text>
          {phonetic ? (
            <Text style={styles.phonetic}>{phonetic}</Text>
          ) : null}
          {translation ? (
            <Text style={styles.translation}>{translation}</Text>
          ) : null}
          {culturalNote ? (
            <View style={styles.noteRow}>
              <Text style={styles.noteDot}>🌸</Text>
              <Text style={styles.noteText}>{culturalNote}</Text>
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F1712',
    borderRadius: Theme.radii.xl,
    padding: Theme.spacing[6],
    overflow: 'hidden',
    ...Theme.shadows.lg,
  },
  bgDecor: {
    position: 'absolute',
    right: -4,
    bottom: -8,
    fontSize: 90,
    opacity: 0.06,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#D6A658',
    marginBottom: Theme.spacing[3],
  },
  darijaWord: {
    ...TextStyles.darijaWord,
    color: '#F7F1E6',
    marginBottom: Theme.spacing[1],
  },
  phonetic: {
    ...TextStyles.phonetic,
    color: '#D6A658',
    marginBottom: Theme.spacing[2],
  },
  translation: {
    ...TextStyles.translation,
    color: '#EDE0C4',
    marginBottom: Theme.spacing[3],
  },
  noteRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Theme.spacing[2],
    borderTopWidth: 1,
    borderTopColor: 'rgba(247,241,230,0.12)',
    paddingTop: Theme.spacing[3],
    marginTop: Theme.spacing[1],
  },
  noteDot: {
    fontSize: 13,
  },
  noteText: {
    ...TextStyles.bodySmall,
    color: '#B8AC98',
    flex: 1,
    lineHeight: 18,
  },
  placeholder: {
    gap: Theme.spacing[2],
    paddingVertical: Theme.spacing[4],
  },
  placeholderText: {
    ...TextStyles.cardTitle,
    color: '#F7F1E6',
    fontSize: 22,
  },
  placeholderSub: {
    ...TextStyles.bodySmall,
    color: '#8C8070',
  },
});
