/**
 * /data/dialogues.ts
 * Dialogues authentiques en darija tunisien.
 *
 * Convention : arabic = arabe · arabizi = translittération · french = traduction
 * Convention arabizi : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Interlocuteurs : A = apprenant · B = locuteur natif
 */

import type { Dialogue } from '../types';

/**
 * DIALOGUE 1 — Retrouvailles en famille
 */
const DIALOGUE_FAMILLE_RETROUVAILLES: Dialogue = {
  id: 'dial_famille_01',
  title: 'Retrouvailles en famille',
  context: 'famille',
  level: 'debutant',
  situationFrench:
    'Yasmine appelle sa grand-mère depuis Paris. C\'est leur rituel du dimanche.',
  situationArabic: undefined,
  estimatedMinutes: 5,
  keyWordIds: ['w_aaslema', 'w_3ayla'],
  grammarRuleIds: ['gr_negation_simple'],
  culturalNote:
    'En Tunisie, les appels en famille commencent presque toujours par une ' +
    'longue série de salutations et de questions sur la santé de chacun. ' +
    'Ne pas s\'en tenir à un simple "ça va ?" est une marque de respect et d\'affection. ' +
    'La grand-mère répond souvent avec "الحمد لله" (El hamdoulillah = Dieu merci) ' +
    'avant de donner des nouvelles — c\'est une formule de gratitude réflexe.',
  lines: [
    {
      speaker: 'A',
      arabic: 'مرحبا يما، كيفاش حالك؟',
      arabizi: 'Merhba yema, kifesh 7alek?',
      phonetic: '[meɾħba jeːma kɪfɛʃ ħalɛk]',
      french: 'Bonjour maman, comment tu vas ?',
      wordIds: ['w_aaslema'],
      note:
        '"Yema" (يما) signifie "maman" mais s\'utilise aussi pour s\'adresser ' +
        'affectueusement à une femme plus âgée de la famille.',
    },
    {
      speaker: 'B',
      arabic: 'مرحبا حبيبتي، الحمد لله بخير. وأنت؟',
      arabizi: 'Merhba 7bibti, el hamdoulillah bekhir. W enti?',
      phonetic: '[meɾħba ħbiːbti ɛl ħamdulɪlaː bɛxiːɾ w ɛnti]',
      french: 'Bonjour ma chérie, Dieu merci ça va. Et toi ?',
      note:
        '"حبيبتي" (7bibti) = "ma chérie / mon cœur". ' +
        '"بخير" (bekhir) = littéralement "dans le bien", équivalent de "ça va bien".',
    },
    {
      speaker: 'A',
      arabic: 'أنا بخير. كيفاش العيلة كلها؟',
      arabizi: 'Ena bekhir. Kifesh el-3ayla kolha?',
      phonetic: '[ɛna bɛxiːɾ kɪfɛʃ ɛl ʕaːjla kɔlha]',
      french: 'Je vais bien. Comment va toute la famille ?',
      wordIds: ['w_3ayla'],
      note:
        '"كلها" (kolha) = "toute / en entier". ' +
        'Demander des nouvelles de "toute la famille" d\'un coup est la norme.',
    },
    {
      speaker: 'B',
      arabic: 'كلهم بخير الحمد لله. متى تجي لتونس؟',
      arabizi: 'Kolhom bekhir el hamdoulillah. Waqteh tji l-Tunes?',
      phonetic: '[kɔlhom bɛxiːɾ ɛl ħamdulɪlaː waqtɛħ tʒɪ l tuːnɛs]',
      french: 'Ils vont tous bien, Dieu merci. Quand tu viens en Tunisie ?',
      note:
        '"متى تجي" (waqteh tji) = "quand tu viens". ' +
        'Cette question est quasi-obligatoire dans tout appel avec la diaspora !',
    },
  ],
};

/**
 * DIALOGUE 2 — Au marché
 */
const DIALOGUE_MARCHE_LEGUMES: Dialogue = {
  id: 'dial_marche_01',
  title: 'Au marché : acheter des légumes',
  context: 'marche',
  level: 'debutant',
  situationFrench:
    'Karim visite sa famille à Tunis et accompagne sa tante au marché central. ' +
    'Il essaie de négocier le prix des tomates.',
  situationArabic: undefined,
  estimatedMinutes: 7,
  keyWordIds: ['w_aaslema'],
  grammarRuleIds: ['gr_negation_simple', 'gr_article_defini'],
  culturalNote:
    'Négocier au marché (السوق, es-souk) est une pratique normale et attendue ' +
    'en Tunisie — ne pas négocier peut même paraître impoli. ' +
    'La formule "غالي بزاف" (ghali bzef = c\'est trop cher) est votre meilleure amie. ' +
    'La transaction se conclut souvent par "يعطيك الصحة" (ya\'atik essa7ha = ' +
    'que Dieu te donne la santé), un remerciement typiquement tunisien.',
  lines: [
    {
      speaker: 'A',
      arabic: 'السلام عليكم، بقداش الطماطم؟',
      arabizi: 'Essalem 3alikum, b-qaddeh et-tmatem?',
      phonetic: '[ɛssaːlɛm ʕaliːkum bqaddɛħ ɛt tmaːtɛm]',
      french: 'Bonjour (paix sur vous), c\'est combien les tomates ?',
      note:
        '"السلام عليكم" est le salut islamique universel, utilisé en toutes circonstances. ' +
        '"بقداش" (b-qaddeh) = "combien ça coûte ?".',
    },
    {
      speaker: 'B',
      arabic: 'وعليكم السلام، ثلاثة دنانير الكيلو',
      arabizi: 'W 3alikum essalem, theltha dinaret el-kilo',
      phonetic: '[w ʕaliːkum ɛssaːlɛm θɛlθa dinaːrɛt ɛl kiːlo]',
      french: 'Et sur vous la paix, trois dinars le kilo.',
      note:
        '"ثلاثة" (theltha) = 3. Le dinar tunisien (DT) est la monnaie locale. ' +
        'La réponse au salut islamique est obligatoire et automatique.',
    },
    {
      speaker: 'A',
      arabic: 'غالي بزاف، ديناران؟',
      arabizi: 'Ghali bzef, dinarein?',
      phonetic: '[ɣaːli bzɛf dinaːrɛjn]',
      french: 'C\'est trop cher, deux dinars ?',
      note:
        '"غالي بزاف" (ghali bzef) = "c\'est très cher", la phrase magique pour négocier. ' +
        '"ديناران" = deux dinars (duel arabe, spécifique au chiffre 2).',
    },
    {
      speaker: 'B',
      arabic: 'ماينجمش، اثنين ونص آخر حاجة',
      arabizi: 'Maynajemch, tnin w nos, akhir 7aja',
      phonetic: '[majnaʒɛmʃ tnɪn w nos aːxɪɾ ħaːʒa]',
      french: 'C\'est pas possible, deux dinars et demi, c\'est mon dernier prix.',
      note:
        '"ماينجمش" = "ce n\'est pas possible" (littéralement "ça ne peut pas"). ' +
        '"آخر حاجة" = "dernière chose / dernier prix" — formule de clôture.',
    },
    {
      speaker: 'A',
      arabic: 'ماشي، يعطيك الصحة',
      arabizi: 'Mechi, ya\'atik essa7ha',
      phonetic: '[maːʃiː jaʕatiːk ɛssaħħa]',
      french: 'D\'accord, que Dieu te donne la santé.',
      note:
        '"ماشي" (mechi) = "d\'accord / OK", l\'un des mots les plus utiles en tunisien. ' +
        '"يعطيك الصحة" est le remerciement standard après un achat.',
    },
  ],
};

