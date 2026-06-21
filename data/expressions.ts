/**
 * /data/expressions.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base des EXPRESSIONS typiquement tunisiennes (idiomes, proverbes, formules,
 * interjections). Le sel de la langue vivante.
 *
 * ⚠️  CONTENANT VIDE — aucun contenu linguistique n'est créé ici.
 *     Contenu à fournir et valider séparément (locuteur natif).
 *
 * Cible à terme : ~50 expressions (voir docs/DISCOVER_TUNISIA_SYSTEM.md §8).
 *
 * Convention d'ID : "exp_<slug>"  (ex : "exp_bsa77a")
 * Translittération : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Particularité : une expression porte souvent un sens LITTÉRAL différent du
 * sens RÉEL. Renseigner `literalFrench` (mot à mot) ET `french` (sens d'usage).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Expression } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────
// (vide pour l'instant — à remplir avec du contenu validé)

export const expressions: Readonly<Expression[]> = [] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const expressionsById: Readonly<Record<string, Expression>> =
  Object.fromEntries(expressions.map((e) => [e.id, e]));

/** Retourne une expression par son ID */
export function getExpressionById(id: string): Expression | undefined {
  return expressionsById[id];
}

/** Retourne les expressions d'un type donné (idiome, proverbe…) */
export function getExpressionsByKind(
  kind: Expression['kind']
): Expression[] {
  return expressions.filter((e) => e.kind === kind);
}

/** Retourne les expressions d'un niveau donné */
export function getExpressionsByLevel(level: Expression['level']): Expression[] {
  return expressions.filter((e) => e.level === level);
}
