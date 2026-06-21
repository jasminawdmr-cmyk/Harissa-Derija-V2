/**
 * /data/lessons.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Leçons et modules de l'application Darija Tunisien.
 *
 * Rôle : définir la structure pédagogique de l'application.
 * Une Leçon regroupe du vocabulaire, des dialogues et des règles de grammaire
 * autour d'un thème cohérent. Les Modules regroupent des Leçons de niveau
 * équivalent en un parcours progressif.
 *
 * Architecture :
 *   Module (ex: "Premiers pas")
 *     └─ Lesson (ex: "Les salutations")
 *          ├─ wordIds        → vers vocabulary.ts
 *          ├─ verbIds        → vers verbs.ts
 *          ├─ grammarRuleIds → vers grammar.ts
 *          └─ dialogueIds    → vers dialogues.ts
 *
 * Convention d'ID :
 *   - Module  : "mod_<slug>"    (ex : "mod_premiers_pas")
 *   - Leçon   : "les_<slug>"   (ex : "les_salutations_01")
 *
 * ⚠️  Fichier de démonstration — 1 module + 2 leçons seulement.
 *     Le curriculum complet (~5 modules, ~30 leçons) sera ajouté ensuite.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Lesson, Module } from '../types';

// ─── Modules ─────────────────────────────────────────────────────────────────

/**
 * MODULE 1 — Premiers pas
 * Le module d'entrée, accessible sans prérequis.
 * Objectif : permettre à l'apprenant de survivre une première conversation.
 */
const MODULE_PREMIERS_PAS: Module = {
  id: 'mod_premiers_pas',
  title: 'Premiers pas',
  description:
    'Les bases indispensables pour commencer à communiquer en tunisien. ' +
    'Salutations, présentations et expressions de survie.',
  level: 'debutant',
  coverEmoji: '👋',
  order: 1,
  lessonIds: [
    'les_salutations_01',
    'les_famille_01',
    // D'autres leçons seront ajoutées ici
  ],
};

// ─── Leçons ───────────────────────────────────────────────────────────────────

/**
 * LEÇON 1 — Les salutations (Module : Premiers pas)
 * Première leçon de l'application. Volontairement courte (8 min).
 * Objectif : maîtriser les formules de salutation essentielles.
 */
const LESSON_SALUTATIONS: Lesson = {
  id: 'les_salutations_01',
  moduleId: 'mod_premiers_pas',
  order: 1,
  title: 'Les salutations',
  titleArabic: 'التحيات',
  description:
    'Apprenez à dire bonjour, au revoir et à demander comment va quelqu\'un. ' +
    'Ce sont les mots que vous utiliserez à chaque conversation.',
  type: 'vocabulaire',
  level: 'debutant',
  estimatedMinutes: 8,
  isUnlocked: true, // Première leçon, toujours débloquée
  // Vocabulaire de la leçon
  wordIds: [
    'w_bonjour',
    // 'w_bonsoir', 'w_au_revoir', 'w_comment_vas_tu', ... (à venir)
  ],
  // Verbes non requis pour cette leçon
  verbIds: [],
  // Règle de grammaire introduite en fin de leçon
  grammarPointIds: ['gr_article_defini'],
  culturalNote:
    'En Tunisie, ne jamais passer devant quelqu\'un sans le saluer est une règle ' +
    'sociale fondamentale. Même dans un ascenseur ou une épicerie de quartier, ' +
    'un "Merhba" s\'impose. C\'est un signe de respect, pas d\'intrusion.',
};

/**
 * LEÇON 2 — La famille (Module : Premiers pas)
 * Deuxième leçon. Introduit les membres de la famille et le dialogue
 * de retrouvailles — contexte très réel pour la diaspora.
 */
const LESSON_FAMILLE: Lesson = {
  id: 'les_famille_01',
  moduleId: 'mod_premiers_pas',
  order: 2,
  title: 'La famille',
  titleArabic: 'العيلة',
  description:
    'Parlez de votre famille en tunisien. Père, mère, frères et sœurs — ' +
    'le vocabulaire pour vos appels du dimanche.',
  type: 'dialogue',
  level: 'debutant',
  estimatedMinutes: 12,
  isUnlocked: false, // Se débloque après la leçon 1
  wordIds: [
    'w_famille',
    // 'w_pere', 'w_mere', 'w_frere', 'w_soeur', ... (à venir)
  ],
  verbIds: [],
  grammarPointIds: ['gr_negation_simple'],
  culturalNote:
    'La famille est la valeur centrale de la société tunisienne. ' +
    'Les liens intergénérationnels sont très forts : grands-parents, oncles ' +
    'et tantes font partie de la cellule familiale proche. ' +
    'Apprendre à parler de sa famille est un passage obligé pour s\'intégrer.',
};

// ─── Export ───────────────────────────────────────────────────────────────────

/** Tous les modules, triés par ordre */
export const modules: Readonly<Module[]> = [
  MODULE_PREMIERS_PAS,
] as const;

/** Toutes les leçons, triées par ordre dans leur module */
export const lessons: Readonly<Lesson[]> = [
  LESSON_SALUTATIONS,
  LESSON_FAMILLE,
] as const;

/** Accès rapide aux modules par ID */
export const modulesById: Readonly<Record<string, Module>> =
  Object.fromEntries(modules.map((m) => [m.id, m]));

/** Accès rapide aux leçons par ID */
export const lessonsById: Readonly<Record<string, Lesson>> =
  Object.fromEntries(lessons.map((l) => [l.id, l]));

/** Retourne un module par son ID */
export function getModuleById(id: string): Module | undefined {
  return modulesById[id];
}

/** Retourne une leçon par son ID */
export function getLessonById(id: string): Lesson | undefined {
  return lessonsById[id];
}

/** Retourne les leçons d'un module, triées par ordre */
export function getLessonsByModule(moduleId: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

/** Retourne la prochaine leçon non complétée d'un module */
export function getNextUnlockedLesson(moduleId: string): Lesson | undefined {
  return getLessonsByModule(moduleId).find((l) => l.isUnlocked);
}
