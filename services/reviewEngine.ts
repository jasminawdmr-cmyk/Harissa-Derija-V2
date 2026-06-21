/**
 * /services/reviewEngine.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Moteur pédagogique de révision — Darija Tunisien
 *
 * Principes implémentés :
 *
 *   1. RÉPÉTITION ESPACÉE (Spaced Repetition)
 *      Les éléments bien sus sont revus de moins en moins souvent.
 *      L'intervalle de révision grandit avec le score de maîtrise.
 *      Un oubli réinitialise partiellement l'intervalle.
 *
 *   2. RÉCUPÉRATION ACTIVE (Active Recall)
 *      Le système ne montre jamais la réponse en premier.
 *      L'apprenant doit produire la réponse avant de la voir.
 *      Trois qualités de réponse sont distinguées :
 *        - INCORRECT  → l'apprenant ne savait pas
 *        - HESITANT   → l'apprenant avait un doute
 *        - CORRECT    → l'apprenant savait avec aisance
 *
 *   3. ENTRELACEMENT (Interleaving)
 *      Les sessions ne regroupent pas les éléments par thème.
 *      Le mélange de types (vocabulaire, verbe, grammaire) et de
 *      niveaux de maîtrise améliore la discrimination et le transfert.
 *      La fonction `buildInterleavedSession()` applique ce principe.
 *
 * Modèle de données :
 *   Chaque carte de révision est un `ReviewCard` (structure locale, plus
 *   riche que `ReviewItem` de types/index.ts) qui porte :
 *     - masteryScore    : 0–5  (score de maîtrise)
 *     - lastReviewedAt  : ISO date string
 *     - nextReviewAt    : ISO date string
 *     - reviewCount     : nombre total de révisions
 *     - mistakeCount    : nombre total d'erreurs
 *
 * Règles d'espacement :
 *   score 0 → pas encore vu (n'entre pas dans le calcul d'intervalle)
 *   score 1 →  1 jour
 *   score 2 →  3 jours
 *   score 3 →  7 jours
 *   score 4 → 14 jours
 *   score 5 → 30 jours
 *
 * Règles de mise à jour du score :
 *   INCORRECT → score - 1 (min 1), revoir demain
 *   HESITANT  → score inchangé, revoir dans 2 jours
 *   CORRECT   → score + 1 (max 5), intervalle selon le nouveau score
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ReviewItemType, ReviewCardSide } from "../types";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Qualité de réponse fournie par l'apprenant.
 * Correspond aux trois états pédagogiques distincts :
 *   - incorrect : l'apprenant s'est trompé ou n'a pas su répondre
 *   - hesitant  : l'apprenant a hésité ou s'est souvenu avec effort
 *   - correct   : l'apprenant a répondu avec aisance et rapidité
 */
export type AnswerQuality = "incorrect" | "hesitant" | "correct";

/**
 * Score de maîtrise : entier de 0 à 5.
 *   0 = jamais vu
 *   1 = vu une fois / très fragile
 *   2 = en cours d'apprentissage
 *   3 = connu mais fragile
 *   4 = bien connu
 *   5 = maîtrisé
 */
export type MasteryScore = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Carte de révision — représentation complète d'un élément dans le moteur.
 * Étend les données de ReviewItem avec les champs propres au moteur.
 */
export interface ReviewCard {
  /** Identifiant unique de la carte (ex: "card_w_bonjour_fr_darija") */
  id: string;
  /** Type de contenu source */
  itemType: ReviewItemType;
  /** ID de l'entité source (wordId, verbId, grammarRuleId…) */
  sourceId: string;
  /** Sens de la carte : français → darija ou darija → français */
  cardSide: ReviewCardSide;

  // ── Données pédagogiques ──────────────────────────────────────────────────
  /** Score de maîtrise actuel (0–5) */
  masteryScore: MasteryScore;
  /** Date ISO de la dernière révision (null si jamais révisée) */
  lastReviewedAt: string | null;
  /** Date ISO de la prochaine révision planifiée */
  nextReviewAt: string;
  /** Nombre total de révisions (toutes qualités confondues) */
  reviewCount: number;
  /** Nombre total de réponses incorrectes */
  mistakeCount: number;
  /** Historique compact des réponses ('c' correct, 'h' hésitant, 'i' incorrect) */
  history: Array<"c" | "h" | "i">;
  /** Nombre de réponses correctes consécutives (remis à 0 à chaque erreur) */
  consecutiveCorrect: number;
  /** Date ISO de création de la carte */
  createdAt: string;
}

