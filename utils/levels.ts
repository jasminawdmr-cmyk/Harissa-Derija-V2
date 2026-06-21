import type { Level } from '@/types';

/**
 * /utils/levels.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Helpers d'affichage pour les niveaux d'apprentissage.
 * Centralise les libellés français et les couleurs de badge associées,
 * pour rester cohérent entre tous les écrans (Verbes, Vocabulaire, Grammaire).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { BadgeVariant } from '@/components/common/Badge';

/** Libellé français lisible pour chaque niveau */
export const LEVEL_LABELS: Readonly<Record<Level, string>> = {
  debutant: 'Débutant',
  elementaire: 'Élémentaire',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
};

/** Variante de Badge associée à chaque niveau */
export const LEVEL_BADGE_VARIANT: Readonly<Record<Level, BadgeVariant>> = {
  debutant: 'olive',
  elementaire: 'azure',
  intermediaire: 'terracotta',
  avance: 'neutral',
};

/** Ordre canonique des niveaux, du plus simple au plus avancé */
export const LEVEL_ORDER: Level[] = [
  'debutant',
  'elementaire',
  'intermediaire',
  'avance',
];

export function getLevelLabel(level: Level): string {
  return LEVEL_LABELS[level];
}
