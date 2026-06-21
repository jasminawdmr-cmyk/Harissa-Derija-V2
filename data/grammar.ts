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

// ─── VAGUE 1 — UNIVERS « AU CAFÉ » (2 règles) · universe: 'cafe' ──────────────────

/**
 * RÈGLE — Exprimer « avec / au » : بـ (b-)
 */
const RULE_CAFE_PREPOSITION_B: GrammarRule = {
  id: "g_cafe_preposition_b",
  title: "Exprimer « avec / au » : بـ (b-)",
  category: "preposition",
  level: "debutant",
  universe: "cafe",
  explanation:
    "En tunisien, la préposition بـ (b-) se colle au nom pour dire « avec » ou " +
    "« au ». Très utile au café pour préciser une boisson : « bel 7alib » " +
    "(au lait), « bel na3na3 » (à la menthe). Le ال de l'article fusionne avec بـ.",
  pattern: "[nom] + بـ + [nom]",
  examples: [
    { arabic: "قهوة بالحليب", arabizi: "9ahwa bel 7alib", phonetic: "[9ahwa bel 7alib]", french: "Café au lait" },
    { arabic: "تاي بالنعناع", arabizi: "Tay bel na3na3", phonetic: "[tay bel na3na3]", french: "Thé à la menthe" },
  ],
  lessonIds: [],
  prerequisiteRuleIds: ["g_article_defini"],
};

/**
 * RÈGLE — Poser une question simple (interrogatifs)
 */
const RULE_CAFE_INTERROGATION: GrammarRule = {
  id: "g_cafe_interrogation",
  title: "Poser une question simple",
  category: "interrogation",
  level: "debutant",
  universe: "cafe",
  explanation:
    "Pour poser une question au café, on emploie un mot interrogatif : شنوة " +
    "(chnowa = quoi), قدّاش (9addech = combien), وين (win = où). Il se place " +
    "généralement en tête de phrase ; l'intonation suffit, sans inversion.",
  pattern: "[interrogatif] + [verbe / nom] ?",
  examples: [
    { arabic: "شنوة تحب تشرب؟", arabizi: "Chnowa t7eb techreb?", phonetic: "[chnowa t7eb techreb]", french: "Qu'est-ce que tu veux boire ?" },
    { arabic: "قدّاش الحساب؟", arabizi: "9addech el 7seb?", phonetic: "[9addech el 7seb]", french: "Ça fait combien, l'addition ?" },
    { arabic: "وين نخلّص؟", arabizi: "Win nkhalles?", phonetic: "[win nkhalles]", french: "Où est-ce que je paie ?" },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

export const grammarRules: Readonly<GrammarRule[]> = [
  RULE_NEGATION,
  RULE_ARTICLE_DEFINI,
  RULE_CAFE_PREPOSITION_B,
  RULE_CAFE_INTERROGATION,
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
