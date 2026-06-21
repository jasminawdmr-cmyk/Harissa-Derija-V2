/**
 * /services/quizGenerator.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Génère des questions de quiz À PARTIR DES DONNÉES LOCALES EXISTANTES.
 *
 * Aucune donnée linguistique n'est inventée : chaque question est dérivée
 * d'un VocabularyItem, d'un Verb ou d'un Dialogue déjà présent dans /data.
 *
 * Quatre types de questions sont produits :
 *   1. 'qcm'            → QCM français → tunisien (distracteurs = autres mots)
 *   2. 'traduction'     → Traduction tunisien → français (QCM)
 *   3. 'conjugaison'    → Compléter une forme conjuguée (QCM de formes)
 *   4. 'remise_ordre'   → Remettre les mots d'une phrase de dialogue dans l'ordre
 *
 * Si les données sont insuffisantes pour un type (ex: un seul mot disponible,
 * donc pas de distracteurs), le générateur saute ce type proprement.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { vocabulary } from '@/data/vocabulary';
import { verbs } from '@/data/verbs';
import { dialogues } from '@/data/dialogues';
import { shuffleCards } from './reviewEngine';
import { PRONOUNS } from '@/data/pronouns';
import type { VocabularyItem, Verb, Tense, Person } from '@/types';

/** Type local de question de quiz, indépendant du type Quiz du domaine */
export type QuizKind = 'qcm' | 'traduction' | 'conjugaison' | 'remise_ordre';

export interface GeneratedQuestion {
  id: string;
  kind: QuizKind;
  /** Énoncé affiché à l'apprenant */
  prompt: string;
  /** Sous-titre optionnel (ex: contexte, pronom) */
  subtitle?: string;
  /**
   * Pour les QCM : options proposées.
   * Pour la remise en ordre : les segments mélangés à réordonner.
   */
  options: string[];
  /**
   * Réponse correcte :
   *   - QCM / conjugaison / traduction : chaîne unique
   *   - remise en ordre : tableau ordonné attendu
   */
  answer: string | string[];
  /** Explication affichée après réponse */
  explanation?: string;
  /** Points attribués */
  points: number;
}

// ─── Utilitaires ──────────────────────────────────────────────────────────────

/** Tire N éléments aléatoires distincts d'un tableau (hors `exclude`) */
function pickDistractors<T>(
  pool: T[],
  count: number,
  exclude: (item: T) => boolean
): T[] {
  const candidates = pool.filter((item) => !exclude(item));
  return shuffleCards(candidates).slice(0, count);
}

/** Mélange une liste de chaînes (réutilise Fisher-Yates du moteur) */
function shuffleStrings(items: string[]): string[] {
  return shuffleCards(items);
}

// ─── Générateurs par type ─────────────────────────────────────────────────────

/**
 * TYPE 1 — QCM français → tunisien.
 * La bonne réponse est la forme translittérée ; 3 distracteurs proviennent
 * d'autres mots du vocabulaire.
 */
function generateQcm(word: VocabularyItem): GeneratedQuestion | null {
  const distractors = pickDistractors(
    [...vocabulary],
    3,
    (w) => w.id === word.id
  );
  // Besoin d'au moins 1 distracteur pour un QCM crédible
  if (distractors.length === 0) return null;

  const options = shuffleStrings([
    word.arabizi,
    ...distractors.map((d) => d.arabizi),
  ]);

  return {
    id: `q_qcm_${word.id}`,
    kind: 'qcm',
    prompt: `Comment dit-on « ${word.french} » en tunisien ?`,
    options,
    answer: word.arabizi,
    explanation: `${word.french} se dit « ${word.arabizi} » (${word.arabic}).`,
    points: 10,
  };
}

/**
 * TYPE 2 — Traduction tunisien → français.
 * On montre la forme tunisienne, l'apprenant choisit le sens français.
 */
function generateTraduction(word: VocabularyItem): GeneratedQuestion | null {
  const distractors = pickDistractors(
    [...vocabulary],
    3,
    (w) => w.id === word.id
  );
  if (distractors.length === 0) return null;

  const options = shuffleStrings([
    word.french,
    ...distractors.map((d) => d.french),
  ]);

  return {
    id: `q_trad_${word.id}`,
    kind: 'traduction',
    prompt: `Que signifie « ${word.arabizi} » ?`,
    subtitle: word.arabic,
    options,
    answer: word.french,
    explanation: `« ${word.arabizi} » (${word.arabic}) signifie ${word.french}.`,
    points: 10,
  };
}

