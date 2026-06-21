import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Theme,
  TextStyles,
  TenseColors,
  getPersonToken,
} from '@/lib/Theme';
import type { VisualToken } from '@/lib/Theme';
import type { VerbConjugation, Person, Tense } from '@/types';
import { PRONOUNS, PRONOUN_ORDER } from '@/data/pronouns';
import { MorphologyBlock, type MorphSegment } from './MorphologyBlock';

/**
 * Tableau de conjugaison VISUEL pour un temps donné.
 *
 * Améliorations charte visuelle :
 *   - Bandeau et accent colorés selon le TEMPS (présent/passé/futur).
 *   - Chaque pronom est une puce colorée selon la PERSONNE (je, tu, il…).
 *   - Chaque forme passe par MorphologyBlock : décomposition colorée
 *     (préfixe/radical/suffixe) si les données la fournissent, sinon fallback
 *     lisible affichant la forme entière.
 *
 * Compatibilité : ne casse pas les données existantes. Le champ `morphology`
 * de VerbConjugation est optionnel ; en son absence, fallback automatique.
 *
 * Si aucune donnée n'existe pour le temps, état vide explicite + badge.
 */

interface ConjugationTableProps {
  /** Conjugaisons pour un temps, ou undefined si non disponible */
  conjugations?: VerbConjugation[];
  /** Libellé du temps (ex: "Futur") pour le message d'absence */
  tenseLabel: string;
  /** Clé de temps pour le thème couleur (optionnel) */
  tense?: Tense;
}

export function ConjugationTable({
  conjugations,
  tenseLabel,
  tense,
}: ConjugationTableProps) {
  // Token de couleur du temps (défaut neutre si non fourni)
  const tenseToken: VisualToken | null = tense ? TenseColors[tense] : null;

  // État vide : temps non renseigné dans les données
  if (!conjugations || conjugations.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🔍</Text>
        <Text style={styles.emptyText}>
          Conjugaison au {tenseLabel.toLowerCase()} pas encore disponible
        </Text>
        <View style={styles.toVerifyBadge}>
          <Text style={styles.toVerifyText}>À vérifier</Text>
        </View>
      </View>
    );
  }

  // Trie les conjugaisons selon l'ordre canonique des pronoms
  const byPerson = new Map<Person, VerbConjugation>(
    conjugations.map((c) => [c.person, c])
  );
  const ordered = PRONOUN_ORDER.map((p) => byPerson.get(p)).filter(
    (c): c is VerbConjugation => c !== undefined
  );

  return (
    <View style={styles.wrapper}>
      {/* Bandeau de temps coloré */}
      {tenseToken && (
        <View style={[styles.tenseBanner, { backgroundColor: tenseToken.soft }]}>
          <Text style={styles.tenseBannerIcon}>{tenseToken.icon}</Text>
          <Text style={[styles.tenseBannerLabel, { color: tenseToken.main }]}>
            {tenseToken.label}
          </Text>
        </View>
      )}

      <View
        style={[
          styles.table,
          tenseToken && { borderLeftWidth: 3, borderLeftColor: tenseToken.main },
        ]}
      >
        {ordered.map((conj, index) => {
          const pronoun = PRONOUNS[conj.person];
          const personToken = getPersonToken(conj.person);

          // Construit les segments morphologiques si présents (sans inventer)
          const segments: MorphSegment[] | undefined = conj.morphology?.map(
            (m) => ({ text: m.text, role: m.role })
          );

          return (
            <View
              key={conj.person}
              style={[
                styles.row,
                index < ordered.length - 1 && styles.rowBorder,
              ]}
            >
              {/* Puce pronom colorée par personne */}
              <View
                style={[styles.pronounChip, { backgroundColor: personToken.soft }]}
              >
                <Text style={[styles.pronounText, { color: personToken.main }]}>
                  {pronoun.abbreviation}
                </Text>
              </View>

              {/* Forme conjuguée, décomposée si possible */}
              <View style={styles.formColumn}>
                <MorphologyBlock
                  surface={conj.arabizi}
                  secondary={conj.arabic}
                  segments={segments}
                  size="md"
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Theme.spacing[2],
  },
  tenseBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: Theme.spacing[1],
    borderRadius: Theme.radii.full,
  },
  tenseBannerIcon: {
    fontSize: 13,
  },
  tenseBannerLabel: {
    ...TextStyles.label,
  },
  table: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing[3],
    paddingHorizontal: Theme.spacing[3],
    gap: Theme.spacing[3],
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.borderLight,
  },
  pronounChip: {
    width: 76,
    borderRadius: Theme.radii.sm,
    paddingVertical: Theme.spacing[1],
    paddingHorizontal: Theme.spacing[2],
    alignItems: 'center',
  },
  pronounText: {
    ...TextStyles.bodySmall,
    fontWeight: '700',
  },
  formColumn: {
    flex: 1,
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: Theme.spacing[6],
    paddingHorizontal: Theme.spacing[4],
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    gap: Theme.spacing[2],
  },
  emptyIcon: {
    fontSize: 24,
  },
  emptyText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  toVerifyBadge: {
    backgroundColor: Theme.rawColors.sand[300],
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
    marginTop: Theme.spacing[1],
  },
  toVerifyText: {
    ...TextStyles.label,
    fontSize: 10,
    color: Theme.rawColors.neutral[600],
  },
});
