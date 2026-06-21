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

export const writingLessons: Readonly<WritingLesson[]> = [
  // ── VAGUE 1 — UNIVERS « AU CAFÉ » (3 exercices d'écriture) · universe: 'cafe' ──
  {
    id: 'wr_cafe_01',
    system: 'arabizi',
    title: 'La lettre ق (9) — au café',
    objective: 'Reconnaître et écrire le son « 9 » (ق) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 1,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'q', arabizi: '9', arabic: 'ق', soundDescription: 'Son « q » prononcé au fond de la gorge, noté 9 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_9ahwa', 'w_cafe_9a3da'] },
    ],
    bridges: [
      { latin: 'qahwa', arabizi: '9ahwa', arabic: 'قهوة', wordId: 'w_9ahwa', french: 'café' },
      { latin: 'qa3da', arabizi: '9a3da', arabic: 'قعدة', wordId: 'w_cafe_9a3da', french: 'moment passé assis' },
    ],
  },
  {
    id: 'wr_cafe_02',
    system: 'arabizi',
    title: 'La lettre ح (7) — au café',
    objective: 'Reconnaître et écrire le son « 7 » (ح) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 2,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'h', arabizi: '7', arabic: 'ح', soundDescription: 'Son « h » fortement soufflé (pharyngal), noté 7 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_cafe_7alib', 'w_cafe_7seb'] },
    ],
    bridges: [
      { latin: 'halib', arabizi: '7alib', arabic: 'حليب', wordId: 'w_cafe_7alib', french: 'lait' },
      { latin: 'hsab', arabizi: 'el 7seb', arabic: 'الحساب', wordId: 'w_cafe_7seb', french: "l'addition" },
    ],
  },
  {
    id: 'wr_cafe_03',
    system: 'arabizi',
    title: 'La lettre ع (3) — au café',
    objective: 'Reconnaître et écrire le son « 3 » (ع) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 3,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: '3', arabizi: '3', arabic: 'ع', soundDescription: 'Son « ع » guttural propre à l\'arabe, noté 3 en arabizi.', difficulty: 4, isPriority: true, exampleWordIds: ['w_cafe_3asir', 'w_cafe_na3na3'] },
    ],
    bridges: [
      { latin: 'asir', arabizi: '3asir', arabic: 'عصير', wordId: 'w_cafe_3asir', french: 'jus' },
      { latin: 'na3na3', arabizi: 'na3na3', arabic: 'نعناع', wordId: 'w_cafe_na3na3', french: 'menthe' },
    ],
  },
] as const;

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
