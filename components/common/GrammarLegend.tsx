/**
 * /components/common/GrammarLegend.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Légende visuelle grammaticale — consomme GRAMMAR_VISUAL_LEGEND.
 *
 * Règle absolue : une notion = une couleur = un affichage unique.
 * Les couleurs viennent exclusivement de data/grammarVisualLegend.ts.
 *
 * Usage :
 *   <GrammarLegend />                         → toutes les 15 notions
 *   <GrammarLegend only={['masculin','futur']} />
 *   <GrammarLegend collapsible defaultOpen={false} />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import {
  GRAMMAR_VISUAL_LEGEND,
  GrammarNotion,
  GrammarNotionStyle,
} from '@/data/grammarVisualLegend';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface GrammarLegendProps {
  /** Sous-ensemble de notions à afficher (toutes par défaut) */
  only?: GrammarNotion[];
  /** Légende repliable */
  collapsible?: boolean;
  /** Ouverte par défaut */
  defaultOpen?: boolean;
  /** Titre de la section */
  title?: string;
  /** Icône d'en-tête */
  icon?: string;
  style?: ViewStyle;
}

export function GrammarLegend({
  only,
  collapsible = true,
  defaultOpen = true,
  title = 'Légende grammaticale',
  icon = '🎨',
  style,
}: GrammarLegendProps) {
  const [open, setOpen] = useState(defaultOpen);

  const entries: GrammarNotionStyle[] = only
    ? GRAMMAR_VISUAL_LEGEND.filter((s) => only.includes(s.notion))
    : [...GRAMMAR_VISUAL_LEGEND];

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((o) => !o);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={collapsible ? toggle : undefined}
        activeOpacity={collapsible ? 0.7 : 1}
        style={styles.header}
        accessibilityRole="button"
        accessibilityLabel={open ? 'Réduire la légende' : 'Afficher la légende'}
      >
        <View style={styles.headerLeft}>
          <Text style={styles.headerIcon}>{icon}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        {collapsible && (
          <Text style={styles.chevron}>{open ? '▲' : '▼'}</Text>
        )}
      </TouchableOpacity>

      {open && (
        <View style={styles.grid}>
          {entries.map((entry) => (
            <GrammarNotionChip key={entry.notion} entry={entry} />
          ))}
        </View>
      )}
    </View>
  );
}

// ─── Chip individuel ──────────────────────────────────────────────────────────

interface GrammarNotionChipProps {
  entry: GrammarNotionStyle;
  size?: 'sm' | 'md';
}

export function GrammarNotionChip({ entry, size = 'sm' }: GrammarNotionChipProps) {
  const isSmall = size === 'sm';
  return (
    <View
      style={[
        styles.chip,
        { backgroundColor: entry.color + '22', borderColor: entry.color + '66' },
        isSmall ? styles.chipSm : styles.chipMd,
      ]}
    >
      <View
        style={[
          styles.colorDot,
          { backgroundColor: entry.color },
          isSmall ? styles.dotSm : styles.dotMd,
        ]}
      />
      <Text style={styles.chipIcon}>{entry.icon}</Text>
      <Text style={[styles.chipLabel, isSmall ? styles.labelSm : styles.labelMd]}>
        {entry.label}
      </Text>
    </View>
  );
}

// ─── Bande de couleur inline (utilisée dans un texte enrichi) ─────────────────

interface GrammarColorBandProps {
  notion: GrammarNotion;
  children: React.ReactNode;
}

export function GrammarColorBand({ notion, children }: GrammarColorBandProps) {
  const entry = GRAMMAR_VISUAL_LEGEND.find((s) => s.notion === notion);
  if (!entry) return <Text>{children}</Text>;

  return (
    <Text
      style={{
        color: entry.color,
        fontWeight: '600',
        borderBottomWidth: 2,
        borderBottomColor: entry.color + '88',
      }}
    >
      {children}
    </Text>
  );
}

// ─── Pastille de notion (compact) ─────────────────────────────────────────────

interface GrammarBadgeProps {
  notion: GrammarNotion;
  style?: ViewStyle;
}

export function GrammarBadge({ notion, style }: GrammarBadgeProps) {
  const entry = GRAMMAR_VISUAL_LEGEND.find((s) => s.notion === notion);
  if (!entry) return null;

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: entry.color },
        style,
      ]}
    >
      <Text style={styles.badgeText}>{entry.icon}</Text>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[3],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  headerIcon: {
    fontSize: 16,
  },
  title: {
    ...TextStyles.label,
    color: Theme.colors.textSecondary,
  },
  chevron: {
    fontSize: 10,
    color: Theme.colors.textMuted,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[2],
    marginTop: Theme.spacing[3],
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Theme.radii.full,
    borderWidth: 1,
    gap: 4,
  },
  chipSm: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
  },
  chipMd: {
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: 6,
  },
  colorDot: {
    borderRadius: Theme.radii.full,
  },
  dotSm: {
    width: 6,
    height: 6,
  },
  dotMd: {
    width: 8,
    height: 8,
  },
  chipIcon: {
    fontSize: 11,
  },
  chipLabel: {
    fontWeight: '500',
    color: Theme.colors.textPrimary,
  },
  labelSm: {
    fontSize: 11,
  },
  labelMd: {
    fontSize: 13,
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
  },
});
