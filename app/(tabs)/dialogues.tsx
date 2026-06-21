import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Card } from '@/components/common/Card';
import { EmptyState } from '@/components/common/EmptyState';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { dialogues } from '@/data/dialogues';
import type { Dialogue, DialogueLine } from '@/types';

/**
 * DIALOGUES — rend visibles les dialogues existants (auparavant accessibles
 * uniquement via le générateur de quiz). Chaque réplique affiche les trois
 * versions obligatoires : arabe + arabizi + français.
 * Aucune donnée inventée : 100 % issu de data/dialogues.ts.
 */
export default function DialoguesScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader
        title="Dialogues"
        subtitle="Des conversations tunisiennes authentiques"
        accentColor="#1F8B7A"
      />

      {dialogues.length === 0 ? (
        <EmptyState
          emoji="💬"
          title="Bientôt"
          description="Les dialogues arriveront avec les prochains contenus."
        />
      ) : (
        dialogues.map((d) => <DialogueBlock key={d.id} dialogue={d} />)
      )}
    </ScreenContainer>
  );
}

function DialogueBlock({ dialogue }: { dialogue: Dialogue }) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{dialogue.title}</Text>
      <Text style={styles.situation}>{dialogue.situationFrench}</Text>

      <View style={styles.lines}>
        {dialogue.lines.map((line, i) => (
          <LineRow key={i} line={line} />
        ))}
      </View>

      {dialogue.culturalNote ? (
        <View style={styles.noteBox}>
          <Text style={styles.noteLabel}>💡 Note culturelle</Text>
          <Text style={styles.noteText}>{dialogue.culturalNote}</Text>
        </View>
      ) : null}
    </Card>
  );
}

function LineRow({ line }: { line: DialogueLine }) {
  const isA = line.speaker === 'A';
  return (
    <View style={[styles.lineRow, isA ? styles.lineA : styles.lineB]}>
      <View
        style={[
          styles.speakerChip,
          { backgroundColor: isA ? '#C76543' : '#1F5F8B' },
        ]}
      >
        <Text style={styles.speakerText}>{line.speaker}</Text>
      </View>
      <View style={styles.lineTexts}>
        <Text style={styles.arabic}>{line.arabic}</Text>
        <Text style={styles.arabizi}>{line.arabizi}</Text>
        <Text style={styles.french}>{line.french}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Theme.spacing[4],
    gap: Theme.spacing[2],
  },
  title: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
    fontWeight: '800',
  },
  situation: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    marginBottom: Theme.spacing[2],
  },
  lines: {
    gap: Theme.spacing[3],
  },
  lineRow: {
    flexDirection: 'row',
    gap: Theme.spacing[3],
    alignItems: 'flex-start',
  },
  lineA: {},
  lineB: {},
  speakerChip: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  speakerText: {
    color: '#FDFCF8',
    fontWeight: '700',
    fontSize: 13,
  },
  lineTexts: {
    flex: 1,
    gap: 1,
  },
  arabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: '600',
  },
  arabizi: {
    ...TextStyles.bodySmall,
    color: Theme.colors.primary,
    fontStyle: 'italic',
  },
  french: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  noteBox: {
    backgroundColor: Theme.rawColors.olive[50],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: 4,
    marginTop: Theme.spacing[2],
  },
  noteLabel: {
    ...TextStyles.label,
    color: Theme.rawColors.olive[600],
  },
  noteText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
});