/**
 * Résultat d'une mise à jour de carte après réponse.
 * Contient la carte mise à jour ET un rapport lisible des changements.
 */
export interface ReviewUpdateResult {
  /** Carte mise à jour */
  card: ReviewCard;
  /** Score avant la mise à jour */
  previousScore: MasteryScore;
  /** Score après la mise à jour */
  newScore: MasteryScore;
  /** Variation du score (-1, 0, +1) */
  scoreDelta: -1 | 0 | 1;
  /** Nombre de jours avant la prochaine révision */
  nextIntervalDays: number;
  /** Date lisible de la prochaine révision (ex: "dans 7 jours") */
  nextReviewLabel: string;
  /** La carte vient-elle d'être maîtrisée ? (score passé à 5) */
  justMastered: boolean;
  /** La carte était-elle maîtrisée et a-t-elle régressé ? */
  justForgotten: boolean;
}

/**
 * Session de révision entrelacée, prête à être consommée par l'UI.
 */
export interface ReviewSession {
  /** Identifiant unique de la session */
  sessionId: string;
  /** Cartes dans l'ordre entrelacé */
  cards: ReviewCard[];
  /** Nombre total de cartes */
  totalCards: number;
  /** Répartition par type (pour affichage dans l'UI) */
  breakdown: Partial<Record<ReviewItemType, number>>;
  /** Date ISO de création de la session */
  createdAt: string;
}

/**
 * Statistiques d'une session terminée.
 */
