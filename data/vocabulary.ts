/**
 * /data/vocabulary.ts
 * Base de données du vocabulaire en darija tunisien.
 *
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 * Si une entrée est incertaine : needsValidation: true + note explicative.
 * Convention arabizi : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 */

import type { VocabularyItem } from '../types';

/**
 * MOT 1 — Bonjour : مرحبا (Merhba)
 */
const WORD_BONJOUR: VocabularyItem = {
  id: 'w_bonjour',
  arabic: 'مرحبا',
  arabizi: 'Merhba',
  phonetic: '[meɾħba]',
  french: 'Bonjour / Salut / Bienvenue',
  category: 'salutations',
  level: 'debutant',
  tags: ['salutations', 'premier-contact', 'essentiel'],
  exampleSentenceArabic: 'مرحبا، كيفاش حالك؟',
  exampleSentenceFrench: 'Bonjour, comment vas-tu ?',
  audioFileName: undefined,

  domain: 'quotidien',
  frequencyRank: 1,
  falseFreindNote:
    'مرحبا est plus chaleureux que le simple "bonjour" français — il implique ' +
    'une vraie bienvenue. Utilisez-le librement : il n\'est jamais trop informel.',
  regionalVariants: [
    {
      region: 'Tunis (capitale)',
      arabic: 'مرحبا',
      arabizi: 'Merhba',
    },
    {
      region: 'Sfax / Sud',
      arabic: 'أهلا',
      arabizi: 'Ahla',
    },
  ],
  relatedWordIds: ['w_bonsoir', 'w_comment_vas_tu', 'w_au_revoir'],
};

/**
 * MOT 2 — Famille : عيلة (3ayla)
 */
const WORD_FAMILLE: VocabularyItem = {
  id: 'w_famille',
  arabic: 'عيلة',
  arabizi: '3ayla',
  phonetic: '[ʕaːjla]',
  french: 'famille',
  category: 'famille',
  level: 'debutant',
  tags: ['famille', 'relations', 'essentiel', 'diaspora'],
  exampleSentenceArabic: 'كيفاش العيلة؟',
  exampleSentenceFrench: 'Comment va la famille ?',
  audioFileName: undefined,

  domain: 'diaspora',
  frequencyRank: 1,
  falseFreindNote:
    'Le "3" translittère le son arabe ع (aïn), un son pharyngal qui n\'existe ' +
    'pas en français. Commencez par apprendre à le reconnaître à l\'oreille.',
  regionalVariants: [
    {
      region: 'Tunisie (général)',
      arabic: 'عيلة',
      arabizi: '3ayla',
    },
    {
      region: 'Registre plus soutenu',
      arabic: 'عائلة',
      arabizi: '3a\'ila',
    },
  ],
  relatedWordIds: ['w_pere', 'w_mere', 'w_frere', 'w_soeur'],
};

export const vocabulary: Readonly<VocabularyItem[]> = [
  WORD_BONJOUR,
  WORD_FAMILLE,
] as const;

export const vocabularyById: Readonly<Record<string, VocabularyItem>> =
  Object.fromEntries(vocabulary.map((w) => [w.id, w]));

export function getWordById(id: string): VocabularyItem | undefined {
  return vocabularyById[id];
}

export function getWordsByCategory(
  category: VocabularyItem['category']
): VocabularyItem[] {
  return vocabulary.filter((w) => w.category === category);
}

export function getWordsByFrequency(): VocabularyItem[] {
  return [...vocabulary].sort((a, b) => a.frequencyRank - b.frequencyRank);
}

export function getDiasporaWords(): VocabularyItem[] {
  return vocabulary.filter((w) => w.domain === 'diaspora');
}
