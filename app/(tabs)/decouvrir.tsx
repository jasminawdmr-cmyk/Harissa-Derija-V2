import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Card } from '@/components/common/Card';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { getDiscoverBySection } from '@/data/discover';
import { recipes } from '@/data/recipes';
import { expressions } from '@/data/expressions';

/**
 * 🇹🇳 DÉCOUVRIR LA TUNISIE — pilier culturel.
 * Présente les 6+ rubriques (culture, histoire, cuisine, musique, régions,
 * expressions, diaspora, contemporain). Le contenu n'est pas encore disponible :
 * chaque carte affiche un placeholder élégant « Bientôt » pour éviter l'impression
 * de vide, tout en montrant ce qui arrive. Les contenants de données existent déjà.
 */
export default function DecouvrirScreen() {
  const rubriques: Rubrique[] = [
    {
      key: 'culture',
      emoji: '🍵',
      title: 'Culture',
      subtitle: 'Traditions & codes de vie',
      count: getDiscoverBySection('culture').length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'cuisine',
      emoji: '🌶️',
      title: 'Cuisine',
      subtitle: 'Recettes & saveurs',
      count: recipes.length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'histoire',
      emoji: '🏛️',
      title: 'Histoire',
      subtitle: 'Repères & grandes époques',
      count: getDiscoverBySection('histoire').length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'regions',
      emoji: '🌊',
      title: 'Régions',
      subtitle: 'Du Nord au Sud',
      count: getDiscoverBySection('regions').length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'musique',
      emoji: '🎵',
      title: 'Musique',
      subtitle: 'Genres & instruments',
      count: getDiscoverBySection('musique').length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'expressions',
      emoji: '💬',
      title: 'Expressions',
      subtitle: 'Le sel de la langue',
      count: expressions.length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'diaspora',
      emoji: '🌍',
      title: 'Diaspora',
      subtitle: 'Garder le lien',
      count: getDiscoverBySection('diaspora').length,
      accent: Theme.rawColors.terracotta[400],
    },
    {
      key: 'contemporain',
      emoji: '✨',
      title: 'Tunisie d’aujourd’hui',
      subtitle: 'La vie moderne',
      count: getDiscoverBySection('contemporain').length,
      accent: Theme.rawColors.terracotta[400],
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Découvrir"
        subtitle="Entrez dans la Tunisie"
        accentColor={Theme.colors.primary}
      />

      {/* Bandeau d'accroche — donne le ton, évite la page froide */}
      <Card variant="accent" style={styles.heroBanner}>
        <Text style={styles.heroEmoji}>🫒</Text>
        <Text style={styles.heroTitle}>Plus qu’une langue</Text>
        <Text style={styles.heroText}>
          La cuisine, les gens, les histoires et la musique d’un pays
          méditerranéen, un fragment à la fois.
        </Text>
      </Card>

      <View style={styles.grid}>
        {rubriques.map((r) => (
          <Card key={r.key} elevated style={styles.card}>
            <View style={[styles.iconBubble, { backgroundColor: r.accent + '22' }]}>
              <Text style={styles.icon}>{r.emoji}</Text>
            </View>
            <Text style={styles.cardTitle}>{r.title}</Text>
            <Text style={styles.cardSubtitle}>{r.subtitle}</Text>
            <View style={[styles.statusPill, { backgroundColor: r.accent + '18' }]}>
              <Text style={[styles.statusText, { color: r.accent }]}>
                {r.count > 0 ? `${r.count} à explorer` : 'Bientôt'}
              </Text>
            </View>
          </Card>
        ))}
      </View>

      <Text style={styles.footnote}>
        De nouveaux contenus arrivent régulièrement 🌿
      </Text>
    </ScreenContainer>
  );
}

interface Rubrique {
  key: string;
  emoji: string;
  title: string;
  subtitle: string;
  count: number;
  accent: string;
}

const styles = StyleSheet.create({
  heroBanner: {
    marginBottom: Theme.spacing[4],
    gap: Theme.spacing[1],
  },
  heroEmoji: {
    fontSize: 30,
    marginBottom: Theme.spacing[1],
  },
  heroTitle: {
    ...TextStyles.cardTitle,
    fontSize: 18,
    color: Theme.colors.textOnAccent,
  },
  heroText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textOnAccent,
    opacity: 0.92,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[3],
  },
  card: {
    width: '47%',
    flexGrow: 1,
    gap: Theme.spacing[1],
    minHeight: 148,
  },
  iconBubble: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing[2],
  },
  icon: {
    fontSize: 23,
  },
  cardTitle: {
    ...TextStyles.cardTitle,
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
  cardSubtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  statusPill: {
    alignSelf: 'flex-start',
    borderRadius: Theme.radii.full,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    marginTop: Theme.spacing[2],
  },
  statusText: {
    ...TextStyles.label,
    fontSize: 11,
  },
  footnote: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    textAlign: 'center',
    marginTop: Theme.spacing[5],
    marginBottom: Theme.spacing[2],
  },
});
