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

// ─── VAGUE 2 — UNIVERS « MAISON » (2 règles) · universe: 'maison' ─────────────────

/**
 * RÈGLE — Situer dans l'espace (prépositions de lieu)
 */
const RULE_MAISON_LOCALISATION: GrammarRule = {
  id: "g_maison_localisation",
  title: "Situer : fi / fou9 / ta7t / 9oddem",
  category: "preposition",
  level: "debutant",
  universe: "maison",
  explanation:
    "Pour situer un objet dans la maison : في (fi = dans), فوق (fou9 = sur), " +
    "تحت (ta7t = sous), قدّام (9oddem = devant), ورا (wara = derrière).",
  pattern: "[objet] + [préposition] + [lieu]",
  examples: [
    { arabic: 'المفتاح فوق الطاولة', arabizi: 'El mefte7 fou9 el tawla', phonetic: '[el mefte7 fou9 el tawla]', french: 'La clé est sur la table' },
    { arabic: 'القطّوس تحت السرير', arabizi: 'El gattous ta7t el srir', phonetic: '[el gattous ta7t el srir]', french: 'Le chat est sous le lit' },
    { arabic: 'الجنان قدّام الدار', arabizi: 'El jnen 9oddem el dar', phonetic: '[el jnen 9oddem el dar]', french: 'Le jardin est devant la maison' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — La possession : 3andi / mte3i
 */
const RULE_MAISON_POSSESSION: GrammarRule = {
  id: "g_maison_possession",
  title: "Posséder : 3andi (j'ai) / mte3i (à moi)",
  category: "possession",
  level: "debutant",
  universe: "maison",
  explanation:
    "Pour la possession, deux outils : عندي (3andi = j'ai) exprime l'avoir, et " +
    "متاعي (mte3i = à moi/le mien) marque l'appartenance, placé après le nom. " +
    "Ex : « el dar mte3na » (notre maison).",
  pattern: "عندي + [nom]  ·  [nom] + متاعـ + [suffixe]",
  examples: [
    { arabic: 'عندي دار', arabizi: '3andi dar', phonetic: '[3andi dar]', french: "J'ai une maison" },
    { arabic: 'الدار متاعنا', arabizi: 'El dar mte3na', phonetic: '[el dar mte3na]', french: 'Notre maison' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

// ─── VAGUE 2 — UNIVERS « FAMILLE » (2 règles) · universe: 'famille' ───────────────

/**
 * RÈGLE — Le futur avec « besh »
 */
const RULE_FAMILLE_FUTUR: GrammarRule = {
  id: "g_famille_futur",
  title: "Le futur : besh + verbe",
  category: "temps",
  level: "debutant",
  universe: "famille",
  explanation:
    "Pour exprimer le futur, on place باش (besh = « vais/va ») devant le verbe " +
    "au présent. Ex : « besh netzawej » (je vais me marier).",
  pattern: "باش (besh) + [verbe au présent]",
  examples: [
    { arabic: 'باش نتزوّج', arabizi: 'Besh netzawej', phonetic: '[besh netzawej]', french: 'Je vais me marier' },
    { arabic: 'باش نزور جدّي', arabizi: 'Besh nzour jaddi', phonetic: '[besh nzour jaddi]', french: 'Je vais rendre visite à mon grand-père' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — L'accord de l'adjectif (masculin / féminin)
 */
const RULE_FAMILLE_ADJECTIF: GrammarRule = {
  id: "g_famille_adjectif",
  title: "L'adjectif : kbir (m.) / kbira (f.)",
  category: "genre",
  level: "debutant",
  universe: "famille",
  explanation:
    "L'adjectif s'accorde en genre : au féminin, on ajoute généralement « -a ». " +
    "Ex : كبير (kbir = grand) → كبيرة (kbira = grande) ; صغير (sghir) → صغيرة (sghira).",
  pattern: "[adjectif] + ة (-a) au féminin",
  examples: [
    { arabic: 'خويا كبير', arabizi: 'Khouya kbir', phonetic: '[khouya kbir]', french: 'Mon frère est grand' },
    { arabic: 'أختي كبيرة', arabizi: 'Okhti kbira', phonetic: '[okhti kbira]', french: 'Ma sœur est grande' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

// ─── VAGUE 2 — UNIVERS « EN LOUAGE » (2 règles) · universe: 'louage' ──────────────

/**
 * RÈGLE — Aller vers : لـ (l-)
 */
const RULE_LOUAGE_DIRECTION: GrammarRule = {
  id: "g_louage_direction",
  title: "Aller vers : لـ (l-)",
  category: "preposition",
  level: "debutant",
  universe: "louage",
  explanation:
    "Pour indiquer une destination, on colle لـ (l- = vers/à) devant le lieu. " +
    "Ex : « l Tounes » (vers Tunis), « l Sousse » (à Sousse).",
  pattern: "لـ (l-) + [lieu]",
  examples: [
    { arabic: 'نسافر لتونس', arabizi: 'Nsefer l Tounes', phonetic: '[nsefer l tounes]', french: 'Je voyage à Tunis' },
    { arabic: 'اللواج لصفاقس', arabizi: 'El louage l Sfax', phonetic: '[el louage l sfax]', french: 'Le louage pour Sfax' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — Donner un ordre : l'impératif
 */
const RULE_LOUAGE_IMPERATIF: GrammarRule = {
  id: "g_louage_imperatif",
  title: "Donner un ordre : l'impératif",
  category: "autre",
  level: "debutant",
  universe: "louage",
  explanation:
    "L'impératif (donner un ordre) s'obtient souvent en retirant le préfixe du " +
    "présent. Ex : « tsou9 » (tu conduis) → « sou9 ! » (conduis !), « twa99ef » → " +
    "« wa99ef ! » (arrête !).",
  pattern: "[verbe sans préfixe] !",
  examples: [
    { arabic: 'وقّف هوني', arabizi: 'Wa99ef houni', phonetic: '[wa99ef houni]', french: 'Arrête-toi ici' },
    { arabic: 'دور على اليمين', arabizi: 'Dour 3la el ymin', phonetic: '[dour 3la el ymin]', french: 'Tourne à droite' },
    { arabic: 'امشي طول', arabizi: 'Emchi tool', phonetic: '[emchi tool]', french: 'Va tout droit' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

// ─── VAGUE 2 — UNIVERS « À LA PLAGE » (2 règles) · universe: 'plage' ──────────────

/**
 * RÈGLE — L'obligation : لازم (lazem)
 */
const RULE_PLAGE_OBLIGATION: GrammarRule = {
  id: "g_plage_obligation",
  title: "L'obligation : لازم (lazem = il faut)",
  category: "autre",
  level: "debutant",
  universe: "plage",
  explanation:
    "Pour exprimer une obligation ou une nécessité, on utilise لازم (lazem = il faut) " +
    "suivi du verbe au présent sans conjugaison particulière. " +
    "Ex : « lazem njib » (il faut que j'apporte), « lazem nemchiw » (il faut qu'on y aille).",
  pattern: "لازم (lazem) + [verbe au présent]",
  examples: [
    { arabic: 'لازم نجيب الشمسية', arabizi: 'Lazem njib el chamsiya', phonetic: '[lazem njib el chamsiya]', french: 'Il faut apporter le parasol' },
    { arabic: 'لازم نعوموا', arabizi: 'Lazem n3ouwmou', phonetic: '[lazem n3oumou]', french: 'Il faut qu\'on nage' },
    { arabic: 'لازم تشرب ماء', arabizi: 'Lazem techreb ma', phonetic: '[lazem techreb ma]', french: 'Il faut boire de l\'eau' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — Les conjonctions : و (w = et) / ولا (wala = ou)
 */
const RULE_PLAGE_CONJONCTIONS: GrammarRule = {
  id: "g_plage_conjonctions",
  title: "Connecteurs : و (w = et) / ولا (wala = ou)",
  category: "autre",
  level: "debutant",
  universe: "plage",
  explanation:
    "En darija, و (w) signifie « et » et se colle directement au mot suivant. " +
    "ولا (wala) signifie « ou » dans une question alternative. " +
    "Attention : wala peut aussi signifier « ni » dans une phrase négative.",
  pattern: "[mot] + و (w) + [mot] · [option 1] + ولا (wala) + [option 2] ?",
  examples: [
    { arabic: 'أنا وصاحبي على الشط', arabizi: 'Ena w sa7bi 3al chatt', phonetic: '[ena w sa7bi 3al chatt]', french: 'Mon ami et moi sommes sur la plage' },
    { arabic: 'تحب كازوزة ولا ماء؟', arabizi: 'T7eb kazouza wala ma?', phonetic: '[t7eb kazouza wala ma]', french: 'Tu veux un soda ou de l\'eau ?' },
    { arabic: 'روحي وجيبي الفوطة', arabizi: 'Rou7i w jibi el fouta', phonetic: '[rou7i w jibi el fouta]', french: 'Va et ramène la fouta' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

// ─── VAGUE 2 — UNIVERS « À L'HÔTEL » (2 règles) · universe: 'hotel' ───────────────

/**
 * RÈGLE — Localiser : في (fi = dans/à), فوق (fo9 = sur/en haut), تحت (ta7t = sous/en bas)
 */
const RULE_HOTEL_LOCALISATION: GrammarRule = {
  id: "g_hotel_localisation",
  title: "Localiser : في / فوق / تحت",
  category: "preposition",
  level: "debutant",
  universe: "hotel",
  explanation:
    "Pour indiquer où se trouve quelque chose : في (fi = dans / à), فوق (fo9 = en haut / au-dessus), " +
    "تحت (ta7t = en bas / dessous), بين (bin = entre). " +
    "Ces prépositions se placent directement devant le nom.",
  pattern: "في / فوق / تحت + [lieu]",
  examples: [
    { arabic: 'الغرفة في الطابق الثالث', arabizi: 'El ghorfa fi et tabiq ettaleth', phonetic: '[el ghorfa fi et tabiq ettaleth]', french: 'La chambre est au troisième étage' },
    { arabic: 'المصعد فوق', arabizi: 'El mossaad fo9', phonetic: '[el mossaad fo9]', french: 'L\'ascenseur est en haut' },
    { arabic: 'الكراج تحت', arabizi: 'El garaj ta7t', phonetic: '[el garaj ta7t]', french: 'Le parking est en bas' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: [],
};

/**
 * RÈGLE — Demander s'il y a : عندكم...؟ (3andkom = avez-vous...?)
 */
const RULE_HOTEL_QUESTION: GrammarRule = {
  id: "g_hotel_question",
  title: "Demander s'il y a : عندكم...؟",
  category: "interrogation",
  level: "debutant",
  universe: "hotel",
  explanation:
    "Pour demander si un hôtel dispose de quelque chose, on utilise عندكم (3andkom = avez-vous, " +
    "litt. « chez vous il y a »). C'est la forme de politesse au pluriel de عندك (3andek).",
  pattern: "عندكم (3andkom) + [chose] + ؟",
  examples: [
    { arabic: 'عندكم واي فاي؟', arabizi: '3andkom wifi?', phonetic: '[3andkom wifi]', french: 'Avez-vous le wifi ?' },
    { arabic: 'عندكم غرفة فاضية؟', arabizi: '3andkom ghorfa fadhya?', phonetic: '[3andkom ghorfa fadhya]', french: 'Avez-vous une chambre libre ?' },
    { arabic: 'عندكم مصعد؟', arabizi: '3andkom mossaad?', phonetic: '[3andkom mossaad]', french: 'Avez-vous un ascenseur ?' },
  ],
  lessonIds: [],
  prerequisiteRuleIds: ['g_cafe_interrogation'],
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
  RULE_MAISON_LOCALISATION,
  RULE_MAISON_POSSESSION,
  RULE_FAMILLE_FUTUR,
  RULE_FAMILLE_ADJECTIF,
  RULE_LOUAGE_DIRECTION,
  RULE_LOUAGE_IMPERATIF,
  RULE_PLAGE_OBLIGATION,
  RULE_PLAGE_CONJONCTIONS,
  RULE_HOTEL_LOCALISATION,
  RULE_HOTEL_QUESTION,
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