// ─── VAGUE 1 — UNIVERS « AU CAFÉ » (3 dialogues) · universe: 'cafe' ───────────────

const DIALOGUE_CAFE_COMMANDER: Dialogue = {
  id: 'd_cafe_01',
  title: 'Commander un café',
  context: 'restaurant',
  level: 'debutant',
  universe: 'cafe',
  situationFrench: "Un client arrive au café et commande auprès du serveur.",
  estimatedMinutes: 3,
  keyWordIds: ['w_9ahwa', 'w_cafe_9ahwa_kahla', 'w_sokker'],
  grammarRuleIds: ['g_cafe_interrogation'],
  culturalNote:
    "Au café tunisien, on précise souvent « ka7la » (noir) ou « bel 7alib » " +
    "(au lait), et le niveau de sucre. Le serveur répond volontiers « bil hna " +
    "wel chifa » (régale-toi).",
  lines: [
    { speaker: 'A', arabic: 'عسلامة، نحب قهوة عيشك', arabizi: 'Aaslema, n7eb 9ahwa 3aychek', french: "Bonjour, je veux un café s'il te plaît", wordIds: ['w_aaslema', 'w_9ahwa'] },
    { speaker: 'B', arabic: 'مرحبا بيك. قهوة كحلة ولا بالحليب؟', arabizi: 'Marhba bik. 9ahwa ka7la wala bel 7alib?', french: 'Bienvenue. Café noir ou au lait ?', wordIds: ['w_cafe_9ahwa_kahla', 'w_cafe_9ahwa_7alib'] },
    { speaker: 'A', arabic: 'كحلة، بلا سكر', arabizi: 'Ka7la, bla sokkor', french: 'Noir, sans sucre', wordIds: ['w_sokker'] },
    { speaker: 'B', arabic: 'بالهنا والشفاء', arabizi: 'Bil hna wel chifa', french: 'Régale-toi' },
  ],
};

const DIALOGUE_CAFE_AMIS: Dialogue = {
  id: 'd_cafe_02',
  title: 'Entre amis au café',
  context: 'restaurant',
  level: 'debutant',
  universe: 'cafe',
  situationFrench: 'Deux amis choisissent leurs boissons en arrivant au café.',
  estimatedMinutes: 3,
  keyWordIds: ['w_tay', 'w_cafe_capucin', 'w_cafe_9a3da'],
  grammarRuleIds: ['g_cafe_preposition_b'],
  culturalNote:
    "La « 9a3da » (le moment passé assis ensemble) est au cœur de la vie sociale " +
    "tunisienne : on reste souvent longtemps autour d'une seule boisson.",
  lines: [
    { speaker: 'A', arabic: 'شنوة تحب تشرب؟', arabizi: 'Chnowa t7eb techreb?', french: "Qu'est-ce que tu veux boire ?" },
    { speaker: 'B', arabic: 'نفضّل تاي بالنعناع', arabizi: 'Nfaddel tay bel na3na3', french: 'Je préfère un thé à la menthe', wordIds: ['w_tay', 'w_cafe_na3na3'] },
    { speaker: 'A', arabic: 'باهي، وأنا ناخو كابيسان', arabizi: 'Bahi, w ana nakhou capucin', french: 'Bien, et moi je prends un cappuccino', wordIds: ['w_bahi', 'w_cafe_capucin'] },
    { speaker: 'B', arabic: 'قعدة حلوة اليوم', arabizi: '9a3da 7lowa el yum', french: 'Beau moment aujourd\'hui', wordIds: ['w_cafe_9a3da', 'w_elyoum'] },
  ],
};