/**
 * TYPE 3 — Compléter une conjugaison.
 * On choisit un verbe, un temps et une personne disponibles dans les données,
 * et on demande la bonne forme parmi les formes du même verbe (distracteurs
 * = autres personnes du même temps → plausibles mais incorrectes).
 */
function generateConjugaison(verb: Verb): GeneratedQuestion | null {
  // Cherche un temps réellement renseigné
  const availableTenses = (Object.keys(verb.conjugations) as Tense[]).filter(
    (t) => (verb.conjugations[t]?.length ?? 0) >= 2
  );
  if (availableTenses.length === 0) return null;

  const tense = shuffleCards(availableTenses)[0];
  const forms = verb.conjugations[tense]!;
  const target = shuffleCards([...forms])[0];

  // Distracteurs = autres formes du même temps
  const others = forms.filter((f) => f.person !== target.person);
  if (others.length === 0) return null;

  const distractors = shuffleCards(others).slice(0, 3);
  const options = shuffleStrings([
    target.arabizi,
    ...distractors.map((d) => d.arabizi),
  ]);

  const pronoun = PRONOUNS[target.person as Person];
  const tenseLabel = TENSE_LABELS[tense];

  return {
    id: `q_conj_${verb.id}_${tense}_${target.person}`,
    kind: 'conjugaison',
    prompt: `Conjuguez « ${verb.infinitiveFrench} » au ${tenseLabel} :`,
    subtitle: `${pronoun.abbreviation} (${pronoun.arabizi})`,
    options,
    answer: target.arabizi,
    explanation: `${pronoun.abbreviation} → ${target.arabizi} (${target.arabic}).`,
    points: 15,
  };
}

/**
 * TYPE 4 — Remettre une phrase dans l'ordre.
 * On prend une ligne de dialogue existante, on découpe sa translittération
 * en mots, et on demande de les réordonner.
 */
function generateRemiseOrdre(
  sentence: string,
  french: string,
  sourceId: string
): GeneratedQuestion | null {
  const words = sentence.trim().split(/\s+/);
  // Besoin d'au moins 3 mots pour que l'exercice ait du sens
  if (words.length < 3) return null;

  // Mélange en s'assurant que l'ordre proposé diffère de l'ordre correct
  let shuffled = shuffleStrings(words);
  let attempts = 0;
  while (shuffled.join(' ') === words.join(' ') && attempts < 5) {
    shuffled = shuffleStrings(words);
    attempts++;
  }

  return {
    id: `q_order_${sourceId}`,
    kind: 'remise_ordre',
    prompt: 'Remettez les mots dans le bon ordre :',
    subtitle: french,
    options: shuffled,
    answer: words,
    explanation: `Phrase correcte : « ${sentence} » — ${french}.`,
    points: 20,
  };
}

// ─── Libellés ─────────────────────────────────────────────────────────────────

const TENSE_LABELS: Readonly<Record<Tense, string>> = {
  present: 'présent',
  passe: 'passé',
  futur: 'futur',
  imperatif: 'impératif',
};

// ─── Génération de quiz complet ───────────────────────────────────────────────

/**
 * Construit un quiz mélangeant les quatre types, à partir des données locales.
 * Le nombre de questions s'adapte au volume de données disponibles.
 *
 * @param maxQuestions Nombre maximum de questions (défaut : 10)
 */
export function generateQuiz(maxQuestions = 10): GeneratedQuestion[] {
  const questions: GeneratedQuestion[] = [];

  // 1 & 2 — Questions de vocabulaire (QCM + traduction)
  for (const word of vocabulary) {
    const qcm = generateQcm(word);
    if (qcm) questions.push(qcm);

    const trad = generateTraduction(word);
    if (trad) questions.push(trad);
  }

  // 3 — Questions de conjugaison
  for (const verb of verbs) {
    const conj = generateConjugaison(verb);
    if (conj) questions.push(conj);
  }

  // 4 — Remise en ordre à partir des lignes de dialogue
  for (const dialogue of dialogues) {
    for (const line of dialogue.lines) {
      const q = generateRemiseOrdre(
        line.arabizi,
        line.french,
        `${dialogue.id}_${dialogue.lines.indexOf(line)}`
      );
      if (q) {
        questions.push(q);
        break; // une seule ligne par dialogue pour varier
      }
    }
  }

  // Mélange final et plafonnement
  return shuffleCards(questions).slice(0, maxQuestions);
}

/**
 * Indique si suffisamment de données existent pour générer un quiz.
 */
export function canGenerateQuiz(): boolean {
  return vocabulary.length >= 2;
}
