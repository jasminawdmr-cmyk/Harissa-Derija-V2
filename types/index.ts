/**
 * Types du domaine métier — Darija Tunisien
 */

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
  darija: string;               // En graphie arabe : مرحبا
  darijaLatin: string;          // Translittération : Merhba
  phonetic: string;             // Phonétique IPA approximative : [meɾħba]
  french: string;               // Traduction française
  category: WordCategory;
  level: Level;
  exampleSentenceDarija?: string;
  exampleSentenceFrench?: string;
  audioFileName?: string;       // Prévu pour V2
  tags: string[];
}

// ─── Verbes ───────────────────────────────────────────────────────────────────

export type Tense = 'present' | 'passe' | 'futur' | 'imperatif';
export type Person = '1s' | '2s' | '3sm' | '3sf' | '1p' | '2p' | '3p';

export interface VerbConjugation {
  person: Person;
  form: string;           // Darija en arabe
  formLatin: string;      // Translittération
  phonetic: string;
  // OPTIONNEL — découpage morphologique pour l'affichage visuel coloré.
  // Absent par défaut dans les données actuelles : MorphologyBlock prévoit
  // un fallback lisible tant que ce champ n'est pas renseigné.
  // Concaténer les segments doit reformer formLatin.
  morphology?: Array<{
    text: string;
    role: 'prefix' | 'root' | 'suffix' | 'particle' | 'exception';
  }>;
}

export interface Verb {
  id: string;
  infinitiveFrench: string;   // ex: "manger"
  rootDarija: string;         // Racine en arabe
  rootLatin: string;          // Racine translittérée
  conjugations: Partial<Record<Tense, VerbConjugation[]>>;
  level: Level;
  tags: string[];
  isIrregular: boolean;
  notes?: string;
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
  titleDarija?: string;
  description: string;
  type: LessonType;
  level: Level;
  estimatedMinutes: number;
  wordIds: string[];          // Références vers Word[]
  verbIds?: string[];
  grammarPointIds?: string[];
  order: number;              // Ordre dans le module
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

// ─── Grammaire ────────────────────────────────────────────────────────────────
// Note : le concept de "point de grammaire" est porté par l'interface
// GrammarRule (plus riche, définie plus bas). Le champ Lesson.grammarPointIds
// référence des IDs de GrammarRule (résolus via getGrammarRuleById).

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
  passingScore: number;       // % minimum pour valider
  timeLimit?: number;         // En secondes, optionnel
}

// ─── Progression utilisateur ──────────────────────────────────────────────────

export interface WordProgress {
  wordId: string;
  seenCount: number;
  correctCount: number;
  incorrectCount: number;
  lastSeenAt: string;         // ISO date string
  masteryLevel: 0 | 1 | 2 | 3 | 4 | 5;  // 0=jamais vu, 5=maîtrisé
  nextReviewAt: string;       // ISO date string (SRS)
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
  motivations: string[];      // Pourquoi apprendre le tunisien
  dailyGoalMinutes: number;
  notificationsEnabled: boolean;
}

export interface UserStats {
  totalXP: number;
  currentStreak: number;      // Jours consécutifs
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
// Extension enrichie de Word, avec champs pédagogiques supplémentaires.
// Utilisé dans les écrans Vocabulaire et les fiches de révision.

export type VocabularyDomain =
  | 'quotidien'     // Usage de tous les jours
  | 'formel'        // Contextes polis / adultes
  | 'familier'      // Langage entre proches
  | 'diaspora';     // Expressions spécifiques à la diaspora

export interface VocabularyItem extends Word {
  domain: VocabularyDomain;
  // Faux amis ou pièges fréquents pour les francophones
  falseFreindNote?: string;
  // Niveau de fréquence d'usage (1 = très courant, 5 = rare)
  frequencyRank: 1 | 2 | 3 | 4 | 5;
  // Variantes régionales (Tunis vs Sfax vs Sousse…)
  regionalVariants?: Array<{
    region: string;
    form: string;
    formLatin: string;
  }>;
  // Mot lié sémantiquement (antonyme, synonyme…)
  relatedWordIds?: string[];
}

// ─── GrammarRule ─────────────────────────────────────────────────────────────
// Règle grammaticale structurée : l'unique modèle pour les points de grammaire.
// Inclut un pattern formel et des contre-exemples.

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
  darija: string;       // Ex : ما ماكلتش
  darijaLatin: string;  // Ex : Ma maklitsh
  phonetic: string;     // Ex : [ma maklɪtʃ]
  french: string;       // Ex : Je n'ai pas mangé
  isCounterExample?: boolean; // true = exemple de ce qu'il ne faut PAS dire
}