const DIALOGUE_CAFE_PAYER: Dialogue = {
  id: 'd_cafe_03',
  title: "Payer l'addition",
  context: 'restaurant',
  level: 'debutant',
  universe: 'cafe',
  situationFrench: "Le client demande l'addition et laisse un pourboire.",
  estimatedMinutes: 2,
  keyWordIds: ['w_cafe_7seb', 'w_zouz', 'w_cafe_bakhchich'],
  grammarRuleIds: ['g_cafe_interrogation'],
  culturalNote:
    "Laisser « el ba9i » (la monnaie) comme pourboire est courant et apprécié " +
    "dans les cafés tunisiens.",
  lines: [
    { speaker: 'A', arabic: 'قدّاش الحساب عيشك؟', arabizi: '9addech el 7seb 3aychek?', french: "Ça fait combien l'addition ?", wordIds: ['w_cafe_7seb', 'w_9addech'] },
    { speaker: 'B', arabic: 'زوز دينار', arabizi: 'Zouz dinar', french: 'Deux dinars', wordIds: ['w_zouz'] },
    { speaker: 'A', arabic: 'هاهو، وخلّي الباقي', arabizi: 'Hahou, w khalli el ba9i', french: 'Voilà, et garde la monnaie', wordIds: ['w_cafe_bakhchich'] },
    { speaker: 'B', arabic: 'يعطيك الصحة، مرحبا بيك ديما', arabizi: 'Ya3tik essa77a, marhba bik dima', french: 'Merci, tu es toujours le bienvenu', wordIds: ['w_dima'] },
  ],
};

// ─── VAGUE 2 — UNIVERS « SALUTATIONS » (3 dialogues) · universe: 'salutations' ─────

const DIALOGUE_SALUT_RENCONTRE: Dialogue = {
  id: 'd_salut_01',
  title: 'Première rencontre',
  context: 'rue',
  level: 'debutant',
  universe: 'salutations',
  situationFrench: 'Deux personnes se présentent pour la première fois.',
  estimatedMinutes: 2,
  keyWordIds: ['w_aaslema', 'w_salut_ahla'],
  grammarRuleIds: ['g_salut_questions', 'g_salut_possessif'],
  culturalNote:
    "Se présenter commence presque toujours par « Aaslema » suivi du prénom. " +
    "« Ahlan bik » répond à une présentation et marque la convivialité.",
  lines: [
    { speaker: 'A', arabic: 'عسلامة، شنوة اسمك؟', arabizi: 'Aaslema, chnowa esmek?', french: "Salut, comment t'appelles-tu ?", wordIds: ['w_aaslema'] },
    { speaker: 'B', arabic: 'اسمي ليلى، وإنتي؟', arabizi: 'Esmi Leila, w enti?', french: "Je m'appelle Leila, et toi ?", wordIds: ['w_salut_w_enti'] },
    { speaker: 'A', arabic: 'أنا كريم، أهلا بيك', arabizi: 'Ena Karim, ahlan bik', french: 'Je suis Karim, enchanté', wordIds: ['w_salut_ahla'] },
    { speaker: 'B', arabic: 'أهلا بيك', arabizi: 'Ahlan bik', french: 'Enchantée' },
  ],
};

const DIALOGUE_SALUT_RETROUVAILLES: Dialogue = {
  id: 'd_salut_02',
  title: 'Se retrouver entre amis',
  context: 'rue',
  level: 'debutant',
  universe: 'salutations',
  situationFrench: 'Deux amis se retrouvent après une absence.',
  estimatedMinutes: 2,
  keyWordIds: ['w_salut_yahla', 'w_salut_kifech_7alek'],
  grammarRuleIds: ['g_salut_questions'],
  culturalNote:
    "« Twa7echtek » (tu m'as manqué) est une formule très courante et chaleureuse " +
    "entre proches lors des retrouvailles.",
  lines: [
    { speaker: 'A', arabic: 'يا هلا! توحّشتك', arabizi: 'Yahla! Twa7echtek', french: "Salut ! Tu m'as manqué", wordIds: ['w_salut_yahla'] },
    { speaker: 'B', arabic: 'وأنا زادة، كيفاش حالك؟', arabizi: 'W ana zeda, kifech 7alek?', french: 'Moi aussi, comment vas-tu ?', wordIds: ['w_salut_kifech_7alek'] },
    { speaker: 'A', arabic: 'لاباس الحمد لله', arabizi: 'Labes el7amdoulah', french: 'Ça va, Dieu merci', wordIds: ['w_labes', 'w_salut_el7amdoulah'] },
  ],
};

const DIALOGUE_SALUT_ADIEU: Dialogue = {
  id: 'd_salut_03',
  title: 'Prendre congé',
  context: 'rue',
  level: 'debutant',
  universe: 'salutations',
  situationFrench: "Deux personnes se disent au revoir.",
  estimatedMinutes: 2,
  keyWordIds: ['w_salut_bislama', 'w_salut_nchoufouk'],
  grammarRuleIds: [],
  culturalNote:
    "On clôt souvent par « Inchallah » (si Dieu le veut) en évoquant un prochain rendez-vous.",
  lines: [
    { speaker: 'A', arabic: 'يزّي توّا، نمشي', arabizi: 'Yezzi tawa, nemchi', french: "Bon, j'y vais maintenant", wordIds: ['w_tawa'] },
    { speaker: 'B', arabic: 'بالسلامة، رد بالك', arabizi: 'Bislama, rodd balek', french: 'Au revoir, fais attention', wordIds: ['w_salut_bislama'] },
    { speaker: 'A', arabic: 'نشوفوك غدوة إن شاء الله', arabizi: 'Nchoufouk ghodwa inchallah', french: 'À demain, si Dieu le veut', wordIds: ['w_salut_nchoufouk', 'w_ghodwa', 'w_salut_inchallah'] },
  ],
};

// ─── VAGUE 2 — UNIVERS « AU MARCHÉ » (3 dialogues) · universe: 'marche' ────────────

