/**
 * /data/verbs.ts
 * Verbes en darija tunisien — 2 exemples de démonstration.
 * Convention d'ID : "v_<racine_arabizi>"
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 */

import type { Verb } from "../types";

/**
 * VERBE 1 — Manger : كل (K-L)
 */
const VERB_MANGER: Verb = {
  id: "v_kl",
  infinitiveFrench: "manger",
  rootArabic: "ك-ل",
  rootArabizi: "K-L",
  isIrregular: true,
  level: "debutant",
  tags: ["nourriture", "quotidien", "haute-frequence"],
  notes:
    "Verbe très fréquent. La racine كل (kl) est biconsonnantique dans son " +
    "usage courant tunisien, contrairement à la racine arabe standard أكل (akl).",
  conjugations: {
    passe: [
      { person: "1s",  arabic: "كليت",  arabizi: "Klit",   phonetic: "[klit]"   },
      { person: "2s",  arabic: "كليت",  arabizi: "Klit",   phonetic: "[klit]"   },
      { person: "3sm", arabic: "كل",    arabizi: "Kel",    phonetic: "[kel]"    },
      { person: "3sf", arabic: "كلت",   arabizi: "Klet",   phonetic: "[klet]"   },
      { person: "1p",  arabic: "كلينا", arabizi: "Klina",  phonetic: "[klina]"  },
      { person: "2p",  arabic: "كليتم", arabizi: "Klitou", phonetic: "[klitu]"  },
      { person: "3p",  arabic: "كلو",   arabizi: "Klou",   phonetic: "[klu]"    },
    ],
    present: [
      { person: "1s",  arabic: "ناكل",  arabizi: "Nekl",    phonetic: "[nekl]"   },
      { person: "2s",  arabic: "تاكل",  arabizi: "Tekl",    phonetic: "[tekl]"   },
      { person: "3sm", arabic: "ياكل",  arabizi: "Yekl",    phonetic: "[jekl]"   },
      { person: "3sf", arabic: "تاكل",  arabizi: "Tekl",    phonetic: "[tekl]"   },
      { person: "1p",  arabic: "ناكلو", arabizi: "Neklou",  phonetic: "[neklu]"  },
      { person: "2p",  arabic: "تاكلو", arabizi: "Teklou",  phonetic: "[teklu]"  },
      { person: "3p",  arabic: "ياكلو", arabizi: "Yeklou",  phonetic: "[jeklu]"  },
    ],
    imperatif: [
      { person: "2s", arabic: "كل",  arabizi: "Kol",   phonetic: "[kol]"  },
      { person: "2p", arabic: "كلو", arabizi: "Kolou", phonetic: "[kolu]" },
    ],
  },
};

/**
 * VERBE 2 — Parler : حكى (H-K-Y)
 */
const VERB_PARLER: Verb = {
  id: "v_hky",
  infinitiveFrench: "parler",
  rootArabic: "ح-ك-ي",
  rootArabizi: "H-K-Y",
  isIrregular: false,
  level: "debutant",
  tags: ["communication", "quotidien", "haute-frequence"],
  notes:
    "Verbe défectueux (racine à finale semi-vocalique). " +
    "Très utilisé pour dire parler, raconter, discuter.",
  conjugations: {
    passe: [
      { person: "1s",  arabic: "حكيت",  arabizi: "Hkit",   phonetic: "[hkit]"  },
      { person: "2s",  arabic: "حكيت",  arabizi: "Hkit",   phonetic: "[hkit]"  },
      { person: "3sm", arabic: "حكى",   arabizi: "Hka",    phonetic: "[hka]"   },
      { person: "3sf", arabic: "حكات",  arabizi: "Hket",   phonetic: "[hket]"  },
      { person: "1p",  arabic: "حكينا", arabizi: "Hkina",  phonetic: "[hkina]" },
      { person: "2p",  arabic: "حكيتم", arabizi: "Hkitou", phonetic: "[hkitu]" },
      { person: "3p",  arabic: "حكاو",  arabizi: "Hkaw",   phonetic: "[hkaw]"  },
    ],
    present: [
      { person: "1s",  arabic: "نحكي",  arabizi: "Nahki",  phonetic: "[nahki]" },
      { person: "2s",  arabic: "تحكي",  arabizi: "Tahki",  phonetic: "[tahki]" },
      { person: "3sm", arabic: "يحكي",  arabizi: "Yahki",  phonetic: "[jahki]" },
      { person: "3sf", arabic: "تحكي",  arabizi: "Tahki",  phonetic: "[tahki]" },
      { person: "1p",  arabic: "نحكيو", arabizi: "Nahkiw", phonetic: "[nahkiw]"},
      { person: "2p",  arabic: "تحكيو", arabizi: "Tahkiw", phonetic: "[tahkiw]"},
      { person: "3p",  arabic: "يحكيو", arabizi: "Yahkiw", phonetic: "[jahkiw]"},
    ],
    imperatif: [
      { person: "2s", arabic: "احكي",  arabizi: "Ahki",  phonetic: "[ahki]"  },
      { person: "2p", arabic: "احكيو", arabizi: "Ahkiw", phonetic: "[ahkiw]" },
    ],
  },
};

