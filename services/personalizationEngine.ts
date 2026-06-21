/**
 * /services/personalizationEngine.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Moteur de personnalisation pédagogique — 100% local, AUCUNE IA externe.
 *
 * Analyse l'historique des ReviewCard (déjà persistées) pour détecter :
 *   1. Les catégories préférées        → où l'apprenant réussit / s'investit
 *   2. Les difficultés récurrentes     → mots/catégories à fort taux d'erreur
 *   3. Les meilleurs moments de réussite → heures où les réponses sont justes
 *   4. Les types d'exercices efficaces  → sens de carte le plus performant
 *
 * Puis fournit une PRIORISATION des prochaines révisions combinant urgence SRS,
 * difficulté et préférences détectées.
 *
 * Toutes les fonctions sont pures et déterministes (hors lecture d'historique),
 * pour rester testables et explicables.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ReviewCard } from './reviewEngine';
import { isDue } from './reviewEngine';
import { getWordById } from '@/data/vocabulary';
import type { WordCategory, ReviewCardSide } from '@/types';

// ─── Types de sortie ──────────────────────────────────────────────────────────

/** Statistiques agrégées pour une catégorie */
export interface CategoryInsight {
  category: WordCategory;
  totalAnswers: number;
  correctAnswers: number;
  /** Précision 0–1 */
  accuracy: number;
  /** Score d'affinité 0–1 (mix précision + volume d'engagement) */
  affinity: number;
}

/** Difficulté récurrente détectée */
export interface DifficultyInsight {
  sourceId: string;
  /** Libellé lisible (mot français) si résoluble */
  label: string;
  category?: WordCategory;
  mistakeCount: number;
  accuracy: number;
}

/** Performance par tranche horaire */
export interface TimeInsight {
  /** Heure 0–23 */
  hour: number;
  totalAnswers: number;
  accuracy: number;
}

/** Efficacité par type d'exercice (sens de carte) */
export interface ExerciseInsight {
  cardSide: ReviewCardSide;
  totalAnswers: number;
  accuracy: number;
}

/** Profil de personnalisation complet */
export interface LearnerProfile {
  preferredCategories: CategoryInsight[];
  recurringDifficulties: DifficultyInsight[];
  bestHours: TimeInsight[];
  effectiveExercises: ExerciseInsight[];
  /** Nombre total de réponses analysées (fiabilité du profil) */
  sampleSize: number;
}

// ─── Helpers internes ─────────────────────────────────────────────────────────

/** Compte les réponses correctes dans l'historique d'une carte */
function countCorrect(card: ReviewCard): number {
  return card.history.filter((h) => h === 'c').length;
}

/** Catégorie d'une carte via le vocabulaire (undefined si non résoluble) */
function categoryOf(card: ReviewCard): WordCategory | undefined {
  if (card.itemType !== 'vocabulaire') return undefined;
  return getWordById(card.sourceId)?.category;
}

// ─── 1. Catégories préférées ──────────────────────────────────────────────────

/**
 * Calcule l'affinité par catégorie. L'affinité combine la précision (70%) et
 * le volume d'engagement normalisé (30%) : une catégorie souvent travaillée ET
 * réussie ressort en tête.
 */
export function analyzeCategories(cards: ReviewCard[]): CategoryInsight[] {
  const acc = new Map<WordCategory, { total: number; correct: number }>();

  for (const card of cards) {
    const cat = categoryOf(card);
    if (!cat) continue;
    const entry = acc.get(cat) ?? { total: 0, correct: 0 };
    entry.total += card.history.length;
    entry.correct += countCorrect(card);
    acc.set(cat, entry);
  }

  // Volume max pour normaliser l'engagement
  const maxTotal = Math.max(1, ...Array.from(acc.values()).map((e) => e.total));

  const insights: CategoryInsight[] = Array.from(acc.entries()).map(
    ([category, e]) => {
      const accuracy = e.total > 0 ? e.correct / e.total : 0;
      const engagement = e.total / maxTotal;
      const affinity = accuracy * 0.7 + engagement * 0.3;
      return {
        category,
        totalAnswers: e.total,
        correctAnswers: e.correct,
        accuracy,
        affinity,
      };
    }
  );

  return insights.sort((a, b) => b.affinity - a.affinity);
}

// ─── 2. Difficultés récurrentes ───────────────────────────────────────────────

/**
 * Détecte les éléments à difficulté récurrente : au moins 2 erreurs et une
 * précision inférieure à 60%. Triés par nombre d'erreurs décroissant.
 */
export function analyzeDifficulties(
  cards: ReviewCard[],
  minMistakes = 2,
  accuracyThreshold = 0.6
): DifficultyInsight[] {
  // Agrège par sourceId (les 2 faces d'un mot comptent ensemble)
  const acc = new Map<
    string,
    { mistakes: number; total: number; correct: number }
  >();

  for (const card of cards) {
    const entry = acc.get(card.sourceId) ?? {
      mistakes: 0,
      total: 0,
      correct: 0,
    };
    entry.mistakes += card.mistakeCount;
    entry.total += card.history.length;
    entry.correct += countCorrect(card);
    acc.set(card.sourceId, entry);
  }

  const result: DifficultyInsight[] = [];
  for (const [sourceId, e] of acc.entries()) {
    const accuracy = e.total > 0 ? e.correct / e.total : 0;
    if (e.mistakes >= minMistakes && accuracy < accuracyThreshold) {
      const word = getWordById(sourceId);
      result.push({
        sourceId,
        label: word?.french ?? sourceId,
        category: word?.category,
        mistakeCount: e.mistakes,
        accuracy,
      });
    }
  }

  return result.sort((a, b) => b.mistakeCount - a.mistakeCount);
}