export interface GrammarRule {
  id: string;
  title: string;
  category: GrammarCategory;
  level: Level;
  // Explication en français, claire et concise
  explanation: string;
  // Pattern formel, ex : "Ma + verbe + sh"
  pattern?: string;
  examples: GrammarExample[];
  // Exceptions notables à la règle
  exceptions?: string[];
  // IDs des leçons qui enseignent cette règle
  lessonIds: string[];
  // IDs des règles préalables à maîtriser
  prerequisiteRuleIds?: string[];
}

// ─── Dialogue ─────────────────────────────────────────────────────────────────
// Dialogue authentique entre deux interlocuteurs.
// Conçu pour simuler des échanges réels que la diaspora peut rencontrer.

export type DialogueSpeaker = 'A' | 'B';

export interface DialogueLine {
  speaker: DialogueSpeaker;
  darija: string;
  darijaLatin: string;
  phonetic?: string;
  french: string;
  // Mots clés de cette ligne pointant vers le vocabulaire
  wordIds?: string[];
  // Note culturelle ou pragmatique sur cette ligne
  note?: string;
}

export type DialogueContext =
  | 'famille'
  | 'marche'        // Marché / shopping
  | 'restaurant'
  | 'telephone'
  | 'rue'
  | 'maison'
  | 'travail'
  | 'celebrations'; // Mariages, Aid, etc.

export interface Dialogue {
  id: string;
  title: string;
  context: DialogueContext;
  level: Level;
  // Description de la situation en français
  situationFrench: string;
  // Description brève en darija (pour les niveaux avancés)
  situationDarija?: string;
  lines: DialogueLine[];
  // Vocabulaire clé à retenir après le dialogue
  keyWordIds: string[];
  // Règles de grammaire illustrées par ce dialogue
  grammarRuleIds?: string[];
  // Note culturelle associée
  culturalNote?: string;
  estimatedMinutes: number;
}

// ─── ReviewItem ───────────────────────────────────────────────────────────────
// Élément de révision dans le système SRS (Spaced Repetition System).
// Peut représenter un mot, un verbe, une règle ou une ligne de dialogue.

export type ReviewItemType =
  | 'vocabulaire'
  | 'verbe'
  | 'grammaire'
  | 'dialogue_line'
  | 'phrase'        // V2 : permet aux phrases d'alimenter flashcards/quiz
  | 'expression';   // V2 : permet aux expressions d'alimenter la révision

export type ReviewCardSide = 'french_to_darija' | 'darija_to_french' | 'audio_to_french';

