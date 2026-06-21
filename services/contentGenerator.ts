/**
 * /services/contentGenerator.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * MOTEUR DE PROGRESSION DE CONTENU — mesure l'avancement réel de la V3.
 *
 * Ce moteur NE crée PAS de contenu. Il lit les données présentes dans /data,
 * les rattache à un univers (champ `universe` explicite, sinon heuristique sur
 * category/tags/context), et compare au registre data/learningUniverse.ts.
 *
 * API :
 *   getUniverseProgress(id)      → avancement détaillé d'un univers
 *   getRemainingTargets(id)      → ce qu'il reste à produire par type
 *   getNextContentPriority(id)   → le type le plus en retard dans un univers
 *   getCompletionPercentage(id?) → % d'un univers, ou global si omis
 *   getRecommendedNextTask()     → la prochaine tâche prioritaire, tous univers
 *   getGlobalProgress()          → totaux réels vs objectifs V3 (exact)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  Universe,
  UniverseTargets,
  WordCategory,
  VocabularyItem,
  Verb,
  Dialogue,
} from '../types';
import {
  LEARNING_UNIVERSES,
  UNIVERSE_ORDER,
  V3_OBJECTIVES,
  getUniverse,
} from '../data/learningUniverse';
import { vocabulary } from '../data/vocabulary';
import { verbs } from '../data/verbs';
import { phrases } from '../data/phrases';
import { expressions } from '../data/expressions';
import { dialogues } from '../data/dialogues';
import { grammarRules } from '../data/grammar';
import { discoverContents } from '../data/discover';
import { writingLessons } from '../data/writing';

// ─── Dimension de progression (= clés des objectifs) ──────────────────────────

export type ContentDimension = keyof UniverseTargets;

export const CONTENT_DIMENSIONS: ContentDimension[] = [
  'vocabulary',
  'verbs',
  'phrases',
  'expressions',
  'dialogues',
  'grammar',
  'discover',
  'writingLessons',
  'writingExercises',
];

/** Libellés FR lisibles des dimensions (pour l'UI et les rapports). */
export const DIMENSION_LABELS: Readonly<Record<ContentDimension, string>> = {
  vocabulary: 'vocabulaire',
  verbs: 'verbes',
  phrases: 'phrases',
  expressions: 'expressions',
  dialogues: 'dialogues',
  grammar: 'grammaire',
  discover: 'découvrir',
  writingLessons: 'leçons écriture',
  writingExercises: 'exercices écriture',
};

// ─── Résolution d'univers (explicite, sinon heuristique) ──────────────────────

const CATEGORY_TO_UNIVERSE: Partial<Record<WordCategory, Universe>> = {
  salutations: 'salutations',
  famille: 'famille',
  nourriture: 'nourriture',
  corps: 'corps_sante',
  maison: 'maison',
  transport: 'transport',
  travail: 'travail',
  emotions: 'emotions',
  temps: 'temps_meteo',
  'vêtements': 'achats',
  shopping: 'achats',
  loisirs: 'sorties',
  nature: 'voyage',
};

const TAG_TO_UNIVERSE: Record<string, Universe> = {
  nourriture: 'nourriture',
  transport: 'transport',
  communication: 'amitie',
  maison: 'maison',
  shopping: 'achats',
  travail: 'travail',
  loisirs: 'sorties',
  emotions: 'emotions',
  vetements: 'achats',
};

const DIALOGUE_CONTEXT_TO_UNIVERSE: Record<Dialogue['context'], Universe> = {
  famille: 'famille',
  marche: 'marche',
  restaurant: 'nourriture',
  telephone: 'medias_reseaux',
  rue: 'ville',
  maison: 'maison',
  travail: 'travail',
  celebrations: 'mariage_fetes',
};

export function resolveWordUniverse(w: VocabularyItem): Universe | null {
  return w.universe ?? CATEGORY_TO_UNIVERSE[w.category] ?? null;
}

export function resolveVerbUniverse(v: Verb): Universe | null {
  if (v.universe) return v.universe;
  for (const tag of v.tags) {
    if (TAG_TO_UNIVERSE[tag]) return TAG_TO_UNIVERSE[tag];
  }
  return null;
}

export function resolveDialogueUniverse(d: Dialogue): Universe | null {
  return d.universe ?? DIALOGUE_CONTEXT_TO_UNIVERSE[d.context] ?? null;
}

// ─── Comptage du contenu réel par univers ─────────────────────────────────────

/** Compte le contenu actuel par dimension pour un univers donné. */
function countCurrentForUniverse(id: Universe): UniverseTargets {
  const count = (n: number): number => n;
  return {
    vocabulary: vocabulary.filter((w) => resolveWordUniverse(w) === id).length,
    verbs: verbs.filter((v) => resolveVerbUniverse(v) === id).length,
    phrases: phrases.filter((p) => p.universe === id).length,
    expressions: expressions.filter((e) => e.universe === id).length,
    dialogues: dialogues.filter((d) => resolveDialogueUniverse(d) === id).length,
    grammar: grammarRules.filter((g) => g.universe === id).length,
    discover: discoverContents.filter((d) => d.universe === id).length,
    writingLessons: writingLessons.filter((w) => w.universe === id).length,
    // Les exercices d'écriture sont générés à la volée (exerciseGenerator),
    // ils ne sont pas stockés comme contenu : compteur courant = 0.
    writingExercises: count(0),
  };
}

