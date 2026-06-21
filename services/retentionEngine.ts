/**
 * /services/retentionEngine.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Système de rétention intelligent — 100% local.
 *
 * Objectif : maximiser la mémorisation à long terme en appliquant six leviers
 * pédagogiques reconnus :
 *
 *   1. RÉPÉTITION ESPACÉE   → fournie par reviewEngine (intervalles croissants)
 *   2. RÉCUPÉRATION ACTIVE  → chaque exercice exige une production avant réponse
 *   3. DOUBLE CODAGE        → appui visuel (motifs/couleurs) couplé au texte
 *   4. DIFFICULTÉ PROGRESSIVE → l'ordre suit une charge cognitive croissante
 *   5. FEEDBACK IMMÉDIAT    → correction affichée juste après la réponse
 *   6. UNE SEULE DIFFICULTÉ PRINCIPALE par exercice (difficultyType unique)
 *
 * Ce moteur ANNOTE les exercices (issus de dailySessionGenerator) avec :
 *   - difficultyType          : la compétence principale sollicitée
 *   - difficultyLevel         : 1 (facile) → 5 (difficile)
 *   - estimatedCognitiveLoad  : charge mentale estimée 1 → 5
 *   - visualSupportLevel      : niveau d'appui visuel 0 → 3
 *
 * Il ne crée aucune donnée linguistique : il classe et ordonne l'existant.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { SessionExercise } from './dailySessionGenerator';
import type { GeneratedQuestion } from './quizGenerator';

// ─── Dimensions d'annotation ──────────────────────────────────────────────────

/**
 * Compétence principale sollicitée par l'exercice.
 * Principe #6 : un exercice ne porte qu'UN type de difficulté à la fois.
 */
export type DifficultyType =
  | 'reconnaissance'   // reconnaître un mot vu (récupération assistée)
  | 'rappel'           // produire un mot de mémoire (récupération active)
  | 'production'       // produire une forme (traduction active)
  | 'morphologie'      // décomposer/assembler une forme verbale
  | 'syntaxe';         // ordonner une phrase

/** Niveau de difficulté 1 (facile) → 5 (difficile) */
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

/** Charge cognitive estimée 1 (légère) → 5 (lourde) */
export type CognitiveLoad = 1 | 2 | 3 | 4 | 5;

/**
 * Niveau d'appui visuel :
 *   0 = aucun · 1 = couleur d'ancrage · 2 = pictogramme + couleur ·
 *   3 = décomposition visuelle complète (segments colorés)
 */
export type VisualSupportLevel = 0 | 1 | 2 | 3;

/** Métadonnées de rétention attachées à un exercice */
export interface RetentionAnnotation {
  difficultyType: DifficultyType;
  difficultyLevel: DifficultyLevel;
  estimatedCognitiveLoad: CognitiveLoad;
  visualSupportLevel: VisualSupportLevel;
  /** Indique si l'exercice repose sur la récupération active (principe #2) */
  activeRecall: boolean;
  /** Indique si un appui de double codage est présent (principe #3) */
  dualCoding: boolean;
}

/** Exercice enrichi de ses métadonnées de rétention */
export interface AnnotatedExercise {
  exercise: SessionExercise;
  annotation: RetentionAnnotation;
}

// ─── Annotation des questions générées ────────────────────────────────────────

/** Déduit le type de difficulté d'une question de quiz */
function difficultyTypeOfQuestion(q: GeneratedQuestion): DifficultyType {
  switch (q.kind) {
    case 'qcm':
      return 'reconnaissance'; // choisir parmi des options = reconnaissance
    case 'traduction':
      return 'production'; // produire le sens = production
    case 'conjugaison':
      return 'morphologie'; // assembler une forme = morphologie
    case 'remise_ordre':
      return 'syntaxe'; // ordonner = syntaxe
    default:
      return 'reconnaissance';
  }
}

/** Niveau de difficulté de base par type de question */
function baseLevelOfQuestion(q: GeneratedQuestion): DifficultyLevel {
  switch (q.kind) {
    case 'qcm':
      return 2;
    case 'traduction':
      return 3;
    case 'conjugaison':
      return 4;
    case 'remise_ordre':
      return 4;
    default:
      return 2;
  }
}

// ─── Annotation principale ────────────────────────────────────────────────────

/**
 * Annote un exercice unique avec ses métadonnées de rétention.
 *
 * La maîtrise courante module la difficulté ressentie : un mot peu maîtrisé
 * augmente d'un cran le niveau et la charge cognitive.
 */
export function annotateExercise(
  exercise: SessionExercise
): AnnotatedExercise {
  let difficultyType: DifficultyType;
  let difficultyLevel: DifficultyLevel;
  let cognitiveLoad: CognitiveLoad;
  let visualSupport: VisualSupportLevel;
  let activeRecall: boolean;

  switch (exercise.kind) {
    case 'nouveau': {
      // Découverte : reconnaissance assistée, fort appui visuel, charge faible
      difficultyType = 'reconnaissance';
      difficultyLevel = 1;
      cognitiveLoad = 1;
      visualSupport = 2; // picto + couleur d'ancrage
      activeRecall = false; // exposition, pas encore de rappel
      break;
    }

    case 'revision': {
      // Flashcard : rappel actif. Difficulté inverse de la maîtrise.
      const score = exercise.card.masteryScore; // 0–5
      difficultyType = 'rappel';
      // Moins le mot est maîtrisé, plus le rappel est exigeant
      difficultyLevel = clampLevel(5 - score);
      cognitiveLoad = clampLoad(4 - Math.floor(score / 2));
      visualSupport = 1; // couleur d'ancrage seulement (rappel = peu d'indices)
      activeRecall = true;
      break;
    }

    case 'question': {
      const q = exercise.question;
      difficultyType = difficultyTypeOfQuestion(q);
      difficultyLevel = baseLevelOfQuestion(q);
      cognitiveLoad = clampLoad(difficultyLevel);
      // La morphologie bénéficie du double codage (segments colorés)
      visualSupport = difficultyType === 'morphologie' ? 3 : 1;
      activeRecall = true; // toute question force une production
      break;
    }
  }

  const dualCoding = visualSupport >= 2;

  return {
    exercise,
    annotation: {
      difficultyType,
      difficultyLevel,
      estimatedCognitiveLoad: cognitiveLoad,
      visualSupportLevel: visualSupport,
      activeRecall,
      dualCoding,
    },
  };
}