export interface ReviewItem {
  id: string;                     // Ex : "review_word_salut_001"
  itemType: ReviewItemType;
  // ID de l'entité source (wordId, verbId, grammarRuleId…)
  sourceId: string;
  // Côté de la carte à tester
  cardSide: ReviewCardSide;
  // --- Données SRS ---
  // Intervalle actuel en jours avant la prochaine révision
  intervalDays: number;
  // Facteur de facilité (2.5 par défaut, algo SM-2)
  easeFactor: number;
  // Nombre de fois que la carte a été bien répondue d'affilée
  consecutiveCorrect: number;
  // Historique compact : 'c' = correct, 'i' = incorrect
  history: Array<'c' | 'i'>;
  lastReviewedAt: string;         // ISO date string
  nextReviewAt: string;           // ISO date string
  // Niveau de maîtrise calculé 0–5
  masteryLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENANTS V2 — structures préparées pour le contenu futur.
// ───────────────────────────────────────────────────────────────────────────────
// IMPORTANT : ces interfaces sont des CONTENANTS VIDES. Aucun contenu linguistique
// n'est créé ici. Le contenu (darija) sera fourni et validé séparément, puis
// intégré fidèlement dans les fichiers data/ correspondants.
//
// Convention de translittération du projet (à respecter dans tout le contenu) :
//   7 = ح · 3 = ع · 9 = ق · kh = خ · gh = غ
//
// Principe : réutiliser les types existants autant que possible ; ne créer un
// nouveau type que pour un contenu qui n'a réellement aucun contenant adapté.
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Phrase ───────────────────────────────────────────────────────────────────
// Phrase complète prête à l'emploi (≠ mot isolé, ≠ dialogue à 2 voix).
// Cible : ~300 phrases du quotidien. Convention d'ID : "p_<contexte>_<NN>".
// Alimente : flashcards, quiz "remise en ordre", quiz traduction.

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
  darija: string;            // À FOURNIR (graphie arabe) — validation native requise
  darijaLatin: string;       // À FOURNIR (translittération 7/3/9/kh/gh)
  phonetic?: string;
  french: string;
  category: PhraseCategory;
  level: Level;
  domain: VocabularyDomain;
  // Mots du vocabulaire mobilisés (pour réutilisation/renforcement)
  wordIds?: string[];
  // Règle de grammaire éventuellement illustrée
  grammarRuleId?: string;
  // Note d'usage / pragmatique (quand l'employer)
  usageNote?: string;
  tags: string[];
  audioFileName?: string;    // Prévu pour plus tard
}

// ─── Expression ───────────────────────────────────────────────────────────────
// Tournure idiomatique typiquement tunisienne (proverbe, formule, interjection).
// Distincte de Phrase : porte un sens littéral ET un sens réel souvent différents.
// Cible : ~50 expressions. Convention d'ID : "exp_<slug>".

export type ExpressionKind =
  | 'idiome'        // expression imagée
  | 'proverbe'
  | 'formule'       // formule sociale (hospitalité, vœux…)
  | 'interjection';

export interface Expression {
  id: string;
  darija: string;            // À FOURNIR — validation native requise
  darijaLatin: string;       // À FOURNIR
  phonetic?: string;
  // Sens littéral (mot à mot) — utile pédagogiquement
  literalFrench?: string;
  // Sens réel / usage courant
  french: string;
  kind: ExpressionKind;
  level: Level;
  // Quand et comment l'utiliser
  usageContext?: string;
  // Réponse habituelle si c'est une formule (ex : à "bsa77a" → "Allah ysallmek")
  typicalReply?: string;
  tags: string[];
  audioFileName?: string;
}

// ─── Découvrir : contenu culturel ─────────────────────────────────────────────
// UN SEUL type flexible pour Culture / Histoire / Régions / Musique / Diaspora /
// Tunisie contemporaine — différenciés par `section`. Évite de multiplier 6 types
// quasi identiques (anti sur-ingénierie). Format "fiche/article" en blocs courts.
// Cibles : ~30 culture, ~20 histoire, recettes à part (voir Recipe), etc.
// Convention d'ID : "disc_<section>_<slug>".

export type DiscoverSection =
  | 'culture'
  | 'histoire'
  | 'cuisine'        // fiches thématiques cuisine (les recettes ont leur propre type)
  | 'musique'
  | 'regions'
  | 'expressions'    // page d'accroche renvoyant aux Expression[]
  | 'diaspora'
  | 'contemporain';  // Tunisie contemporaine

// Un bloc de contenu d'une fiche : permet des fiches variées sans HTML libre.
export type DiscoverBlockType = 'paragraphe' | 'citation' | 'reperes' | 'galerie' | 'savoir';

