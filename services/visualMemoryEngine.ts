/**
 * /services/visualMemoryEngine.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Moteur de mémoire visuelle — 100% local, aucune donnée linguistique nouvelle.
 *
 * Objectif : associer chaque élément linguistique à un MOTIF VISUEL STABLE,
 * dérivé de la charte (lib/Colors.ts). Une même notion garde toujours la même
 * couleur et le même pictogramme, ce qui crée des ancres mémorielles fiables
 * (principe de double codage : sens + image).
 *
 * Associations garanties (issues de la charte) :
 *   préfixe = bleu · radical = vert · suffixe = violet
 *   présent = vert · passé = jaune · futur = violet
 *   masculin = bleu clair · féminin = rose clair · neutre = neutre
 *   + personnes, catégories, maîtrise.
 *
 * Le moteur transforme les données EXISTANTES (VocabularyItem, Verb, pronoms)
 * en MemoryCard prêtes à l'affichage. Il n'invente aucun contenu.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  GrammarColors,
  GenderColors,
  PersonColors,
  TenseColors,
  CategoryColors,
  getPersonToken,
  getMasteryToken,
} from '@/lib/Theme';
import type { VisualToken } from '@/lib/Theme';
import { getCategoryToken } from '@/utils/categories';
import type {
  VocabularyItem,
  Verb,
  Tense,
  Person,
  WordCategory,
} from '@/types';

// ─── Types d'éléments linguistiques reconnus ──────────────────────────────────

/** Rôle morphologique (aligné sur GrammarColors) */
export type MorphRole = 'prefix' | 'root' | 'suffix' | 'particle' | 'exception';

/** Genre grammatical */
export type Gender = 'masculine' | 'feminine' | 'neutral';

/**
 * Référence abstraite vers un élément linguistique.
 * Union discriminée par `kind` — couvre tous les types que le moteur sait
 * associer à un motif visuel.
 */
export type LinguisticElement =
  | { kind: 'word'; word: VocabularyItem }
  | { kind: 'verb'; verb: Verb }
  | { kind: 'tense'; tense: Tense }
  | { kind: 'person'; person: Person; feminineSecond?: boolean }
  | { kind: 'morphRole'; role: MorphRole }
  | { kind: 'gender'; gender: Gender }
  | { kind: 'category'; category: WordCategory };

// ─── Motif visuel stable ──────────────────────────────────────────────────────

/**
 * Un MemoryMotif est le « code visuel » stable d'un élément :
 * couleur principale, couleur douce, pictogramme et libellé.
 * C'est un VisualToken enrichi d'un identifiant de motif pour la traçabilité.
 */
export interface MemoryMotif extends VisualToken {
  /** Identifiant stable du motif (ex: "tense:present") */
  motifId: string;
}

// ─── Tables d'association (charte → motif) ────────────────────────────────────

const MORPH_TOKENS: Record<MorphRole, VisualToken> = {
  prefix: GrammarColors.prefix,
  root: GrammarColors.root,
  suffix: GrammarColors.suffix,
  particle: GrammarColors.particle,
  exception: GrammarColors.exception,
};

const GENDER_TOKENS: Record<Gender, VisualToken> = {
  masculine: GenderColors.masculine,
  feminine: GenderColors.feminine,
  neutral: GenderColors.neutral,
};

// ─── Résolution d'un motif ────────────────────────────────────────────────────

/**
 * Retourne le motif visuel STABLE d'un élément linguistique.
 * Déterministe : le même élément renvoie toujours le même motif.
 */
export function getMotif(element: LinguisticElement): MemoryMotif {
  switch (element.kind) {
    case 'tense': {
      const token = TenseColors[element.tense];
      return { ...token, motifId: `tense:${element.tense}` };
    }
    case 'person': {
      const token = getPersonToken(element.person, element.feminineSecond);
      return { ...token, motifId: `person:${element.person}` };
    }
    case 'morphRole': {
      const token = MORPH_TOKENS[element.role];
      return { ...token, motifId: `morph:${element.role}` };
    }
    case 'gender': {
      const token = GENDER_TOKENS[element.gender];
      return { ...token, motifId: `gender:${element.gender}` };
    }
    case 'category': {
      const token = getCategoryToken(element.category);
      return { ...token, motifId: `category:${element.category}` };
    }
    case 'word': {
      // Un mot hérite du motif de sa catégorie (ancre thématique stable)
      const token = getCategoryToken(element.word.category);
      return { ...token, motifId: `word:${element.word.id}` };
    }
    case 'verb': {
      // Un verbe hérite du motif "verbes" de la charte des catégories
      const token = CategoryColors.verbes;
      return { ...token, motifId: `verb:${element.verb.id}` };
    }
  }
}

// ─── MemoryCard ───────────────────────────────────────────────────────────────

