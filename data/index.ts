/**
 * /data/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Point d'entrée unique de la couche de données.
 *
 * Importer depuis "@/data" plutôt que depuis les fichiers individuels
 * pour faciliter les refactorisations futures.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export { verbs, verbsById, getVerbById, getVerbsByLevel } from './verbs';

export {
  vocabulary,
  vocabularyById,
  getWordById,
  getWordsByCategory,
  getWordsByFrequency,
  getDiasporaWords,
} from './vocabulary';

export {
  grammarRules,
  grammarRulesById,
  getGrammarRuleById,
  getRulesByCategory,
  getRulesByLevel,
} from './grammar';

export {
  dialogues,
  dialoguesById,
  getDialogueById,
  getDialoguesByContext,
  getDialoguesByLevel,
} from './dialogues';

export {
  modules,
  lessons,
  modulesById,
  lessonsById,
  getModuleById,
  getLessonById,
  getLessonsByModule,
  getNextUnlockedLesson,
} from './lessons';

export {
  PRONOUNS,
  PRONOUN_ORDER,
  getPronoun,
} from './pronouns';

export {
  ALL_PATTERNS,
  PAST_PATTERN_CCC,
  PRESENT_PATTERN_CCC,
  applyPattern,
} from './conjugationRules';

// ─── Contenants V2 (vides pour l'instant — prêts à recevoir du contenu validé) ──

export {
  phrases,
  phrasesById,
  getPhraseById,
  getPhrasesByCategory,
  getPhrasesByLevel,
  getDiasporaPhrases,
} from './phrases';

export {
  expressions,
  expressionsById,
  getExpressionById,
  getExpressionsByKind,
  getExpressionsByLevel,
} from './expressions';

export {
  discoverContents,
  discoverContentsById,
  getDiscoverContentById,
  getDiscoverBySection,
} from './discover';

export {
  recipes,
  recipesById,
  getRecipeById,
  getRecipesByLevel,
} from './recipes';

export {
  writingLessons,
  writingLessonsById,
  getWritingLessonById,
  getWritingLessonsBySystem,
} from './writing';

export {
  exercises,
  exercisesById,
  getExerciseById,
  getExercisesByType,
  getExercisesByUniverse,
  getExercisesByLevel,
} from './exercises';
