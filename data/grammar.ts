/**
 * /data/grammar.ts
 * Règles de grammaire du darija tunisien — 2 exemples de démonstration.
 * Convention d'ID : "gr_<slug>"
 */

import type { GrammarRule } from "../types";

/**
 * RÈGLE 1 — La négation : ما … ش
 * Structure fondamentale : entoure le verbe (avant + après).
 * Équivalent du français "ne … pas".
 */
const RULE_NEGATION: GrammarRule = {
  id: "gr_negation_simple",
  title: "La négation : ما … ش",
  category: "negation",
  level: "debutant",
  explanation:
    "En darija tunisien, la négation entoure le verbe avec deux particules : " +
    "ما (ma) avant et ش (sh) après. Les deux éléments sont obligatoires. " +
    "Cette structure s'applique au passé comme au présent.",
  pattern: "ما + [verbe conjugué] + ش",
  examples: [
    {
      darija: "ما كليتش",
      darijaLatin: "Ma klitech",
      phonetic: "[ma klitech]",
      french: "Je n'ai pas mangé",
    },
    {
      darija: "ما نحكيش",
      darijaLatin: "Ma nahkiich",
      phonetic: "[ma nahkiich]",
      french: "Je ne parle pas",
    },
    {
      darija: "ما هو كليش",
      darijaLatin: "Ma hou kelich",
      phonetic: "[ma hu kelich]",
      french: "Il n'a pas mangé",
    },
    {
      // Contre-exemple : forme incomplète sans le "sh" final
      darija: "ما كليت",
      darijaLatin: "Ma klit",
      phonetic: "[ma klit]",
      french: "Forme incomplète — le 'sh' final est obligatoire",
      isCounterExample: true,
    },
  ],
  exceptions: [
    "Dans le langage très rapide, le sh peut s'affaiblir mais reste présent à l'écrit.",
    "Avec certains verbes d'état, la négation peut prendre une forme légèrement différente.",
  ],
  lessonIds: ["les_salutations_01", "les_famille_01"],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE 2 — L'article défini : ال (el-) / ل (l-)
 * Équivalent de le / la / les en français.
 * Assimilation aux consonnes solaires.
 */
const RULE_ARTICLE_DEFINI: GrammarRule = {
  id: "gr_article_defini",
  title: "L'article défini : ال (el-)",
  category: "article",
  level: "debutant",
  explanation:
    "Le darija possède un article défini unique el- (ال) equivalent a le/la/les. " +
    "Il ne varie ni en genre ni en nombre. " +
    "Devant les consonnes dites solaires, le l de l'article s'assimile a la consonne suivante.",
  pattern: "ال + [nom] — ou assimilation devant consonne solaire",
  examples: [
    {
      // Consonne lunaire — pas d'assimilation
      darija: "الكتاب",
      darijaLatin: "El-ktab",
      phonetic: "[el ktab]",
      french: "le livre",
    },
    {
      // Consonne solaire — assimilation du l
      darija: "الشمس",
      darijaLatin: "Esh-shems",
      phonetic: "[esh shems]",
      french: "le soleil",
    },
    {
      darija: "العيلة",
      darijaLatin: "El-3ayla",
      phonetic: "[el 3ayla]",
      french: "la famille",
    },
    {
      // Contre-exemple : oublier l'assimilation
      darija: "el شمس",
      darijaLatin: "El-shems (incorrect)",
      phonetic: "[el shems]",
      french: "Prononciation incorrecte — assimilation oubliée",
      isCounterExample: true,
    },
  ],
  exceptions: [
    "Dans le parler rapide, l'article peut etre elidé pour les noms très fréquents.",
  ],
  lessonIds: ["les_salutations_01"],
  prerequisiteRuleIds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const grammarRules: Readonly<GrammarRule[]> = [
  RULE_NEGATION,
  RULE_ARTICLE_DEFINI,
] as const;

export const grammarRulesById: Readonly<Record<string, GrammarRule>> =
  Object.fromEntries(grammarRules.map((r) => [r.id, r]));

export function getGrammarRuleById(id: string): GrammarRule | undefined {
  return grammarRulesById[id];
}

export function getRulesByCategory(
  category: GrammarRule["category"]
): GrammarRule[] {
  return grammarRules.filter((r) => r.category === category);
}

export function getRulesByLevel(level: GrammarRule["level"]): GrammarRule[] {
  return grammarRules.filter((r) => r.level === level);
}
