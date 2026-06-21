/**
 * /lib/idConventions.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * CONVENTION D'IDENTIFIANTS DÉFINITIVE — ne plus jamais modifier.
 *
 * Chaque type de contenu possède un préfixe unique et stable. Tout nouvel
 * identifiant DOIT être produit via makeId() pour garantir la cohérence
 * sur le long terme (V3 → V4 → V5).
 *
 * Format : <prefix><slug>            ex : makeId('vocabulary', 'qahwa')  → "w_qahwa"
 * Format universé : <prefix><universe>_<slug>  via makeUniverseId()
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Universe } from '../types';

/** Type de contenu géré par la convention d'IDs. */
export type ContentKind =
  | 'vocabulary'
  | 'verb'
  | 'phrase'
  | 'expression'
  | 'dialogue'
  | 'grammar'
  | 'discover'
  | 'writing'
  | 'exercise';

/** Préfixes officiels et définitifs. */
export const ID_PREFIXES: Readonly<Record<ContentKind, string>> = {
  vocabulary: 'w_',
  verb: 'v_',
  phrase: 'p_',
  expression: 'e_',
  dialogue: 'd_',
  grammar: 'g_',
  discover: 'disc_',
  writing: 'wr_',
  exercise: 'ex_',
};

/** Normalise un libellé en slug ASCII stable (a-z, 0-9, underscores). */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ûü]/g, 'u')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/** Construit un ID conforme : makeId('vocabulary', 'Qahwa') → "w_qahwa". */
export function makeId(kind: ContentKind, slug: string): string {
  return `${ID_PREFIXES[kind]}${slugify(slug)}`;
}

/** Construit un ID universé : makeUniverseId('phrase','cafe','je veux un café') → "p_cafe_je_veux_un_cafe". */
export function makeUniverseId(
  kind: ContentKind,
  universe: Universe,
  slug: string
): string {
  return `${ID_PREFIXES[kind]}${universe}_${slugify(slug)}`;
}

/** Renvoie le préfixe attendu pour un type. */
export function prefixFor(kind: ContentKind): string {
  return ID_PREFIXES[kind];
}

/** Vérifie qu'un ID respecte le préfixe de son type. */
export function isValidId(kind: ContentKind, id: string): boolean {
  return id.startsWith(ID_PREFIXES[kind]);
}

/**
 * Préfixes hérités (legacy) encore présents dans les anciennes données et
 * migrés vers la convention officielle. Conservé pour audit/normalisation.
 */
export const LEGACY_PREFIX_MAP: Readonly<Record<string, string>> = {
  exp_: 'e_',
  dial_: 'd_',
  gr_: 'g_',
  write_: 'wr_',
};

/**
 * CHAÎNE DE DÉPENDANCE PÉDAGOGIQUE — convention de relation entre contenus.
 * Principe : chaque niveau réutilise les niveaux précédents (réutilisation =
 * renforcement). Les champs de liaison existent déjà dans les types ; cette
 * table documente comment relier le contenu lors de l'intégration des packs.
 *
 *   vocabulaire → verbes → phrases → expressions → dialogues → grammaire
 *              → découvrir → écriture → exercices (quiz)
 */
export const CONTENT_CHAIN: ReadonlyArray<{ kind: ContentKind; linksVia: string }> = [
  { kind: 'vocabulary', linksVia: 'relatedWordIds' },
  { kind: 'verb',       linksVia: 'example (réutilise le vocabulaire)' },
  { kind: 'phrase',     linksVia: 'wordIds, grammarRuleId' },
  { kind: 'expression', linksVia: 'universe, tags' },
  { kind: 'dialogue',   linksVia: 'keyWordIds, grammarRuleIds, lines[].wordIds' },
  { kind: 'grammar',    linksVia: 'examples, lessonIds' },
  { kind: 'discover',   linksVia: 'relatedWordIds, relatedExpressionIds' },
  { kind: 'writing',    linksVia: 'glyphs.exampleWordIds, bridges.wordId' },
  { kind: 'exercise',   linksVia: 'généré depuis vocabulary / verbs / dialogues' },
];
