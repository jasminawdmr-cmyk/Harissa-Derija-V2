import type { WordCategory } from '@/types';
import { CategoryColors, Colors } from '@/lib/Theme';
import type { VisualToken } from '@/lib/Theme';

/**
 * /utils/categories.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pont entre les catégories de vocabulaire (WordCategory) et la charte visuelle.
 *
 * Toutes les WordCategory n'ont pas une couleur dédiée dans la charte
 * (qui couvre les grands domaines). Ce helper fournit :
 *   - un libellé français lisible pour chaque catégorie
 *   - un VisualToken (couleur + picto) avec repli neutre propre
 *
 * Objectif : aucun écran ne code en dur de couleur ou de libellé de catégorie.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Libellés français pour chaque WordCategory */
export const CATEGORY_LABELS: Readonly<Record<WordCategory, string>> = {
  salutations: 'Salutations',
  famille: 'Famille',
  nourriture: 'Nourriture',
  chiffres: 'Chiffres',
  couleurs: 'Couleurs',
  corps: 'Corps',
  maison: 'Maison',
  transport: 'Transport',
  travail: 'Travail',
  emotions: 'Émotions',
  temps: 'Temps',
  'vêtements': 'Vêtements',
  shopping: 'Shopping',
  loisirs: 'Loisirs',
  nature: 'Nature',
  autres: 'Autres',
};

/**
 * Token neutre de repli pour les catégories sans couleur dédiée.
 * Reste cohérent avec la charte (gris sable lisible).
 */
const NEUTRAL_TOKEN: VisualToken = {
  main: Colors.neutral[500],
  soft: Colors.sand[200],
  label: 'Catégorie',
  icon: '🏷️',
};

/**
 * Correspondance WordCategory → clé de CategoryColors quand elle existe.
 * Les catégories absentes retombent sur le token neutre.
 */
const CATEGORY_TOKEN_MAP: Partial<Record<WordCategory, VisualToken>> = {
  famille: CategoryColors.famille,
  maison: CategoryColors.maison,
  nourriture: CategoryColors.nourriture,
  emotions: CategoryColors.emotions,
  transport: CategoryColors.deplacements,
  temps: CategoryColors.temps,
  travail: CategoryColors.travail,
};

/** Retourne le token visuel d'une catégorie (avec repli neutre) */
export function getCategoryToken(category: WordCategory): VisualToken {
  const token = CATEGORY_TOKEN_MAP[category];
  if (token) return token;
  // Repli : on conserve le libellé spécifique de la catégorie
  return { ...NEUTRAL_TOKEN, label: CATEGORY_LABELS[category] };
}

/** Retourne le libellé français d'une catégorie */
export function getCategoryLabel(category: WordCategory): string {
  return CATEGORY_LABELS[category];
}
