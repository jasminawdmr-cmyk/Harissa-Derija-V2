/**
 * /data/conjugationRules.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Règles de conjugaison du darija tunisien.
 *
 * Rôle : encoder les patterns morphologiques qui permettent de conjuguer
 * n'importe quel verbe régulier à partir de sa racine à 3 consonnes (C1C2C3).
 *
 * Architecture :
 *  - ConjugationPattern : un patron abstrait (préfixe + suffixe par personne)
 *  - REGULAR_PATTERNS    : les 2 patterns réguliers principaux (présent, passé)
 *  - applyPattern()      : fonction pour conjuguer à partir d'une racine
 *
 * Note linguistique :
 *  Le darija tunisien utilise principalement 2 temps narratifs :
 *    1. Le passé (ماضي) : formé par suffixes sur la racine
 *    2. Le présent/futur (مضارع) : formé par préfixes + suffixes
 *  Le futur proche se forme avec "باش" + présent.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Person, Tense } from '../types';
import { PRONOUN_ORDER } from './pronouns';

// ─── Types internes ───────────────────────────────────────────────────────────

/** Affixes (préfixe + suffixe) appliqués à la racine pour une personne donnée */
export interface PersonAffixes {
  person: Person;
  /** Préfixe ajouté avant la racine (peut être vide) */
  prefix: string;
  /** Suffixe ajouté après la racine (peut être vide) */
  suffix: string;
  /** Même chose en translittération latine */
  prefixLatin: string;
  suffixLatin: string;
}

/** Un pattern de conjugaison couvre un temps et un type de verbe */
export interface ConjugationPattern {
  id: string;
  /** Temps concerné */
  tense: Tense;
  /**
   * Famille de verbes : 'CCC' = racine à 3 consonnes pleines (le plus courant)
   * D'autres familles (verbes creux, géminés) seront ajoutées en V2.
   */
  verbFamily: 'CCC';
  /** Description pédagogique du pattern */
  description: string;
  /** Affixes pour chaque personne */
  affixes: Record<Person, PersonAffixes>;
  /**
   * Exemple d'application sur la racine K-T-B (كتب, "écrire").
   * Sert de référence pédagogique dans les fiches de grammaire.
   */
  exampleRoot: {
    arabic: string;
    latin: string;
    french: string;
  };
}

// ─── Données : 2 patterns de démonstration ───────────────────────────────────

/**
 * Pattern 1 — Passé simple (ماضي)
 * Formation : racine + suffixes personnels
 * Exemple avec K-T-B (écrire) :
 *   أنا → كتبت  (Ktibt)   = j'ai écrit
 *   أنت → كتبت  (Ktibt)   = tu as écrit
 *   هو  → كتب   (Kteb)    = il a écrit
 */
export const PAST_PATTERN_CCC: ConjugationPattern = {
  id: 'past_ccc_v1',
  tense: 'passe',
  verbFamily: 'CCC',
  description:
    'Passé simple des verbes réguliers à 3 consonnes. ' +
    'La voyelle entre C2 et C3 est "e" pour la 3e personne masculin singulier ' +
    'et disparaît pour les autres personnes (syncope).',
  exampleRoot: {
    arabic: 'ك-ت-ب',
    latin: 'K-T-B',
    french: 'écrire',
  },
  affixes: {
    '1s':  { person: '1s',  prefix: '',   suffix: 'ت',   prefixLatin: '',    suffixLatin: 't'    },
    '2s':  { person: '2s',  prefix: '',   suffix: 'ت',   prefixLatin: '',    suffixLatin: 't'    },
    '3sm': { person: '3sm', prefix: '',   suffix: '',    prefixLatin: '',    suffixLatin: ''     },
    '3sf': { person: '3sf', prefix: '',   suffix: 'ت',   prefixLatin: '',    suffixLatin: 'et'   },
    '1p':  { person: '1p',  prefix: '',   suffix: 'نا',  prefixLatin: '',    suffixLatin: 'na'   },
    '2p':  { person: '2p',  prefix: '',   suffix: 'تم',  prefixLatin: '',    suffixLatin: 'tou'  },
    '3p':  { person: '3p',  prefix: '',   suffix: 'و',   prefixLatin: '',    suffixLatin: 'ou'   },
  },
};

