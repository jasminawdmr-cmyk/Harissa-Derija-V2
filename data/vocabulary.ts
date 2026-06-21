/**
 * /data/vocabulary.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base de données du vocabulaire en darija tunisien — Blablalouni.
 *
 * Règle linguistique permanente : chaque entrée porte les trois versions
 *   arabic (arabe) · arabizi (translittération tunisienne) · french (traduction).
 * Convention arabizi : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Contenu : PACK 01 — 70 mots de darija tunisienne réelle (pas d'arabe littéraire).
 * Convention d'ID : "w_<slug_arabizi>".
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { VocabularyItem } from '../types';

// ─── PACK 01 ────────────────────────────────────────────────────────────────────

export const vocabulary: Readonly<VocabularyItem[]> = [
  // ── Salutations et bases ──────────────────────────────────────────────────────
  { id: 'w_aaslema', arabic: 'عسلامة', arabizi: 'Aaslema', french: 'Salut / bonjour', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'salutations'] },
  { id: 'w_sbeh_el_khir', arabic: 'صباح الخير', arabizi: 'Sbeh el khir', french: 'Bonjour / bon matin', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'salutations'] },
  { id: 'w_tesba7_3la_khir', arabic: 'تصبح على خير', arabizi: 'Tesba7 3la khir', french: 'Bonne nuit', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'salutations'] },
  { id: 'w_labes', arabic: 'لاباس؟', arabizi: 'Labes?', french: 'Ça va ?', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'salutations'] },
  { id: 'w_labes_7amdoullah', arabic: 'لاباس الحمد لله', arabizi: 'Labes, el 7amdoullah', french: 'Ça va, Dieu merci', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'salutations'] },
  { id: 'w_chnoua_el_akhbar', arabic: 'شنوة الأخبار؟', arabizi: 'Chnoua el akhbar?', french: 'Quoi de neuf ?', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'salutations'] },
  { id: 'w_bahi', arabic: 'باهي', arabizi: 'Bahi', french: "Bien / d'accord", category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'bases'] },
  { id: 'w_ey', arabic: 'إي', arabizi: 'Ey', french: 'Oui', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'bases'] },
  { id: 'w_le', arabic: 'لا', arabizi: 'Le', french: 'Non', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'bases'] },
  { id: 'w_tawa', arabic: 'توّا', arabizi: 'Tawa', french: 'Maintenant', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'temps'] },
  { id: 'w_ghodwa', arabic: 'غدوة', arabizi: 'Ghodwa', french: 'Demain', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'temps'] },
  { id: 'w_el_bare7', arabic: 'البارح', arabizi: 'El bare7', french: 'Hier', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'temps'] },
  { id: 'w_elyoum', arabic: 'اليوم', arabizi: 'Elyoum', french: "Aujourd'hui", category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'temps'] },
  { id: 'w_win', arabic: 'وين؟', arabizi: 'Win?', french: 'Où ?', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'questions'] },
  { id: 'w_chkoun', arabic: 'شكون؟', arabizi: 'Chkoun?', french: 'Qui ?', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'questions'] },
  { id: 'w_3lech', arabic: 'علاش؟', arabizi: '3lech?', french: 'Pourquoi ?', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'questions'] },
  { id: 'w_kifach', arabic: 'كيفاش؟', arabizi: 'Kifach?', french: 'Comment ?', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'questions'] },
  { id: 'w_9addech', arabic: 'قدّاش؟', arabizi: '9addech?', french: 'Combien ?', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'questions'] },
  { id: 'w_hedha', arabic: 'هذا', arabizi: 'Hedha', french: 'Celui-ci / ceci (masculin)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'demonstratifs'] },
  { id: 'w_hedhi', arabic: 'هذي', arabizi: 'Hedhi', french: 'Celle-ci / ceci (féminin)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'demonstratifs'] },

  // ── Café et nourriture ────────────────────────────────────────────────────────
  { id: 'w_9ahwa', arabic: 'قهوة', arabizi: '9ahwa', french: 'Café', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'cafe', 'nourriture'] },
  { id: 'w_tay', arabic: 'تاي', arabizi: 'Tay', french: 'Thé', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'cafe', 'nourriture'] },
  { id: 'w_ma', arabic: 'ماء', arabizi: 'Ma', french: 'Eau', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'nourriture'] },
  { id: 'w_khobz', arabic: 'خبز', arabizi: 'Khobz', french: 'Pain', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'nourriture'] },
  { id: 'w_sokker', arabic: 'سكر', arabizi: 'Sokker', french: 'Sucre', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_mel7', arabic: 'ملح', arabizi: 'Mel7', french: 'Sel', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_zit', arabic: 'زيت', arabizi: 'Zit', french: 'Huile', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_zitoun', arabic: 'زيتون', arabizi: 'Zitoun', french: 'Olives', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_harissa', arabic: 'هريسة', arabizi: 'Harissa', french: 'Harissa', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_kousksi', arabic: 'كسكسي', arabizi: 'Kousksi', french: 'Couscous', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_lablabi', arabic: 'لبلابي', arabizi: 'Lablabi', french: 'Lablabi', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_brik', arabic: 'بريك', arabizi: 'Brik', french: 'Brik', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_ojja', arabic: 'عجّة', arabizi: 'Ojja', french: 'Ojja', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_mlewi', arabic: 'ملاوي', arabizi: 'Mlewi', french: 'Mlawi / galette tunisienne', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture', 'culture'] },
  { id: 'w_tmatem', arabic: 'طماطم', arabizi: 'Tmatem', french: 'Tomates', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_batata', arabic: 'بطاطا', arabizi: 'Batata', french: 'Pommes de terre', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_bsal', arabic: 'بصل', arabizi: 'Bsal', french: 'Oignons', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_thoum', arabic: 'ثوم', arabizi: 'Thoum', french: 'Ail', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_felfel', arabic: 'فلفل', arabizi: 'Felfel', french: 'Poivron / piment (selon contexte)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },
  { id: 'w_felfel_7ar', arabic: 'فلفل حار', arabizi: 'Felfel 7ar', french: 'Piment fort', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'nourriture'] },

  // ── Famille ───────────────────────────────────────────────────────────────────
  { id: 'w_ommi', arabic: 'أمّي', arabizi: 'Ommi', french: 'Ma mère', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_bouya', arabic: 'بويا', arabizi: 'Bouya', french: 'Mon père', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_khouya', arabic: 'خويا', arabizi: 'Khouya', french: 'Mon frère', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_okhti', arabic: 'أختي', arabizi: 'Okhti', french: 'Ma sœur', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_3ammi', arabic: 'عمّي', arabizi: '3ammi', french: 'Mon oncle paternel / monsieur', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'famille'] },
  { id: 'w_khalti', arabic: 'خالتي', arabizi: 'Khalti', french: 'Ma tante maternelle / madame', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'famille'] },
  { id: 'w_weld', arabic: 'ولد', arabizi: 'Weld', french: 'Garçon / fils', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_bent', arabic: 'بنت', arabizi: 'Bent', french: 'Fille', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },
  { id: 'w_dar', arabic: 'دار', arabizi: 'Dar', french: 'Maison', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'maison'] },
  { id: 'w_3ayla', arabic: 'عايلة', arabizi: '3ayla', french: 'Famille', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'famille'] },

  // ── Maison et quotidien ───────────────────────────────────────────────────────
  { id: 'w_bit', arabic: 'بيت', arabizi: 'Bit', french: 'Chambre / pièce', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_koujina', arabic: 'كوجينة', arabizi: 'Koujina', french: 'Cuisine', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_7ammem', arabic: 'حمّام', arabizi: '7ammem', french: 'Salle de bain', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_beb', arabic: 'باب', arabizi: 'Beb', french: 'Porte', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_chebbek', arabic: 'شباك', arabizi: 'Chebbek', french: 'Fenêtre', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_koursi', arabic: 'كرسي', arabizi: 'Koursi', french: 'Chaise', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_tawla', arabic: 'طاولة', arabizi: 'Tawla', french: 'Table', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'maison'] },
  { id: 'w_tilifoun', arabic: 'تليفون', arabizi: 'Tilifoun', french: 'Téléphone', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'quotidien'] },
  { id: 'w_flous', arabic: 'فلوس', arabizi: 'Flous', french: 'Argent', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'quotidien'] },
  { id: 'w_khedma', arabic: 'خدمة', arabizi: 'Khedma', french: 'Travail', category: 'travail', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'travail'] },

  // ── Transport et ville ────────────────────────────────────────────────────────
  { id: 'w_taxi', arabic: 'تاكسي', arabizi: 'Taxi', french: 'Taxi', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'transport'] },
  { id: 'w_louage', arabic: 'لواج', arabizi: 'Louage', french: 'Louage / taxi collectif', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'transport', 'culture'] },
  { id: 'w_kar', arabic: 'كار', arabizi: 'Kar', french: 'Bus / car', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'transport'] },
  { id: 'w_tomobil', arabic: 'طوموبيل', arabizi: 'Tomobil', french: 'Voiture', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'transport'] },
  { id: 'w_tri9', arabic: 'طريق', arabizi: 'Tri9', french: 'Route / chemin', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'transport'] },
  { id: 'w_ma7atta', arabic: 'محطّة', arabizi: 'Ma7atta', french: 'Station / arrêt', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'transport'] },
  { id: 'w_b7ar', arabic: 'بحر', arabizi: 'B7ar', french: 'Mer', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'nature'] },
  { id: 'w_sou9', arabic: 'سوق', arabizi: 'Sou9', french: 'Marché', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'ville', 'culture'] },
  { id: 'w_7ouma', arabic: 'حومة', arabizi: '7ouma', french: 'Quartier', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack01', 'ville'] },
  { id: 'w_bled', arabic: 'بلاد', arabizi: 'Bled', french: 'Pays / village / chez soi (selon contexte)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack01', 'ville'] },
] as const;

// ─── Accès ──────────────────────────────────────────────────────────────────────

export const vocabularyById: Readonly<Record<string, VocabularyItem>> =
  Object.fromEntries(vocabulary.map((w) => [w.id, w]));

export function getWordById(id: string): VocabularyItem | undefined {
  return vocabularyById[id];
}

export function getWordsByCategory(
  category: VocabularyItem['category']
): VocabularyItem[] {
  return vocabulary.filter((w) => w.category === category);
}

export function getWordsByFrequency(): VocabularyItem[] {
  return [...vocabulary].sort((a, b) => a.frequencyRank - b.frequencyRank);
}

export function getDiasporaWords(): VocabularyItem[] {
  return vocabulary.filter((w) => w.domain === 'diaspora');
}