export interface DiscoverBlock {
  type: DiscoverBlockType;
  // Texte du bloc (paragraphe, citation…). À FOURNIR.
  text?: string;
  // Pour 'reperes' (frise/points-clés) : liste d'éléments courts
  items?: string[];
  // Légende ou source éventuelle
  caption?: string;
}

export interface DiscoverContent {
  id: string;
  section: DiscoverSection;
  title: string;
  subtitle?: string;
  level: Level;
  // Durée de lecture estimée (micro-session)
  estimatedMinutes: number;
  // Pictogramme/emoji d'en-tête (charte visuelle ; un objet signature par écran)
  coverEmoji?: string;
  // Corps de la fiche en blocs courts (jamais de mur de texte)
  blocks: DiscoverBlock[];
  // Vocabulaire/expressions tunisiens liés (tisse langue ↔ culture)
  relatedWordIds?: string[];
  relatedExpressionIds?: string[];
  relatedRecipeId?: string;
  tags: string[];
}

// ─── Recette pédagogique ──────────────────────────────────────────────────────
// Recette de cuisine tunisienne servant de support langue + culture.
// Cible : ~20 recettes. Convention d'ID : "recipe_<slug>".

export interface RecipeIngredient {
  french: string;
  darija?: string;           // À FOURNIR — validation native
  darijaLatin?: string;
  quantity?: string;         // ex : "3", "une pincée"
}

export interface RecipeStep {
  // Étape décrite en français (claire, courte)
  french: string;
  // Verbe de cuisine clé de l'étape (lien vers data/verbs si présent)
  verbId?: string;
}

export interface Recipe {
  id: string;
  title: string;             // ex : "Ojja"
  titleDarija?: string;      // À FOURNIR
  french: string;            // courte description
  level: Level;
  estimatedMinutes: number;
  coverEmoji?: string;
  // Région d'origine éventuelle (lien Découvrir régions)
  region?: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  // Vocabulaire, verbes et expressions mobilisés
  relatedWordIds?: string[];
  relatedVerbIds?: string[];
  relatedExpressionIds?: string[];
  // Anecdote culturelle (le "pourquoi" du plat)
  culturalNote?: string;
  tags: string[];
}

// ─── Écriture tunisienne ──────────────────────────────────────────────────────
// Support du mini-parcours d'écriture sur les 3 systèmes (latin / Arabizi / arabe).
// Cible : ~20 micro-leçons. L'Arabizi est une composante forte.
// Convention d'ID : "write_<systeme>_<slug>".

export type WritingSystem = 'latin' | 'arabizi' | 'arabe';

// Correspondance d'un signe à travers les 3 systèmes (la "passerelle").
// Ex (à fournir/valider) : son "3" ↔ lettre ع ↔ exemples.
export interface WritingGlyph {
  // Représentation dans chaque système (selon pertinence)
  latin?: string;            // ex : "kh"
  arabizi?: string;          // ex : "5" ou "kh"
  arabic?: string;           // ex : "خ"  — validation native
  // Son décrit simplement (sans jargon)
  soundDescription: string;
  // Mots-exemples très fréquents illustrant le signe (À FOURNIR)
  exampleWordIds?: string[];
  // Difficulté relative pour un francophone
  difficulty: 1 | 2 | 3 | 4 | 5;
  // Priorité d'apprentissage : true = prioritaire (ex : 3, 7, 9, kh)
  isPriority: boolean;
}

export interface WritingLesson {
  id: string;
  system: WritingSystem;
  title: string;
  // Objectif pédagogique en une phrase
  objective: string;
  level: Level;
  estimatedMinutes: number;
  // Signes/lettres enseignés dans cette leçon
  glyphs: WritingGlyph[];
  // Triptyques de passerelle (latin → arabizi → arabe) illustrant la leçon.
  // Chaque entrée pointe idéalement vers un mot du vocabulaire.
  bridges?: Array<{
    latin: string;
    arabizi: string;
    arabic: string;          // validation native
    wordId?: string;
    french: string;
  }>;
  order: number;
  tags: string[];
}
