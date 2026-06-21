/**
 * /data/learningUniverse.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * REGISTRE CENTRAL DES UNIVERS PÉDAGOGIQUES — architecture V3 → V4 → V5.
 *
 * 20 univers thématiques. Chaque univers porte ses OBJECTIFS de contenu par type
 * (vocabulaire, verbes, phrases, expressions, dialogues, grammaire, découvrir,
 * leçons d'écriture, exercices d'écriture). La somme des objectifs de tous les
 * univers reconstitue exactement les objectifs globaux V3.
 *
 * Ce fichier ne contient AUCUN contenu linguistique : uniquement la structure
 * et les cibles. Le moteur services/contentGenerator.ts mesure l'avancement
 * réel par rapport à ces cibles.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { UniverseDefinition, UniverseTargets, Universe } from '../types';

/** Objectifs globaux V3 (source de vérité unique). */
export const V3_OBJECTIVES: UniverseTargets = {
  vocabulary: 500,
  verbs: 150,
  phrases: 300,
  expressions: 200,
  dialogues: 50,
  grammar: 40,
  discover: 100,
  writingLessons: 15,
  writingExercises: 50,
};

/** Constructeur compact d'un objet d'objectifs (ordre figé). */
function t(
  vocabulary: number,
  verbs: number,
  phrases: number,
  expressions: number,
  dialogues: number,
  grammar: number,
  discover: number,
  writingLessons: number,
  writingExercises: number
): UniverseTargets {
  return {
    vocabulary,
    verbs,
    phrases,
    expressions,
    dialogues,
    grammar,
    discover,
    writingLessons,
    writingExercises,
  };
}

/**
 * Les 20 univers. Répartition des cibles V3 :
 *   vocabulaire 25×20=500 · verbes (8×10 + 7×10)=150 · phrases 15×20=300
 *   expressions 10×20=200 · dialogues (3×10 + 2×10)=50 · grammaire 2×20=40
 *   découvrir 5×20=100 · leçons écriture (1×15)=15 · exercices écriture (3×10+2×10)=50
 */
export const LEARNING_UNIVERSES: Readonly<UniverseDefinition[]> = [
  { id: 'salutations',   title: 'Salutations',       icon: '👋', color: '#BCA8E8', difficulty: 1, target: t(12, 4, 7, 5, 1, 1, 2, 0, 1) },
  { id: 'cafe',          title: 'Café',              icon: '☕', color: '#C76543', difficulty: 1, target: t(13, 4, 8, 5, 2, 1, 3, 1, 2) },
  { id: 'marche',        title: 'Marché',            icon: '🛒', color: '#7A8F53', difficulty: 1, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'louage',        title: 'Louage',            icon: '🚐', color: '#D4A03A', difficulty: 2, target: t(12, 3, 7, 5, 1, 1, 2, 0, 1) },
  { id: 'plage',         title: 'À la plage',        icon: '🏖️', color: '#59B6C6', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'hotel',         title: "À l'hôtel",         icon: '🏨', color: '#D4B996', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'famille',       title: 'Famille',           icon: '👨‍👩‍👧', color: '#C65D7B', difficulty: 1, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'maison',        title: 'Maison',            icon: '🏠', color: '#2E5D8A', difficulty: 1, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'chez_la_tante', title: 'Chez la tante',     icon: '🫖', color: '#D6A658', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'voyage',        title: 'Voyage',            icon: '✈️', color: '#1F8B7A', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'emotions',      title: 'Émotions',          icon: '😊', color: '#B5546E', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'nourriture',    title: 'Nourriture',        icon: '🍽️', color: '#C0392B', difficulty: 1, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'temps_meteo',   title: 'Temps et météo',    icon: '🌤️', color: '#5B8DB8', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'corps_sante',   title: 'Corps et santé',    icon: '🩺', color: '#2E8B57', difficulty: 2, target: t(25, 8, 15, 10, 3, 2, 5, 1, 3) },
  { id: 'ville',         title: 'Ville',             icon: '🏙️', color: '#6B5B95', difficulty: 2, target: t(25, 7, 15, 10, 2, 2, 5, 1, 2) },
  { id: 'transport',     title: 'Transport',         icon: '🚌', color: '#E08A1E', difficulty: 2, target: t(13, 4, 8, 5, 1, 1, 3, 1, 1) },
  { id: 'etudes',        title: 'Études',            icon: '📚', color: '#4A6FA5', difficulty: 3, target: t(25, 7, 15, 10, 2, 2, 5, 1, 2) },
  { id: 'travail',       title: 'Travail',           icon: '💼', color: '#7E4FB0', difficulty: 3, target: t(25, 7, 15, 10, 2, 2, 5, 1, 2) },
  { id: 'sorties',       title: 'Sorties',           icon: '🎉', color: '#D45D79', difficulty: 3, target: t(25, 7, 15, 10, 2, 2, 5, 1, 2) },
  { id: 'amitie',        title: 'Amitié',            icon: '🤝', color: '#3E9C8F', difficulty: 2, target: t(25, 7, 15, 10, 2, 2, 5, 0, 2) },
  { id: 'mariage_fetes', title: 'Mariage et fêtes',  icon: '💍', color: '#B8336A', difficulty: 3, target: t(25, 7, 15, 10, 2, 2, 5, 0, 2) },
  { id: 'achats',        title: 'Achats',            icon: '🛍️', color: '#C77D3F', difficulty: 2, target: t(25, 7, 15, 10, 2, 2, 5, 0, 2) },
  { id: 'administration',title: 'Administration',    icon: '🏛️', color: '#4B6584', difficulty: 4, target: t(25, 7, 15, 10, 2, 2, 5, 0, 2) },
  { id: 'medias_reseaux',title: 'Médias et réseaux', icon: '📱', color: '#2D9CDB', difficulty: 3, target: t(25, 7, 15, 10, 2, 2, 5, 0, 2) },
] as const;