// ─── API publique ─────────────────────────────────────────────────────────────

export interface DimensionProgress {
  dimension: ContentDimension;
  label: string;
  current: number;
  target: number;
  percentage: number; // 0–100, plafonné à 100
}

export interface UniverseProgress {
  id: Universe;
  title: string;
  icon: string;
  dimensions: DimensionProgress[];
  overallCurrent: number;
  overallTarget: number;
  overallPercentage: number;
}

function pct(current: number, target: number): number {
  if (target <= 0) return 100;
  return Math.min(100, Math.round((current / target) * 100));
}

/** Avancement détaillé d'un univers. */
export function getUniverseProgress(id: Universe): UniverseProgress | null {
  const def = getUniverse(id);
  if (!def) return null;

  const current = countCurrentForUniverse(id);
  const dimensions: DimensionProgress[] = CONTENT_DIMENSIONS.map((dim) => ({
    dimension: dim,
    label: DIMENSION_LABELS[dim],
    current: current[dim],
    target: def.target[dim],
    percentage: pct(current[dim], def.target[dim]),
  }));

  const overallCurrent = CONTENT_DIMENSIONS.reduce((s, d) => s + current[d], 0);
  const overallTarget = CONTENT_DIMENSIONS.reduce((s, d) => s + def.target[d], 0);

  return {
    id,
    title: def.title,
    icon: def.icon,
    dimensions,
    overallCurrent,
    overallTarget,
    overallPercentage: pct(overallCurrent, overallTarget),
  };
}

/** Ce qu'il reste à produire par type pour un univers (jamais négatif). */
export function getRemainingTargets(id: Universe): UniverseTargets | null {
  const def = getUniverse(id);
  if (!def) return null;
  const current = countCurrentForUniverse(id);
  const remaining = {} as UniverseTargets;
  CONTENT_DIMENSIONS.forEach((d) => {
    remaining[d] = Math.max(0, def.target[d] - current[d]);
  });
  return remaining;
}

/** Le type le plus en retard (plus faible % de complétion) dans un univers. */
export function getNextContentPriority(
  id: Universe
): { dimension: ContentDimension; label: string; current: number; target: number } | null {
  const prog = getUniverseProgress(id);
  if (!prog) return null;
  const candidates = prog.dimensions.filter((d) => d.target > 0 && d.current < d.target);
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => a.percentage - b.percentage);
  const top = candidates[0];
  return { dimension: top.dimension, label: top.label, current: top.current, target: top.target };
}

/** % de complétion d'un univers, ou global (objectifs V3) si id omis. */
export function getCompletionPercentage(id?: Universe): number {
  if (id) {
    const prog = getUniverseProgress(id);
    return prog ? prog.overallPercentage : 0;
  }
  return getGlobalProgress().overallPercentage;
}

export interface RecommendedTask {
  universe: Universe;
  universeTitle: string;
  dimension: ContentDimension;
  dimensionLabel: string;
  current: number;
  target: number;
  summary: string;
}

/** Prochaine tâche prioritaire, tous univers confondus (plus faible %). */
export function getRecommendedNextTask(): RecommendedTask | null {
  let best: RecommendedTask | null = null;
  let bestPct = Infinity;

  for (const id of UNIVERSE_ORDER) {
    const prog = getUniverseProgress(id);
    if (!prog) continue;
    for (const dim of prog.dimensions) {
      if (dim.target <= 0 || dim.current >= dim.target) continue;
      if (dim.percentage < bestPct) {
        bestPct = dim.percentage;
        best = {
          universe: id,
          universeTitle: prog.title,
          dimension: dim.dimension,
          dimensionLabel: dim.label,
          current: dim.current,
          target: dim.target,
          summary: `${prog.title} → ${dim.label} : ${dim.current}/${dim.target}`,
        };
      }
    }
  }
  return best;
}

// ─── Progression globale (exacte, indépendante de l'heuristique) ──────────────

export interface GlobalProgress {
  dimensions: DimensionProgress[];
  overallCurrent: number;
  overallTarget: number;
  overallPercentage: number;
}

/** Totaux RÉELS (longueurs des tableaux) vs objectifs V3 — comptage exact. */
export function getGlobalProgress(): GlobalProgress {
  const current: UniverseTargets = {
    vocabulary: vocabulary.length,
    verbs: verbs.length,
    phrases: phrases.length,
    expressions: expressions.length,
    dialogues: dialogues.length,
    grammar: grammarRules.length,
    discover: discoverContents.length,
    writingLessons: writingLessons.length,
    writingExercises: 0,
  };

  const dimensions: DimensionProgress[] = CONTENT_DIMENSIONS.map((dim) => ({
    dimension: dim,
    label: DIMENSION_LABELS[dim],
    current: current[dim],
    target: V3_OBJECTIVES[dim],
    percentage: pct(current[dim], V3_OBJECTIVES[dim]),
  }));

  const overallCurrent = CONTENT_DIMENSIONS.reduce((s, d) => s + current[d], 0);
  const overallTarget = CONTENT_DIMENSIONS.reduce((s, d) => s + V3_OBJECTIVES[d], 0);

  return {
    dimensions,
    overallCurrent,
    overallTarget,
    overallPercentage: pct(overallCurrent, overallTarget),
  };
}