const DIALOGUE_MARCHE_NEGO: Dialogue = {
  id: 'd_marche_01',
  title: 'Négocier les légumes',
  context: 'marche',
  level: 'debutant',
  universe: 'marche',
  situationFrench: 'Un client négocie le prix des tomates avec le marchand.',
  estimatedMinutes: 3,
  keyWordIds: ['w_tmatem', 'w_marche_souma', 'w_marche_ghali'],
  grammarRuleIds: ['g_cafe_interrogation', 'g_marche_comparaison'],
  culturalNote:
    "Marchander fait partie du jeu au marché tunisien. « Na99asli chwaya » " +
    "(baisse un peu) et « akher souma » (dernier prix) sont incontournables.",
  lines: [
    { speaker: 'A', arabic: 'قدّاش الطماطم؟', arabizi: '9addech el tmatem?', french: "C'est combien les tomates ?", wordIds: ['w_9addech', 'w_tmatem'] },
    { speaker: 'B', arabic: 'زوز دينار الكيلو', arabizi: 'Zouz dinar el kilo', french: 'Deux dinars le kilo', wordIds: ['w_zouz', 'w_kilo'] },
    { speaker: 'A', arabic: 'غالي برشة، نقّصلي شوية', arabizi: 'Ghali barsha, na99asli chwaya', french: 'Trop cher, baisse-moi un peu', wordIds: ['w_marche_ghali', 'w_barsha', 'w_chwaya'] },
    { speaker: 'B', arabic: 'دينار ونص، آخر سومة', arabizi: 'Dinar w nos, akher souma', french: 'Un dinar et demi, dernier prix', wordIds: ['w_nos', 'w_marche_souma'] },
  ],
};

const DIALOGUE_MARCHE_7OUT: Dialogue = {
  id: 'd_marche_02',
  title: 'Chez le poissonnier',
  context: 'marche',
  level: 'debutant',
  universe: 'marche',
  situationFrench: "Un client achète du poisson frais.",
  estimatedMinutes: 3,
  keyWordIds: ['w_marche_7out', 'w_marche_tri'],
  grammarRuleIds: ['g_cafe_interrogation'],
  culturalNote:
    "La fraîcheur (« tri ») est l'argument numéro un pour le poisson en Tunisie, " +
    "pays méditerranéen où le « 7out » est très apprécié.",
  lines: [
    { speaker: 'A', arabic: 'الحوت طري اليوم؟', arabizi: 'El 7out tri elyoum?', french: 'Le poisson est frais aujourd\'hui ?', wordIds: ['w_marche_7out', 'w_marche_tri', 'w_elyoum'] },
    { speaker: 'B', arabic: 'طري، جا توّا من البحر', arabizi: 'Tri, ja tawa men el b7ar', french: 'Frais, il vient juste d\'arriver de la mer', wordIds: ['w_marche_tri', 'w_tawa', 'w_b7ar'] },
    { speaker: 'A', arabic: 'أعطيني كيلو', arabizi: 'A3tini kilo', french: 'Donne-moi un kilo', wordIds: ['w_kilo'] },
    { speaker: 'B', arabic: 'نلفهولك، ربي يزيدك', arabizi: 'Nleffhoulek, rabbi yzidek', french: 'Je te l\'emballe, merci', wordIds: ['w_marche_kis'] },
  ],
};

const DIALOGUE_MARCHE_GHELLA: Dialogue = {
  id: 'd_marche_03',
  title: 'Au stand de fruits',
  context: 'marche',
  level: 'debutant',
  universe: 'marche',
  situationFrench: "Un client choisit des fruits et demande les prix.",
  estimatedMinutes: 3,
  keyWordIds: ['w_ghella', 'w_tfe7', 'w_marche_souma'],
  grammarRuleIds: ['g_marche_demonstratifs'],
  culturalNote:
    "Au stand de fruits, on montre du doigt : « hedha » (celui-ci) accompagne " +
    "presque toujours le geste.",
  lines: [
    { speaker: 'A', arabic: 'هذا التفاح بقدّاش؟', arabizi: 'Hedha el tfe7 b9addech?', french: 'Ces pommes-là, c\'est combien ?', wordIds: ['w_hedha', 'w_tfe7', 'w_9addech'] },
    { speaker: 'B', arabic: 'دينار ونص الكيلو', arabizi: 'Dinar w nos el kilo', french: 'Un dinar et demi le kilo', wordIds: ['w_nos', 'w_kilo'] },
    { speaker: 'A', arabic: 'والعنب؟ أرخص؟', arabizi: 'W el 3neb? Arkhas?', french: 'Et le raisin ? Moins cher ?', wordIds: ['w_marche_3neb', 'w_marche_rkhis'] },
    { speaker: 'B', arabic: 'إي، أرخص شوية', arabizi: 'Ey, arkhas chwaya', french: 'Oui, un peu moins cher', wordIds: ['w_ey', 'w_marche_rkhis', 'w_chwaya'] },
  ],
};

// ─── VAGUE 2 — UNIVERS « MAISON » (3 dialogues) · universe: 'maison' ───────────────

const DIALOGUE_MAISON_ACCUEIL: Dialogue = {
  id: 'd_maison_01',
  title: 'Accueillir chez soi',
  context: 'maison',
  level: 'debutant',
  universe: 'maison',
  situationFrench: 'On reçoit un invité à la maison.',
  estimatedMinutes: 2,
  keyWordIds: ['w_dar', 'w_salut_tfaddal'],
  grammarRuleIds: ['g_maison_possession'],
  culturalNote:
    "« Baytek baytek » (fais comme chez toi) et « 7ot rou7ek » (mets-toi à l'aise) " +
    "résument l'hospitalité tunisienne.",
  lines: [
    { speaker: 'A', arabic: 'مرحبا بيك، تفضّل أدخل', arabizi: 'Marhba bik, tfaddal odkhol', french: 'Bienvenue, entre je t\'en prie', wordIds: ['w_salut_tfaddal'] },
    { speaker: 'B', arabic: 'الدار متاعكم حلوة', arabizi: 'El dar mte3kom 7lowa', french: 'Votre maison est belle', wordIds: ['w_dar'] },
    { speaker: 'A', arabic: 'حط روحك في دارك', arabizi: '7ot rou7ek fi darek', french: 'Mets-toi à l\'aise', wordIds: ['w_dar'] },
    { speaker: 'B', arabic: 'بارك الله فيك', arabizi: 'Barakallahou fik', french: 'Merci beaucoup', wordIds: ['w_salut_barakallahofik'] },
  ],
};

