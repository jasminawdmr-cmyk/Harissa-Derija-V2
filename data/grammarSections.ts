/**
 * /data/grammarSections.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Configuration des sections de l'écran Grammaire.
 *
 * Objectif : rendre l'écran Grammaire ENTIÈREMENT DYNAMIQUE et extensible.
 * Chaque section décrit COMMENT puiser dans les données centralisées (/data)
 * — jamais de contenu linguistique codé en dur ici.
 *
 * Pour ajouter une nouvelle règle à une section : il suffit de l'ajouter à
 * data/grammar.ts avec la bonne `category`. Elle apparaîtra automatiquement.
 *
 * Pour ajouter une nouvelle SECTION : ajouter une entrée à GRAMMAR_SECTIONS.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { GrammarCategory } from '@/types';

/** Type de source de données d'une section */
export type SectionSource =
  | { kind: 'pronouns' }                              // depuis data/pronouns.ts
  | { kind: 'tense'; tense: 'present' | 'passe' | 'futur' } // patterns + règles 'temps'
  | { kind: 'rules'; categories: GrammarCategory[] };  // depuis data/grammar.ts

/** Description d'une section de grammaire */
export interface GrammarSectionConfig {
  id: string;
  title: string;
  /** Courte accroche affichée sous le titre (1 ligne, pas un mur de texte) */
  tagline: string;
  icon: string;
  source: SectionSource;
}

/**
 * Les sections demandées : pronoms, présent, passé, futur, négation, possession.
 * Ordre = ordre d'affichage à l'écran.
 */
export const GRAMMAR_SECTIONS: readonly GrammarSectionConfig[] = [
  {
    id: 'pronouns',
    title: 'Pronoms',
    tagline: 'Les 7 personnes du tunisien',
    icon: '👥',
    source: { kind: 'pronouns' },
  },
  {
    id: 'present',
    title: 'Présent',
    tagline: 'Préfixe + radical pour l\u2019action en cours',
    icon: '⏺',
    source: { kind: 'tense', tense: 'present' },
  },
  {
    id: 'passe',
    title: 'Passé',
    tagline: 'Radical + suffixe pour l\u2019action accomplie',
    icon: '⏪',
    source: { kind: 'tense', tense: 'passe' },
  },
  {
    id: 'futur',
    title: 'Futur',
    tagline: 'La particule « besh » + présent',
    icon: '⏩',
    source: { kind: 'tense', tense: 'futur' },
  },
  {
    id: 'negation',
    title: 'Négation',
    tagline: 'Encadrer le verbe : ma … sh',
    icon: '🚫',
    source: { kind: 'rules', categories: ['negation'] },
  },
  {
    id: 'possession',
    title: 'Possession',
    tagline: 'Exprimer « à moi, à toi »…',
    icon: '🔗',
    source: { kind: 'rules', categories: ['possession'] },
  },
] as const;
