/**
 * lib/colorRegistry.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * REGISTRE CENTRAL DÉFINITIF DES COULEURS — V3 (FIGÉ).
 *
 * Règle absolue : UNE NOTION = UNE COULEUR.
 * Aucune couleur de ce registre ne représente deux notions différentes.
 *
 * Ce fichier est la source de vérité unique pour :
 *   1. les 15 notions grammaticales (importées de data/grammarVisualLegend.ts),
 *   2. les couleurs d'univers thématiques (distinctes des notions grammaticales).
 *
 * Les chartes « sous-vues » (TenseColors, GenderColors dans lib/Colors.ts)
 * RÉUTILISENT volontairement la couleur de la notion correspondante :
 *   présent / passé / futur / masculin / féminin pointent vers la MÊME couleur
 *   que la notion grammaticale homonyme. Ce n'est donc pas un doublon : c'est la
 *   même notion affichée dans deux contextes.
 *
 * ⚠️  Ne plus jamais modifier ce registre après la clôture de la V3.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  GRAMMAR_VISUAL_LEGEND,
  type GrammarNotion,
} from '@/data/grammarVisualLegend';
import type { Universe } from '@/types';

/** Couleur définitive de chacune des 15 notions grammaticales. */
export const GRAMMAR_NOTION_COLORS = Object.fromEntries(
  GRAMMAR_VISUAL_LEGEND.map((s) => [s.notion, s.color])
) as Record<GrammarNotion, string>;

/**
 * Couleurs définitives par univers thématique.
 * Aucune ne coïncide avec une couleur de notion grammaticale ci-dessus.
 */
export const UNIVERSE_REGISTRY: Partial<Record<Universe, string>> = {
  salutations:  '#C76543',  // Terracotta — chaleur des premiers échanges
  cafe:         '#6B4C2A',  // Brun café — évocateur
  marche:       '#D6A658',  // Safran sable — épices du souk
  maison:       '#607A53',  // Vert olive — intérieur méditerranéen
  famille:      '#A04030',  // Brique rosée — affection
  louage:       '#5F9AC4',  // Bleu route — déplacement
  plage:        '#1F5F8B',  // Bleu Sidi Bou Saïd — mer
  hotel:        '#7E4FB0',  // Violet — confort
  emotions:     '#8B1E1E',  // Rouge brique — intensité
  nourriture:   '#D97A5A',  // Terracotta clair — nourriture
  temps_meteo:  '#A0C4DF',  // Bleu ciel clair — météo
};

/**
 * Vérification d'unicité en développement.
 * Couvre les notions ÉNUMÉRÉES par la charte V3 : notions grammaticales + univers.
 * (Les sous-vues tense/gender sont volontairement alignées et donc exclues.)
 */
if (__DEV__) {
  const entries: [string, string][] = [
    ...Object.entries(GRAMMAR_NOTION_COLORS),
    ...Object.entries(UNIVERSE_REGISTRY),
  ];
  const seen = new Map<string, string>();
  for (const [notion, color] of entries) {
    const hex = String(color).toUpperCase();
    const previous = seen.get(hex);
    if (previous) {
      // eslint-disable-next-line no-console
      console.warn(
        `[colorRegistry] Couleur ${hex} réutilisée pour deux notions : ` +
          `« ${previous} » et « ${notion} ».`
      );
    } else {
      seen.set(hex, notion);
    }
  }
}
