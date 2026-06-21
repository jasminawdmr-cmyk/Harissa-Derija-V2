/**
 * /services/reviewCardStore.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pont entre les données de vocabulaire et le moteur de révision.
 *
 * Rôle :
 *   - Amorcer (seed) un jeu de ReviewCard à partir du vocabulaire existant
 *   - Charger / sauvegarder les cartes dans AsyncStorage
 *   - Fusionner les nouvelles cartes du catalogue sans écraser la progression
 *
 * IMPORTANT : ce module n'invente aucun contenu. Il transforme uniquement
 * les VocabularyItem déjà définis dans /data/vocabulary.ts en cartes de révision.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { storage, StorageKeys } from './storage';
import { vocabulary } from '@/data/vocabulary';
import { createCardPair, type ReviewCard } from './reviewEngine';

/**
 * Construit le jeu complet de cartes à partir du vocabulaire.
 * Pour chaque mot : 2 cartes (français→tunisien et tunisien→français).
 */
export function seedCardsFromVocabulary(now: Date = new Date()): ReviewCard[] {
  const cards: ReviewCard[] = [];
  for (const word of vocabulary) {
    const [frToDarija, darijaToFr] = createCardPair(word.id, 'vocabulaire', now);
    cards.push(frToDarija, darijaToFr);
  }
  return cards;
}

/**
 * Charge les cartes sauvegardées, ou amorce un nouveau jeu si aucune
 * carte n'existe encore. Fusionne aussi les éventuelles nouvelles cartes
 * du catalogue (mots ajoutés depuis la dernière session) en conservant
 * la progression des cartes déjà connues.
 */
export async function loadOrSeedCards(now: Date = new Date()): Promise<ReviewCard[]> {
  const stored = await storage.get<ReviewCard[]>(StorageKeys.REVIEW_CARDS);

  // Premier lancement : amorcer et persister
  if (!stored || stored.length === 0) {
    const seeded = seedCardsFromVocabulary(now);
    await saveCards(seeded);
    return seeded;
  }

  // Fusion : ajouter les cartes du catalogue absentes du stockage
  const storedIds = new Set(stored.map((c) => c.id));
  const catalog = seedCardsFromVocabulary(now);
  const missing = catalog.filter((c) => !storedIds.has(c.id));

  if (missing.length > 0) {
    const merged = [...stored, ...missing];
    await saveCards(merged);
    return merged;
  }

  return stored;
}

/** Sauvegarde l'intégralité des cartes localement */
export async function saveCards(cards: ReviewCard[]): Promise<void> {
  await storage.set(StorageKeys.REVIEW_CARDS, cards);
}

/**
 * Met à jour une carte unique dans le stockage (après une réponse).
 * Recharge, remplace la carte concernée, puis persiste.
 */
export async function updateStoredCard(updated: ReviewCard): Promise<void> {
  const stored = (await storage.get<ReviewCard[]>(StorageKeys.REVIEW_CARDS)) ?? [];
  const next = stored.map((c) => (c.id === updated.id ? updated : c));
  await saveCards(next);
}

/** Réinitialise toutes les cartes (efface la progression de révision) */
export async function resetCards(): Promise<void> {
  await storage.remove(StorageKeys.REVIEW_CARDS);
}