// ─── Accès ──────────────────────────────────────────────────────────────────────

export const universesById: Readonly<Record<Universe, UniverseDefinition>> =
  Object.fromEntries(LEARNING_UNIVERSES.map((u) => [u.id, u])) as Record<
    Universe,
    UniverseDefinition
  >;

export function getUniverse(id: Universe): UniverseDefinition | undefined {
  return universesById[id];
}

/** Liste ordonnée des IDs d'univers. */
export const UNIVERSE_ORDER: Universe[] = LEARNING_UNIVERSES.map((u) => u.id);

// ─── Vérification d'intégrité des cibles ──────────────────────────────────────

/** Somme des objectifs de tous les univers, par type. */
export function getTotalTargets(): UniverseTargets {
  return LEARNING_UNIVERSES.reduce<UniverseTargets>(
    (acc, u) => ({
      vocabulary: acc.vocabulary + u.target.vocabulary,
      verbs: acc.verbs + u.target.verbs,
      phrases: acc.phrases + u.target.phrases,
      expressions: acc.expressions + u.target.expressions,
      dialogues: acc.dialogues + u.target.dialogues,
      grammar: acc.grammar + u.target.grammar,
      discover: acc.discover + u.target.discover,
      writingLessons: acc.writingLessons + u.target.writingLessons,
      writingExercises: acc.writingExercises + u.target.writingExercises,
    }),
    t(0, 0, 0, 0, 0, 0, 0, 0, 0)
  );
}

/**
 * Vérifie que la somme des cibles par univers == objectifs globaux V3.
 * Retourne la liste des écarts éventuels (vide = cohérent).
 */
export function verifyTargetsIntegrity(): Array<{
  type: keyof UniverseTargets;
  sum: number;
  objective: number;
}> {
  const sum = getTotalTargets();
  const out: Array<{ type: keyof UniverseTargets; sum: number; objective: number }> = [];
  (Object.keys(V3_OBJECTIVES) as Array<keyof UniverseTargets>).forEach((k) => {
    if (sum[k] !== V3_OBJECTIVES[k]) {
      out.push({ type: k, sum: sum[k], objective: V3_OBJECTIVES[k] });
    }
  });
  return out;
}
