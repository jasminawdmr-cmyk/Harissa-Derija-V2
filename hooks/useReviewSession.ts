import { useState, useEffect, useCallback, useRef } from 'react';
import {
  loadOrSeedCards,
  updateStoredCard,
} from '@/services/reviewCardStore';
import {
  applyAnswer,
  getDueCards,
  getNewCards,
  buildInterleavedSession,
  computeSessionStats,
  type ReviewCard,
  type AnswerQuality,
  type ReviewUpdateResult,
  type SessionStats,
} from '@/services/reviewEngine';

/**
 * /hooks/useReviewSession.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pilote une session de flashcards de bout en bout :
 *   - charge les cartes (dues + nouvelles) depuis le stockage
 *   - construit une session entrelacée plafonnée à 20 cartes
 *   - expose la carte courante et l'avancement
 *   - applique chaque réponse au moteur et persiste la carte mise à jour
 *   - produit les statistiques finales quand la session est terminée
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Plafond de cartes par session (règle produit) */
const MAX_CARDS_PER_SESSION = 20;
/** Nombre maximum de nouvelles cartes introduites par session */
const MAX_NEW_PER_SESSION = 5;

export type SessionPhase = 'loading' | 'active' | 'empty' | 'finished';

interface UseReviewSessionReturn {
  phase: SessionPhase;
  /** Carte actuellement affichée (null si pas en phase active) */
  currentCard: ReviewCard | null;
  /** Index de la carte courante (0-based) */
  currentIndex: number;
  /** Nombre total de cartes dans la session */
  totalCards: number;
  /** Réponse à la carte courante */
  answer: (quality: AnswerQuality) => void;
  /** Statistiques finales (disponibles en phase 'finished') */
  stats: SessionStats | null;
  /** Relance une nouvelle session */
  restart: () => void;
}

export function useReviewSession(): UseReviewSessionReturn {
  const [phase, setPhase] = useState<SessionPhase>('loading');
  const [sessionCards, setSessionCards] = useState<ReviewCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<SessionStats | null>(null);

  // Conserve les résultats de chaque réponse pour le calcul des stats
  const resultsRef = useRef<ReviewUpdateResult[]>([]);
  // Horodatage de début pour mesurer la durée
  const startedAtRef = useRef<number>(Date.now());
  // ID de session stable
  const sessionIdRef = useRef<string>(`session_${Date.now()}`);

  const buildSession = useCallback(async () => {
    setPhase('loading');
    resultsRef.current = [];
    setCurrentIndex(0);
    setStats(null);
    startedAtRef.current = Date.now();
    sessionIdRef.current = `session_${Date.now()}`;

    const now = new Date();
    const allCards = await loadOrSeedCards(now);
    const due = getDueCards(allCards, now);
    const fresh = getNewCards(allCards);

    const session = buildInterleavedSession(
      due,
      fresh,
      MAX_CARDS_PER_SESSION,
      MAX_NEW_PER_SESSION
    );

    if (session.cards.length === 0) {
      setPhase('empty');
      setSessionCards([]);
      return;
    }

    setSessionCards(session.cards);
    setPhase('active');
  }, []);

  // Chargement initial
  useEffect(() => {
    void buildSession();
  }, [buildSession]);

  const answer = useCallback(
    (quality: AnswerQuality) => {
      const card = sessionCards[currentIndex];
      if (!card) return;

      // 1. Appliquer la réponse au moteur de révision
      const result = applyAnswer(card, quality);
      resultsRef.current.push(result);

      // 2. Persister la carte mise à jour localement (fire-and-forget)
      void updateStoredCard(result.card);

      // 3. Avancer ou terminer
      const nextIndex = currentIndex + 1;
      if (nextIndex >= sessionCards.length) {
        const durationSeconds = Math.round(
          (Date.now() - startedAtRef.current) / 1000
        );
        const finalStats = computeSessionStats(
          sessionIdRef.current,
          resultsRef.current,
          durationSeconds
        );
        setStats(finalStats);
        setPhase('finished');
      } else {
        setCurrentIndex(nextIndex);
      }
    },
    [sessionCards, currentIndex]
  );

  const restart = useCallback(() => {
    void buildSession();
  }, [buildSession]);

  return {
    phase,
    currentCard: phase === 'active' ? sessionCards[currentIndex] ?? null : null,
    currentIndex,
    totalCards: sessionCards.length,
    answer,
    stats,
    restart,
  };
}