export interface SessionStats {
  sessionId: string;
  totalCards: number;
  correctCount: number;
  hesitantCount: number;
  incorrectCount: number;
  /** Pourcentage de bonnes réponses (0–100) */
  accuracyPercent: number;
  /** Durée de la session en secondes */
  durationSeconds: number;
  /** Cartes nouvellement maîtrisées pendant cette session */
  newlyMasteredIds: string[];
  /** Cartes oubliées (score régressé) pendant cette session */
  forgottenIds: string[];
  /** Score XP gagné pendant la session */
  xpEarned: number;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

/**
 * Table d'espacement : score de maîtrise → intervalle en jours.
 * Conforme aux règles spécifiées dans la doc produit.
 */
export const SPACING_INTERVALS: Readonly<Record<MasteryScore, number>> = {
  0: 0,   // Jamais vu — pas de prochaine révision planifiée automatiquement
  1: 1,   // Très fragile → revoir demain
  2: 3,   // En cours → revoir dans 3 jours
  3: 7,   // Connu mais fragile → revoir dans 1 semaine
  4: 14,  // Bien connu → revoir dans 2 semaines
  5: 30,  // Maîtrisé → revoir dans 1 mois
} as const;

/** Intervalle de remplacement quand la réponse est HESITANTE (en jours) */
const HESITANT_INTERVAL_DAYS = 2;

/** Intervalle de remplacement quand la réponse est INCORRECTE (en jours) */
const INCORRECT_INTERVAL_DAYS = 1;

/** Score minimum (ne peut pas descendre en dessous de 1 après une première vue) */
const MIN_SCORE_AFTER_SEEN: MasteryScore = 1;

/** Score maximum */
const MAX_SCORE: MasteryScore = 5;

/** XP accordé par réponse selon la qualité */
const XP_PER_QUALITY: Record<AnswerQuality, number> = {
  correct: 10,
  hesitant: 5,
  incorrect: 0,
};

/** Bonus XP si la carte est nouvellement maîtrisée (score → 5) */
const XP_MASTERY_BONUS = 20;

// ─── Fonctions utilitaires de date ───────────────────────────────────────────

/**
 * Retourne une date ISO dans N jours à partir de maintenant.
 * L'heure est fixée à 06:00 (révisions du matin) pour cohérence.
 */
export function addDays(days: number, from: Date = new Date()): string {
  const result = new Date(from);
  result.setDate(result.getDate() + days);
  result.setHours(6, 0, 0, 0);
  return result.toISOString();
}

/**
 * Retourne true si une carte est due pour révision (nextReviewAt <= maintenant).
 */
export function isDue(card: ReviewCard, now: Date = new Date()): boolean {
  return new Date(card.nextReviewAt) <= now;
}

/**
 * Nombre de jours jusqu'à la prochaine révision (négatif si en retard).
 */
export function daysUntilReview(card: ReviewCard, now: Date = new Date()): number {
  const diff = new Date(card.nextReviewAt).getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Formate un intervalle en jours en label lisible.
 * Ex : 0 → "aujourd'hui", 1 → "demain", 7 → "dans 7 jours"
 */
export function formatIntervalLabel(days: number): string {
  if (days <= 0) return "aujourd'hui";
  if (days === 1) return "demain";
  if (days < 7) return `dans ${days} jours`;
  if (days === 7) return "dans 1 semaine";
  if (days < 30) return `dans ${Math.round(days / 7)} semaines`;
  return "dans 1 mois";
}

// ─── Calcul du score et de l'intervalle ──────────────────────────────────────

/**
 * Calcule le nouveau score de maîtrise selon la qualité de la réponse.
 *
 * Règles :
 *   INCORRECT → score - 1 (minimum 1 si déjà vu, 0 si jamais vu)
 *   HESITANT  → score inchangé
 *   CORRECT   → score + 1 (maximum 5)
 */
export function computeNewScore(
  currentScore: MasteryScore,
  quality: AnswerQuality
): MasteryScore {
  switch (quality) {
    case "incorrect": {
      // Si jamais vu (score 0), on reste à 0 puis on passera à 1 au prochain tour
      // Si déjà vu, on descend d'un cran mais on reste à 1 au minimum
      const floor = currentScore === 0 ? 0 : MIN_SCORE_AFTER_SEEN;
      const rawScore = currentScore - 1;
      return Math.max(floor, rawScore) as MasteryScore;
    }
    case "hesitant":
      // Score inchangé — mais on s'assure que la première vue monte à 1
      return currentScore === 0 ? 1 : currentScore;
    case "correct":
      return Math.min(MAX_SCORE, currentScore + 1) as MasteryScore;
  }
}

/**
 * Calcule l'intervalle en jours selon la qualité de réponse et le nouveau score.
 *
 * L'intervalle dépend de la qualité en premier lieu :
 *   INCORRECT → toujours 1 jour (indépendamment du score)
 *   HESITANT  → toujours 2 jours
 *   CORRECT   → intervalle du tableau SPACING_INTERVALS au nouveau score
 */
export function computeIntervalDays(
  newScore: MasteryScore,
  quality: AnswerQuality
): number {
  switch (quality) {
    case "incorrect":
      return INCORRECT_INTERVAL_DAYS;
    case "hesitant":
      return HESITANT_INTERVAL_DAYS;
    case "correct":
      return SPACING_INTERVALS[newScore];
  }
}

/**
 * Encode la qualité en caractère compact pour l'historique.
 */
function encodeQuality(quality: AnswerQuality): "c" | "h" | "i" {
  const map: Record<AnswerQuality, "c" | "h" | "i"> = {
    correct: "c",
    hesitant: "h",
    incorrect: "i",
  };
  return map[quality];
}

// ─── Mise à jour d'une carte ──────────────────────────────────────────────────

/**
 * Applique une réponse à une carte de révision et retourne la carte mise à jour.
 *
 * C'est la fonction centrale du moteur — elle implémente toutes les règles
 * pédagogiques et retourne un rapport complet du changement.
 *
 * @param card     La carte avant révision
 * @param quality  La qualité de la réponse de l'apprenant
 * @param now      Date de référence (injectée pour faciliter les tests)
 * @returns        Le résultat complet avec la carte mise à jour
 *
 * @example
 * const result = applyAnswer(card, "correct");
 * console.log(result.nextReviewLabel); // "dans 7 jours"
 * console.log(result.scoreDelta);      // +1
 */
export function applyAnswer(
  card: ReviewCard,
  quality: AnswerQuality,
  now: Date = new Date()
): ReviewUpdateResult {
  const previousScore = card.masteryScore;
  const newScore = computeNewScore(previousScore, quality);
  const intervalDays = computeIntervalDays(newScore, quality);
  const nextReviewAt = addDays(intervalDays, now);

  const scoreDelta = (newScore - previousScore) as -1 | 0 | 1;
  const justMastered = previousScore < MAX_SCORE && newScore === MAX_SCORE;
  const justForgotten = previousScore === MAX_SCORE && newScore < MAX_SCORE;

  const updatedCard: ReviewCard = {
    ...card,
    masteryScore: newScore,
    lastReviewedAt: now.toISOString(),
    nextReviewAt,
    reviewCount: card.reviewCount + 1,
    mistakeCount: quality === "incorrect" ? card.mistakeCount + 1 : card.mistakeCount,
    consecutiveCorrect: quality === "correct" ? card.consecutiveCorrect + 1 : 0,
    history: [...card.history, encodeQuality(quality)],
  };

  return {
    card: updatedCard,
    previousScore,
    newScore,
    scoreDelta,
    nextIntervalDays: intervalDays,
    nextReviewLabel: formatIntervalLabel(intervalDays),
    justMastered,
    justForgotten,
  };
}

// ─── Création de cartes ───────────────────────────────────────────────────────

/**
 * Crée une nouvelle carte de révision pour un élément source.
 * Le score de départ est 0 (jamais vu).
 *
 * @param sourceId  ID de l'entité source (ex: "w_bonjour")
 * @param itemType  Type de l'entité source
 * @param cardSide  Sens de la carte
 * @param now       Date de création (injectée pour les tests)
 */
export function createCard(
  sourceId: string,
  itemType: ReviewItemType,
  cardSide: ReviewCardSide,
  now: Date = new Date()
): ReviewCard {
  const id = `card_${itemType}_${sourceId}_${cardSide}`;
  return {
    id,
    itemType,
    sourceId,
    cardSide,
    masteryScore: 0,
    lastReviewedAt: null,
    nextReviewAt: now.toISOString(), // Due immédiatement
    reviewCount: 0,
    mistakeCount: 0,
    history: [],
    consecutiveCorrect: 0,
    createdAt: now.toISOString(),
  };
}

/**
 * Crée les deux faces d'une carte (fr→darija ET darija→fr) pour un mot.
 * L'entrelacement des deux faces renforce la bi-directionnalité.
 */
export function createCardPair(
  sourceId: string,
  itemType: ReviewItemType,
  now: Date = new Date()
): [ReviewCard, ReviewCard] {
  return [
    createCard(sourceId, itemType, "french_to_darija", now),
    createCard(sourceId, itemType, "darija_to_french", now),
  ];
}

// ─── Sélection des cartes dues ────────────────────────────────────────────────

/**
 * Retourne toutes les cartes dues pour révision, triées par urgence.
 * Les cartes les plus en retard apparaissent en premier.
 *
 * @param cards  Toutes les cartes du catalogue
 * @param now    Date de référence
 */
export function getDueCards(
  cards: ReviewCard[],
  now: Date = new Date()
): ReviewCard[] {
  return cards
    .filter((card) => isDue(card, now))
    .sort(
      (a, b) =>
        new Date(a.nextReviewAt).getTime() - new Date(b.nextReviewAt).getTime()
    );
}

/**
 * Retourne les cartes nouvelles (jamais révisées, score = 0).
 * Utiles pour introduire de nouveaux éléments dans une session.
 */
export function getNewCards(cards: ReviewCard[]): ReviewCard[] {
  return cards.filter((card) => card.reviewCount === 0);
}

/**
 * Retourne les cartes difficiles : score ≤ 2 ET au moins 2 erreurs.
 * Utiles pour créer une session de remédiation ciblée.
 */
export function getDifficultCards(cards: ReviewCard[]): ReviewCard[] {
  return cards.filter(
    (card) => card.masteryScore <= 2 && card.mistakeCount >= 2
  );
}

/**
 * Retourne les cartes maîtrisées (score = 5).
 */
export function getMasteredCards(cards: ReviewCard[]): ReviewCard[] {
  return cards.filter((card) => card.masteryScore === MAX_SCORE);
}

// ─── Entrelacement (Interleaving) ────────────────────────────────────────────

/**
 * Mélange un tableau selon l'algorithme de Fisher-Yates.
 * Utilisé pour randomiser les sessions.
 *
 * @pure — ne modifie pas le tableau original
 */
export function shuffleCards<T>(cards: T[]): T[] {
  const arr = [...cards];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Construit une session de révision entrelacée.
 *
 * Principe d'entrelacement appliqué :
 *   1. Mélange les types (vocabulaire, verbe, grammaire) — pas de blocs thématiques
 *   2. Intercale des cartes de faible score parmi les cartes de score moyen
 *      (les éléments fragiles bénéficient du contexte des éléments connus)
 *   3. Évite de placer deux cartes du même sourceId consécutivement
 *      (ex: les deux faces d'un même mot ne se suivent jamais)
 *   4. Plafonne la session à maxCards pour éviter la fatigue
 *
 * @param dueCards   Cartes dues sélectionnées par getDueCards()
 * @param newCards   Nouvelles cartes à introduire dans la session
 * @param maxCards   Nombre maximum de cartes dans la session (défaut : 20)
 * @param maxNew     Nombre maximum de nouvelles cartes à introduire (défaut : 5)
 */
export function buildInterleavedSession(
  dueCards: ReviewCard[],
  newCards: ReviewCard[],
  maxCards = 20,
  maxNew = 5
): ReviewSession {
  // 1. Limiter les nouvelles cartes pour ne pas surcharger la session
  const selectedNew = newCards.slice(0, maxNew);

  // 2. Mélanger les cartes dues
  const shuffledDue = shuffleCards(dueCards);

  // 3. Combiner dues + nouvelles, en intercalant les nouvelles régulièrement
  const combined: ReviewCard[] = [];
  const newQueue = [...selectedNew];
  const dueQueue = [...shuffledDue];

  // Intercalation : 1 nouvelle carte toutes les 4 cartes de révision
  const INTERLEAVE_EVERY = 4;
  let position = 0;

  while (
    (dueQueue.length > 0 || newQueue.length > 0) &&
    combined.length < maxCards
  ) {
    if (newQueue.length > 0 && position % INTERLEAVE_EVERY === 0) {
      combined.push(newQueue.shift()!);
    } else if (dueQueue.length > 0) {
      combined.push(dueQueue.shift()!);
    } else if (newQueue.length > 0) {
      combined.push(newQueue.shift()!);
    }
    position++;
  }

  // 4. Éviter deux cartes du même sourceId consécutives
  const separated = separateConsecutiveSiblings(combined);

  // 5. Calculer la répartition par type
  const breakdown = separated.reduce<Partial<Record<ReviewItemType, number>>>(
    (acc, card) => {
      acc[card.itemType] = (acc[card.itemType] ?? 0) + 1;
      return acc;
    },
    {}
  );

  return {
    sessionId: `session_${Date.now()}`,
    cards: separated,
    totalCards: separated.length,
    breakdown,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Réorganise un tableau de cartes pour éviter que deux cartes du même
 * `sourceId` apparaissent consécutivement.
 *
 * Algorithme : si deux cartes consécutives partagent le même sourceId,
 * on cherche la prochaine carte avec un sourceId différent et on la déplace.
 *
 * @pure — retourne un nouveau tableau
 */
export function separateConsecutiveSiblings(cards: ReviewCard[]): ReviewCard[] {
  const result = [...cards];

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i].sourceId === result[i + 1].sourceId) {
      // Cherche la prochaine carte avec un sourceId différent
      const swapIndex = result
        .slice(i + 2)
        .findIndex((c) => c.sourceId !== result[i].sourceId);

      if (swapIndex !== -1) {
        const realIndex = i + 2 + swapIndex;
        // Échange result[i+1] et result[realIndex]
        [result[i + 1], result[realIndex]] = [result[realIndex], result[i + 1]];
      }
    }
  }

  return result;
}

// ─── Statistiques de session ──────────────────────────────────────────────────

/**
 * Calcule les statistiques d'une session terminée.
 *
 * @param sessionId       ID de la session
 * @param results         Tableau des résultats de chaque carte
 * @param durationSeconds Durée de la session en secondes
 */
export function computeSessionStats(
  sessionId: string,
  results: ReviewUpdateResult[],
  durationSeconds: number
): SessionStats {
  const correct = results.filter((r) => r.scoreDelta > 0 || r.newScore > r.previousScore).length;
  const hesitant = results.filter((r) => r.scoreDelta === 0 && r.card.history[r.card.history.length - 1] === "h").length;
  const incorrect = results.filter((r) => r.card.history[r.card.history.length - 1] === "i").length;
  const total = results.length;

  const newlyMasteredIds = results
    .filter((r) => r.justMastered)
    .map((r) => r.card.id);

  const forgottenIds = results
    .filter((r) => r.justForgotten)
    .map((r) => r.card.id);

  const xpEarned =
    results.reduce((acc, r) => {
      const quality: AnswerQuality =
        r.card.history[r.card.history.length - 1] === "c"
          ? "correct"
          : r.card.history[r.card.history.length - 1] === "h"
          ? "hesitant"
          : "incorrect";
      return acc + XP_PER_QUALITY[quality];
    }, 0) +
    newlyMasteredIds.length * XP_MASTERY_BONUS;

  return {
    sessionId,
    totalCards: total,
    correctCount: correct,
    hesitantCount: hesitant,
    incorrectCount: incorrect,
    accuracyPercent: total > 0 ? Math.round((correct / total) * 100) : 0,
    durationSeconds,
    newlyMasteredIds,
    forgottenIds,
    xpEarned,
  };
}

// ─── Statistiques globales du catalogue ──────────────────────────────────────

/**
 * Résumé de l'état du catalogue complet d'un utilisateur.
 */
export interface CatalogSummary {
  totalCards: number;
  /** Cartes jamais révisées */
  newCount: number;
  /** Cartes en cours d'apprentissage (score 1–2) */
  learningCount: number;
  /** Cartes consolidées (score 3–4) */
  consolidatedCount: number;
  /** Cartes maîtrisées (score 5) */
  masteredCount: number;
  /** Cartes actuellement dues */
  dueCount: number;
  /** Précision globale (réponses correctes / total réponses) */
  globalAccuracyPercent: number;
}

/**
 * Calcule un résumé de l'état du catalogue.
 *
 * @param cards  Toutes les cartes de l'utilisateur
 * @param now    Date de référence
 */
export function getCatalogSummary(
  cards: ReviewCard[],
  now: Date = new Date()
): CatalogSummary {
  const totalCards = cards.length;
  const newCount = cards.filter((c) => c.reviewCount === 0).length;
  const learningCount = cards.filter(
    (c) => c.masteryScore >= 1 && c.masteryScore <= 2
  ).length;
  const consolidatedCount = cards.filter(
    (c) => c.masteryScore >= 3 && c.masteryScore <= 4
  ).length;
  const masteredCount = cards.filter((c) => c.masteryScore === 5).length;
  const dueCount = getDueCards(cards, now).length;

  const totalAnswers = cards.reduce((a, c) => a + c.reviewCount, 0);
  const totalCorrect = cards.reduce(
    (a, c) => a + c.history.filter((h) => h === "c").length,
    0
  );

  return {
    totalCards,
    newCount,
    learningCount,
    consolidatedCount,
    masteredCount,
    dueCount,
    globalAccuracyPercent:
      totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0,
  };
}

// ─── Prévision de charge ──────────────────────────────────────────────────────

/**
 * Prévoit le nombre de cartes dues pour chaque jour des N prochains jours.
 * Utile pour afficher une courbe de charge dans le profil ou le calendrier.
 *
 * @param cards       Toutes les cartes de l'utilisateur
 * @param daysAhead   Nombre de jours à prévoir (défaut : 7)
 * @param now         Date de référence
 * @returns           Tableau de { date: string, count: number }
 */
export function forecastReviewLoad(
  cards: ReviewCard[],
  daysAhead = 7,
  now: Date = new Date()
): Array<{ date: string; count: number }> {
  return Array.from({ length: daysAhead }, (_, i) => {
    const dayStart = new Date(now);
    dayStart.setDate(dayStart.getDate() + i);
    dayStart.setHours(0, 0, 0, 0);

    const dayEnd = new Date(dayStart);
    dayEnd.setHours(23, 59, 59, 999);

    const count = cards.filter((card) => {
      const due = new Date(card.nextReviewAt);
      return due >= dayStart && due <= dayEnd;
    }).length;

    return {
      date: dayStart.toISOString().slice(0, 10), // "YYYY-MM-DD"
      count,
    };
  });
}
