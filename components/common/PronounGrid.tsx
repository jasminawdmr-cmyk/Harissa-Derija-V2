import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme, TextStyles, getPersonToken } from '@/lib/Theme';
import { PRONOUNS, PRONOUN_ORDER } from '@/data/pronouns';

/**
 * /components/common/PronounGrid.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Grille visuelle des pronoms personnels tunisiens.
 *
 * Données : 100% issues de data/pronouns.ts (aucun contenu codé en dur).
 * Chaque pronom est une carte colorée selon la charte PersonColors, pour un
 * repérage instantané (je = vert, il = bleu foncé, elle = violet…).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function PronounGrid() {
  return (
    <View style={styles.grid}>
      {PRONOUN_ORDER.map((person) => {
        const pronoun = PRONOUNS[person];
        const token = getPersonToken(person);
        return (
          <View
            key={person}
            style={[
              styles.cell,
              { backgroundColor: token.soft, borderColor: token.main },
            ]}
          >
            <Text style={[styles.french, { color: token.main }]}>
              {token.label}
            </Text>
            <Text style={styles.arabic}>{pronoun.darija}</Text>
            <Text style={styles.latin}>{pronoun.darijaLatin}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[2],
  },
  cell: {
    width: '31%',
    flexGrow: 1,
    borderRadius: Theme.radii.md,
    borderWidth: 1,
    paddingVertical: Theme.spacing[3],
    paddingHorizontal: Theme.spacing[2],
    alignItems: 'center',
    gap: 2,
  },
  french: {
    ...TextStyles.label,
    fontSize: 11,
  },
  arabic: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    fontWeight: '700',
    fontSize: 17,
  },
  latin: {
    ...TextStyles.caption,
    color: Theme.colors.textSecondary,
    fontStyle: 'italic',
  },
});