// ─── 3. Meilleurs moments de réussite ─────────────────────────────────────────

/**
 * Analyse la précision par heure de la journée, à partir de lastReviewedAt.
 * Note : l'historique ne conserve que la dernière date de révision par carte ;
 * l'analyse reste indicative et s'affine avec l'usage.
 * Retourne les tranches triées par précision (volume minimal requis).
 */
export function analyzeBestTimes(
  cards: ReviewCard[],
  minAnswersPerHour = 3
): TimeInsight[] {
  const byHour = new Map<number, { total: number; correct: number }>();

  for (const card of cards) {
    if (!card.lastReviewedAt) continue;
    const hour = new Date(card.lastReviewedAt).getHours();
    const entry = byHour.get(hour) ?? { total: 0, correct: 0 };
    // Approxime : on attribue le dernier résultat connu à cette heure
    const last = card.history[card.history.length - 1];
    entry.total += 1;
    if (last === 'c') entry.correct += 1;
    byHour.set(hour, entry);
  }

  const insights: TimeInsight[] = Array.from(byHour.entries())
    .filter(([, e]) => e.total >= minAnswersPerHour)
    .map(([hour, e]) => ({
      hour,
      totalAnswers: e.total,
      accuracy: e.total > 0 ? e.correct / e.total : 0,
    }));

  return insights.sort((a, b) => b.accuracy - a.accuracy);
}

// ─── 4. Types d'exercices efficaces ───────────────────────────────────────────

/**
 * Compare la précision selon le sens de carte (français→darija vs darija→
 * français vs audio). Aide à privilégier les formats où l'apprenant réussit.
 */
export function analyzeExerciseTypes(cards: ReviewCard[]): ExerciseInsight[] {
  const bySide = new Map<ReviewCardSide, { total: number; correct: number }>();

  for (const card of cards) {
    const entry = bySide.get(card.cardSide) ?? { total: 0, correct: 0 };
    entry.total += card.history.length;
    entry.correct += countCorrect(card);
    bySide.set(card.cardSide, entry);
  }

  const insights: ExerciseInsight[] = Array.from(bySide.entries()).map(
    ([cardSide, e]) => ({
      cardSide,
      totalAnswers: e.total,
      accuracy: e.total > 0 ? e.correct / e.total : 0,
    })
  );

  return insights.sort((a, b) => b.accuracy - a.accuracy);
}

// ─── Profil complet ───────────────────────────────────────────────────────────

/** Construit le profil de personnalisation complet à partir des cartes */
export function buildLearnerProfile(cards: ReviewCard[]): LearnerProfile {
  const sampleSize = cards.reduce((sum, c) => sum + c.history.length, 0);
  return {
    preferredCategories: analyzeCategories(cards),
    recurringDifficulties: analyzeDifficulties(cards),
    bestHours: analyzeBestTimes(cards),
    effectiveExercises: analyzeExerciseTypes(cards),
    sampleSize,
  };
}

// ─── Priorisation des révisions ───────────────────────────────────────────────

/** Carte assortie de son score de priorité (pour tri/inspection) */
export interface PrioritizedCard {
  card: ReviewCard;
  priority: number;
  reasons: string[];
}

/**
 * Priorise les cartes pour la prochaine session.
 *
 * Score = somme pondérée de :
 *   - urgence SRS (carte due ou en retard)        +3
 *   - difficulté (mistakeCount élevé)             + jusqu'à +3
 *   - faible maîtrise (score bas)                 + jusqu'à +2
 *   - bonus catégorie préférée                    +1
 *   - bonus format efficace (cardSide performant) +1
 *
 * Plus le score est élevé, plus la carte est prioritaire. Le tri est stable
 * et chaque carte expose les « raisons » de sa priorité (transparence).
 */
export function prioritizeReviews(
  cards: ReviewCard[],
  profile: LearnerProfile,
  now: Date = new Date()
): PrioritizedCard[] {
  // Top catégories préférées (les 3 meilleures)
  const topCategories = new Set(
    profile.preferredCategories.slice(0, 3).map((c) => c.category)
  );
  // Meilleur format
  const bestSide = profile.effectiveExercises[0]?.cardSide;

  const scored: PrioritizedCard[] = cards.map((card) => {
    let priority = 0;
    const reasons: string[] = [];

    // Urgence SRS
    if (isDue(card, now)) {
      priority += 3;
      reasons.push('à réviser');
    }

    // Difficulté
    if (card.mistakeCount >= 3) {
      priority += 3;
      reasons.push('difficile');
    } else if (card.mistakeCount === 2) {
      priority += 2;
      reasons.push('fragile');
    } else if (card.mistakeCount === 1) {
      priority += 1;
    }

    // Faible maîtrise
    if (card.masteryScore <= 1) {
      priority += 2;
      reasons.push('peu maîtrisé');
    } else if (card.masteryScore === 2) {
      priority += 1;
    }

    // Bonus catégorie préférée
    const word =
      card.itemType === 'vocabulaire' ? getWordById(card.sourceId) : undefined;
    if (word && topCategories.has(word.category)) {
      priority += 1;
      reasons.push('thème favori');
    }

    // Bonus format efficace
    if (bestSide && card.cardSide === bestSide) {
      priority += 1;
    }

    return { card, priority, reasons };
  });

  return scored.sort((a, b) => b.priority - a.priority);
}
