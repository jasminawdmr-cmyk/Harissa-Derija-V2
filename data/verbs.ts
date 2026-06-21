/**
 * /data/verbs.ts
 * Verbes en darija tunisien — structure définitive.
 * Convention d'ID : "v_<arabizi>"
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 * Arabizi officiel : kh=خ · gh=غ · ch=ش · dh=ذ · 3=ع · 7=ح · 9=ق · 2=ء
 */

import type { Verb } from "../types";

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

// ─── VAGUE 1 — UNIVERS « AU CAFÉ » ───────────────────────────────────────────────
// 8 verbes du café. Arabizi officiel (kh/gh/ch/dh/3/7/9/2). universe: 'cafe'.

const PACK_CAFE: Verb[] = [
  {
    id: 'v_notleb', infinitiveFrench: 'je commande / je demande', rootArabic: 'نطلب', rootArabizi: 'notleb',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'commander'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نطلب', arabizi: 'notleb' }] },
    example: { arabic: 'نطلب قهوة', arabizi: 'Notleb 9ahwa', french: 'Je commande un café' },
  },
  {
    id: 'v_ndhou9', infinitiveFrench: 'je goûte', rootArabic: 'نذوق', rootArabizi: 'ndhou9',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'gouter'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نذوق', arabizi: 'ndhou9' }] },
    example: { arabic: 'نذوق القاتو', arabizi: 'Ndhou9 el gato', french: 'Je goûte le gâteau' },
  },
  {
    id: 'v_nekhtar', infinitiveFrench: 'je choisis', rootArabic: 'نختار', rootArabizi: 'nekhtar',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'preferences'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نختار', arabizi: 'nekhtar' }] },
    example: { arabic: 'نختار عصير', arabizi: 'Nekhtar 3asir', french: 'Je choisis un jus' },
  },
  {
    id: 'v_njib', infinitiveFrench: "j'apporte / je ramène", rootArabic: 'نجيب', rootArabizi: 'njib',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'serveur'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نجيب', arabizi: 'njib' }] },
    example: { arabic: 'نجيب الحساب', arabizi: 'Njib el 7seb', french: "J'apporte l'addition" },
  },
  {
    id: 'v_n3abbi', infinitiveFrench: 'je remplis', rootArabic: 'نعبّي', rootArabizi: 'n3abbi',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'serveur'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعبّي', arabizi: 'n3abbi' }] },
    example: { arabic: 'نعبّي الكاس', arabizi: 'N3abbi el kes', french: 'Je remplis le verre' },
  },
  {
    id: 'v_nfaddel', infinitiveFrench: 'je préfère', rootArabic: 'نفضّل', rootArabizi: 'nfaddel',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'preferences'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نفضّل', arabizi: 'nfaddel' }] },
    example: { arabic: 'نفضّل تاي', arabizi: 'Nfaddel tay', french: 'Je préfère le thé' },
  },
  {
    id: 'v_na3zem', infinitiveFrench: "j'invite / j'offre", rootArabic: 'نعزم', rootArabizi: 'na3zem',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'amis', 'politesse'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعزم', arabizi: 'na3zem' }] },
    example: { arabic: 'نعزمك على قهوة', arabizi: 'Na3zmek 3la 9ahwa', french: "Je t'invite à un café" },
  },
  {
    id: 'v_nestanes', infinitiveFrench: 'je me détends / je profite', rootArabic: 'نستانس', rootArabizi: 'nestanes',
    isIrregular: false, level: 'debutant', tags: ['cafe', 'ambiance'], universe: 'cafe', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نستانس', arabizi: 'nestanes' }] },
    example: { arabic: 'نستانس في القهوة', arabizi: 'Nestanes fel 9ahwa', french: 'Je me détends au café' },
  },
];

// ─── VAGUE 2 — UNIVERS « SALUTATIONS » (8 verbes) ────────────────────────────────

