import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Card } from '@/components/common/Card';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { getWritingLessonsBySystem } from '@/data/writing';

/**
 * 🔤 ÉCRITURE TUNISIENNE — sous-écran d'Apprendre (hors barre d'onglets).
 * Présente les 3 systèmes (latin, Arabizi, arabe) avec passerelles entre eux.
 * Contenu pas encore disponible : placeholders élégants, contenants prêts.
 * L'Arabizi est mis en avant comme composante forte (cf. système d'écriture).
 */
export default function EcritureScreen() {
  const router = useRouter();

  const systems: WritingSystemCard[] = [
    {
      key: 'latin',
      badge: 'Aa',
      title: 'Alphabet latin',
      subtitle: 'Lire le tunisien avec nos lettres',
      detail: 'Le point de départ — aucun nouvel alphabet.',
      count: getWritingLessonsBySystem('latin').length,
      accent: Theme.rawColors.olive[400],
      priority: 'Dès le début',
    },
    {
      key: 'arabizi',
      badge: '3·7·9',
      title: 'Arabizi',
      subtitle: 'Les chiffres qui s’écrivent (SMS, WhatsApp)',
      detail: 'La vraie écriture du quotidien numérique tunisien.',
      count: getWritingLessonsBySystem('arabizi').length,
      accent: Theme.rawColors.terracotta[400],
      priority: 'Essentiel',
    },
    {
      key: 'arabe',
      badge: 'ع',
      title: 'Alphabet arabe',
      subtitle: 'Reconnaître puis lire',
      detail: 'En douceur, une fois à l’aise à l’oral.',
      count: getWritingLessonsBySystem('arabe').length,
      accent: Theme.rawColors.azure[400],
      priority: 'Progressif',
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Écriture"
        subtitle="Trois façons d’écrire le tunisien"
        accentColor={Theme.colors.secondary}
      />

      {/* Passerelle illustrée — montre la logique des 3 systèmes sans contenu inventé */}
      <Card variant="subtle" style={styles.bridgeCard}>
        <Text style={styles.bridgeLabel}>La passerelle</Text>
        <View style={styles.bridgeRow}>
          <Text style={styles.bridgeItem}>latin</Text>
          <Text style={styles.bridgeArrow}>→</Text>
          <Text style={styles.bridgeItem}>arabizi</Text>
          <Text style={styles.bridgeArrow}>→</Text>
          <Text style={styles.bridgeItem}>arabe</Text>
        </View>
        <Text style={styles.bridgeHint}>
          Les chiffres que vous tapez (3, 7, 9…) deviennent les lettres arabes.
        </Text>
      </Card>

      <View style={styles.list}>
        {systems.map((s) => (
          <Card key={s.key} elevated style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.badge, { backgroundColor: s.accent + '22' }]}>
                <Text style={[styles.badgeText, { color: s.accent }]}>{s.badge}</Text>
              </View>
              <View style={styles.cardHeaderText}>
                <Text style={styles.cardTitle}>{s.title}</Text>
                <Text style={styles.cardSubtitle}>{s.subtitle}</Text>
              </View>
            </View>
            <Text style={styles.cardDetail}>{s.detail}</Text>
            <View style={styles.cardFooter}>
              <View style={[styles.priorityPill, { backgroundColor: s.accent + '18' }]}>
                <Text style={[styles.priorityText, { color: s.accent }]}>
                  {s.priority}
                </Text>
              </View>
              <Text style={styles.statusText}>
                {s.count > 0 ? `${s.count} leçon${s.count > 1 ? 's' : ''}` : 'Bientôt'}
              </Text>
            </View>
          </Card>
        ))}
      </View>

      <Text style={styles.footnote}>
        Le parcours d’écriture arrive très bientôt 🌿
      </Text>
    </ScreenContainer>
  );
}

interface WritingSystemCard {
  key: string;
  badge: string;
  title: string;
  subtitle: string;
  detail: string;
  count: number;
  accent: string;
  priority: string;
}

const styles = StyleSheet.create({
  bridgeCard: {
    marginBottom: Theme.spacing[4],
    gap: Theme.spacing[2],
  },
  bridgeLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  bridgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  bridgeItem: {
    ...TextStyles.cardTitle,
    fontSize: 15,
    color: Theme.colors.textPrimary,
  },
  bridgeArrow: {
    fontSize: 16,
    color: Theme.colors.textMuted,
  },
  bridgeHint: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  list: {
    gap: Theme.spacing[3],
  },
  card: {
    gap: Theme.spacing[2],
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  badge: {
    width: 52,
    height: 52,
    borderRadius: Theme.radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    ...TextStyles.cardTitle,
    fontSize: 16,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  cardSubtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  cardDetail: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priorityPill: {
    borderRadius: Theme.radii.full,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
  },
  priorityText: {
    ...TextStyles.label,
    fontSize: 11,
  },
  statusText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  footnote: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    textAlign: 'center',
    marginTop: Theme.spacing[5],
    marginBottom: Theme.spacing[2],
  },
});
