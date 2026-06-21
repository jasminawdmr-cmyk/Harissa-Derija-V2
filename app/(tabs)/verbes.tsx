import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { FilterPills, FilterOption } from '@/components/common/FilterPills';
import { VerbCard } from '@/components/common/VerbCard';
import { VisualLegend } from '@/components/common/VisualLegend';
import { EmptyState } from '@/components/common/EmptyState';
import { Theme, GrammarColors } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { verbs } from '@/data/verbs';
import { useFavorites } from '@/hooks/useFavorites';
import { LEVEL_LABELS, LEVEL_ORDER } from '@/utils/levels';
import type { Level, Verb } from '@/types';

/** Valeurs de filtre : niveaux + favoris + tous */
type VerbFilter = 'tous' | 'favoris' | Level;

export default function VerbesScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<VerbFilter>('tous');
  const { isFavorite, toggleFavorite, count } = useFavorites();

  // Options de filtre : Tous, Favoris, puis chaque niveau présent
  const filterOptions: FilterOption<VerbFilter>[] = useMemo(() => {
    const base: FilterOption<VerbFilter>[] = [
      { label: 'Tous', value: 'tous' },
      { label: `Favoris${count > 0 ? ` (${count})` : ''}`, value: 'favoris', icon: '★' },
    ];
    // N'ajoute que les niveaux réellement présents dans les données
    const presentLevels = LEVEL_ORDER.filter((lvl) =>
      verbs.some((v) => v.level === lvl)
    );
    return [
      ...base,
      ...presentLevels.map((lvl) => ({
        label: LEVEL_LABELS[lvl],
        value: lvl as VerbFilter,
      })),
    ];
  }, [count]);

  // Application de la recherche + du filtre
  const filteredVerbs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return verbs.filter((verb) => {
      // Filtre par catégorie
      if (filter === 'favoris' && !isFavorite(verb.id)) return false;
      if (filter !== 'tous' && filter !== 'favoris' && verb.level !== filter) {
        return false;
      }

      // Recherche : français, racine latine, racine arabe, tags
      if (query.length > 0) {
        const haystack = [
          verb.infinitiveFrench,
          verb.rootLatin,
          verb.rootDarija,
          ...verb.tags,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return true;
    });
  }, [search, filter, isFavorite]);

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Verbes"
        subtitle="Conjugaison et usage des verbes tunisiens"
        accentColor={Theme.rawColors.terracotta[300]}
      />

      {/* Recherche */}
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Chercher un verbe (français ou tunisien)…"
        style={styles.search}
      />

      {/* Filtres niveaux + favoris */}
      <FilterPills
        options={filterOptions}
        activeValue={filter}
        onChange={setFilter}
        style={styles.filters}
      />

      {/* Légende visuelle : décodage des couleurs de morphologie */}
      <VisualLegend
        title="Code couleur des formes"
        tokens={GrammarColors}
        only={['prefix', 'root', 'suffix', 'particle', 'exception']}
        defaultOpen={false}
        style={styles.legend}
      />

      {/* Compteur de résultats */}
      <Text style={styles.resultCount}>
        {filteredVerbs.length}{' '}
        {filteredVerbs.length <= 1 ? 'verbe' : 'verbes'}
      </Text>

      {/* Liste des fiches */}
      {filteredVerbs.length === 0 ? (
        <EmptyState
          emoji={filter === 'favoris' ? '☆' : '🔍'}
          title={
            filter === 'favoris'
              ? 'Aucun favori pour le moment'
              : 'Aucun verbe trouvé'
          }
          description={
            filter === 'favoris'
              ? 'Touchez l\u2019étoile sur une fiche pour l\u2019ajouter à vos favoris.'
              : 'Essayez un autre mot ou changez de filtre.'
          }
        />
      ) : (
        <View style={styles.list}>
          {filteredVerbs.map((verb: Verb) => (
            <VerbCard
              key={verb.id}
              verb={verb}
              isFavorite={isFavorite(verb.id)}
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
  resultCount: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    marginBottom: Theme.spacing[3],
  },
  list: {
    gap: Theme.spacing[3],
  },
});