const DIALOGUE_MAISON_OBJET: Dialogue = {
  id: 'd_maison_02',
  title: 'Chercher un objet',
  context: 'maison',
  level: 'debutant',
  universe: 'maison',
  situationFrench: 'On cherche les clés dans la maison.',
  estimatedMinutes: 2,
  keyWordIds: ['w_maison_mefte7', 'w_tawla'],
  grammarRuleIds: ['g_maison_localisation', 'g_cafe_interrogation'],
  culturalNote: "Les prépositions de lieu (fou9, ta7t…) sont indispensables au quotidien.",
  lines: [
    { speaker: 'A', arabic: 'وين المفتاح؟', arabizi: 'Win el mefte7?', french: 'Où est la clé ?', wordIds: ['w_maison_mefte7', 'w_win'] },
    { speaker: 'B', arabic: 'فوق الطاولة في الكوجينة', arabizi: 'Fou9 el tawla fel koujina', french: 'Sur la table dans la cuisine', wordIds: ['w_tawla', 'w_koujina'] },
    { speaker: 'A', arabic: 'ما لقيتهاش', arabizi: 'Ma l9ithech', french: 'Je ne l\'ai pas trouvée' },
    { speaker: 'B', arabic: 'شوف تحت المخدة', arabizi: 'Chouf ta7t el mkhadda', french: 'Regarde sous l\'oreiller', wordIds: ['w_maison_mkhadda'] },
  ],
};

const DIALOGUE_MAISON_MENAGE: Dialogue = {
  id: 'd_maison_03',
  title: 'Les tâches ménagères',
  context: 'maison',
  level: 'debutant',
  universe: 'maison',
  situationFrench: 'Deux personnes se répartissent le ménage.',
  estimatedMinutes: 2,
  keyWordIds: ['w_dar', 'w_koujina'],
  grammarRuleIds: [],
  culturalNote: "Le ménage du week-end est un rituel familial fréquent.",
  lines: [
    { speaker: 'A', arabic: 'لازم ننظّفو الدار اليوم', arabizi: 'Lezem nnadhfou el dar elyoum', french: 'Il faut nettoyer la maison aujourd\'hui', wordIds: ['w_dar', 'w_elyoum'] },
    { speaker: 'B', arabic: 'أنا نكنس، وانتي ترتّب', arabizi: 'Ana noknes, w enti trattab', french: 'Moi je balaie, et toi tu ranges', wordIds: ['w_salut_w_enti'] },
    { speaker: 'A', arabic: 'باهي، نبداو توّا', arabizi: 'Bahi, nebdaw tawa', french: 'D\'accord, on commence maintenant', wordIds: ['w_bahi', 'w_tawa'] },
  ],
};

// ─── VAGUE 2 — UNIVERS « EN LOUAGE » (3 dialogues) · universe: 'louage' ────────────

const DIALOGUE_LOUAGE_DEPART: Dialogue = {
  id: 'd_louage_01',
  title: 'Trouver son louage',
  context: 'rue',
  level: 'debutant',
  universe: 'louage',
  situationFrench: 'Un voyageur cherche le louage pour Tunis à la station.',
  estimatedMinutes: 3,
  keyWordIds: ['w_louage', 'w_louage_ta3rifa'],
  grammarRuleIds: ['g_louage_direction', 'g_cafe_interrogation'],
  culturalNote:
    "Le louage part une fois « kompli » (plein). On attend donc parfois le dernier passager.",
  lines: [
    { speaker: 'A', arabic: 'اللواج لتونس وين؟', arabizi: 'El louage l Tounes win?', french: 'Où est le louage pour Tunis ?', wordIds: ['w_louage', 'w_win'] },
    { speaker: 'B', arabic: 'هوني، يزيد واحد وننطلقو', arabizi: 'Houni, yzid wa7ed w nental9ou', french: 'Ici, encore un passager et on part', wordIds: ['w_louage_kompli'] },
    { speaker: 'A', arabic: 'قدّاش التعريفة؟', arabizi: '9addech el ta3rifa?', french: 'C\'est combien le tarif ?', wordIds: ['w_louage_ta3rifa', 'w_9addech'] },
    { speaker: 'B', arabic: 'سبعة دينار', arabizi: 'Sab3a dinar', french: 'Sept dinars', wordIds: ['w_sab3a'] },
  ],
};

const DIALOGUE_LOUAGE_ROUTE: Dialogue = {
  id: 'd_louage_02',
  title: 'Sur la route',
  context: 'rue',
  level: 'debutant',
  universe: 'louage',
  situationFrench: 'Un passager demande au chauffeur de ralentir.',
  estimatedMinutes: 2,
  keyWordIds: ['w_louage_sewa9', 'w_louage_bechwaya'],
  grammarRuleIds: ['g_louage_imperatif'],
  culturalNote: "« 3la mahlek » (doucement) est une demande polie fréquente en louage.",
  lines: [
    { speaker: 'A', arabic: 'يا عمّي، سوق بالشوية', arabizi: 'Ya 3ammi, sou9 bechwaya', french: 'Monsieur, conduis doucement', wordIds: ['w_louage_bechwaya'] },
    { speaker: 'B', arabic: 'ماو على مهلي', arabizi: 'Maw 3la mahli', french: 'Mais je vais doucement' },
    { speaker: 'A', arabic: 'فمّا زنقة قدّام', arabizi: 'Famma zon9a 9oddem', french: 'Il y a un embouteillage devant', wordIds: ['w_louage_mochkla'] },
    { speaker: 'B', arabic: 'ماعليش، نعدّيو', arabizi: 'Ma3lich, n3addiw', french: 'Pas grave, on passe' },
  ],
};

