/**
 * /data/pronouns.ts
 * Pronoms personnels du darija tunisien.
 *
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 */

import type { Person } from '../types';

export interface TunisianPronoun {
  person: Person;
  /** Forme arabe */
  arabic: string;
  /** Translittération arabizi */
  arabizi: string;
  phonetic: string;
  french: string;
  abbreviation: string;
  note?: string;
}

export const PRONOUNS: Readonly<Record<Person, TunisianPronoun>> = {
  '1s': {
    person: '1s',
    arabic: 'أنا',
    arabizi: 'Ena',
    phonetic: '[ɛna]',
    french: 'je / moi',
    abbreviation: 'je',
    note: 'Peut se prononcer "ana" dans certaines régions.',
  },

  '2s': {
    person: '2s',
    arabic: 'أنتَ / أنتِ',
    arabizi: 'Enti',
    phonetic: '[ɛnti]',
    french: 'tu / toi',
    abbreviation: 'tu',
    note:
      "Contrairement à l'arabe standard, le tunisien n'a qu'une forme pour " +
      '"tu" quel que soit le genre. Enti s\'utilise pour un homme et une femme.',
  },

  '3sm': {
    person: '3sm',
    arabic: 'هو',
    arabizi: 'Hou',
    phonetic: '[huː]',
    french: 'il / lui',
    abbreviation: 'il',
  },

  '3sf': {
    person: '3sf',
    arabic: 'هي',
    arabizi: 'Hi',
    phonetic: '[hiː]',
    french: 'elle',
    abbreviation: 'elle',
  },

  '1p': {
    person: '1p',
    arabic: 'أحنا',
    arabizi: 'A7na',
    phonetic: '[aħna]',
    french: 'nous',
    abbreviation: 'nous',
    note: 'Le "7" translittère le son ح (h emphatique pharyngal).',
  },

  '2p': {
    person: '2p',
    arabic: 'أنتم',
    arabizi: 'Entouma',
    phonetic: '[ɛntuːma]',
    french: 'vous',
    abbreviation: 'vous',
  },

  '3p': {
    person: '3p',
    arabic: 'هم',
    arabizi: 'Houma',
    phonetic: '[huːma]',
    french: 'ils / elles',
    abbreviation: 'ils/elles',
    note: 'Pas de distinction de genre au pluriel en tunisien.',
  },
} as const;

export const PRONOUN_ORDER: Person[] = ['1s', '2s', '3sm', '3sf', '1p', '2p', '3p'];

export function getPronoun(person: Person): TunisianPronoun {
  return PRONOUNS[person];
}
