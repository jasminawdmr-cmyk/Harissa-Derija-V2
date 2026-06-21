/**
 * /data/writing.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base du mini-parcours d'ÉCRITURE TUNISIENNE sur les 3 systèmes :
 *   1. latin (translittération)  2. arabizi (chiffres + lettres)  3. arabe
 *
 * L'Arabizi est une composante FORTE de Harissa (cf. TUNISIAN_WRITING_SYSTEM.md).
 *
 * ⚠️  CONTENANT VIDE — aucun contenu n'est créé ici. Lettres, sons, exemples et
 *     graphies arabes à fournir et valider séparément (locuteur natif).
 *
 * Cible à terme : ~20 micro-leçons d'écriture.
 *
 * Convention d'ID : "write_<systeme>_<slug>"  (ex : "write_arabizi_3")
 *
 * Priorisation des chiffres Arabizi (cf. V1_BALANCED_CONTENT_PLAN §4.2) :
 *   PRIORITAIRES : 3=ع · 7=ح · 9=ق · kh=خ
 *   SECONDAIRES  : 5=خ(variante) · gh/8=غ · 2=ء · 6=ط
 *   → marquer isPriority en conséquence sur chaque WritingGlyph.
 *
 * Passerelles : renseigner `bridges` (latin → arabizi → arabe) pour relier les
 * trois systèmes, idéalement vers un mot existant (wordId).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { WritingLesson, WritingSystem } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────
// (vide pour l'instant — à remplir avec du contenu validé)

export const writingLessons: Readonly<WritingLesson[]> = [] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const writingLessonsById: Readonly<Record<string, WritingLesson>> =
  Object.fromEntries(writingLessons.map((w) => [w.id, w]));

/** Retourne une leçon d'écriture par son ID */
export function getWritingLessonById(id: string): WritingLesson | undefined {
  return writingLessonsById[id];
}

/** Retourne les leçons d'un système d'écriture (latin / arabizi / arabe) */
export function getWritingLessonsBySystem(
  system: WritingSystem
): WritingLesson[] {
  return writingLessons
    .filter((w) => w.system === system)
    .sort((a, b) => a.order - b.order);
}