const DIALOGUE_LOUAGE_ARRIVEE: Dialogue = {
  id: 'd_louage_03',
  title: 'Descendre du louage',
  context: 'rue',
  level: 'debutant',
  universe: 'louage',
  situationFrench: 'Le passager demande à descendre.',
  estimatedMinutes: 2,
  keyWordIds: ['w_louage_wa9fa', 'w_louage_rakeb'],
  grammarRuleIds: ['g_louage_imperatif'],
  culturalNote: "On indique l'arrêt avec « wa99efli houni » (dépose-moi ici).",
  lines: [
    { speaker: 'A', arabic: 'وقّفلي هوني عيشك', arabizi: 'Wa99efli houni 3aychek', french: 'Dépose-moi ici s\'il te plaît', wordIds: ['w_louage_wa9fa'] },
    { speaker: 'B', arabic: 'باهي، هاو نوقّف', arabizi: 'Bahi, haw nwa99ef', french: 'D\'accord, je m\'arrête', wordIds: ['w_bahi'] },
    { speaker: 'A', arabic: 'يعطيك الصحة', arabizi: 'Ya3tik essa77a', french: 'Merci' },
    { speaker: 'B', arabic: 'طريق السلامة', arabizi: 'Tri9 essalama', french: 'Bonne route' },
  ],
};

// ─── VAGUE 2 — UNIVERS « FAMILLE » (3 dialogues) · universe: 'famille' ─────────────

const DIALOGUE_FAMILLE_PARLER: Dialogue = {
  id: 'd_famille_01',
  title: 'Parler de sa famille',
  context: 'famille',
  level: 'debutant',
  universe: 'famille',
  situationFrench: 'Deux personnes parlent de leurs familles.',
  estimatedMinutes: 2,
  keyWordIds: ['w_3ayla', 'w_famille_wled'],
  grammarRuleIds: ['g_maison_possession', 'g_cafe_interrogation'],
  culturalNote: "Demander des nouvelles de toute la famille est une marque d'affection.",
  lines: [
    { speaker: 'A', arabic: 'عندك ولاد؟', arabizi: '3andek wled?', french: 'Tu as des enfants ?', wordIds: ['w_famille_wled'] },
    { speaker: 'B', arabic: 'إي، عندي زوز: ولد وبنت', arabizi: 'Ey, 3andi zouz: weld w bent', french: 'Oui, j\'en ai deux : un garçon et une fille', wordIds: ['w_ey', 'w_zouz', 'w_weld', 'w_bent'] },
    { speaker: 'A', arabic: 'الله يخليهملك', arabizi: 'Allah ykhallihomlek', french: 'Que Dieu te les garde' },
    { speaker: 'B', arabic: 'عيّشك', arabizi: '3aychek', french: 'Merci' },
  ],
};

const DIALOGUE_FAMILLE_MARIAGE: Dialogue = {
  id: 'd_famille_02',
  title: 'Un mariage en vue',
  context: 'celebrations',
  level: 'debutant',
  universe: 'famille',
  situationFrench: 'On annonce un mariage prochain.',
  estimatedMinutes: 2,
  keyWordIds: ['w_famille_3ors', 'w_famille_3ris'],
  grammarRuleIds: ['g_famille_futur'],
  culturalNote: "« 3o9bel 3andek » (à ton tour bientôt) se dit aux célibataires lors d'un mariage.",
  lines: [
    { speaker: 'A', arabic: 'خويا باش يتزوّج', arabizi: 'Khouya besh yetzawej', french: 'Mon frère va se marier', wordIds: ['w_khouya'] },
    { speaker: 'B', arabic: 'مبروك! وقتاش العرس؟', arabizi: 'Mabrouk! Wa9tech el 3ors?', french: 'Félicitations ! Quand est la noce ?', wordIds: ['w_salut_mabrouk', 'w_famille_3ors'] },
    { speaker: 'A', arabic: 'الصيف الجاي', arabizi: 'Es sif ej jay', french: 'L\'été prochain' },
    { speaker: 'B', arabic: 'عقبال عندك', arabizi: '3o9bel 3andek', french: 'À ton tour bientôt' },
  ],
};

const DIALOGUE_FAMILLE_VISITE: Dialogue = {
  id: 'd_famille_03',
  title: 'Rendre visite aux grands-parents',
  context: 'famille',
  level: 'debutant',
  universe: 'famille',
  situationFrench: 'On organise une visite chez les grands-parents.',
  estimatedMinutes: 2,
  keyWordIds: ['w_famille_jadd', 'w_famille_jadda'],
  grammarRuleIds: ['g_famille_futur'],
  culturalNote: "Les visites aux grands-parents, surtout le week-end, sont un pilier de la vie familiale.",
  lines: [
    { speaker: 'A', arabic: 'باش نزورو جدّي وجدّتي', arabizi: 'Besh nzourou jaddi w jaddti', french: 'On va rendre visite à mes grands-parents', wordIds: ['w_famille_jadd', 'w_famille_jadda'] },
    { speaker: 'B', arabic: 'وقتاش؟', arabizi: 'Wa9tech?', french: 'Quand ?' },
    { speaker: 'A', arabic: 'غدوة بعد الفطور', arabizi: 'Ghodwa ba3d el ftour', french: 'Demain après le petit déjeuner', wordIds: ['w_ghodwa', 'w_ba3d', 'w_cafe_ftour'] },
    { speaker: 'B', arabic: 'باهي، نتوحّشتهم', arabizi: 'Bahi, ntwa7achthom', french: 'D\'accord, ils me manquent', wordIds: ['w_bahi'] },
  ],
};

// ─── VAGUE 2 — UNIVERS « À LA PLAGE » (3 dialogues) · universe: 'plage' ─────────────

const DIALOGUE_PLAGE_ARRIVEE: Dialogue = {
  id: 'd_plage_01',
  title: 'Arriver à la plage',
  context: 'rue',
  level: 'debutant',
  universe: 'plage',
  situationFrench: 'Des amis arrivent à la plage et cherchent une place.',
  estimatedMinutes: 2,
  keyWordIds: ['w_plage_chatt', 'w_plage_chamsiya', 'w_plage_rmel'],
  grammarRuleIds: ['g_plage_obligation', 'g_plage_conjonctions'],
  culturalNote: "On plante d'abord le parasol (chamsiya) pour marquer sa place sur la plage.",
  lines: [
    { speaker: 'A', arabic: 'وصلنا! البحر زين', arabizi: 'Wsalna! El b7ar zin', french: 'On est arrivés ! La mer est belle', wordIds: ['w_plage_chatt'] },
    { speaker: 'B', arabic: 'إي، لازم نلقوا مكان', arabizi: 'Ey, lazem nla9ou mken', french: 'Oui, il faut qu\'on trouve une place', wordIds: ['w_plage_rmel'] },
    { speaker: 'A', arabic: 'هاك ظل، نحطوا الشمسية؟', arabizi: 'Haka dhell, n7ottou el chamsiya?', french: 'Voilà de l\'ombre, on pose le parasol ?', wordIds: ['w_plage_dhell', 'w_plage_chamsiya'] },
    { speaker: 'B', arabic: 'باهي، وخلّي الفوطة على الرمل', arabizi: 'Bahi, w khalli el fouta 3al rmel', french: 'D\'accord, et pose la fouta sur le sable', wordIds: ['w_plage_fouta', 'w_plage_rmel'] },
  ],
};

