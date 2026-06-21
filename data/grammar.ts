/**
 * /data/grammar.ts
 * Règles de grammaire du darija tunisien — 2 exemples de démonstration.
 * Convention d'ID : "gr_<slug>"
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 */

import type { GrammarRule } from "../types";

/**
 * RÈGLE 1 — La négation : ما … ش
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
      arabic: "ما كليتش",
      arabizi: "Ma klitech",
      phonetic: "[ma klitech]",
      french: "Je n'ai pas mangé",
    },
    {
      arabic: "ما نحكيش",
      arabizi: "Ma nahkiich",
      phonetic: "[ma nahkiich]",
      french: "Je ne parle pas",
    },
    {
      arabic: "ما هو كليش",
      arabizi: "Ma hou kelich",
      phonetic: "[ma hu kelich]",
      french: "Il n'a pas mangé",
    },
    {
      arabic: "ما كليت",
      arabizi: "Ma klit",
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
      arabic: "الكتاب",
      arabizi: "El-ktab",
      phonetic: "[el ktab]",
      french: "le livre",
    },
    {
      arabic: "الشمس",
      arabizi: "Esh-shems",
      phonetic: "[esh shems]",
      french: "le soleil",
    },
    {
      arabic: "العيلة",
      arabizi: "El-3ayla",
      phonetic: "[el 3ayla]",
      french: "la famille",
    },
    {
      arabic: "el شمس",
      arabizi: "El-shems (incorrect)",
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
