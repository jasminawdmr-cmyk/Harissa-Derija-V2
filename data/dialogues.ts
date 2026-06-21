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

export const dialogues: Readonly<Dialogue[]> = [
  DIALOGUE_FAMILLE_RETROUVAILLES,
  DIALOGUE_MARCHE_LEGUMES,
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