const PACK_SALUT: Verb[] = [
  {
    id: 'v_nsellem', infinitiveFrench: 'je salue', rootArabic: 'نسلّم', rootArabizi: 'nsellem',
    isIrregular: false, level: 'debutant', tags: ['salutations'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسلّم', arabizi: 'nsellem' }] },
    example: { arabic: 'نسلّم على صاحبي', arabizi: 'Nsellem 3la sa7bi', french: 'Je salue mon ami' },
  },
  {
    id: 'v_nra77eb', infinitiveFrench: "j'accueille / je souhaite la bienvenue", rootArabic: 'نرحّب', rootArabizi: 'nra77eb',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'accueil'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نرحّب', arabizi: 'nra77eb' }] },
    example: { arabic: 'نرحّب بيك', arabizi: 'Nra77eb bik', french: 'Je te souhaite la bienvenue' },
  },
  {
    id: 'v_nochkor', infinitiveFrench: 'je remercie', rootArabic: 'نشكر', rootArabizi: 'nochkor',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'politesse'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نشكر', arabizi: 'nochkor' }] },
    example: { arabic: 'نشكرك برشة', arabizi: 'Nochkrek barsha', french: 'Je te remercie beaucoup' },
  },
  {
    id: 'v_nesm7', infinitiveFrench: "je pardonne / j'excuse", rootArabic: 'نسمح', rootArabizi: 'nesm7',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'politesse'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسمح', arabizi: 'nesm7' }] },
    example: { arabic: 'نسمحلك', arabizi: 'Nesm7lek', french: 'Je te pardonne' },
  },
  {
    id: 'v_njaweb', infinitiveFrench: 'je réponds', rootArabic: 'نجاوب', rootArabizi: 'njaweb',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'communication'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نجاوب', arabizi: 'njaweb' }] },
    example: { arabic: 'نجاوب على السؤال', arabizi: 'Njaweb 3la so2el', french: 'Je réponds à la question' },
  },
  {
    id: 'v_n3arref', infinitiveFrench: 'je présente', rootArabic: 'نعرّف', rootArabizi: 'n3arref',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'presentation'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نعرّف', arabizi: 'n3arref' }] },
    example: { arabic: 'نعرّفك بصاحبي', arabizi: 'N3arrfek b sa7bi', french: 'Je te présente mon ami' },
  },
  {
    id: 'v_nsa9si', infinitiveFrench: 'je demande des nouvelles', rootArabic: 'نسقسي', rootArabizi: 'nsa9si',
    isIrregular: false, level: 'debutant', tags: ['salutations', 'questions'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نسقسي', arabizi: 'nsa9si' }] },
    example: { arabic: 'نسقسي عليك', arabizi: 'Nsa9si 3lik', french: 'Je demande de tes nouvelles' },
  },
  {
    id: 'v_ntmanna', infinitiveFrench: 'je souhaite', rootArabic: 'نتمنّى', rootArabizi: 'ntmanna',
    isIrregular: false, level: 'debutant', tags: ['salutations'], universe: 'salutations', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نتمنّى', arabizi: 'ntmanna' }] },
    example: { arabic: 'نتمنّالك الصحة', arabizi: 'Ntmannalek essa77a', french: 'Je te souhaite la santé' },
  },
];

// ─── VAGUE 2 — UNIVERS « AU MARCHÉ » (8 verbes) ──────────────────────────────────

const PACK_MARCHE: Verb[] = [
  {
    id: 'v_nbi3', infinitiveFrench: 'je vends', rootArabic: 'نبيع', rootArabizi: 'nbi3',
    isIrregular: false, level: 'debutant', tags: ['marche', 'commerce'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نبيع', arabizi: 'nbi3' }] },
    example: { arabic: 'نبيع الخضرة', arabizi: 'Nbi3 el khodhra', french: 'Je vends les légumes' },
  },
  {
    id: 'v_nfasel', infinitiveFrench: 'je marchande / je négocie', rootArabic: 'نفاصل', rootArabizi: 'nfasel',
    isIrregular: false, level: 'debutant', tags: ['marche', 'prix'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نفاصل', arabizi: 'nfasel' }] },
    example: { arabic: 'نفاصل في السومة', arabizi: 'Nfasel fel souma', french: 'Je négocie le prix' },
  },
  {
    id: 'v_nzen', infinitiveFrench: 'je pèse', rootArabic: 'نزن', rootArabizi: 'nzen',
    isIrregular: false, level: 'debutant', tags: ['marche', 'commerce'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نزن', arabizi: 'nzen' }] },
    example: { arabic: 'نزن كيلو طماطم', arabizi: 'Nzen kilo tmatem', french: 'Je pèse un kilo de tomates' },
  },
  {
    id: 'v_n7seb', infinitiveFrench: 'je compte / je calcule', rootArabic: 'نحسب', rootArabizi: 'na7seb',
    isIrregular: false, level: 'debutant', tags: ['marche', 'prix'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نحسب', arabizi: 'na7seb' }] },
    example: { arabic: 'نحسب الفلوس', arabizi: 'Na7seb el flous', french: "Je compte l'argent" },
  },
  {
    id: 'v_nlef', infinitiveFrench: "j'emballe / j'enveloppe", rootArabic: 'نلف', rootArabizi: 'nlef',
    isIrregular: false, level: 'debutant', tags: ['marche', 'commerce'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نلف', arabizi: 'nlef' }] },
    example: { arabic: 'نلف الخبز', arabizi: 'Nlef el khobz', french: "J'emballe le pain" },
  },
  {
    id: 'v_nna99es', infinitiveFrench: 'je baisse (le prix) / je réduis', rootArabic: 'ننقّص', rootArabizi: 'nna99es',
    isIrregular: false, level: 'debutant', tags: ['marche', 'prix'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'ننقّص', arabizi: 'nna99es' }] },
    example: { arabic: 'ننقّص في السومة', arabizi: 'Nna99es fel souma', french: 'Je baisse le prix' },
  },
  {
    id: 'v_nwarri', infinitiveFrench: 'je montre', rootArabic: 'نورّي', rootArabizi: 'nwarri',
    isIrregular: false, level: 'debutant', tags: ['marche', 'commerce'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نورّي', arabizi: 'nwarri' }] },
    example: { arabic: 'نورّيك الخضرة', arabizi: 'Nwarrik el khodhra', french: 'Je te montre les légumes' },
  },
  {
    id: 'v_n9alleb', infinitiveFrench: 'je fouille / je cherche (parmi)', rootArabic: 'نقلّب', rootArabizi: 'n9alleb',
    isIrregular: false, level: 'debutant', tags: ['marche', 'commerce'], universe: 'marche', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نقلّب', arabizi: 'n9alleb' }] },
    example: { arabic: 'نقلّب في الغلة', arabizi: 'N9alleb fel ghella', french: 'Je fouille parmi les fruits' },
  },
];

// ─── VAGUE 2 — UNIVERS « MAISON » (8 verbes) ─────────────────────────────────────

const PACK_MAISON: Verb[] = [
  {
    id: 'v_nnadhaf', infinitiveFrench: 'je nettoie', rootArabic: 'ننظّف', rootArabizi: 'nnadhaf',
    isIrregular: false, level: 'debutant', tags: ['maison', 'menage'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'ننظّف', arabizi: 'nnadhaf' }] },
    example: { arabic: 'ننظّف الدار', arabizi: 'Nnadhaf el dar', french: 'Je nettoie la maison' },
  },
  {
    id: 'v_nrattab', infinitiveFrench: 'je range', rootArabic: 'نرتّب', rootArabizi: 'nrattab',
    isIrregular: false, level: 'debutant', tags: ['maison', 'menage'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نرتّب', arabizi: 'nrattab' }] },
    example: { arabic: 'نرتّب البيت', arabizi: 'Nrattab el bit', french: 'Je range la chambre' },
  },
  {
    id: 'v_noknes', infinitiveFrench: 'je balaie', rootArabic: 'نكنس', rootArabizi: 'noknes',
    isIrregular: false, level: 'debutant', tags: ['maison', 'menage'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نكنس', arabizi: 'noknes' }] },
    example: { arabic: 'نكنس الأرض', arabizi: 'Noknes el ardh', french: 'Je balaie le sol' },
  },
  {
    id: 'v_nor9od', infinitiveFrench: 'je dors', rootArabic: 'نرقد', rootArabizi: 'nor9od',
    isIrregular: false, level: 'debutant', tags: ['maison'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نرقد', arabizi: 'nor9od' }] },
    example: { arabic: 'نرقد بكري', arabizi: 'Nor9od bekri', french: 'Je dors tôt' },
  },
  {
    id: 'v_nfi9', infinitiveFrench: 'je me réveille', rootArabic: 'نفيق', rootArabizi: 'nfi9',
    isIrregular: false, level: 'debutant', tags: ['maison'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نفيق', arabizi: 'nfi9' }] },
    example: { arabic: 'نفيق الصباح', arabizi: 'Nfi9 essbe7', french: 'Je me réveille le matin' },
  },
  {
    id: 'v_ncha33el', infinitiveFrench: "j'allume", rootArabic: 'نشعّل', rootArabizi: 'ncha33el',
    isIrregular: false, level: 'debutant', tags: ['maison'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نشعّل', arabizi: 'ncha33el' }] },
    example: { arabic: 'نشعّل الضوء', arabizi: 'Ncha33el el dhou', french: "J'allume la lumière" },
  },
  {
    id: 'v_natfi', infinitiveFrench: "j'éteins", rootArabic: 'نطفي', rootArabizi: 'natfi',
    isIrregular: false, level: 'debutant', tags: ['maison'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نطفي', arabizi: 'natfi' }] },
    example: { arabic: 'نطفي التلفزة', arabizi: 'Natfi el telfza', french: "J'éteins la télé" },
  },
  {
    id: 'v_nsalla7', infinitiveFrench: 'je répare', rootArabic: 'نصلّح', rootArabizi: 'nsalla7',
    isIrregular: false, level: 'debutant', tags: ['maison'], universe: 'maison', needsValidation: false,
    conjugations: { present: [{ person: '1s', arabic: 'نصلّح', arabizi: 'nsalla7' }] },
    example: { arabic: 'نصلّح الباب', arabizi: 'Nsalla7 el beb', french: 'Je répare la porte' },
  },
];

export const verbs: Readonly<Verb[]> = [
  ...PACK_01,
  ...PACK_02,
  ...PACK_CAFE,
  ...PACK_SALUT,
  ...PACK_MARCHE,
  ...PACK_MAISON,
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
