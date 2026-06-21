import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { FilterPills, FilterOption } from '@/components/common/FilterPills';
import { WordCard } from '@/components/common/WordCard';
import { VisualLegend } from '@/components/common/VisualLegend';
import { PronunciationPlayer } from '@/components/common/PronunciationPlayer';
import { EmptyState } from '@/components/common/EmptyState';
import { Theme, CategoryColors } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { vocabulary } from '@/data/vocabulary';
import { getCategoryToken } from '@/utils/categories';
import { useFavorites } from '@/hooks/useFavorites';
import { useWordMastery } from '@/hooks/useWordMastery';
import { StorageKeys } from '@/services/storage';
import type { WordCategory, VocabularyItem } from '@/types';

/** Filtre de catégorie : 'tous' ou une WordCategory réellement présente */
type CategoryFilter = 'tous' | WordCategory;

export default function VocabulaireScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('tous');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const { isFavorite, toggleFavorite, count: favCount } = useFavorites(
    StorageKeys.FAVORITE_WORDS
  );
  const { getMastery } = useWordMastery();

  // Catégories dérivées DYNAMIQUEMENT des données réelles (pas de liste figée)
  const categoryOptions: FilterOption<CategoryFilter>[] = useMemo(() => {
    const present = Array.from(
      new Set(vocabulary.map((w) => w.category))
    ) as WordCategory[];

    const options: FilterOption<CategoryFilter>[] = [
      { label: 'Tous', value: 'tous', icon: '📚' },
    ];

    for (const cat of present) {
      const token = getCategoryToken(cat);
      options.push({ label: token.label, value: cat, icon: token.icon });
    }
    return options;
  }, []);

  // Recherche + filtre
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return vocabulary.filter((word) => {
      if (onlyFavorites && !isFavorite(word.id)) return false;
      if (category !== 'tous' && word.category !== category) return false;
      if (query.length > 0) {
        const haystack = [
          word.french,
          word.arabizi,
          word.arabic,
          ...word.tags,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [search, category, onlyFavorites, isFavorite]);

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Vocabulaire"
        subtitle="Explorez les mots par thème"
        accentColor={Theme.rawColors.olive[500]}
      />

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Chercher un mot (français ou tunisien)…"
        style={styles.search}
      />

      <FilterPills
        options={categoryOptions}
        activeValue={category}
        onChange={setCategory}
        activeColor={Theme.colors.secondary}
        style={styles.filters}
      />

      {/* Légende des couleurs de catégories */}
      <VisualLegend
        title="Code couleur des thèmes"
        tokens={CategoryColors}
        defaultOpen={false}
        style={styles.legend}
      />

      {/* Prononciation vedette — visible pour Salutations */}
      {(category === 'tous' || category === 'salutations') && !search && (
        <View style={styles.pronunciationSection}>
          <Text style={styles.pronunciationTitle}>🔊 Salutations — prononciation</Text>
          {vocabulary
            .filter((w) => w.category === 'salutations')
            .slice(0, 3)
            .map((w) => (
              <PronunciationPlayer
                key={w.id}
                arabic={w.arabic}
                arabizi={w.arabizi}
                pronunciationKey={w.pronunciationKey}
                audioKey={w.audioKey}
                ttsKey={w.ttsKey}
              />
            ))}
        </View>
      )}

      {/* En-tête de liste : compteur + bascule favoris */}
      <View style={styles.listHeader}>
        <Text style={styles.resultCount}>
          {filtered.length} {filtered.length <= 1 ? 'mot' : 'mots'}
        </Text>
        <TouchableOpacity
          onPress={() => setOnlyFavorites((v) => !v)}
          style={[styles.favToggle, onlyFavorites && styles.favToggleActive]}
          activeOpacity={0.75}
        >
          <Text style={[styles.favToggleText, onlyFavorites && styles.favToggleTextActive]}>
            {onlyFavorites ? '★' : '☆'} Favoris{favCount > 0 ? ` (${favCount})` : ''}
          </Text>
        </TouchableOpacity>
      </View>

      {filtered.length === 0 ? (
        <EmptyState
          emoji={onlyFavorites ? '☆' : '🔍'}
          title={onlyFavorites ? 'Aucun favori' : 'Aucun mot trouvé'}
          description={
            onlyFavorites
              ? 'Touchez l\u2019étoile sur un mot pour l\u2019ajouter ici.'
              : 'Essayez un autre terme ou changez de thème.'
          }
        />
      ) : (
        <View style={styles.list}>
          {filtered.map((word: VocabularyItem) => (
            <WordCard
              key={word.id}
              word={word}
              masteryScore={getMastery(word.id)}
              isFavorite={isFavorite(word.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  search: {
    marginBottom: Theme.spacing[3],
  },
  filters: {
    marginBottom: Theme.spacing[4],
  },
  legend: {
    marginBottom: Theme.spacing[4],
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing[3],
  },
  favToggle: {
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: Theme.spacing[1],
    borderRadius: Theme.radii.full,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    backgroundColor: Theme.colors.backgroundCard,
  },
  favToggleActive: {
    backgroundColor: Theme.rawColors.terracotta[100],
    borderColor: Theme.rawColors.terracotta[300],
  },
  favToggleText: {
    ...TextStyles.buttonSmall,
    color: Theme.colors.textSecondary,
  },
  favToggleTextActive: {
    color: Theme.rawColors.terracotta[500],
  },
  resultCount: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
  list: {
    gap: Theme.spacing[3],
  },
  pronunciationSection: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    marginBottom: Theme.spacing[4],
    gap: Theme.spacing[2],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  pronunciationTitle: {
    ...TextStyles.label,
    color: Theme.colors.textSecondary,
    marginBottom: Theme.spacing[1],
  },
});
