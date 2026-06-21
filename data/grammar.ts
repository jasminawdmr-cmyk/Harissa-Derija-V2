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

// ─── VAGUE 2 — UNIVERS « SALUTATIONS » (2 règles) · universe: 'salutations' ───────

/**
 * RÈGLE — Le suffixe possessif (mon / ton)
 */
const RULE_SALUT_POSSESSIF: GrammarRule = {
  id: "g_salut_possessif",
  title: "Le possessif : -i (mon) / -ek (ton)",
  category: "possession",
  level: "debutant",
  universe: "salutations",
  explanation:
    "En tunisien, on attache un suffixe au nom pour la possession : -i = « mon/ma », " +
    "-ek = « ton/ta ». Très utile pour se présenter : « esm-i » (mon nom), " +
    "« esm-ek » (ton nom).",
  pattern: "[nom] + ـي (-i) / ـك (-ek)",
  examples: [
    { arabic: 'اسمي', arabizi: 'Esmi', phonetic: '[esmi]', french: 'Mon nom / je m\'appelle' },
    { arabic: 'اسمك', arabizi: 'Esmek', phonetic: '[esmek]', french: 'Ton nom / tu t\'appelles' },
    { arabic: 'صاحبي', arabizi: 'Sa7bi', phonetic: '[sa7bi]', french: 'Mon ami' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — Les questions pour faire connaissance
 */
const RULE_SALUT_QUESTIONS: GrammarRule = {
  id: "g_salut_questions",
  title: "Faire connaissance : chnowa / min win / kifech",
  category: "interrogation",
  level: "debutant",
  universe: "salutations",
  explanation:
    "Pour faire connaissance, on emploie : شنوة (chnowa = quoi/quel), من وين " +
    "(min win = d'où), كيفاش (kifech = comment). Le mot interrogatif ouvre la phrase.",
  pattern: "[interrogatif] + [nom / verbe] ?",
  examples: [
    { arabic: 'شنوة اسمك؟', arabizi: 'Chnowa esmek?', phonetic: '[chnowa esmek]', french: 'Comment t\'appelles-tu ?' },
    { arabic: 'من وين إنتي؟', arabizi: 'Min win enti?', phonetic: '[min win enti]', french: "D'où viens-tu ?" },
    { arabic: 'كيفاش حالك؟', arabizi: 'Kifech 7alek?', phonetic: '[kifech 7alek]', french: 'Comment vas-tu ?' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

// ─── VAGUE 2 — UNIVERS « AU MARCHÉ » (2 règles) · universe: 'marche' ──────────────

/**
 * RÈGLE — Les démonstratifs : hedha / hedhi / hadhouma
 */
const RULE_MARCHE_DEMONSTRATIFS: GrammarRule = {
  id: "g_marche_demonstratifs",
  title: "Montrer un produit : hedha / hedhi / hadhouma",
  category: "autre",
  level: "debutant",
  universe: "marche",
  explanation:
    "Au marché, on montre du doigt : هذا (hedha = celui-ci, masculin), هذي " +
    "(hedhi = celle-ci, féminin), هذوما (hadhouma = ceux-ci, pluriel). Ils se " +
    "placent avant ou après le nom.",
  pattern: "هذا / هذي / هذوما + [nom]",
  examples: [
    { arabic: 'هذا بقدّاش؟', arabizi: 'Hedha b9addech?', phonetic: '[hedha b9addech]', french: "Celui-ci, c'est combien ?" },
    { arabic: 'هذي طرية', arabizi: 'Hedhi tri', phonetic: '[hedhi tri]', french: 'Celle-ci est fraîche' },
    { arabic: 'هذوما غاليين', arabizi: 'Hadhouma ghaliyin', phonetic: '[hadhouma ghaliyin]', french: 'Ceux-ci sont chers' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — Le comparatif : ghla / arkhas
 */
const RULE_MARCHE_COMPARAISON: GrammarRule = {
  id: "g_marche_comparaison",
  title: "Comparer les prix : ghla / arkhas",
  category: "comparaison",
  level: "debutant",
  universe: "marche",
  explanation:
    "Pour comparer, le tunisien utilise une forme unique : أغلى ( aghla = plus " +
    "cher), أرخص (arkhas = moins cher), suivie de من (men = que). Ex : « aghla " +
    "men hedha » (plus cher que celui-ci).",
  pattern: "[adjectif comparatif] + من + [nom]",
  examples: [
    { arabic: 'هذا أرخص', arabizi: 'Hedha arkhas', phonetic: '[hedha arkhas]', french: 'Celui-ci est moins cher' },
    { arabic: 'أغلى من هذا', arabizi: 'Aghla men hedha', phonetic: '[aghla men hedha]', french: 'Plus cher que celui-ci' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: ['g_marche_demonstratifs'],
};

export const grammarRules: Readonly<GrammarRule[]> = [
  RULE_NEGATION,
  RULE_ARTICLE_DEFINI,
  RULE_CAFE_PREPOSITION_B,
  RULE_CAFE_INTERROGATION,
  RULE_SALUT_POSSESSIF,
  RULE_SALUT_QUESTIONS,
  RULE_MARCHE_DEMONSTRATIFS,
  RULE_MARCHE_COMPARAISON,
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
