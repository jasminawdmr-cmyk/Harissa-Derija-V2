/**
 * /data/vocabulary.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base de données du vocabulaire en darija tunisien.
 *
 * Rôle : source principale pour les écrans Vocabulaire, les flashcards,
 * les leçons et le système de révision SRS.
 *
 * Chaque entrée suit l'interface VocabularyItem (extends Word) définie
 * dans types/index.ts. Elle ajoute :
 *   - domain      : registre de langue (quotidien, formel, familier, diaspora)
 *   - frequencyRank : fréquence d'usage (1 = très courant)
 *   - regionalVariants : variations Tunis / Sfax / Sousse
 *   - falseFreindNote  : piège pour les francophones
 *
 * Convention d'ID : "w_<slug_français>" (ex : "w_bonjour")
 *
 * ⚠️  Fichier de démonstration — 2 entrées seulement.
 *     Le vocabulaire complet (~300 mots) sera ajouté dans la prochaine étape.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { VocabularyItem } from '../types';

/**
 * MOT 1 — Bonjour : مرحبا (Merhba)
 * La salutation de base en tunisien, distincte de l'arabe standard (مرحباً).
 * Premier mot que tout apprenant rencontre.
 */
const WORD_BONJOUR: VocabularyItem = {
  // ── Champs Word ────────────────────────────────────────────────────────────
  id: 'w_bonjour',
  darija: 'مرحبا',
  darijaLatin: 'Merhba',
  phonetic: '[meɾħba]',
  french: 'Bonjour / Salut / Bienvenue',
  category: 'salutations',
  level: 'debutant',
  tags: ['salutations', 'premier-contact', 'essentiel'],
  exampleSentenceDarija: 'مرحبا، كيفاش حالك؟',
  exampleSentenceFrench: 'Bonjour, comment vas-tu ?',
  audioFileName: undefined, // Prévu V2

  // ── Champs VocabularyItem ──────────────────────────────────────────────────
  domain: 'quotidien',
  frequencyRank: 1,
  falseFreindNote:
    'مرحبا est plus chaleureux que le simple "bonjour" français — il implique ' +
    'une vraie bienvenue. Utilisez-le librement : il n\'est jamais trop informel.',
  regionalVariants: [
    {
      region: 'Tunis (capitale)',
      form: 'مرحبا',
      formLatin: 'Merhba',
    },
    {
      region: 'Sfax / Sud',
      form: 'أهلا',
      formLatin: 'Ahla',
    },
  ],
  relatedWordIds: ['w_bonsoir', 'w_comment_vas_tu', 'w_au_revoir'],
};

/**
 * MOT 2 — Famille : عيلة (3ayla)
 * Mot clé du thème famille, très présent dans les conversations de la diaspora
 * lors des retrouvailles ou des appels vidéo.
 */
const WORD_FAMILLE: VocabularyItem = {
  // ── Champs Word ────────────────────────────────────────────────────────────
  id: 'w_famille',
  darija: 'عيلة',
  darijaLatin: '3ayla',
  phonetic: '[ʕaːjla]',
  french: 'famille',
  category: 'famille',
  level: 'debutant',
  tags: ['famille', 'relations', 'essentiel', 'diaspora'],
  exampleSentenceDarija: 'كيفاش العيلة؟',
  exampleSentenceFrench: 'Comment va la famille ?',
  audioFileName: undefined,

  // ── Champs VocabularyItem ──────────────────────────────────────────────────
  domain: 'diaspora',
  frequencyRank: 1,
  falseFreindNote:
    'Le "3" translittère le son arabe ع (aïn), un son pharyngal qui n\'existe ' +
    'pas en français. Commencez par apprendre à le reconnaître à l\'oreille.',
  regionalVariants: [
    {
      region: 'Tunisie (général)',
      form: 'عيلة',
      formLatin: '3ayla',
    },
    {
      region: 'Registre plus soutenu',
      form: 'عائلة',
      formLatin: '3a\'ila',
    },
  ],
  relatedWordIds: ['w_pere', 'w_mere', 'w_frere', 'w_soeur'],
};

// ─── Export ───────────────────────────────────────────────────────────────────

/** Liste complète du vocabulaire — à enrichir au fil des sprints */
export const vocabulary: Readonly<VocabularyItem[]> = [
  WORD_BONJOUR,
  WORD_FAMILLE,
] as const;

/** Accès rapide par ID */
export const vocabularyById: Readonly<Record<string, VocabularyItem>> =
  Object.fromEntries(vocabulary.map((w) => [w.id, w]));

/** Retourne un mot par son ID */
export function getWordById(id: string): VocabularyItem | undefined {
  return vocabularyById[id];
}

/** Retourne les mots d'une catégorie donnée */
export function getWordsByCategory(
  category: VocabularyItem['category']
): VocabularyItem[] {
  return vocabulary.filter((w) => w.category === category);
}

/** Retourne les mots par rang de fréquence (1 = plus fréquents en premier) */
export function getWordsByFrequency(): VocabularyItem[] {
  return [...vocabulary].sort((a, b) => a.frequencyRank - b.frequencyRank);
}

/** Retourne les mots du domaine diaspora */
export function getDiasporaWords(): VocabularyItem[] {
  return vocabulary.filter((w) => w.domain === 'diaspora');
}