/** Segment coloré d'une forme (pour le double codage morphologique) */
export interface MemorySegment {
  text: string;
  motif: MemoryMotif;
}

/**
 * Carte de mémoire visuelle : tout ce dont MemoryCard.tsx a besoin pour
 * afficher un élément avec son ancre visuelle stable.
 */
export interface MemoryCard {
  /** Identifiant de la carte */
  id: string;
  /** Motif principal (couleur + picto d'ancrage) */
  motif: MemoryMotif;
  /** Texte principal (mot français, infinitif, libellé…) */
  primary: string;
  /** Forme tunisienne (arabe) si disponible */
  arabic?: string;
  /** Translittération si disponible */
  latin?: string;
  /** Indice phonétique si disponible */
  phonetic?: string;
  /** Pictogramme d'ancrage (repris du motif) */
  icon: string;
  /** Libellé de la famille (ex: "Présent", "Famille") */
  familyLabel: string;
  /** Décomposition colorée optionnelle (si morphologie fournie) */
  segments?: MemorySegment[];
  /** Score de maîtrise 0–5 si connu (pour teinter la bordure) */
  masteryScore?: number;
}

// ─── Génération de MemoryCard depuis les données existantes ───────────────────

/**
 * Construit une MemoryCard pour un MOT du vocabulaire.
 * @param masteryScore score de maîtrise optionnel (0–5)
 */
export function buildWordMemoryCard(
  word: VocabularyItem,
  masteryScore?: number
): MemoryCard {
  const motif = getMotif({ kind: 'word', word });
  return {
    id: `mem_${word.id}`,
    motif,
    primary: word.french,
    arabic: word.arabic,
    latin: word.arabizi,
    phonetic: word.phonetic,
    icon: motif.icon,
    familyLabel: motif.label,
    masteryScore,
  };
}

/**
 * Construit une MemoryCard pour un VERBE.
 * Si une forme conjuguée porte une décomposition morphologique (`morphology`),
 * elle est convertie en segments colorés (double codage). Sinon, pas de
 * segments (fallback géré côté composant).
 *
 * @param tense temps à mettre en avant (défaut: présent si disponible)
 */
export function buildVerbMemoryCard(
  verb: Verb,
  tense: Tense = 'present',
  masteryScore?: number
): MemoryCard {
  const motif = getMotif({ kind: 'verb', verb });

  // Cherche une forme du temps demandé pour illustrer la carte
  const forms = verb.conjugations[tense];
  const sample = forms && forms.length > 0 ? forms[0] : undefined;

  // Construit les segments colorés si la morphologie existe (sans inventer)
  let segments: MemorySegment[] | undefined;
  if (sample?.morphology && sample.morphology.length > 0) {
    segments = sample.morphology.map((m) => ({
      text: m.text,
      motif: getMotif({ kind: 'morphRole', role: m.role }),
    }));
  }

  return {
    id: `mem_${verb.id}_${tense}`,
    motif,
    primary: verb.infinitiveFrench,
    arabic: sample?.arabic,
    latin: sample?.arabizi,
    phonetic: sample?.phonetic,
    icon: motif.icon,
    familyLabel: TenseColors[tense].label,
    segments,
    masteryScore,
  };
}

/**
 * Décompose une forme en segments colorés à partir d'une morphologie fournie.
 * Utilitaire réutilisable (ex: pour ConjugationTable ou MorphologyBlock).
 * N'invente rien : si `morphology` est vide, retourne undefined.
 */
export function buildMorphologySegments(
  morphology?: Array<{ text: string; role: MorphRole }>
): MemorySegment[] | undefined {
  if (!morphology || morphology.length === 0) return undefined;
  return morphology.map((m) => ({
    text: m.text,
    motif: getMotif({ kind: 'morphRole', role: m.role }),
  }));
}

// ─── Légende des motifs (pour rappel visuel) ──────────────────────────────────

/**
 * Retourne la liste des motifs d'une famille donnée, utile pour afficher une
 * légende cohérente (réutilise VisualLegend côté UI).
 */
export function getMotifFamily(
  family: 'morphology' | 'tense' | 'gender'
): MemoryMotif[] {
  switch (family) {
    case 'morphology':
      return (Object.keys(MORPH_TOKENS) as MorphRole[]).map((role) =>
        getMotif({ kind: 'morphRole', role })
      );
    case 'tense':
      return (['present', 'passe', 'futur'] as Tense[]).map((tense) =>
        getMotif({ kind: 'tense', tense })
      );
    case 'gender':
      return (['masculine', 'feminine', 'neutral'] as Gender[]).map((gender) =>
        getMotif({ kind: 'gender', gender })
      );
  }
}

/** Réexport pratique pour teinter selon la maîtrise (cohérence charte) */
export { getMasteryToken };