// ─── PACK 01 ────────────────────────────────────────────────────────────────────
// Verbes du quotidien sous forme de citation (1re personne du singulier, présent).
// Chaque entrée porte un exemple trilingue obligatoire (arabe + arabizi + français).
// rootArabic / rootArabizi servent ici de forme de citation affichée (le headword).

const PACK_01: Verb[] = [
  {
    id: 'v_n7eb', infinitiveFrench: "je veux / j'aime", rootArabic: 'نحب', rootArabizi: 'n7eb',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحب', arabizi: 'n7eb' }] },
    example: { arabic: 'نحب قهوة', arabizi: 'N7eb 9ahwa', french: 'Je veux un café' },
  },
  {
    id: 'v_nemchi', infinitiveFrench: 'je vais / je marche', rootArabic: 'نمشي', rootArabizi: 'nemchi',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'transport'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نمشي', arabizi: 'nemchi' }] },
    example: { arabic: 'نمشي للسوق', arabizi: 'Nemchi lel sou9', french: 'Je vais au marché' },
  },
  {
    id: 'v_nji', infinitiveFrench: 'je viens', rootArabic: 'نجي', rootArabizi: 'nji',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نجي', arabizi: 'nji' }] },
    example: { arabic: 'نجي غدوة', arabizi: 'Nji ghodwa', french: 'Je viens demain' },
  },
  {
    id: 'v_nakel', infinitiveFrench: 'je mange', rootArabic: 'ناكل', rootArabizi: 'nakel',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'nourriture'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'ناكل', arabizi: 'nakel' }] },
    example: { arabic: 'ناكل خبز', arabizi: 'Nakel khobz', french: 'Je mange du pain' },
  },
  {
    id: 'v_nechreb', infinitiveFrench: 'je bois', rootArabic: 'نشرب', rootArabizi: 'nechreb',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'nourriture'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نشرب', arabizi: 'nechreb' }] },
    example: { arabic: 'نشرب ماء', arabizi: 'Nechreb ma', french: "Je bois de l'eau" },
  },
  {
    id: 'v_n9oul', infinitiveFrench: 'je dis', rootArabic: 'نقول', rootArabizi: 'n9oul',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقول', arabizi: 'n9oul' }] },
    example: { arabic: 'نقول عسلامة', arabizi: 'N9oul Aaslema', french: 'Je dis bonjour' },
  },
  {
    id: 'v_na3mel', infinitiveFrench: 'je fais', rootArabic: 'نعمل', rootArabizi: 'na3mel',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعمل', arabizi: 'na3mel' }] },
    example: { arabic: 'نعمل قهوة', arabizi: 'Na3mel 9ahwa', french: 'Je fais du café' },
  },
  {
    id: 'v_na3ref', infinitiveFrench: 'je sais / je connais', rootArabic: 'نعرف', rootArabizi: 'na3ref',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعرف', arabizi: 'na3ref' }] },
    example: { arabic: 'نعرف شوية تونسي', arabizi: 'Na3ref chwaya tounsi', french: 'Je connais un peu de tunisien' },
  },
  {
    id: 'v_nefhem', infinitiveFrench: 'je comprends', rootArabic: 'نفهم', rootArabizi: 'nefhem',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نفهم', arabizi: 'nefhem' }] },
    example: { arabic: 'نفهم شوية', arabizi: 'Nefhem chwaya', french: 'Je comprends un peu' },
  },
  {
    id: 'v_nechri', infinitiveFrench: "j'achète", rootArabic: 'نشري', rootArabizi: 'nechri',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'shopping'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نشري', arabizi: 'nechri' }] },
    example: { arabic: 'نشري خبز', arabizi: 'Nechri khobz', french: "J'achète du pain" },
  },
  {
    id: 'v_nkhalles', infinitiveFrench: 'je paie', rootArabic: 'نخلص', rootArabizi: 'nkhalles',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'shopping'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نخلص', arabizi: 'nkhalles' }] },
    example: { arabic: 'نخلص توّا', arabizi: 'Nkhalles tawa', french: 'Je paie maintenant' },
  },
  {
    id: 'v_nchouf', infinitiveFrench: 'je vois / je regarde', rootArabic: 'نشوف', rootArabizi: 'nchouf',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نشوف', arabizi: 'nchouf' }] },
    example: { arabic: 'نشوف الطوموبيل', arabizi: 'Nchouf el tomobil', french: 'Je vois la voiture' },
  },
  {
    id: 'v_nesma3', infinitiveFrench: "j'entends / j'écoute", rootArabic: 'نسمع', rootArabizi: 'nesma3',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسمع', arabizi: 'nesma3' }] },
    example: { arabic: 'نسمع مزيكا', arabizi: 'Nesma3 mousi9a', french: "J'écoute de la musique" },
  },
  {
    id: 'v_na7ki', infinitiveFrench: 'je parle / je raconte', rootArabic: 'نحكي', rootArabizi: 'na7ki',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحكي', arabizi: 'na7ki' }] },
    example: { arabic: 'نحكي تونسي', arabizi: 'Na7ki tounsi', french: 'Je parle tunisien' },
  },
  {
    id: 'v_noskon', infinitiveFrench: "j'habite", rootArabic: 'نسكن', rootArabizi: 'noskon',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسكن', arabizi: 'noskon' }] },
    example: { arabic: 'نسكن في تونس', arabizi: 'Noskon fi Tounes', french: "J'habite en Tunisie" },
  },
  {
    id: 'v_nekhdem', infinitiveFrench: 'je travaille', rootArabic: 'نخدم', rootArabizi: 'nekhdem',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'travail'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نخدم', arabizi: 'nekhdem' }] },
    example: { arabic: 'نخدم اليوم', arabizi: 'Nekhdem elyoum', french: "Je travaille aujourd'hui" },
  },
  {
    id: 'v_na9ra', infinitiveFrench: "j'étudie / je lis", rootArabic: 'نقرا', rootArabizi: 'na9ra',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقرا', arabizi: 'na9ra' }] },
    example: { arabic: 'نقرا تونسي', arabizi: 'Na9ra tounsi', french: "J'étudie le tunisien" },
  },
  {
    id: 'v_no93od', infinitiveFrench: "je reste / je m'assois", rootArabic: 'نقعد', rootArabizi: 'no93od',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقعد', arabizi: 'no93od' }] },
    example: { arabic: 'نقعد في الدار', arabizi: 'No93od fi dar', french: 'Je reste à la maison' },
  },
  {
    id: 'v_nerkeb', infinitiveFrench: 'je monte / je prends un transport', rootArabic: 'نركب', rootArabizi: 'nerkeb',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'transport'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نركب', arabizi: 'nerkeb' }] },
    example: { arabic: 'نركب في اللواج', arabizi: 'Nerkeb fel louage', french: 'Je prends le louage' },
  },
  {
    id: 'v_nahbet', infinitiveFrench: 'je descends', rootArabic: 'نهبط', rootArabizi: 'nahbet',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'transport'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نهبط', arabizi: 'nahbet' }] },
    example: { arabic: 'نهبط هنا', arabizi: 'Nahbet houni', french: 'Je descends ici' },
  },
  {
    id: 'v_na3ti', infinitiveFrench: 'je donne', rootArabic: 'نعطي', rootArabizi: 'na3ti',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعطي', arabizi: 'na3ti' }] },
    example: { arabic: 'نعطيك الفلوس', arabizi: 'Na3tik el flous', french: "Je te donne l'argent" },
  },
  {
    id: 'v_nakhou', infinitiveFrench: 'je prends', rootArabic: 'ناخو', rootArabizi: 'nakhou',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'transport'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'ناخو', arabizi: 'nakhou' }] },
    example: { arabic: 'ناخو تاكسي', arabizi: 'Nakhou taxi', french: 'Je prends un taxi' },
  },
  {
    id: 'v_nestanna', infinitiveFrench: "j'attends", rootArabic: 'نستنّى', rootArabizi: 'nestanna',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'transport'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نستنّى', arabizi: 'nestanna' }] },
    example: { arabic: 'نستنّى اللواج', arabizi: 'Nestanna el louage', french: "J'attends le louage" },
  },
  {
    id: 'v_n7ell', infinitiveFrench: "j'ouvre", rootArabic: 'نحل', rootArabizi: 'n7ell',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'maison'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحل', arabizi: 'n7ell' }] },
    example: { arabic: 'نحل الباب', arabizi: 'N7ell el beb', french: "J'ouvre la porte" },
  },
  {
    id: 'v_nsakker', infinitiveFrench: 'je ferme', rootArabic: 'نسكّر', rootArabizi: 'nsakker',
    isIrregular: false, level: 'debutant', tags: ['pack01', 'maison'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسكّر', arabizi: 'nsakker' }] },
    example: { arabic: 'نسكّر الشباك', arabizi: 'Nsakker el chebbek', french: 'Je ferme la fenêtre' },
  },
];

