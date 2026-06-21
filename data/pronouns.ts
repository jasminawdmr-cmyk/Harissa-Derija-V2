/**
 * /data/pronouns.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pronoms personnels du darija tunisien.
 *
 * Rôle : source de vérité pour les tableaux de conjugaison et les fiches
 * de grammaire. Chaque pronom est associé à la clé Person définie dans types/.
 *
 * Particularités du tunisien :
 *  - Pas de distinction masculin/féminin pour la 2e personne du singulier
 *    (contrairement à l'arabe standard)
 *  - La 3e personne distingue masculin (هو) et féminin (هي)
 *  - Le pluriel ne marque pas le genre
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Person } from '../types';

/** Représentation complète d'un pronom tunisien */
export interface TunisianPronoun {
  /** Clé fonctionnelle utilisée dans les conjugaisons */
  person: Person;
  /** Forme arabe */
  darija: string;
  /** Translittération latine */
  darijaLatin: string;
  /** Prononciation IPA approximative */
  phonetic: string;
  /** Équivalent français */
  french: string;
  /** Abréviation affichée dans les tableaux */
  abbreviation: string;
  /** Note explicative optionnelle */
  note?: string;
}

/**
 * Table complète des pronoms personnels sujets du darija tunisien.
 * Ordre : singulier (1s → 3sf) puis pluriel (1p → 3p).
 */
export const PRONOUNS: Readonly<Record<Person, TunisianPronoun>> = {
  // ── Singulier ──────────────────────────────────────────────────────────────

  '1s': {
    person: '1s',
    darija: 'أنا',
    darijaLatin: 'Ena',
    phonetic: '[ɛna]',
    french: 'je / moi',
    abbreviation: 'je',
    note: 'Peut se prononcer "ana" dans certaines régions.',
  },

  '2s': {
    person: '2s',
    darija: 'أنتَ / أنتِ',
    darijaLatin: 'Enti',
    phonetic: '[ɛnti]',
    french: 'tu / toi',
    abbreviation: 'tu',
    note:
      "Contrairement à l'arabe standard, le tunisien n'a qu'une forme pour " +
      '"tu" quel que soit le genre. Enti s\'utilise pour un homme et une femme.',
  },

  '3sm': {
    person: '3sm',
    darija: 'هو',
    darijaLatin: 'Hou',
    phonetic: '[huː]',
    french: 'il / lui',
    abbreviation: 'il',
  },

  '3sf': {
    person: '3sf',
    darija: 'هي',
    darijaLatin: 'Hi',
    phonetic: '[hiː]',
    french: 'elle',
    abbreviation: 'elle',
  },

  // ── Pluriel ────────────────────────────────────────────────────────────────

  '1p': {
    person: '1p',
    darija: 'أحنا',
    darijaLatin: 'A7na',
    phonetic: '[aħna]',
    french: 'nous',
    abbreviation: 'nous',
    note: 'Le "7" translittère le son ح (h emphatique pharyngal).',
  },

  '2p': {
    person: '2p',
    darija: 'أنتم',
    darijaLatin: 'Entouma',
    phonetic: '[ɛntuːma]',
    french: 'vous',
    abbreviation: 'vous',
  },

  '3p': {
    person: '3p',
    darija: 'هم',
    darijaLatin: 'Houma',
    phonetic: '[huːma]',
    french: 'ils / elles',
    abbreviation: 'ils/elles',
    note: 'Pas de distinction de genre au pluriel en tunisien.',
  },
} as const;

/** Liste ordonnée des pronoms (pratique pour les tableaux de conjugaison) */
export const PRONOUN_ORDER: Person[] = ['1s', '2s', '3sm', '3sf', '1p', '2p', '3p'];

/** Retourne le pronom correspondant à une personne */
export function getPronoun(person: Person): TunisianPronoun {
  return PRONOUNS[person];
}
