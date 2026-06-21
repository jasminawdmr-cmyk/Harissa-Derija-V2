import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Card } from '@/components/common/Card';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { vocabulary } from '@/data/vocabulary';
import { verbs } from '@/data/verbs';
import { grammarRules } from '@/data/grammar';
import { lessons } from '@/data/lessons';

/**
 * 📚 APPRENDRE — pilier d'apprentissage de la langue.
 * Hub qui regroupe les écrans existants (Leçons, Vocabulaire, Verbes, Grammaire)
 * sans les supprimer : chaque carte ouvre l'écran correspondant déjà construit.
 * Réduit la navigation de 8 onglets à 5 piliers cohérents.
 */
export default function ApprendreScreen() {
  const router = useRouter();

  // Compteurs réels pour donner vie aux cartes (évite l'impression de vide)
  const sections: HubSection[] = [
    {
      key: 'lecon',
      route: '/lecon',
      emoji: '📖',
      title: 'Parcours',
      subtitle: 'La leçon du jour, pas à pas',
      count: lessons.length,
      unit: 'leçon',
      accent: Theme.rawColors.olive[400],
    },
    {
      key: 'vocabulaire',
      route: '/vocabulaire',
      emoji: '📚',
      title: 'Mots',
      subtitle: 'Le vocabulaire par thème',
      count: vocabulary.length,
      unit: 'mot',
      accent: Theme.rawColors.olive[500],
    },
    {
      key: 'verbes',
      route: '/verbes',
      emoji: '🗣️',
      title: 'Verbes',
      subtitle: 'Conjugaisons visuelles',
      count: verbs.length,
      unit: 'verbe',
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'grammaire',
      route: '/grammaire',
      emoji: '📜',
      title: 'Grammaire',
      subtitle: 'Les règles essentielles',
      count: grammarRules.length,
      unit: 'règle',
      accent: Theme.rawColors.azure[400],
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Apprendre"
        subtitle="Votre tunisien, pas à pas"
        accentColor={Theme.colors.secondary}
      />

      <View style={styles.grid}>
        {sections.map((s) => (
          <Card
            key={s.key}
            elevated
            style={styles.card}
            onPress={() => router.push(s.route)}
          >
            <View style={[styles.iconBubble, { backgroundColor: s.accent + '22' }]}>
              <Text style={styles.icon}>{s.emoji}</Text>
            </View>
            <Text style={styles.cardTitle}>{s.title}</Text>
            <Text style={styles.cardSubtitle}>{s.subtitle}</Text>
            <View style={[styles.countPill, { backgroundColor: s.accent + '18' }]}>
              <Text style={[styles.countText, { color: s.accent }]}>
                {s.count > 0
                  ? `${s.count} ${s.unit}${s.count > 1 ? 's' : ''}`
                  : 'Bientôt'}
              </Text>
            </View>
          </Card>
        ))}
      </View>

      {/* Bandeau écriture — préparé pour le futur parcours d'écriture */}
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

interface HubSection {
  key: string;
  route: string;
  emoji: string;
  title: string;
  subtitle: string;
  count: number;
  unit: string;
  accent: string;
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[3],
  },
  card: {
    width: '47%',
    flexGrow: 1,
    gap: Theme.spacing[1],
    minHeight: 150,
  },
  iconBubble: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing[2],
  },
  icon: {
    fontSize: 24,
  },
  cardTitle: {
    ...TextStyles.cardTitle,
    fontSize: 17,
    color: Theme.colors.textPrimary,
  },
  cardSubtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  countPill: {
    alignSelf: 'flex-start',
    borderRadius: Theme.radii.full,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    marginTop: Theme.spacing[2],
  },
  countText: {
    ...TextStyles.label,
    fontSize: 11,
  },
  writingBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    marginTop: Theme.spacing[4],
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
