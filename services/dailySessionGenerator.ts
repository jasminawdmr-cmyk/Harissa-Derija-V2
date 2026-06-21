/**
 * /services/dailySessionGenerator.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Moteur de micro-sessions intelligentes — 100% local.
 *
 * Génère une session quotidienne de 5 à 15 minutes mélangeant :
 *   - révision         (flashcard d'un mot déjà vu)
 *   - nouveau vocabulaire (découverte d'un mot jamais vu)
 *   - conjugaison      (compléter une forme verbale)
 *   - grammaire        (rappel d'une règle)
 *   - phrases          (remettre une phrase dans l'ordre)
 *
 * Règles appliquées :
 *   - ENTRELACEMENT : les types ne sont jamais regroupés en blocs.
 *   - Limite : 5 à 10 exercices.
 *   - Jamais deux exercices IDENTIQUES (même type) à la suite.
 *   - Toujours commencer par une RÉUSSITE FACILE (exercice de révision sur un
 *     mot déjà bien maîtrisé, ou à défaut le plus accessible).
 *
 * Le moteur s'appuie sur la priorisation du personalizationEngine et sur le
 * quizGenerator (exercices) — sans inventer de données.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  loadOrSeedCards,
} from './reviewCardStore';
import {
  getDueCards,
  getNewCards,
  type ReviewCard,
} from './reviewEngine';
import {
  buildLearnerProfile,
  prioritizeReviews,
} from './personalizationEngine';
import { generateQuiz, type GeneratedQuestion } from './quizGenerator';
import { getWordById } from '@/data/vocabulary';
import type { VocabularyItem } from '@/types';

// ─── Modèle d'exercice unifié ─────────────────────────────────────────────────

/** Type pédagogique d'un exercice dans la micro-session */
export type ExerciseType =
  | 'revision'        // flashcard d'un mot connu
  | 'nouveau'         // découverte d'un mot
  | 'conjugaison'     // forme verbale à compléter
  | 'grammaire'       // règle à revoir
  | 'phrase';         // phrase à remettre dans l'ordre

/** Un exercice de la session (union discriminée par `kind`) */
export type SessionExercise =
  | {
      kind: 'revision';
      type: ExerciseType;
      card: ReviewCard;
      word: VocabularyItem;
    }
  | {
      kind: 'nouveau';
      type: ExerciseType;
      word: VocabularyItem;
    }
  | {
      kind: 'question';
      type: ExerciseType;
      question: GeneratedQuestion;
    };

/** Session quotidienne complète */
export interface DailySession {
  id: string;
  exercises: SessionExercise[];
  /** Durée estimée en minutes (≈ 1 à 1,5 min par exercice) */
  estimatedMinutes: number;
  /** Répartition par type (affichage) */
  breakdown: Partial<Record<ExerciseType, number>>;
  createdAt: string;
}

// ─── Paramètres ───────────────────────────────────────────────────────────────

const MIN_EXERCISES = 5;
const MAX_EXERCISES = 10;
/** Minutes estimées par exercice (pour viser la fenêtre 5–15 min) */
const MINUTES_PER_EXERCISE = 1.3;

// ─── Mapping type de question → type d'exercice ───────────────────────────────

function exerciseTypeOfQuestion(q: GeneratedQuestion): ExerciseType {
  switch (q.kind) {
    case 'conjugaison':
      return 'conjugaison';
    case 'remise_ordre':
      return 'phrase';
    case 'qcm':
    case 'traduction':
    default:
      return 'revision';
  }
}

// ─── Construction des pools d'exercices ───────────────────────────────────────

/**
 * Construit un pool varié d'exercices candidats à partir des données et de la
 * priorisation. Chaque entrée est prête à être placée dans la session.
 */
function buildExercisePool(
  dueCards: ReviewCard[],
  newCards: ReviewCard[],
  questions: GeneratedQuestion[]
): SessionExercise[] {
  const pool: SessionExercise[] = [];

  // Révisions : cartes dues résolues vers leur mot
  for (const card of dueCards) {
    const word = getWordById(card.sourceId);
    if (word) {
      pool.push({ kind: 'revision', type: 'revision', card, word });
    }
  }

  // Nouveau vocabulaire : cartes jamais vues (une seule face suffit)
  const seenNewWords = new Set<string>();
  for (const card of newCards) {
    if (seenNewWords.has(card.sourceId)) continue;
    const word = getWordById(card.sourceId);
    if (word) {
      seenNewWords.add(card.sourceId);
      pool.push({ kind: 'nouveau', type: 'nouveau', word });
    }
  }

  // Exercices générés (conjugaison, phrase, qcm/traduction)
  for (const q of questions) {
    pool.push({
      kind: 'question',
      type: exerciseTypeOfQuestion(q),
      question: q,
    });
  }

  return pool;
}