const DIALOGUE_PLAGE_BAIGNADE: Dialogue = {
  id: 'd_plage_02',
  title: 'Se baigner ensemble',
  context: 'rue',
  level: 'debutant',
  universe: 'plage',
  situationFrench: 'Deux amis décident d\'aller nager.',
  estimatedMinutes: 2,
  keyWordIds: ['w_plage_mouja', 'w_plage_sba7a'],
  grammarRuleIds: ['g_plage_conjonctions'],
  culturalNote: "La baignade entre amis est un moment festif. On avertit souvent des vagues (mouj) avant d'entrer.",
  lines: [
    { speaker: 'A', arabic: 'تحب تعوم معايا؟', arabizi: 'T7eb t3oum m3aya?', french: 'Tu veux nager avec moi ?', wordIds: ['w_plage_sba7a'] },
    { speaker: 'B', arabic: 'إي! بس الموج عالي شوية', arabizi: 'Ey! Bes el mouj 3ali chwaya', french: 'Oui ! Mais les vagues sont un peu hautes', wordIds: ['w_plage_mouja'] },
    { speaker: 'A', arabic: 'ما علاباليش، نعوموا chwaya chwaya', arabizi: 'Ma 3laballiche, n3oumou chwaya chwaya', french: 'Pas de souci, on nage doucement' },
    { speaker: 'B', arabic: 'الماء بارد برشة!', arabizi: 'El ma bared barsha!', french: 'L\'eau est très froide !' },
    { speaker: 'A', arabic: 'هذا يبرّدك!', arabizi: 'Hedha ybarredek!', french: 'Ça te rafraîchit !' },
  ],
};

const DIALOGUE_PLAGE_GLACES: Dialogue = {
  id: 'd_plage_03',
  title: 'Acheter une glace',
  context: 'restaurant',
  level: 'debutant',
  universe: 'plage',
  situationFrench: 'Un enfant demande une glace au marchand de la plage.',
  estimatedMinutes: 2,
  keyWordIds: ['w_plage_jelati', 'w_plage_kazouza'],
  grammarRuleIds: ['g_plage_obligation', 'g_plage_conjonctions'],
  culturalNote: "Les marchands de glaces (jelati) et de sodas (kazouza) sont incontournables sur les plages tunisiennes en été.",
  lines: [
    { speaker: 'A', arabic: 'تحب جلاتي ولا كازوزة؟', arabizi: 'T7eb jelati wala kazouza?', french: 'Tu veux une glace ou un soda ?', wordIds: ['w_plage_jelati', 'w_plage_kazouza'] },
    { speaker: 'B', arabic: 'جلاتي عيشك', arabizi: 'Jelati 3aychek', french: 'Une glace s\'il te plaît', wordIds: ['w_plage_jelati'] },
    { speaker: 'A', arabic: 'أي نوع؟ فريز ولا شوكولاتة؟', arabizi: 'Ey nou3? Fraise wala chocolata?', french: 'Quelle saveur ? Fraise ou chocolat ?' },
    { speaker: 'B', arabic: 'فريز من فضلك', arabizi: 'Fraise men fadhlek', french: 'Fraise s\'il te plaît' },
    { speaker: 'A', arabic: 'تفضّل، ثلاثة ألاف', arabizi: 'Tfadhdhal, thleth tarf', french: 'Voilà, trois mille (dinars)' },
  ],
};

// ─── VAGUE 2 — UNIVERS « À L'HÔTEL » (3 dialogues) · universe: 'hotel' ──────────────

const DIALOGUE_HOTEL_CHECKIN: Dialogue = {
  id: 'd_hotel_01',
  title: 'Arriver à l\'hôtel (check-in)',
  context: 'rue',
  level: 'debutant',
  universe: 'hotel',
  situationFrench: 'Un client arrive à la réception pour s\'enregistrer.',
  estimatedMinutes: 3,
  keyWordIds: ['w_hotel_fondok', 'w_hotel_ghorfa', 'w_hotel_7ajz'],
  grammarRuleIds: ['g_hotel_question', 'g_cafe_interrogation'],
  culturalNote: "La réception (isti9bal) est ouverte 24h/24 dans la plupart des hôtels tunisiens.",
  lines: [
    { speaker: 'A', arabic: 'صباح الخير، عندي حجز', arabizi: 'Sba7 el khir, 3andi 7ajz', french: 'Bonjour, j\'ai une réservation', wordIds: ['w_hotel_7ajz'] },
    { speaker: 'B', arabic: 'مرحبا بيك، بشنو اسمك؟', arabizi: 'Mar7ba bik, bchnow ismek?', french: 'Bienvenue, votre nom s\'il vous plaît ?' },
    { speaker: 'A', arabic: 'اسمي كريم بن علي', arabizi: 'Ismi Karim ben Ali', french: 'Je m\'appelle Karim Ben Ali' },
    { speaker: 'B', arabic: 'باهي، غرفتك في الطابق الثاني، هاك المفتاح', arabizi: 'Bahi, ghorftek fi et tabiq ettheni, haka el mefta7', french: 'D\'accord, votre chambre est au deuxième étage, voici la clé', wordIds: ['w_hotel_ghorfa', 'w_hotel_tabiq', 'w_hotel_mefta7'] },
    { speaker: 'A', arabic: 'شكراً، عندكم واي فاي؟', arabizi: 'Chokran, 3andkom wifi?', french: 'Merci, avez-vous le wifi ?', wordIds: ['w_hotel_wifi'] },
    { speaker: 'B', arabic: 'إي، مجاني', arabizi: 'Ey, majjeni', french: 'Oui, c\'est gratuit' },
  ],
};

