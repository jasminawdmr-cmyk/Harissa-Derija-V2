import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Badge } from './Badge';
import { ConjugationTable } from './ConjugationTable';
import type { Verb, Tense } from '@/types';
import { LEVEL_LABELS, LEVEL_BADGE_VARIANT } from '@/utils/levels';

/**
 * Fiche de verbe dépliable.
 *
 * Repliée : français, tunisien (racine), translittération, niveau, favori.
 * Dépliée : conjugaisons présent / passé / futur, exemples, badge "à vérifier"
 *           si des données manquent.
 *
 * N'invente aucune donnée : tout provient du Verb passé en prop.
 */

// Active LayoutAnimation sur Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface VerbCardProps {
  key?: string | number;
  verb: Verb;
  isFavorite: boolean;
  onToggleFavorite: (verbId: string) => void;
}

/** Onglets de temps affichés dans la fiche dépliée */
const TENSE_TABS: { key: Tense; label: string }[] = [
  { key: 'present', label: 'Présent' },
  { key: 'passe', label: 'Passé' },
  { key: 'futur', label: 'Futur' },
];

export function VerbCard({ verb, isFavorite, onToggleFavorite }: VerbCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeTense, setActiveTense] = useState<Tense>('present');

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((e) => !e);
  };

  // Détecte si au moins un temps manque → badge global "à vérifier"
  const hasMissingTense = TENSE_TABS.some(
    (t) => !verb.conjugations[t.key] || verb.conjugations[t.key]?.length === 0
  );

  const activeLabel =
    TENSE_TABS.find((t) => t.key === activeTense)?.label ?? '';

  return (
    <View style={styles.card}>
      {/* ── En-tête (toujours visible, cliquable) ───────────────────────── */}
      <TouchableOpacity
        onPress={toggleExpand}
        activeOpacity={0.7}
        style={styles.header}
      >
        <View style={styles.headerLeft}>
          <View style={styles.titleRow}>
            <Text style={styles.french}>{verb.infinitiveFrench}</Text>
            {verb.isIrregular && (
              <Badge label="Irrégulier" variant="terracotta" />
            )}
          </View>
          <Text style={styles.rootArabic}>{verb.rootDarija}</Text>
          <Text style={styles.rootLatin}>{verb.rootLatin}</Text>
        </View>

        <View style={styles.headerRight}>
          {/* Bouton favori */}
          <TouchableOpacity
            onPress={() => onToggleFavorite(verb.id)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.favoriteButton}
          >
            <Text style={styles.favoriteIcon}>
              {isFavorite ? '★' : '☆'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.chevron}>{expanded ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>

      {/* Métadonnées repliées */}
      <View style={styles.metaRow}>
        <Badge
          label={LEVEL_LABELS[verb.level]}
          variant={LEVEL_BADGE_VARIANT[verb.level]}
        />
        {hasMissingTense && (
          <Badge label="À vérifier" variant="sand" />
        )}
      </View>

      {/* ── Contenu déplié ──────────────────────────────────────────────── */}
      {expanded && (
        <View style={styles.body}>
          {/* Onglets de temps */}
          <View style={styles.tenseTabs}>
            {TENSE_TABS.map((tab) => {
              const active = tab.key === activeTense;
              const missing =
                !verb.conjugations[tab.key] ||
                verb.conjugations[tab.key]?.length === 0;
              return (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => setActiveTense(tab.key)}
                  style={[styles.tenseTab, active && styles.tenseTabActive]}
                  activeOpacity={0.75}
                >
                  <Text
                    style={[
                      styles.tenseTabLabel,
                      active && styles.tenseTabLabelActive,
                    ]}
                  >
                    {tab.label}
                  </Text>
                  {missing && <View style={styles.missingDot} />}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Tableau de conjugaison du temps actif */}
          <ConjugationTable
            conjugations={verb.conjugations[activeTense]}
            tenseLabel={activeLabel}
            tense={activeTense}
          />

          {/* Notes / exemples si présents dans les données */}
          {verb.notes ? (
            <View style={styles.notesBox}>
              <Text style={styles.notesLabel}>💡 À retenir</Text>
              <Text style={styles.notesText}>{verb.notes}</Text>
            </View>
          ) : null}

          {/* Tags du verbe en guise d'exemples de contexte */}
          {verb.tags.length > 0 && (
            <View style={styles.tagsRow}>
              {verb.tags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
    marginBottom: 2,
  },
  french: {
    ...TextStyles.cardTitle,
    fontSize: 18,
    color: Theme.colors.textPrimary,
  },
  rootArabic: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
  },
  rootLatin: {
    ...TextStyles.bodySmall,
    color: Theme.colors.primary,
    fontStyle: 'italic',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  favoriteButton: {
    padding: 2,
  },
  favoriteIcon: {
    fontSize: 22,
    color: Theme.colors.streak,
  },
  chevron: {
    fontSize: 11,
    color: Theme.colors.textMuted,
  },
  metaRow: {
    flexDirection: 'row',
    gap: Theme.spacing[2],
  },
  body: {
    gap: Theme.spacing[3],
    paddingTop: Theme.spacing[2],
    borderTopWidth: 1,
    borderTopColor: Theme.colors.borderLight,
  },
  tenseTabs: {
    flexDirection: 'row',
    gap: Theme.spacing[2],
  },
  tenseTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Theme.spacing[1],
    paddingVertical: Theme.spacing[2],
    borderRadius: Theme.radii.sm,
    backgroundColor: Theme.rawColors.sand[100],
  },
  tenseTabActive: {
    backgroundColor: Theme.colors.primary,
  },
  tenseTabLabel: {
    ...TextStyles.buttonSmall,
    color: Theme.colors.textSecondary,
  },
  tenseTabLabelActive: {
    color: Theme.colors.textOnAccent,
  },
  missingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Theme.rawColors.warning,
  },
  notesBox: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: Theme.spacing[1],
  },
  notesLabel: {
    ...TextStyles.label,
    color: Theme.colors.textSecondary,
  },
  notesText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[2],
  },
  tag: {
    backgroundColor: Theme.rawColors.olive[50],
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.sm,
  },
  tagText: {
    ...TextStyles.caption,
    color: Theme.rawColors.olive[600],
  },
});