// ─── Sélection d'un démarrage facile ──────────────────────────────────────────

/**
 * Choisit l'exercice d'ouverture : une réussite facile.
 * Priorité : une révision sur le mot le mieux maîtrisé. À défaut, le premier
 * exercice de révision ; sinon n'importe quel exercice.
 */
function pickEasyStarter(pool: SessionExercise[]): SessionExercise | null {
  const revisions = pool.filter(
    (e): e is Extract<SessionExercise, { kind: 'revision' }> =>
      e.kind === 'revision'
  );

  if (revisions.length > 0) {
    // Mot le mieux maîtrisé = réussite la plus probable
    revisions.sort((a, b) => b.card.masteryScore - a.card.masteryScore);
    return revisions[0];
  }

  return pool[0] ?? null;
}

// ─── Entrelacement avec contrainte de non-répétition ──────────────────────────

/**
 * Ordonne les exercices en évitant deux types identiques consécutifs.
 * Algorithme glouton : à chaque étape, choisir le prochain exercice dont le
 * type diffère du précédent ; si impossible, accepter le suivant disponible.
 *
 * @param starter   Exercice imposé en première position (réussite facile)
 * @param rest      Exercices restants à entrelacer
 */
function interleaveByType(
  starter: SessionExercise,
  rest: SessionExercise[]
): SessionExercise[] {
  const result: SessionExercise[] = [starter];
  const remaining = [...rest];

  let lastType = starter.type;

  while (remaining.length > 0) {
    // Cherche le premier exercice d'un type différent du précédent
    let idx = remaining.findIndex((e) => e.type !== lastType);
    // Si tout ce qui reste est du même type, on prend le premier
    if (idx === -1) idx = 0;

    const [next] = remaining.splice(idx, 1);
    result.push(next);
    lastType = next.type;
  }

  return result;
}

// ─── Génération principale ────────────────────────────────────────────────────

/**
 * Génère la session quotidienne complète.
 *
 * @param targetMinutes Durée visée (5–15 min). Détermine le nombre d'exercices.
 * @param now           Date de référence (injectable pour tests)
 */
export async function generateDailySession(
  targetMinutes = 10,
  now: Date = new Date()
): Promise<DailySession> {
  // 1. Charger les cartes et établir le profil de personnalisation
  const allCards = await loadOrSeedCards(now);
  const profile = buildLearnerProfile(allCards);

  // 2. Cartes dues priorisées + nouvelles cartes
  const due = getDueCards(allCards, now);
  const prioritizedDue = prioritizeReviews(due, profile, now).map((p) => p.card);
  const fresh = getNewCards(allCards);

  // 3. Exercices générés (conjugaison/phrase/traduction) depuis le quiz
  const questions = generateQuiz(MAX_EXERCISES);

  // 4. Construire le pool puis dimensionner la session
  const pool = buildExercisePool(prioritizedDue, fresh, questions);

  // Nombre d'exercices visé selon la durée (borné 5–10)
  const target = Math.round(targetMinutes / MINUTES_PER_EXERCISE);
  const count = Math.max(MIN_EXERCISES, Math.min(MAX_EXERCISES, target));

  // 5. Sélectionner un démarrage facile, puis compléter
  const starter = pickEasyStarter(pool);

  let exercises: SessionExercise[];
  if (!starter) {
    exercises = [];
  } else {
    // Retire le starter du pool, garde le reste limité
    const rest = pool.filter((e) => e !== starter).slice(0, count - 1);
    exercises = interleaveByType(starter, rest);
  }

  // 6. Répartition par type
  const breakdown = exercises.reduce<Partial<Record<ExerciseType, number>>>(
    (acc, ex) => {
      acc[ex.type] = (acc[ex.type] ?? 0) + 1;
      return acc;
    },
    {}
  );

  return {
    id: `daily_${now.getTime()}`,
    exercises,
    estimatedMinutes: Math.round(exercises.length * MINUTES_PER_EXERCISE),
    breakdown,
    createdAt: now.toISOString(),
  };
}

/**
 * Indique si une session du jour peut être générée (assez de données).
 */
export async function canGenerateDailySession(
  now: Date = new Date()
): Promise<boolean> {
  const cards = await loadOrSeedCards(now);
  return cards.length > 0;
}
