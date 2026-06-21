/**
 * Types du domaine métier — Blablalouni (tunisien dialectal)
 *
 * Règle linguistique permanente : tout élément tunisien doit contenir
 * les trois versions obligatoires : arabic · arabizi · french.
 * Si une entrée est incertaine : needsValidation: true + note explicative.
 *
 * Convention arabizi : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 */

// ─── Type de base trilingue ───────────────────────────────────────────────────

/** Structure trilingue obligatoire pour tout contenu tunisien. */
export interface TunisianText {
  /** Écriture arabe : مرحبا */
  arabic: string;
  /** Transcription arabizi / latin tunisien : Merhba */
  arabizi: string;
  /** Traduction française */
  french: string;
  /** true si le contenu n'a pas encore été validé par un locuteur natif */
  needsValidation?: boolean;
  /** Note de validation ou commentaire linguistique */
  note?: string;
}

// ─── Univers thématiques ──────────────────────────────────────────────────────
// Architecture long terme (V3 → V4 → V5) : tout contenu est rattachable à un
// univers. Permet de construire et d'afficher des univers complets (vocabulaire +
// verbes + phrases + expressions + dialogues + grammaire + découvrir + écriture).
// Le registre lisible (label, emoji, couleur) vit dans data/universes.ts.

export type Universe =
  | 'salutations'
  | 'cafe'
  | 'marche'
  | 'louage'
  | 'chez_la_tante'
  | 'voyage'
  | 'famille'
  | 'maison'
  | 'emotions'
  | 'nourriture'
  | 'temps_meteo'
  | 'corps_sante'
  | 'ville'
  | 'transport'
  | 'etudes'
  | 'travail'
  | 'sorties'
  | 'amitie'
  | 'mariage_fetes'
  | 'achats'
  | 'administration'
  | 'medias_reseaux';

/** Objectifs de contenu d'un univers, par type pédagogique. */
export interface UniverseTargets {
  vocabulary: number;
  verbs: number;
  phrases: number;
  expressions: number;
  dialogues: number;
  grammar: number;
  discover: number;
  writingLessons: number;
  writingExercises: number;
}

/** Définition complète d'un univers (registre data/learningUniverse.ts). */
export interface UniverseDefinition {
  id: Universe;
  title: string;
  icon: string;
  color: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  target: UniverseTargets;
}

// ─── Niveaux & progression ────────────────────────────────────────────────────

export type Level = 'debutant' | 'elementaire' | 'intermediaire' | 'avance';

export type SkillType =
  | 'vocabulaire'
  | 'grammaire'
  | 'conjugaison'
  | 'comprehension'
  | 'expression';

// ─── Mots & vocabulaire ───────────────────────────────────────────────────────

export type WordCategory =
  | 'salutations'
  | 'famille'
  | 'nourriture'
  | 'chiffres'
  | 'couleurs'
  | 'corps'
  | 'maison'
  | 'transport'
  | 'travail'
  | 'emotions'
  | 'temps'
  | 'vêtements'
  | 'shopping'
  | 'loisirs'
  | 'nature'
  | 'autres';

export interface Word {
  id: string;
  /** Écriture arabe : مرحبا */
  arabic: string;
  /** Transcription arabizi / latin tunisien : Merhba */
  arabizi: string;
  /** Phonétique IPA approximative : [meɾħba] (optionnel — pas inventée) */
  phonetic?: string;
  /** Traduction française */
  french: string;
  category: WordCategory;
  level: Level;
  exampleSentenceArabic?: string;
  exampleSentenceFrench?: string;
  audioFileName?: string;
  tags: string[];
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
  /** true si le contenu n'a pas encore été validé par un locuteur natif */
  needsValidation?: boolean;
  /** Note de validation ou commentaire linguistique */
  note?: string;
}

// ─── Verbes ───────────────────────────────────────────────────────────────────

export type Tense = 'present' | 'passe' | 'futur' | 'imperatif';
export type Person = '1s' | '2s' | '3sm' | '3sf' | '1p' | '2p' | '3p';

export interface VerbConjugation {
  person: Person;
  /** Forme conjuguée en arabe */
  arabic: string;
  /** Forme conjuguée en arabizi */
  arabizi: string;
  phonetic?: string;
  needsValidation?: boolean;
  // OPTIONNEL — découpage morphologique pour l'affichage visuel coloré.
  morphology?: Array<{
    text: string;
    role: 'prefix' | 'root' | 'suffix' | 'particle' | 'exception';
  }>;
}

export interface Verb {
  id: string;
  infinitiveFrench: string;
  /** Racine en arabe (ou forme de citation pour les entrées simples) */
  rootArabic: string;
  /** Racine en arabizi (ou forme de citation pour les entrées simples) */
  rootArabizi: string;
  conjugations: Partial<Record<Tense, VerbConjugation[]>>;
  level: Level;
  tags: string[];
  isIrregular: boolean;
  notes?: string;
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
  /** Exemple d'usage trilingue obligatoire (arabe + arabizi + français) */
  example?: {
    arabic: string;
    arabizi: string;
    french: string;
  };
  /** true si le contenu n'a pas encore été validé par un locuteur natif */
  needsValidation?: boolean;
  /** Note de validation ou commentaire linguistique */
  note?: string;
}

