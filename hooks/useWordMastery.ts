import { useState, useEffect, useCallback } from 'react';
import { storage, StorageKeys } from '@/services/storage';
import type { ReviewCard } from '@/services/reviewEngine';

/**
 * /hooks/useWordMastery.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Expose le niveau de maîtrise par mot (wordId), lu depuis les ReviewCard
 * persistées. Sert à afficher les badges de progression sur les fiches de
 * vocabulaire et de leçon — sans dupliquer la logique du moteur.
 *
 * Un mot ayant deux faces (fr→darija, darija→fr), on retient le score MAXIMUM
 * des deux pour refléter la meilleure maîtrise atteinte.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface UseWordMasteryReturn {
  /** Retourne le score 0–5 d'un mot, ou undefined si jamais rencontré */
  getMastery: (wordId: string) => number | undefined;
  isLoaded: boolean;
  /** Force un rechargement (ex: après une session) */
  reload: () => void;
}

export function useWordMastery(): UseWordMasteryReturn {
  const [masteryByWord, setMasteryByWord] = useState<Record<string, number>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const cards = (await storage.get<ReviewCard[]>(StorageKeys.REVIEW_CARDS)) ?? [];
      if (!active) return;

      // Agrège le score max par sourceId (= wordId pour le vocabulaire)
      const map: Record<string, number> = {};
      for (const card of cards) {
        const prev = map[card.sourceId];
        map[card.sourceId] =
          prev === undefined ? card.masteryScore : Math.max(prev, card.masteryScore);
      }

      setMasteryByWord(map);
      setIsLoaded(true);
    })();
    return () => {
      active = false;
    };
  }, [tick]);

  const getMastery = useCallback(
    (wordId: string): number | undefined => masteryByWord[wordId],
    [masteryByWord]
  );

  const reload = useCallback(() => setTick((t) => t + 1), []);

  return { getMastery, isLoaded, reload };
}
