/**
 * /data/recipes.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base des RECETTES pédagogiques tunisiennes — support langue + culture.
 *
 * ⚠️  CONTENANT VIDE — aucun contenu n'est créé ici. Recettes (noms de plats,
 *     ingrédients, étapes en darija) à fournir et valider séparément.
 *
 * Cible à terme : ~20 recettes (voir docs/V1_BALANCED_CONTENT_PLAN.md §3.3).
 *
 * Convention d'ID : "recipe_<slug>"  (ex : "recipe_ojja")
 * Translittération : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Chaque recette tisse : ingrédients (vocabulaire) + étapes (verbes de cuisine)
 * + anecdote culturelle. Lier relatedWordIds / relatedVerbIds quand possible.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Recipe } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────
// (vide pour l'instant — à remplir avec du contenu validé)

export const recipes: Readonly<Recipe[]> = [] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const recipesById: Readonly<Record<string, Recipe>> =
  Object.fromEntries(recipes.map((r) => [r.id, r]));

/** Retourne une recette par son ID */
export function getRecipeById(id: string): Recipe | undefined {
  return recipesById[id];
}

/** Retourne les recettes d'un niveau donné */
export function getRecipesByLevel(level: Recipe['level']): Recipe[] {
  return recipes.filter((r) => r.level === level);
}
