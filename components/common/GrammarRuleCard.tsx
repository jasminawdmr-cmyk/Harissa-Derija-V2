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
import type { GrammarRule } from '@/types';
import { LEVEL_LABELS, LEVEL_BADGE_VARIANT } from '@/utils/levels';

/**
 * Carte explicative dépliable pour une règle de grammaire.
 *
 * Repliée : titre, niveau, pattern formel.
 * Dépliée : explication, exemples (positifs et contre-exemples), exceptions.
 *
 * N'invente rien : tout provient de la GrammarRule passée en prop.
 */

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface GrammarRuleCardProps {
  key?: string | number;
  rule: GrammarRule;
  /** Déplié par défaut ? (utile pour la première carte d'une section) */
  defaultExpanded?: boolean;
}

export function GrammarRuleCard({
  rule,
  defaultExpanded = false,
}: GrammarRuleCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((e) => !e);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggle} activeOpacity={0.7} style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>{rule.title}</Text>
          {rule.pattern ? (
            <View style={styles.patternBox}>
              <Text style={styles.patternText}>{rule.pattern}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.chevron}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      <View style={styles.metaRow}>
        <Badge
          label={LEVEL_LABELS[rule.level]}
          variant={LEVEL_BADGE_VARIANT[rule.level]}
        />
      </View>

      {expanded && (
        <View style={styles.body}>
          {/* Explication */}
          <Text style={styles.explanation}>{rule.explanation}</Text>

          {/* Exemples */}
          {rule.examples.length > 0 && (
            <View style={styles.examplesBlock}>
              <Text style={styles.blockLabel}>Exemples</Text>
              {rule.examples.map((ex, i) => (
                <View
                  key={i}
                  style={[
                    styles.example,
                    ex.isCounterExample && styles.counterExample,
                  ]}
                >
                  <View style={styles.exampleHeader}>
                    <Text style={styles.exampleArabic}>{ex.arabic}</Text>
                    {ex.isCounterExample && (
                      <Text style={styles.crossMark}>✗</Text>
                    )}
                  </View>
                  <Text style={styles.exampleLatin}>{ex.arabizi}</Text>
                  <Text style={styles.exampleFrench}>{ex.french}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Exceptions */}
          {rule.exceptions && rule.exceptions.length > 0 && (
            <View style={styles.exceptionsBlock}>
              <Text style={styles.blockLabel}>⚠️ Exceptions</Text>
              {rule.exceptions.map((exc, i) => (
                <Text key={i} style={styles.exceptionText}>
                  • {exc}
                </Text>
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
  headerText: {
    flex: 1,
    gap: Theme.spacing[2],
  },
  title: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  patternBox: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.rawColors.sand[200],
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
    borderRadius: Theme.radii.sm,
  },
  patternText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    marginLeft: Theme.spacing[2],
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: Theme.spacing[2],
  },
  body: {
    gap: Theme.spacing[4],
    paddingTop: Theme.spacing[2],
    borderTopWidth: 1,
    borderTopColor: Theme.colors.borderLight,
  },
  explanation: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  examplesBlock: {
    gap: Theme.spacing[2],
  },
  blockLabel: {
    ...TextStyles.label,
    color: Theme.colors.textSecondary,
  },
  example: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    gap: 2,
    borderLeftWidth: 3,
    borderLeftColor: Theme.colors.secondary,
  },
  counterExample: {
    borderLeftColor: Theme.rawColors.error,
    backgroundColor: 'rgba(200, 64, 64, 0.05)',
  },
  exampleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exampleArabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    fontWeight: '600',
  },
  crossMark: {
    color: Theme.rawColors.error,
    fontWeight: '700',
    fontSize: 14,
  },
  exampleLatin: {
    ...TextStyles.bodySmall,
    color: Theme.colors.primary,
    fontStyle: 'italic',
  },
  exampleFrench: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  exceptionsBlock: {
    gap: Theme.spacing[1],
  },
  exceptionText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    lineHeight: 20,
  },
});
