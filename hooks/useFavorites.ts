import { useState, useEffect, useCallback } from 'react';
import { storage, StorageKeys, type StorageKey } from '@/services/storage';

/**
 * /hooks/useFavorites.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Gestion générique de favoris, persistés localement via AsyncStorage.
 *
 * Paramétrable par clé de stockage : un même hook sert les verbes ET les mots
 * (listes indépendantes). Par défaut, cible les verbes pour conserver la
 * compatibilité avec l'existant.
 *
 * Les favoris sont stockés comme un tableau d'IDs (ex: "v_kl", "w_bonjour").
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface UseFavoritesReturn {
  favoriteIds: Set<string>;
  isLoaded: boolean;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  count: number;
}

export function useFavorites(
  storageKey: StorageKey = StorageKeys.FAVORITE_VERBS
): UseFavoritesReturn {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Chargement initial depuis le stockage (re-déclenché si la clé change)
  useEffect(() => {
    let active = true;
    (async () => {
      const stored = await storage.get<string[]>(storageKey);
      if (active) {
        setFavoriteIds(new Set(stored ?? []));
        setIsLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, [storageKey]);

  const persist = useCallback(
    (ids: Set<string>) => {
      void storage.set(storageKey, Array.from(ids));
    },
    [storageKey]
  );

  const isFavorite = useCallback(
    (id: string) => favoriteIds.has(id),
    [favoriteIds]
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        persist(next);
        return next;
      });
    },
    [persist]
  );

  return {
    favoriteIds,
    isLoaded,
    isFavorite,
    toggleFavorite,
    count: favoriteIds.size,
  };
}
