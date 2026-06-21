import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { CategoryCard } from '@/components/common/CategoryCard';
import { Card } from '@/components/common/Card';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { vocabulary } from '@/data/vocabulary';
import { verbs } from '@/data/verbs';
import { grammarRules } from '@/data/grammar';
import { lessons } from '@/data/lessons';
import { dialogues } from '@/data/dialogues';

/**
 * APPRENDRE — hub d'apprentissage Blablalouni.
 * 4 catégories + bandeau Écriture. Aucune fonctionnalité retirée.
 */
export default function ApprendreScreen() {
  const router = useRouter();

  const sections: SectionDef[] = [
    {
      key: 'lecon',
      route: '/lecon',
      emoji: '📖',
      title: 'Parcours',
      subtitle: 'Les leçons du jour, pas à pas',
      count: lessons.length,
      unit: 'leçon',
      accent: '#607A53',
      culturalRef: '🫒',
    },
    {
      key: 'vocabulaire',
      route: '/vocabulaire',
      emoji: '📚',
      title: 'Mots',
      subtitle: 'Le vocabulaire par thème',
      count: vocabulary.length,
      unit: 'mot',
      accent: '#1F5F8B',
      culturalRef: '🌊',
    },
    {
      key: 'verbes',
      route: '/verbes',
      emoji: '🗣️',
      title: 'Verbes',
      subtitle: 'Conjugaisons visuelles',
      count: verbs.length,
      unit: 'verbe',
      accent: '#C76543',
      culturalRef: '☕',
    },
    {
      key: 'grammaire',
      route: '/grammaire',
      emoji: '📜',
      title: 'Grammaire',
      subtitle: 'Les règles essentielles',
      count: grammarRules.length,
      unit: 'règle',
      accent: '#8B1E1E',
      culturalRef: '🏛️',
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Apprendre"
        subtitle="Votre tunisien, pas à pas"
        accentColor="#607A53"
      />

      <View style={styles.grid}>
        {sections.map((s) => (
          <CategoryCard
            key={s.key}
            emoji={s.emoji}
            title={s.title}
            subtitle={s.subtitle}
            countLabel={
              s.count > 0
                ? `${s.count} ${s.unit}${s.count > 1 ? 's' : ''}`
                : 'Bientôt'
            }
            accentColor={s.accent}
            culturalRef={s.culturalRef}
            onPress={() => router.push(s.route)}
            style={styles.card}
          />
        ))}
      </View>

      {/* Bandeau dialogues */}
      <Card
        variant="subtle"
        style={styles.dialoguesBanner}
        onPress={() => router.push('/dialogues')}
      >
        <Text style={styles.writingEmoji}>💬</Text>
        <View style={styles.writingText}>
          <Text style={styles.writingTitle}>Dialogues</Text>
          <Text style={styles.writingSubtitle}>
            {dialogues.length > 0
              ? `${dialogues.length} conversation${dialogues.length > 1 ? 's' : ''} à lire`
              : 'Bientôt disponible'}
          </Text>
        </View>
        <Text style={styles.writingChevron}>›</Text>
      </Card>

      {/* Bandeau écriture */}
      <Card
        variant="subtle"
        style={styles.writingBanner}
        onPress={() => router.push('/ecriture')}
      >
        <Text style={styles.writingEmoji}>🔤</Text>
        <View style={styles.writingText}>
          <Text style={styles.writingTitle}>Écriture tunisienne</Text>
          <Text style={styles.writingSubtitle}>
            Latin · Arabizi · Arabe — bientôt disponible
          </Text>
        </View>
        <Text style={styles.writingChevron}>›</Text>
      </Card>
    </ScreenContainer>
  );
}

interface SectionDef {
  key: string;
  route: string;
  emoji: string;
  title: string;
  subtitle: string;
  count: number;
  unit: string;
  accent: string;
  culturalRef?: string;
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[3],
    marginBottom: Theme.spacing[4],
  },
  card: {
    width: '47%',
    flexGrow: 1,
  },
  writingBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  dialoguesBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    marginBottom: Theme.spacing[3],
  },
  writingEmoji: {
    fontSize: 28,
  },
  writingText: {
    flex: 1,
  },
  writingTitle: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  writingSubtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  writingChevron: {
    fontSize: 28,
    color: Theme.colors.textMuted,
  },
});