/**
 * Pattern 2 — Présent/Futur (مضارع)
 * Formation : préfixe "n/t/y" + racine + suffixes
 * Exemple avec K-T-B (écrire) :
 *   أنا → نكتب  (Nikteb)  = j'écris / j'écrirai
 *   هو  → يكتب  (Yikteb)  = il écrit
 */
export const PRESENT_PATTERN_CCC: ConjugationPattern = {
  id: 'present_ccc_v1',
  tense: 'present',
  verbFamily: 'CCC',
  description:
    'Présent/futur des verbes réguliers à 3 consonnes. ' +
    'Un préfixe personnel (n-, t-, y-, etc.) s\'ajoute avant la racine. ' +
    'La voyelle "i" s\'insère entre C1 et C2 (voyelle d\'appui).',
  exampleRoot: {
    arabic: 'ك-ت-ب',
    latin: 'K-T-B',
    french: 'écrire',
  },
  affixes: {
    '1s':  { person: '1s',  prefix: 'ن',   suffix: '',    prefixLatin: 'n',   suffixLatin: ''     },
    '2s':  { person: '2s',  prefix: 'ت',   suffix: '',    prefixLatin: 't',   suffixLatin: ''     },
    '3sm': { person: '3sm', prefix: 'ي',   suffix: '',    prefixLatin: 'y',   suffixLatin: ''     },
    '3sf': { person: '3sf', prefix: 'ت',   suffix: '',    prefixLatin: 't',   suffixLatin: ''     },
    '1p':  { person: '1p',  prefix: 'ن',   suffix: 'و',   prefixLatin: 'n',   suffixLatin: 'ou'   },
    '2p':  { person: '2p',  prefix: 'ت',   suffix: 'و',   prefixLatin: 't',   suffixLatin: 'ou'   },
    '3p':  { person: '3p',  prefix: 'ي',   suffix: 'و',   prefixLatin: 'y',   suffixLatin: 'ou'   },
  },
};

/** Index de tous les patterns disponibles */
export const ALL_PATTERNS: Readonly<ConjugationPattern[]> = [
  PAST_PATTERN_CCC,
  PRESENT_PATTERN_CCC,
] as const;

// ─── Utilitaire ───────────────────────────────────────────────────────────────

/**
 * Applique un pattern de conjugaison à une racine donnée.
 *
 * @param root         Racine consonantique (3 lettres arabes, ex : "كتب")
 * @param rootLatin    Translittération de la racine (ex : "ktb")
 * @param vowel        Voyelle thématique à insérer entre C2 et C3 (ex : "e")
 * @param pattern      Pattern à appliquer
 * @returns            Tableau des formes conjuguées pour chaque personne
 *
 * ⚠️  Simplification : cette fonction gère uniquement les verbes réguliers CCC.
 *     Les verbes irréguliers (creux, défectueux, géminés) auront leur propre
 *     logique en V2.
 */
export function applyPattern(
  root: string,
  rootLatin: string,
  vowel: string,
  pattern: ConjugationPattern
): Array<{ person: Person; form: string; formLatin: string }> {
  return PRONOUN_ORDER.map((person) => {
    const { prefix, suffix, prefixLatin, suffixLatin } = pattern.affixes[person];
    return {
      person,
      // Forme arabe : préfixe + racine + voyelle + suffixe
      form: `${prefix}${root}${vowel}${suffix}`,
      // Forme latine : préfixe + racine + voyelle + suffixe
      formLatin: `${prefixLatin}${rootLatin}${vowel}${suffixLatin}`,
    };
  });
}