// ─── PACK 02 ────────────────────────────────────────────────────────────────────

const PACK_02: Verb[] = [
  {
    id: 'v_nelbes', infinitiveFrench: "je porte / je m'habille", rootArabic: 'نلبس', rootArabizi: 'nelbes',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'vetements'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نلبس', arabizi: 'nelbes' }] },
    example: { arabic: 'نلبس مريول', arabizi: 'Nelbes maryoul', french: 'Je porte un t-shirt' },
  },
  {
    id: 'v_naghsel', infinitiveFrench: 'je lave', rootArabic: 'نغسل', rootArabizi: 'naghsel',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'maison'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نغسل', arabizi: 'naghsel' }] },
    example: { arabic: 'نغسل يدي', arabizi: 'Naghsel yeddi', french: 'Je lave ma main / mes mains' },
  },
  {
    id: 'v_ntayeb', infinitiveFrench: 'je cuisine / je fais cuire', rootArabic: 'نطيب', rootArabizi: 'ntayeb',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'nourriture'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نطيب', arabizi: 'ntayeb' }] },
    example: { arabic: 'نطيب عجة', arabizi: 'Ntayeb ojja', french: 'Je cuisine une ojja' },
  },
  {
    id: 'v_n9oss', infinitiveFrench: 'je coupe', rootArabic: 'نقص', rootArabizi: 'n9oss',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'nourriture'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقص', arabizi: 'n9oss' }] },
    example: { arabic: 'نقص الطماطم', arabizi: 'N9oss el tmatem', french: 'Je coupe les tomates' },
  },
  {
    id: 'v_nzid', infinitiveFrench: "j'ajoute / je recommence", rootArabic: 'نزيد', rootArabizi: 'nzid',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'nourriture'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نزيد', arabizi: 'nzid' }] },
    example: { arabic: 'نزيد شوية ملح', arabizi: 'Nzid chwaya mel7', french: "J'ajoute un peu de sel" },
  },
  {
    id: 'v_n7ot', infinitiveFrench: 'je mets / je pose', rootArabic: 'نحط', rootArabizi: 'n7ot',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحط', arabizi: 'n7ot' }] },
    example: { arabic: 'نحط القهوة على الطاولة', arabizi: 'N7ot el 9ahwa 3la el tawla', french: 'Je pose le café sur la table' },
  },
  {
    id: 'v_nel9a', infinitiveFrench: 'je trouve', rootArabic: 'نلقى', rootArabizi: 'nel9a',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نلقى', arabizi: 'nel9a' }] },
    example: { arabic: 'نلقى التاكسي', arabizi: 'Nel9a el taxi', french: 'Je trouve le taxi' },
  },
  {
    id: 'v_ndhi3', infinitiveFrench: 'je me perds / je perds', rootArabic: 'نضيع', rootArabizi: 'ndhi3',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نضيع', arabizi: 'ndhi3' }] },
    example: { arabic: 'نضيع في السوق', arabizi: 'Ndhi3 fel sou9', french: 'Je me perds au marché' },
  },
  {
    id: 'v_n3awen', infinitiveFrench: "j'aide", rootArabic: 'نعاون', rootArabizi: 'n3awen',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعاون', arabizi: 'n3awen' }] },
    example: { arabic: 'نعاون أمّي', arabizi: 'N3awen ommi', french: "J'aide ma mère" },
  },
  {
    id: 'v_nes2el', infinitiveFrench: 'je demande', rootArabic: 'نسأل', rootArabizi: 'nes2el',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسأل', arabizi: 'nes2el' }] },
    example: { arabic: 'نسأل على الطريق', arabizi: 'Nes2el 3la el tri9', french: 'Je demande le chemin' },
  },
  {
    id: 'v_nebda', infinitiveFrench: 'je commence', rootArabic: 'نبدى', rootArabizi: 'nebda',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نبدى', arabizi: 'nebda' }] },
    example: { arabic: 'نبدى الدرس', arabizi: 'Nebda el dars', french: 'Je commence la leçon' },
  },
  {
    id: 'v_nkammel', infinitiveFrench: 'je termine / je complète', rootArabic: 'نكمّل', rootArabizi: 'nkammel',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: true,
    note: "Vérifier que l'arabizi est bien nkammel, correction probable de nkammes.",
    conjugations: { present: [{ person: '1s', arabic: 'نكمّل', arabizi: 'nkammel' }] },
    example: { arabic: 'نكمّل الخدمة', arabizi: 'Nkammel el khedma', french: 'Je termine le travail' },
  },
  {
    id: 'v_nerta7', infinitiveFrench: 'je me repose', rootArabic: 'نرتاح', rootArabizi: 'nerta7',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نرتاح', arabizi: 'nerta7' }] },
    example: { arabic: 'نرتاح شوية', arabizi: 'Nerta7 chwaya', french: 'Je me repose un peu' },
  },
  {
    id: 'v_nel3ab', infinitiveFrench: 'je joue', rootArabic: 'نلعب', rootArabizi: 'nel3ab',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'loisirs'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نلعب', arabizi: 'nel3ab' }] },
    example: { arabic: 'نلعب مع خويا', arabizi: 'Nel3ab m3a khouya', french: 'Je joue avec mon frère' },
  },
  {
    id: 'v_n7ebbes', infinitiveFrench: "j'arrête", rootArabic: 'نحبس', rootArabizi: 'n7ebbes',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحبس', arabizi: 'n7ebbes' }] },
    example: { arabic: 'نحبس هنا', arabizi: 'N7ebbes houni', french: "Je m'arrête ici" },
  },
  {
    id: 'v_nokhrej', infinitiveFrench: 'je sors', rootArabic: 'نخرج', rootArabizi: 'nokhrej',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نخرج', arabizi: 'nokhrej' }] },
    example: { arabic: 'نخرج مع صحابي', arabizi: 'Nokhrej m3a s7abi', french: 'Je sors avec mes amis' },
  },
  {
    id: 'v_nodkhol', infinitiveFrench: "j'entre", rootArabic: 'ندخل', rootArabizi: 'nodkhol',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'ندخل', arabizi: 'nodkhol' }] },
    example: { arabic: 'ندخل للدار', arabizi: 'Nodkhol lel dar', french: "J'entre dans la maison" },
  },
  {
    id: 'v_nbaddel', infinitiveFrench: 'je change', rootArabic: 'نبدّل', rootArabizi: 'nbaddel',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نبدّل', arabizi: 'nbaddel' }] },
    example: { arabic: 'نبدّل الصباط', arabizi: 'Nbaddel el sabbat', french: 'Je change les chaussures' },
  },
  {
    id: 'v_n9abel', infinitiveFrench: 'je rencontre / je reçois', rootArabic: 'نقابل', rootArabizi: 'n9abel',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقابل', arabizi: 'n9abel' }] },
    example: { arabic: 'نقابل صحابي', arabizi: 'N9abel s7abi', french: 'Je rencontre mes amis' },
  },
  {
    id: 'v_n3ayet', infinitiveFrench: "j'appelle / je crie (selon contexte)", rootArabic: 'نعيط', rootArabizi: 'n3ayet',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'communication'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعيط', arabizi: 'n3ayet' }] },
    example: { arabic: 'نعيط لخالتي', arabizi: 'N3ayet l khalti', french: "J'appelle ma tante" },
  },
  {
    id: 'v_nesta3mel', infinitiveFrench: "j'utilise", rootArabic: 'نستعمل', rootArabizi: 'nesta3mel',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'quotidien'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نستعمل', arabizi: 'nesta3mel' }] },
    example: { arabic: 'نستعمل التليفون', arabizi: 'Nesta3mel el tilifoun', french: "J'utilise le téléphone" },
  },
  {
    id: 'v_nsawwer', infinitiveFrench: 'je prends en photo / je filme', rootArabic: 'نصوّر', rootArabizi: 'nsawwer',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'loisirs'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نصوّر', arabizi: 'nsawwer' }] },
    example: { arabic: 'نصوّر البحر', arabizi: 'Nsawwer el b7ar', french: 'Je prends la mer en photo' },
  },
  {
    id: 'v_nefra7', infinitiveFrench: 'je suis content / je me réjouis', rootArabic: 'نفرح', rootArabizi: 'nefra7',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'emotions'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نفرح', arabizi: 'nefra7' }] },
    example: { arabic: 'نفرح برشة', arabizi: 'Nefra7 barsha', french: 'Je suis très content' },
  },
  {
    id: 'v_nebki', infinitiveFrench: 'je pleure', rootArabic: 'نبكي', rootArabizi: 'nebki',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'emotions'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نبكي', arabizi: 'nebki' }] },
    example: { arabic: 'نبكي شوية', arabizi: 'Nebki chwaya', french: 'Je pleure un peu' },
  },
  {
    id: 'v_nodh7ok', infinitiveFrench: 'je ris', rootArabic: 'نضحك', rootArabizi: 'nodh7ok',
    isIrregular: false, level: 'debutant', tags: ['pack02', 'emotions'], needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نضحك', arabizi: 'nodh7ok' }] },
    example: { arabic: 'نضحك معاك', arabizi: 'Nodh7ok m3ak', french: 'Je ris avec toi' },
  },
];

export const verbs: Readonly<Verb[]> = [
  VERB_MANGER,
  VERB_PARLER,
  ...PACK_01,
  ...PACK_02,
] as const;

export const verbsById: Readonly<Record<string, Verb>> = Object.fromEntries(
  verbs.map((v) => [v.id, v])
);

export function getVerbById(id: string): Verb | undefined {
  return verbsById[id];
}

export function getVerbsByLevel(level: Verb["level"]): Verb[] {
  return verbs.filter((v) => v.level === level);
}
