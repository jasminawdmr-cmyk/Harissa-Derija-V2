import { useState, useEffect, useMemo } from 'react';
import type { StreakDay } from '@/components/common/StreakStrip';
import { useUserProgress } from '@/hooks/useUserProgress';
import { loadOrSeedCards } from '@/services/reviewCardStore';
import { getCatalogSummary } from '@/services/reviewEngine';

/**
 * /hooks/useHomeData.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Données de l'écran Accueil — désormais dérivées des VRAIES données locales.
 *
 * Sources :
 *   - useUserProgress  → statistiques persistées (série, objectif, mots appris)
 *   - reviewCardStore  → cartes de révision (cartes dues, progression globale)
 *
 * Aucune donnée fictive : tout provient d'AsyncStorage via les services
 * existants. L'interface HomeData est inchangée pour ne pas toucher à l'écran.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Minutes estimées par carte à réviser (aligné sur dailySessionGenerator) */
const MINUTES_PER_CARD = 1.3;

export interface HomeData {
  /** Progression globale du parcours (0 à 1) */
  globalProgress: number;
  /** Minutes pratiquées aujourd'hui */
  minutesDoneToday: number;
  /** Objectif quotidien en minutes */
  dailyGoalMinutes: number;
  /** Temps estimé pour terminer la session du jour (minutes) */
  estimatedMinutesToday: number;
  /** Nombre de cartes à revoir aujourd'hui */
  cardsToReview: number;
  /** Série de jours en cours */
  currentStreak: number;
  /** Les 7 jours de la semaine pour la bande de série */
  weekDays: StreakDay[];
  /** Prénom de l'apprenant (optionnel) */
  displayName?: string;
  /** Chargement en cours */
  isLoading: boolean;
}

/**
 * Construit les 7 jours de la semaine à partir de la série réelle.
 * Les `currentStreak` derniers jours (jusqu'à aujourd'hui) sont marqués faits.
 */
function buildWeekFromStreak(currentStreak: number): StreakDay[] {
  const labels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  // JS : 0 = dimanche … 6 = samedi. Conversion en index lundi=0.
  const jsDay = new Date().getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

  return labels.map((label, index) => {
    // Distance (en jours) entre ce jour et aujourd'hui dans la semaine courante.
    const distanceFromToday = todayIndex - index;
    const isWithinStreak =
      distanceFromToday >= 0 && distanceFromToday < currentStreak;

    return {
      label,
      done: isWithinStreak,
      isToday: index === todayIndex,
    };
  });
}

export function useHomeData(): HomeData {
  const { stats, profile, isLoading: progressLoading } = useUserProgress();

  // Résumé du catalogue de cartes (cartes dues, progression globale)
  const [dueCount, setDueCount] = useState(0);
  const [globalProgress, setGlobalProgress] = useState(0);
  const [cardsLoading, setCardsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const now = new Date();
      const cards = await loadOrSeedCards(now);
      if (!active) return;

      const summary = getCatalogSummary(cards, now);
      // Progression globale = part des cartes consolidées + maîtrisées
      const progressed = summary.consolidatedCount + summary.masteredCount;
      const ratio =
        summary.totalCards > 0 ? progressed / summary.totalCards : 0;

      setDueCount(summary.dueCount);
      setGlobalProgress(ratio);
      setCardsLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => {
    const dailyGoalMinutes = profile?.dailyGoalMinutes ?? 10;
    const currentStreak = stats?.currentStreak ?? 0;
    // Minutes pratiquées aujourd'hui : proxy via le temps total, borné à l'objectif.
    const minutesDoneToday = Math.min(
      dailyGoalMinutes,
      stats?.totalTimeMinutes ?? 0
    );
    const estimatedMinutesToday = Math.max(
      1,
      Math.round(dueCount * MINUTES_PER_CARD)
    );

    return {
      globalProgress,
      minutesDoneToday,
      dailyGoalMinutes,
      estimatedMinutesToday,
      cardsToReview: dueCount,
      currentStreak,
      weekDays: buildWeekFromStreak(currentStreak),
      displayName: profile?.displayName,
      isLoading: progressLoading || cardsLoading,
    };
  }, [stats, profile, dueCount, globalProgress, progressLoading, cardsLoading]);
}