// ─── Bornage des échelles ─────────────────────────────────────────────────────

function clampLevel(n: number): DifficultyLevel {
  return Math.max(1, Math.min(5, n)) as DifficultyLevel;
}

function clampLoad(n: number): CognitiveLoad {
  return Math.max(1, Math.min(5, n)) as CognitiveLoad;
}

// ─── Ordonnancement par difficulté progressive (principe #4) ──────────────────

/**
 * Ordonne une liste d'exercices annotés selon une difficulté CROISSANTE,
 * tout en préservant la contrainte d'entrelacement (pas deux mêmes
 * difficultyType consécutifs) déjà assurée en amont autant que possible.
 *
 * Stratégie : tri stable par charge cognitive croissante, puis correction
 * locale pour éviter deux difficultyType identiques d'affilée.
 */
export function orderByProgressiveDifficulty(
  items: AnnotatedExercise[]
): AnnotatedExercise[] {
  // 1. Tri par charge cognitive puis niveau (ascendant)
  const sorted = [...items].sort((a, b) => {
    const loadDiff =
      a.annotation.estimatedCognitiveLoad - b.annotation.estimatedCognitiveLoad;
    if (loadDiff !== 0) return loadDiff;
    return a.annotation.difficultyLevel - b.annotation.difficultyLevel;
  });

  // 2. Évite deux difficultyType identiques consécutifs (principe d'entrelacement)
  for (let i = 1; i < sorted.length; i++) {
    if (
      sorted[i].annotation.difficultyType ===
      sorted[i - 1].annotation.difficultyType
    ) {
      // Cherche le prochain exercice d'un type différent à rapprocher
      const swap = sorted
        .slice(i + 1)
        .findIndex(
          (it) =>
            it.annotation.difficultyType !==
            sorted[i - 1].annotation.difficultyType
        );
      if (swap !== -1) {
        const realIndex = i + 1 + swap;
        [sorted[i], sorted[realIndex]] = [sorted[realIndex], sorted[i]];
      }
    }
  }

  return sorted;
}

// ─── Annotation d'une session complète ────────────────────────────────────────

/** Résumé pédagogique d'une session annotée */
export interface RetentionSummary {
  totalExercises: number;
  /** Charge cognitive moyenne (1–5) */
  averageCognitiveLoad: number;
  /** Part d'exercices en récupération active (0–1) */
  activeRecallRatio: number;
  /** Part d'exercices avec double codage (0–1) */
  dualCodingRatio: number;
  /** Répartition par type de difficulté */
  byDifficultyType: Partial<Record<DifficultyType, number>>;
}

/**
 * Annote tous les exercices d'une session puis les ordonne en difficulté
 * progressive. Garantit que le PREMIER exercice reste le plus accessible
 * (réussite facile — cohérent avec dailySessionGenerator).
 */
export function annotateSession(exercises: SessionExercise[]): {
  items: AnnotatedExercise[];
  summary: RetentionSummary;
} {
  const annotated = exercises.map(annotateExercise);

  // Le tout premier exercice fourni est volontairement « facile » : on le
  // conserve en tête, et on ordonne le reste en difficulté progressive.
  const [first, ...rest] = annotated;
  const ordered = first
    ? [first, ...orderByProgressiveDifficulty(rest)]
    : orderByProgressiveDifficulty(annotated);

  return {
    items: ordered,
    summary: summarize(ordered),
  };
}

function summarize(items: AnnotatedExercise[]): RetentionSummary {
  const total = items.length;
  const avgLoad =
    total > 0
      ? items.reduce((s, it) => s + it.annotation.estimatedCognitiveLoad, 0) /
        total
      : 0;
  const activeRecall =
    total > 0
      ? items.filter((it) => it.annotation.activeRecall).length / total
      : 0;
  const dualCoding =
    total > 0
      ? items.filter((it) => it.annotation.dualCoding).length / total
      : 0;

  const byType = items.reduce<Partial<Record<DifficultyType, number>>>(
    (acc, it) => {
      const t = it.annotation.difficultyType;
      acc[t] = (acc[t] ?? 0) + 1;
      return acc;
    },
    {}
  );

  return {
    totalExercises: total,
    averageCognitiveLoad: Math.round(avgLoad * 10) / 10,
    activeRecallRatio: Math.round(activeRecall * 100) / 100,
    dualCodingRatio: Math.round(dualCoding * 100) / 100,
    byDifficultyType: byType,
  };
}

// ─── Libellés lisibles (UI) ───────────────────────────────────────────────────

/** Libellé français d'un type de difficulté */
export const DIFFICULTY_TYPE_LABELS: Readonly<Record<DifficultyType, string>> = {
  reconnaissance: 'Reconnaissance',
  rappel: 'Rappel',
  production: 'Production',
  morphologie: 'Morphologie',
  syntaxe: 'Syntaxe',
};
