import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { GrammarRuleCard } from '@/components/common/GrammarRuleCard';
import { PronounGrid } from '@/components/common/PronounGrid';
import { TensePatternCard } from '@/components/common/TensePatternCard';
import { VisualLegend } from '@/components/common/VisualLegend';
import { GrammarLegend } from '@/components/common/GrammarLegend';
import { EmptyState } from '@/components/common/EmptyState';
import { Theme, TenseColors } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { GRAMMAR_SECTIONS } from '@/data/grammarSections';
import { getRulesByCategory } from '@/data/grammar';
import type { GrammarRule } from '@/types';

/**
 * Écran Grammaire — entièrement dynamique.
 * Les sections sont déclarées dans data/grammarSections.ts et puisent dans les
 * données centralisées (pronouns, conjugationRules, grammar). Aucun contenu
 * linguistique n'est codé en dur dans cet écran.
 */
export default function GrammaireScreen() {
  const [search, setSearch] = useState('');

  // Filtre les sections selon la recherche (titre, accroche, règles contenues)
  const visibleSections = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (query.length === 0) return GRAMMAR_SECTIONS;

    return GRAMMAR_SECTIONS.filter((section) => {
      const inMeta =
        section.title.toLowerCase().includes(query) ||
        section.tagline.toLowerCase().includes(query);
      if (inMeta) return true;

      // Cherche aussi dans les titres de règles des sections "rules"
      if (section.source.kind === 'rules') {
        const rules = section.source.categories.flatMap((c) =>
          getRulesByCategory(c)
        );
        return rules.some((r) => r.title.toLowerCase().includes(query));
      }
      return false;
    });
  }, [search]);

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Grammaire"
        subtitle="Les structures essentielles du tunisien"
        accentColor={Theme.rawColors.olive[400]}
      />

      {/* Recherche dans la grammaire */}
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Chercher une règle, un temps…"
        style={styles.search}
      />

      {/* Légende des couleurs de temps */}
      <VisualLegend
        title="Code couleur des temps"
        tokens={TenseColors}
        only={['present', 'passe', 'futur']}
        defaultOpen={false}
        style={styles.legend}
      />

      {/* Légende grammaticale visuelle complète V3 */}
      <GrammarLegend
        title="Notions grammaticales"
        icon="🎨"
        collapsible
        defaultOpen={false}
        style={styles.legend}
      />

      {/* Sections rendues dynamiquement */}
      {visibleSections.length === 0 ? (
        <EmptyState
          emoji="🔍"
          title="Aucun résultat"
          description="Essayez un autre terme (ex. « négation », « passé »)."
        />
      ) : (
        visibleSections.map((section) => (
          <View key={section.id} style={styles.section}>
            {/* En-tête de section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>{section.icon}</Text>
              <View style={styles.sectionHeaderText}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionTagline}>{section.tagline}</Text>
              </View>
            </View>

            {/* Contenu selon la source de données */}
            <SectionContent section={section} />
          </View>
        ))
      )}
    </ScreenContainer>
  );
}

/**
 * Rend le contenu d'une section en fonction de sa source de données.
 * Chaque branche lit exclusivement dans /data.
 */
function SectionContent({
  section,
}: {
  section: (typeof GRAMMAR_SECTIONS)[number];
}) {
  const { source } = section;

  // ── Pronoms : grille colorée depuis data/pronouns.ts ──────────────────
  if (source.kind === 'pronouns') {
    return <PronounGrid />;
  }

  // ── Temps : carte de pattern depuis data/conjugationRules.ts ──────────
  if (source.kind === 'tense') {
    return <TensePatternCard tense={source.tense} />;
  }

  // ── Règles : cartes depuis data/grammar.ts filtrées par catégorie ─────
  if (source.kind === 'rules') {
    const rules: GrammarRule[] = source.categories.flatMap((cat) =>
      getRulesByCategory(cat)
    );

    if (rules.length === 0) {
      return (
        <EmptyState
          emoji="🌱"
          title="Bientôt"
          description="Cette règle arrive dans une prochaine mise à jour."
        />
      );
    }

    return (
      <View style={styles.rulesList}>
        {rules.map((rule, index) => (
          <GrammarRuleCard
            key={rule.id}
            rule={rule}
            defaultExpanded={index === 0}
          />
        ))}
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  legend: {
    marginBottom: Theme.spacing[5],
  },
  search: {
    marginBottom: Theme.spacing[4],
  },
  section: {
    marginBottom: Theme.spacing[6],
    gap: Theme.spacing[3],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  sectionIcon: {
    fontSize: 24,
  },
  sectionHeaderText: {
    flex: 1,
    gap: 1,
  },
  sectionTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  sectionTagline: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  rulesList: {
    gap: Theme.spacing[3],
  },
});
