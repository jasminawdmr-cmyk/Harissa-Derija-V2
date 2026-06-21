import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles, getMasteryToken } from '@/lib/Theme';
import { AudioButton } from './AudioButton';
import type { MemoryCard as MemoryCardData } from '@/services/visualMemoryEngine';

/**
 * /components/common/MemoryCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Affiche une carte de mémoire visuelle (MemoryCard) avec son motif STABLE.
 *
 * Double codage : le pictogramme + la couleur d'ancrage accompagnent toujours
 * le même élément, et la forme verbale peut être décomposée en segments colorés
 * (préfixe bleu / radical vert / suffixe violet…). Conçu pour un repérage
 * instantané (profil très visuel / TDAH) : une carte = une idée.
 *
 * Données : objet MemoryCard produit par visualMemoryEngine. Aucune logique
 * linguistique ici, uniquement de l'affichage.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface MemoryCardProps {
  card: MemoryCardData;
  /** Bouton audio (désactivé tant qu'aucun audio n'existe) */
  audioFileName?: string;
  /** Taille de la carte */
  size?: 'md' | 'lg';
  style?: ViewStyle;
}

export function MemoryCard({
  card,
  audioFileName,
  size = 'lg',
  style,
}: MemoryCardProps) {
  const motif = card.motif;

  // Teinte de bordure selon la maîtrise si connue, sinon couleur du motif
  const borderColor =
    card.masteryScore !== undefined
      ? getMasteryToken(card.masteryScore).main
      : motif.main;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: motif.soft, borderColor },
        style,
      ]}
    >
      {/* Bandeau d'ancrage : picto + famille */}
      <View style={styles.header}>
        <View style={[styles.iconBubble, { backgroundColor: motif.main }]}>
          <Text style={styles.iconText}>{motif.icon}</Text>
        </View>
        <Text style={[styles.familyLabel, { color: motif.main }]}>
          {card.familyLabel}
        </Text>
        <View style={styles.headerSpacer} />
        <AudioButton audioFileName={audioFileName} size="sm" />
      </View>

      {/* Forme principale ou décomposition colorée */}
      <View style={styles.body}>
        {card.segments && card.segments.length > 0 ? (
          // Double codage morphologique : segments colorés
          <View style={styles.segmentsRow}>
            {card.segments.map((seg, i) => (
              <View
                key={i}
                style={[styles.segment, { backgroundColor: seg.motif.soft }]}
              >
                <Text
                  style={[
                    size === 'lg' ? styles.segmentLg : styles.segmentMd,
                    { color: seg.motif.main },
                  ]}
                >
                  {seg.text}
                </Text>
              </View>
            ))}
          </View>
        ) : card.arabic ? (
          <Text style={size === 'lg' ? styles.arabicLg : styles.arabicMd}>
            {card.arabic}
          </Text>
        ) : null}

        {card.latin ? <Text style={styles.latin}>{card.latin}</Text> : null}
        {card.phonetic ? (
          <Text style={styles.phonetic}>{card.phonetic}</Text>
        ) : null}
      </View>

      {/* Sens / mot principal */}
      <View style={[styles.footer, { borderTopColor: motif.main }]}>
        <Text style={styles.primary}>{card.primary}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Theme.radii.xl,
    borderWidth: 2,
    padding: Theme.spacing[4],
    gap: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  iconBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  familyLabel: {
    ...TextStyles.label,
  },
  headerSpacer: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    gap: Theme.spacing[1],
    paddingVertical: Theme.spacing[2],
  },
  segmentsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
  },
  segment: {
    borderRadius: Theme.radii.sm,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
  },
  segmentLg: {
    ...TextStyles.darijaWord,
    fontSize: 26,
  },
  segmentMd: {
    ...TextStyles.body,
    fontWeight: '700',
    fontSize: 18,
  },
  arabicLg: {
    ...TextStyles.darijaWord,
    color: Theme.colors.textPrimary,
  },
  arabicMd: {
    ...TextStyles.body,
    fontWeight: '700',
    fontSize: 18,
    color: Theme.colors.textPrimary,
  },
  latin: {
    ...TextStyles.phonetic,
    color: Theme.colors.primary,
  },
  phonetic: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
  footer: {
    borderTopWidth: 1,
    paddingTop: Theme.spacing[2],
    alignItems: 'center',
  },
  primary: {
    ...TextStyles.cardTitle,
    fontSize: 18,
    color: Theme.colors.textPrimary,
  },
});