// ─── Leçons ───────────────────────────────────────────────────────────────────

export type LessonType =
  | 'vocabulaire'
  | 'dialogue'
  | 'grammaire'
  | 'culture'
  | 'conjugaison';

export interface Lesson {
  id: string;
  title: string;
  titleArabic?: string;
  description: string;
  type: LessonType;
  level: Level;
  estimatedMinutes: number;
  wordIds: string[];
  verbIds?: string[];
  grammarPointIds?: string[];
  order: number;
  moduleId: string;
  isUnlocked: boolean;
  culturalNote?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  level: Level;
  lessonIds: string[];
  coverEmoji: string;
  order: number;
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

export type QuizQuestionType =
  | 'choix_multiple'
  | 'vrai_faux'
  | 'traduction_fr_darija'
  | 'traduction_darija_fr'
  | 'completion'
  | 'association';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  wordId?: string;
  verbId?: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  lessonId?: string;
  moduleId?: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number;
}

// ─── Progression utilisateur ──────────────────────────────────────────────────

export interface WordProgress {
  wordId: string;
  seenCount: number;
  correctCount: number;
  incorrectCount: number;
  lastSeenAt: string;
  masteryLevel: 0 | 1 | 2 | 3 | 4 | 5;
  nextReviewAt: string;
}

export interface LessonProgress {
  lessonId: string;
  completedAt?: string;
  score?: number;
  attempts: number;
}

export interface UserProfile {
  id: string;
  createdAt: string;
  displayName?: string;
  motivations: string[];
  dailyGoalMinutes: number;
  notificationsEnabled: boolean;
}

export interface UserStats {
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lessonsCompleted: number;
  wordsLearned: number;
  wordsReviewed: number;
  quizzesTaken: number;
  totalTimeMinutes: number;
  lastActivityAt: string;
}

// ─── Révision (SRS) ───────────────────────────────────────────────────────────

