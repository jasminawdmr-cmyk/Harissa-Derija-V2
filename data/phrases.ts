/**
 * /data/phrases.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base des PHRASES complètes prêtes à l'emploi (≠ mots isolés, ≠ dialogues).
 *
 * ⚠️  CONTENANT VIDE — aucun contenu linguistique n'est créé ici.
 *     Le contenu (darija) sera fourni et validé séparément (locuteur natif),
 *     puis ajouté ci-dessous en respectant l'interface Phrase.
 *
 * Cible à terme : ~300 phrases (voir docs/LANGUAGE_MASTER_PLAN.md §3).
 *
 * Convention d'ID : "p_<contexte>_<NN>"  (ex : "p_salutations_01")
 * Translittération : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Comment ajouter une phrase :
 *   1. Créer une constante `const PHRASE_XXX: Phrase = { ... }`
 *   2. L'ajouter au tableau `phrases` ci-dessous
 *   3. Renseigner darija + darijaLatin (validés), french, category, level, domain
 *   4. Lier wordIds / grammarRuleId si pertinent (réutilisation = renforcement)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Phrase } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────
// (vide pour l'instant — à remplir avec du contenu validé)

export const phrases: Readonly<Phrase[]> = [] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const phrasesById: Readonly<Record<string, Phrase>> =
  Object.fromEntries(phrases.map((p) => [p.id, p]));

/** Retourne une phrase par son ID */
export function getPhraseById(id: string): Phrase | undefined {
  return phrasesById[id];
}

/** Retourne les phrases d'une catégorie donnée */
export function getPhrasesByCategory(
  category: Phrase['category']
): Phrase[] {
  return phrases.filter((p) => p.category === category);
}

/** Retourne les phrases d'un niveau donné */
export function getPhrasesByLevel(level: Phrase['level']): Phrase[] {
  return phrases.filter((p) => p.level === level);
}

/** Retourne les phrases du registre diaspora */
export function getDiasporaPhrases(): Phrase[] {
  return phrases.filter((p) => p.domain === 'diaspora');
}
