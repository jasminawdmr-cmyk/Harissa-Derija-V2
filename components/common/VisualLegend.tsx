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
import type { VisualToken } from '@/lib/Theme';
import { ColorTag } from './ColorTag';

/**
 * /components/common/VisualLegend.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Légende visuelle réutilisable.
 *
 * Reçoit n'importe quel groupe de VisualToken (Theme.grammar, Theme.tense,
 * Theme.person, Theme.category, Theme.mastery…) et affiche une grille de
 * ColorTag servant de clé de lecture. Repliable pour ne pas encombrer l'écran
 * (une carte = une idée).
 *
 * Usage :
 *   <VisualLegend title="Morphologie" tokens={Theme.grammar} />
 *   <VisualLegend title="Temps" tokens={Theme.tense} collapsible defaultOpen={false} />
 * ─────────────────────────────────────────────────────────────────────────────
 */

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface VisualLegendProps {
  /** Titre de la légende */
  title: string;
  /** Groupe de tokens à afficher (objet clé → VisualToken) */
  tokens: Record<string, VisualToken>;
  /** Sous-ensemble de clés à montrer (sinon toutes) */
  only?: string[];
  /** Légende repliable ? */
  collapsible?: boolean;
  /** État initial si repliable */
  defaultOpen?: boolean;
  /** Pictogramme d'en-tête optionnel */
  icon?: string;
  style?: ViewStyle;
}

export function VisualLegend({
  title,
  tokens,
  only,
  collapsible = true,
  defaultOpen = true,
  icon,
  style,
}: VisualLegendProps) {
  const [open, setOpen] = useState(defaultOpen);

  const entries = Object.entries(tokens).filter(
    ([key]) => !only || only.includes(key)
  );

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
      >
        <View style={styles.headerLeft}>
          {icon ? <Text style={styles.headerIcon}>{icon}</Text> : null}
          <Text style={styles.title}>{title}</Text>
        </View>
        {collapsible && (
          <Text style={styles.chevron}>{open ? '▲' : '▼'}</Text>
        )}
      </TouchableOpacity>

      {open && (
        <View style={styles.grid}>
          {entries.map(([key, token]) => (
            <ColorTag key={key} token={token} size="sm" style={styles.tag} />
          ))}
        </View>
      )}
    </View>
  );
}

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
    fontSize: 14,
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
  tag: {
    marginBottom: 2,
  },
});
