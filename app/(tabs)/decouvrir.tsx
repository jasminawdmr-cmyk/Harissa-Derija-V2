import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { PostcardCard } from '@/components/common/PostcardCard';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { getDiscoverBySection } from '@/data/discover';
import { recipes } from '@/data/recipes';
import { expressions } from '@/data/expressions';

/**
 * DÉCOUVRIR — pilier culturel Blablalouni.
 * Chaque rubrique a sa propre couleur et ses références visuelles discrètes.
 * Le contenu n'est pas encore disponible : placeholders « Bientôt » élégants.
 */
export default function DecouvrirScreen() {
  const rubriques: RubriqueDef[] = [
    {
      key: 'culture',
      emoji: '☕',
      title: 'Culture',
      subtitle: 'Traditions & codes de vie',
      count: getDiscoverBySection('culture').length,
      topColor: '#C76543',
      decorEmojis: ['🫒', '🌸'],
    },
    {
      key: 'cuisine',
      emoji: '🌶️',
      title: 'Cuisine',
      subtitle: 'Saveurs & recettes',
      count: recipes.length,
      topColor: '#8B1E1E',
      decorEmojis: ['🧄', '🫙'],
    },
    {
      key: 'histoire',
      emoji: '🏛️',
      title: 'Histoire',
      subtitle: 'Repères & grandes époques',
      count: getDiscoverBySection('histoire').length,
      topColor: '#3D342A',
      decorEmojis: ['⚱️', '📜'],
    },
    {
      key: 'regions',
      emoji: '🌊',
      title: 'Régions',
      subtitle: 'Du Nord au Sud',
      count: getDiscoverBySection('regions').length,
      topColor: '#1F5F8B',
      decorEmojis: ['🌴', '🔑'],
    },
    {
      key: 'musique',
      emoji: '🎵',
      title: 'Musique',
      subtitle: 'Genres & instruments',
      count: getDiscoverBySection('musique').length,
      topColor: '#7E4FB0',
      decorEmojis: ['🥁', '🎸'],
    },
    {
      key: 'expressions',
      emoji: '💬',
      title: 'Expressions',
      subtitle: 'Le sel de la langue',
      count: expressions.length,
      topColor: '#D6A658',
      decorEmojis: ['🌿', '✨'],
    },
    {
      key: 'diaspora',
      emoji: '🌍',
      title: 'Diaspora',
      subtitle: 'Garder le lien',
      count: getDiscoverBySection('diaspora').length,
      topColor: '#607A53',
      decorEmojis: ['🧳', '✉️'],
    },
    {
      key: 'art',
      emoji: '🎨',
      title: 'Art & Artisanat',
      subtitle: 'Poterie, tissu & créations',
      count: getDiscoverBySection('art').length,
      topColor: '#7E4FB0',
      decorEmojis: ['🪬', '🧵'],
    },
    {
      key: 'contemporain',
      emoji: '✨',
      title: "Tunisie d'aujourd'hui",
      subtitle: 'La vie moderne',
      count: getDiscoverBySection('contemporain').length,
      topColor: '#1F5F8B',
      decorEmojis: ['📱', '🌆'],
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Découvrir"
        subtitle="La Tunisie, un fragment à la fois"
        accentColor="#1F5F8B"
      />

      {/* Bandeau d'accroche */}
      <View style={styles.heroBanner}>
        <Text style={styles.heroDecor}>🌊</Text>
        <View style={styles.heroTextBlock}>
          <Text style={styles.heroTitle}>Plus qu'une langue</Text>
          <Text style={styles.heroText}>
            La cuisine, les gens, l'histoire et la musique d'un pays
            méditerranéen — un fragment à la fois.
          </Text>
        </View>
        <Text style={styles.heroDecorRight}>🌴</Text>
      </View>

      {/* Grille de cartes postales */}
      <View style={styles.grid}>
        {rubriques.map((r) => (
          <PostcardCard
            key={r.key}
            emoji={r.emoji}
            title={r.title}
            subtitle={r.subtitle}
            countLabel={r.count > 0 ? `${r.count} à explorer` : 'Bientôt'}
            topColor={r.topColor}
            decorEmojis={r.decorEmojis}
            style={styles.card}
          />
        ))}
      </View>

      <Text style={styles.footnote}>
        Nouveaux contenus à venir 🌿
      </Text>
    </ScreenContainer>
  );
}

interface RubriqueDef {
  key: string;
  emoji: string;
  title: string;
  subtitle: string;
  count: number;
  topColor: string;
  decorEmojis?: string[];
}

const styles = StyleSheet.create({
  heroBanner: {
    backgroundColor: '#1F1712',
    borderRadius: Theme.radii.xl,
    padding: Theme.spacing[5],
    marginBottom: Theme.spacing[5],
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    overflow: 'hidden',
    ...Theme.shadows.md,
  },
  heroDecor: {
    fontSize: 34,
  },
  heroDecorRight: {
    fontSize: 30,
    opacity: 0.6,
  },
  heroTextBlock: {
    flex: 1,
    gap: Theme.spacing[1],
  },
  heroTitle: {
    ...TextStyles.cardTitle,
    fontSize: 18,
    fontWeight: '800',
    color: '#F7F1E6',
  },
  heroText: {
    ...TextStyles.bodySmall,
    color: '#B8AC98',
    lineHeight: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[3],
  },
  card: {
    width: '47%',
    flexGrow: 1,
  },
  footnote: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    textAlign: 'center',
    marginTop: Theme.spacing[5],
    marginBottom: Theme.spacing[2],
  },
});
