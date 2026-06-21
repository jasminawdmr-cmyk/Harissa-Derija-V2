/**
 * /data/grammarVisualLegend.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * LÉGENDE VISUELLE UNIVERSELLE DE LA GRAMMAIRE (V3 — enrichissement pédagogique).
 *
 * Une notion = une couleur = une seule signification. Ces couleurs sont
 * DÉFINITIVES et ne doivent jamais être réutilisées pour une autre notion.
 *
 * Ce fichier est une donnée de référence pure (aucun moteur, aucun service).
 * Il fournit la table couleurs/icônes que les composants d'affichage pourront
 * consommer pour colorer pastilles, bandes, tableaux et schémas de grammaire.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Notions grammaticales couvertes par la légende visuelle. */
export type GrammarNotion =
  | 'masculin'
  | 'feminin'
  | 'singulier'
  | 'pluriel'
  | 'passe'
  | 'present'
  | 'futur'
  | 'negation'
  | 'interrogation'
  | 'affirmation'
  | 'prefixe'
  | 'suffixe'
  | 'pronom'
  | 'determinant'
  | 'particule';

export interface GrammarNotionStyle {
  /** Identifiant stable de la notion. */
  notion: GrammarNotion;
  /** Libellé français affiché. */
  label: string;
  /** Couleur hexadécimale DÉFINITIVE (jamais réutilisée pour une autre notion). */
  color: string;
  /** Nom courant de la teinte (référence éditoriale). */
  colorName: string;
  /** Emoji/icône d'appoint pour pastilles et bandes. */
  icon: string;
}

/**
 * Table définitive notion → couleur. L'ordre est figé (sert aussi de légende).
 */
export const GRAMMAR_VISUAL_LEGEND: Readonly<GrammarNotionStyle[]> = [
  { notion: 'masculin',      label: 'Masculin',                    color: '#1F3A5F', colorName: 'Bleu marine',      icon: '♂️' },
  { notion: 'feminin',       label: 'Féminin',                     color: '#C08497', colorName: 'Vieux rose',       icon: '♀️' },
  { notion: 'singulier',     label: 'Singulier',                   color: '#8AA67A', colorName: 'Vert sauge',       icon: '①' },
  { notion: 'pluriel',       label: 'Pluriel',                     color: '#C66B3D', colorName: 'Terracotta',       icon: '∞' },
  { notion: 'passe',         label: 'Passé',                       color: '#6E1A2E', colorName: 'Bordeaux',         icon: '⏪' },
  { notion: 'present',       label: 'Présent',                     color: '#6B7A3A', colorName: 'Vert olive',       icon: '▶️' },
  { notion: 'futur',         label: 'Futur',                       color: '#E6B422', colorName: 'Jaune safran',     icon: '⏩' },
  { notion: 'negation',      label: 'Négation',                    color: '#D7402B', colorName: 'Rouge tomate',     icon: '🚫' },
  { notion: 'interrogation', label: 'Interrogation',               color: '#9B86C4', colorName: 'Violet lavande',   icon: '❓' },
  { notion: 'affirmation',   label: 'Affirmation',                 color: '#8FC1E3', colorName: 'Bleu ciel',        icon: '✅' },
  { notion: 'prefixe',       label: 'Préfixes',                    color: '#E8995B', colorName: 'Orange abricot',   icon: '◀' },
  { notion: 'suffixe',       label: 'Suffixes',                    color: '#8B5A2B', colorName: 'Brun cannelle',    icon: '▶' },
  { notion: 'pronom',        label: 'Pronoms',                     color: '#3FB8AF', colorName: 'Turquoise',        icon: '👤' },
  { notion: 'determinant',   label: 'Déterminants',                color: '#D8C3A5', colorName: 'Beige sable',      icon: '◆' },
  { notion: 'particule',     label: 'Particules grammaticales',    color: '#8C8C8C', colorName: 'Gris pierre',      icon: '•' },
] as const;

/** Accès rapide notion → style. */
export const grammarVisualLegendByNotion: Readonly<Record<GrammarNotion, GrammarNotionStyle>> =
  Object.fromEntries(
    GRAMMAR_VISUAL_LEGEND.map((s) => [s.notion, s])
  ) as Record<GrammarNotion, GrammarNotionStyle>;

/** Retourne le style visuel d'une notion grammaticale. */
export function getGrammarNotionStyle(
  notion: GrammarNotion
): GrammarNotionStyle | undefined {
  return grammarVisualLegendByNotion[notion];
}
