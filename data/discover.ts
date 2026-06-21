/**
 * /data/discover.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base du pilier DÉCOUVRIR LA TUNISIE — fiches culturelles.
 *
 * UN SEUL fichier pour Culture / Histoire / Régions / Musique / Diaspora /
 * Tunisie contemporaine, différenciés par le champ `section`. Choix délibéré
 * pour éviter 6 fichiers quasi identiques (anti sur-ingénierie, anti doublons).
 * Les RECETTES ont leur propre fichier (data/recipes.ts) car leur structure
 * (ingrédients + étapes) est réellement différente.
 *
 * ⚠️  CONTENANT VIDE — aucun contenu n'est créé ici. Contenu culturel/historique
 *     à fournir et valider séparément, puis ajouté en respectant DiscoverContent.
 *
 * Cibles à terme (voir docs/V1_BALANCED_CONTENT_PLAN.md §3) :
 *   culture ~30 · histoire ~20 · régions ~8 · musique ~6 · diaspora ~5 · …
 *
 * Convention d'ID : "disc_<section>_<slug>"  (ex : "disc_culture_hospitalite")
 *
 * Format des fiches : BLOCS COURTS (jamais de mur de texte — cf. LEARNER_PROFILE).
 * Un objet signature par écran (cf. TUNISIAN_IDENTITY_SYSTEM).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { DiscoverContent, DiscoverSection } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────
// (vide pour l'instant — à remplir avec du contenu validé)

export const discoverContents: Readonly<DiscoverContent[]> = [] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const discoverContentsById: Readonly<Record<string, DiscoverContent>> =
  Object.fromEntries(discoverContents.map((d) => [d.id, d]));

/** Retourne une fiche par son ID */
export function getDiscoverContentById(
  id: string
): DiscoverContent | undefined {
  return discoverContentsById[id];
}

/** Retourne toutes les fiches d'une section (culture, histoire, régions…) */
export function getDiscoverBySection(
  section: DiscoverSection
): DiscoverContent[] {
  return discoverContents.filter((d) => d.section === section);
}