export interface ReviewSession {
  id: string;
  startedAt: string;
  completedAt?: string;
  wordIds: string[];
  results: Array<{
    wordId: string;
    correct: boolean;
    responseTimeMs: number;
  }>;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type TabName =
  | 'accueil'
  | 'lecon'
  | 'revisions'
  | 'verbes'
  | 'vocabulaire'
  | 'quiz'
  | 'grammaire'
  | 'profil';

// ─── VocabularyItem ───────────────────────────────────────────────────────────

export type VocabularyDomain =
  | 'quotidien'
  | 'formel'
  | 'familier'
  | 'diaspora';

export interface VocabularyItem extends Word {
  domain: VocabularyDomain;
  falseFreindNote?: string;
  frequencyRank: 1 | 2 | 3 | 4 | 5;
  regionalVariants?: Array<{
    region: string;
    /** Forme arabe régionale */
    arabic: string;
    /** Forme arabizi régionale */
    arabizi: string;
  }>;
  relatedWordIds?: string[];
}

// ─── GrammarRule ─────────────────────────────────────────────────────────────

export type GrammarCategory =
  | 'article'
  | 'negation'
  | 'possession'
  | 'pluriel'
  | 'genre'
  | 'temps'
  | 'interrogation'
  | 'comparaison'
  | 'preposition'
  | 'autre';

export interface GrammarExample {
  /** Texte arabe : ما ماكلتش */
  arabic: string;
  /** Arabizi : Ma maklitsh */
  arabizi: string;
  /** Phonétique IPA approximative */
  phonetic: string;
  /** Traduction française */
  french: string;
  isCounterExample?: boolean;
  needsValidation?: boolean;
  note?: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  category: GrammarCategory;
  level: Level;
  explanation: string;
  pattern?: string;
  examples: GrammarExample[];
  exceptions?: string[];
  lessonIds: string[];
  prerequisiteRuleIds?: string[];
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
}

// ─── Dialogue ─────────────────────────────────────────────────────────────────

export type DialogueSpeaker = 'A' | 'B';

export interface DialogueLine {
  speaker: DialogueSpeaker;
  /** Texte arabe */
  arabic: string;
  /** Arabizi */
  arabizi: string;
  phonetic?: string;
  french: string;
  wordIds?: string[];
  note?: string;
  needsValidation?: boolean;
}

export type DialogueContext =
  | 'famille'
  | 'marche'
  | 'restaurant'
  | 'telephone'
  | 'rue'
  | 'maison'
  | 'travail'
  | 'celebrations';

export interface Dialogue {
  id: string;
  title: string;
  context: DialogueContext;
  level: Level;
  situationFrench: string;
  /** Situation décrite en arabe (niveaux avancés) */
  situationArabic?: string;
  lines: DialogueLine[];
  keyWordIds: string[];
  grammarRuleIds?: string[];
  culturalNote?: string;
  estimatedMinutes: number;
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
}

// ─── ReviewItem ───────────────────────────────────────────────────────────────

export type ReviewItemType =
  | 'vocabulaire'
  | 'verbe'
  | 'grammaire'
  | 'dialogue_line'
  | 'phrase'
  | 'expression';

export type ReviewCardSide = 'french_to_darija' | 'darija_to_french' | 'audio_to_french';

export interface ReviewItem {
  id: string;
  itemType: ReviewItemType;
  sourceId: string;
  cardSide: ReviewCardSide;
  intervalDays: number;
  easeFactor: number;
  consecutiveCorrect: number;
  history: Array<'c' | 'i'>;
  lastReviewedAt: string;
  nextReviewAt: string;
  masteryLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENANTS V2/V3 — structures pour le contenu futur.
// Convention arabizi : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
// Principe : réutiliser les types existants ; ne créer un nouveau type que si
// aucun contenant adapté n'existe.
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Phrase ───────────────────────────────────────────────────────────────────

export type PhraseCategory =
  | 'salutations'
  | 'politesse'
  | 'presentation'
  | 'urgence'
  | 'restaurant'
  | 'marche'
  | 'transport'
  | 'telephone'
  | 'famille'
  | 'voyage'
  | 'sentiments'
  | 'quotidien'
  | 'diaspora'
  | 'autre';

export interface Phrase {
  id: string;
  /** Texte arabe — validation native requise */
  arabic: string;
  /** Arabizi — translittération 7/3/9/kh/gh */
  arabizi: string;
  phonetic?: string;
  french: string;
  category: PhraseCategory;
  level: Level;
  domain: VocabularyDomain;
  wordIds?: string[];
  grammarRuleId?: string;
  usageNote?: string;
  tags: string[];
  audioFileName?: string;
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
  needsValidation?: boolean;
  note?: string;
}

// ─── Expression ───────────────────────────────────────────────────────────────

export type ExpressionKind =
  | 'idiome'
  | 'proverbe'
  | 'formule'
  | 'interjection';

export interface Expression {
  id: string;
  /** Texte arabe — validation native requise */
  arabic: string;
  /** Arabizi */
  arabizi: string;
  phonetic?: string;
  /** Sens littéral mot à mot */
  literalFrench?: string;
  /** Sens réel / usage courant */
  french: string;
  kind: ExpressionKind;
  level: Level;
  usageContext?: string;
  typicalReply?: string;
  tags: string[];
  audioFileName?: string;
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
  needsValidation?: boolean;
  note?: string;
}

// ─── Découvrir : contenu culturel ─────────────────────────────────────────────

export type DiscoverSection =
  | 'culture'
  | 'histoire'
  | 'cuisine'
  | 'musique'
  | 'regions'
  | 'expressions'
  | 'diaspora'
  | 'contemporain';

export type DiscoverBlockType = 'paragraphe' | 'citation' | 'reperes' | 'galerie' | 'savoir';

export interface DiscoverBlock {
  type: DiscoverBlockType;
  text?: string;
  items?: string[];
  caption?: string;
}

export interface DiscoverContent {
  id: string;
  section: DiscoverSection;
  title: string;
  subtitle?: string;
  level: Level;
  estimatedMinutes: number;
  coverEmoji?: string;
  blocks: DiscoverBlock[];
  relatedWordIds?: string[];
  relatedExpressionIds?: string[];
  relatedRecipeId?: string;
  tags: string[];
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
}

// ─── Recette pédagogique ──────────────────────────────────────────────────────

export interface RecipeIngredient {
  french: string;
  /** Nom arabe — validation native */
  arabic?: string;
  /** Nom arabizi */
  arabizi?: string;
  quantity?: string;
}

export interface RecipeStep {
  french: string;
  verbId?: string;
}

export interface Recipe {
  id: string;
  title: string;
  titleArabic?: string;
  french: string;
  level: Level;
  estimatedMinutes: number;
  coverEmoji?: string;
  region?: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  relatedWordIds?: string[];
  relatedVerbIds?: string[];
  relatedExpressionIds?: string[];
  culturalNote?: string;
  tags: string[];
}

// ─── Écriture tunisienne ──────────────────────────────────────────────────────

export type WritingSystem = 'latin' | 'arabizi' | 'arabe';

export interface WritingGlyph {
  latin?: string;
  arabizi?: string;
  arabic?: string;
  soundDescription: string;
  exampleWordIds?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  isPriority: boolean;
}

export interface WritingLesson {
  id: string;
  system: WritingSystem;
  title: string;
  objective: string;
  level: Level;
  estimatedMinutes: number;
  glyphs: WritingGlyph[];
  bridges?: Array<{
    latin: string;
    arabizi: string;
    arabic: string;
    wordId?: string;
    french: string;
  }>;
  order: number;
  tags: string[];
  /** Univers thématique de rattachement (architecture V3+) */
  universe?: Universe;
}