const DIALOGUE_HOTEL_SERVICE: Dialogue = {
  id: 'd_hotel_02',
  title: 'Demander des serviettes',
  context: 'maison',
  level: 'debutant',
  universe: 'hotel',
  situationFrench: 'Un client appelle la réception pour demander des serviettes supplémentaires.',
  estimatedMinutes: 2,
  keyWordIds: ['w_hotel_manchfa', 'w_hotel_ghorfa'],
  grammarRuleIds: ['g_hotel_question'],
  culturalNote: "Il est courant d'appeler la réception depuis la chambre pour tout besoin.",
  lines: [
    { speaker: 'A', arabic: 'آلو، الاستقبال؟', arabizi: 'Alou, el isti9bal?', french: 'Allô, c\'est la réception ?' },
    { speaker: 'B', arabic: 'إي، مرحبا، كيفاش نخدمك؟', arabizi: 'Ey, mar7ba, kifech nkhedmek?', french: 'Oui, bonjour, comment puis-je vous aider ?' },
    { speaker: 'A', arabic: 'نحتاج منشفتين إضافيتين من فضلك', arabizi: 'N7taj manchftin idhafiytin men fadhlek', french: 'J\'ai besoin de deux serviettes supplémentaires s\'il vous plaît', wordIds: ['w_hotel_manchfa'] },
    { speaker: 'B', arabic: 'حاضر، نبعثهملك على طول', arabizi: '7adher, nba3thomlek 3al toul', french: 'Bien sûr, je vous les envoie tout de suite' },
    { speaker: 'A', arabic: 'يعطيك الصحة', arabizi: 'Ya3tik essa77a', french: 'Merci beaucoup' },
  ],
};

const DIALOGUE_HOTEL_CHECKOUT: Dialogue = {
  id: 'd_hotel_03',
  title: 'Quitter l\'hôtel (check-out)',
  context: 'rue',
  level: 'debutant',
  universe: 'hotel',
  situationFrench: 'Un client rend la clé et règle sa note avant de partir.',
  estimatedMinutes: 2,
  keyWordIds: ['w_hotel_mefta7', 'w_hotel_7isab'],
  grammarRuleIds: ['g_hotel_localisation'],
  culturalNote: "Le check-out se fait généralement avant midi. On présente la facture (7isab) à la caisse.",
  lines: [
    { speaker: 'A', arabic: 'نحب نخرج اليوم، هاك المفتاح', arabizi: 'N7eb nokhroj elyoum, haka el mefta7', french: 'Je veux partir aujourd\'hui, voici la clé', wordIds: ['w_hotel_mefta7'] },
    { speaker: 'B', arabic: 'تمام، نجيبلك الحساب', arabizi: 'Tamam, njiblek el 7isab', french: 'Très bien, je vous apporte l\'addition', wordIds: ['w_hotel_7isab'] },
    { speaker: 'A', arabic: 'قدّاش الجملة؟', arabizi: '9addech el jomla?', french: 'Quel est le total ?' },
    { speaker: 'B', arabic: 'مية وعشرين دينار', arabizi: 'Miya w 3ichrin dinar', french: 'Cent vingt dinars' },
    { speaker: 'A', arabic: 'هاك، شكراً على الخدمة', arabizi: 'Haka, chokran 3al khidma', french: 'Voilà, merci pour le service', wordIds: ['w_hotel_khidma'] },
    { speaker: 'B', arabic: 'مرحبا بيك مرة أخرى', arabizi: 'Mar7ba bik marra okhra', french: 'À bientôt !' },
  ],
};

export const dialogues: Readonly<Dialogue[]> = [
  DIALOGUE_FAMILLE_RETROUVAILLES,
  DIALOGUE_MARCHE_LEGUMES,
  DIALOGUE_CAFE_COMMANDER,
  DIALOGUE_CAFE_AMIS,
  DIALOGUE_CAFE_PAYER,
  DIALOGUE_SALUT_RENCONTRE,
  DIALOGUE_SALUT_RETROUVAILLES,
  DIALOGUE_SALUT_ADIEU,
  DIALOGUE_MARCHE_NEGO,
  DIALOGUE_MARCHE_7OUT,
  DIALOGUE_MARCHE_GHELLA,
  DIALOGUE_MAISON_ACCUEIL,
  DIALOGUE_MAISON_OBJET,
  DIALOGUE_MAISON_MENAGE,
  DIALOGUE_FAMILLE_PARLER,
  DIALOGUE_FAMILLE_MARIAGE,
  DIALOGUE_FAMILLE_VISITE,
  DIALOGUE_LOUAGE_DEPART,
  DIALOGUE_LOUAGE_ROUTE,
  DIALOGUE_LOUAGE_ARRIVEE,
  DIALOGUE_PLAGE_ARRIVEE,
  DIALOGUE_PLAGE_BAIGNADE,
  DIALOGUE_PLAGE_GLACES,
  DIALOGUE_HOTEL_CHECKIN,
  DIALOGUE_HOTEL_SERVICE,
  DIALOGUE_HOTEL_CHECKOUT,
] as const;

export const dialoguesById: Readonly<Record<string, Dialogue>> =
  Object.fromEntries(dialogues.map((d) => [d.id, d]));

export function getDialogueById(id: string): Dialogue | undefined {
  return dialoguesById[id];
}

export function getDialoguesByContext(
  context: Dialogue['context']
): Dialogue[] {
  return dialogues.filter((d) => d.context === context);
}

export function getDialoguesByLevel(level: Dialogue['level']): Dialogue[] {
  return dialogues.filter((d) => d.level === level);
}
