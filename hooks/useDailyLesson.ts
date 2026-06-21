import { useMemo } from 'react';
import { lessons } from '@/data/lessons';
import { getWordById } from '@/data/vocabulary';
import { getVerbById } from '@/data/verbs';
import { getGrammarRuleById } from '@/data/grammar';
import type { Lesson, VocabularyItem, Verb, GrammarRule } from '@/types';

/**
 * /hooks/useDailyLesson.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Sélectionne la « leçon du jour » et résout son contenu depuis les données
 * centralisées (vocabulary, verbs, grammar). Aucune donnée codée en dur.
 *
 * Sélection (V1) : la première leçon débloquée, sinon la première leçon.
 * Déterministe pour rester stable sur une même journée.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ResolvedLessonContent {
  lesson: Lesson | null;
  words: VocabularyItem[];
  verbs: Verb[];
  rules: GrammarRule[];
}

export function useDailyLesson(): ResolvedLessonContent {
  return useMemo(() => {
    if (lessons.length === 0) {
      return { lesson: null, words: [], verbs: [], rules: [] };
    }

    // Première leçon débloquée, sinon la toute première
    const lesson =
      lessons.find((l) => l.isUnlocked) ?? lessons[0];

    // Résolution du contenu via les helpers centralisés
    const words = lesson.wordIds
      .map((id) => getWordById(id))
      .filter((w): w is VocabularyItem => w !== undefined);

    const verbs = (lesson.verbIds ?? [])
      .map((id) => getVerbById(id))
      .filter((v): v is Verb => v !== undefined);

    const rules = (lesson.grammarPointIds ?? [])
      .map((id) => getGrammarRuleById(id))
      .filter((r): r is GrammarRule => r !== undefined);

    return { lesson, words, verbs, rules };
  }, []);
}
