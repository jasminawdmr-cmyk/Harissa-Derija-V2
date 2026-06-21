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

  // ════════════════════════════════════════════════════════════════════════════════
  // PACK 02
  // ════════════════════════════════════════════════════════════════════════════════

  // ── Chiffres et quantités ─────────────────────────────────────────────────────
  { id: 'w_wa7ed', arabic: 'واحد', arabizi: 'Wa7ed', french: 'Un', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_zouz', arabic: 'زوز', arabizi: 'Zouz', french: 'Deux', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_thletha', arabic: 'ثلاثة', arabizi: 'Thletha', french: 'Trois', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_arb3a', arabic: 'أربعة', arabizi: 'Arb3a', french: 'Quatre', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_khamsa', arabic: 'خمسة', arabizi: 'Khamsa', french: 'Cinq', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_setta', arabic: 'ستّة', arabizi: 'Setta', french: 'Six', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_sab3a', arabic: 'سبعة', arabizi: 'Sab3a', french: 'Sept', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_thmenya', arabic: 'ثمانية', arabizi: 'Thmenya', french: 'Huit', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_tes3a', arabic: 'تسعة', arabizi: 'Tes3a', french: 'Neuf', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_3achra', arabic: 'عشرة', arabizi: '3achra', french: 'Dix', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'chiffres'] },
  { id: 'w_barsha', arabic: 'برشة', arabizi: 'Barsha', french: 'Beaucoup', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'quantites'] },
  { id: 'w_chwaya', arabic: 'شوية', arabizi: 'Chwaya', french: 'Un peu', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'quantites'] },
  { id: 'w_el_kol', arabic: 'الكل', arabizi: 'El kol', french: 'Tout / tous', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'quantites'] },
  { id: 'w_nos', arabic: 'نصّ', arabizi: 'Nos', french: 'Demi / moitié', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'quantites'] },
  { id: 'w_kilo', arabic: 'كيلو', arabizi: 'Kilo', french: 'Kilo', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'quantites'] },

  // ── Temps et moments ──────────────────────────────────────────────────────────
  { id: 'w_sbe7', arabic: 'صباح', arabizi: 'Sbe7', french: 'Matin', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_3cheya', arabic: 'عشية', arabizi: '3cheya', french: 'Après-midi / fin de journée', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_lil', arabic: 'ليل', arabizi: 'Lil', french: 'Nuit', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_bekri', arabic: 'بكري', arabizi: 'Bekri', french: 'Tôt', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'temps'] },
  { id: 'w_met2akher', arabic: 'متأخر', arabizi: 'Met2akher', french: 'En retard / tard', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'temps'] },
  { id: 'w_dima', arabic: 'ديما', arabizi: 'Dima', french: 'Toujours', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_marra_marra', arabic: 'مرّة مرّة', arabizi: 'Marra marra', french: 'Parfois', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'temps'] },
  { id: 'w_ba3d', arabic: 'بعد', arabizi: 'Ba3d', french: 'Après', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_9bal', arabic: 'قبل', arabizi: '9bal', french: 'Avant', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'temps'] },
  { id: 'w_d9i9a', arabic: 'دقيقة', arabizi: 'D9i9a', french: 'Minute', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'temps'] },

  // ── Corps et santé ────────────────────────────────────────────────────────────
  { id: 'w_ras', arabic: 'راس', arabizi: 'Ras', french: 'Tête', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'corps'] },
  { id: 'w_3in', arabic: 'عين', arabizi: '3in', french: 'Œil', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'corps'] },
  { id: 'w_yed', arabic: 'يد', arabizi: 'Yed', french: 'Main', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'corps'] },
  { id: 'w_se9', arabic: 'ساق', arabizi: 'Se9', french: 'Jambe', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'corps'] },
  { id: 'w_kresh', arabic: 'كرش', arabizi: 'Kresh', french: 'Ventre', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'corps'] },
  { id: 'w_9alb', arabic: 'قلب', arabizi: '9alb', french: 'Cœur', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'corps'] },
  { id: 'w_mridh', arabic: 'مريض', arabizi: 'Mridh', french: 'Malade', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'sante'] },
  { id: 'w_labes_sante', arabic: 'لاباس', arabizi: 'Labes', french: 'Ça va / en bonne santé', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'sante'] },
  { id: 'w_wji3a', arabic: 'وجيعة', arabizi: 'Wji3a', french: 'Douleur', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'sante'] },
  { id: 'w_skhana', arabic: 'سخانة', arabizi: 'Skhana', french: 'Fièvre / chaleur', category: 'corps', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'sante'] },

  // ── Émotions et états ─────────────────────────────────────────────────────────
  { id: 'w_far7an', arabic: 'فرحان', arabizi: 'Far7an', french: 'Content / heureux', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'emotions'] },
  { id: 'w_7zin', arabic: 'حزين', arabizi: '7zin', french: 'Triste', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'emotions'] },
  { id: 'w_te3eb', arabic: 'تاعب', arabizi: 'Te3eb', french: 'Fatigué', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'emotions'] },
  { id: 'w_khayef', arabic: 'خايف', arabizi: 'Khayef', french: 'Apeuré', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'emotions'] },
  { id: 'w_ghadhb', arabic: 'غاضب', arabizi: 'Ghadhb', french: 'Fâché / en colère', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'emotions'] },
  { id: 'w_mestanes', arabic: 'مستانس', arabizi: 'Mestanes', french: "Content / à l'aise", category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'emotions'] },
  { id: 'w_m9alla9', arabic: 'مقلق', arabizi: 'M9alla9', french: 'Énervé / inquiet (selon contexte)', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'emotions'] },
  { id: 'w_berdan', arabic: 'بردان', arabizi: 'Berdan', french: "J'ai froid / il a froid", category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'etats'] },
  { id: 'w_skhoun', arabic: 'سخون', arabizi: 'Skhoun', french: 'Chaud', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'etats'] },
  { id: 'w_jou3an', arabic: 'جوعان', arabizi: 'Jou3an', french: 'Affamé', category: 'emotions', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'etats'] },

  // ── Vêtements ─────────────────────────────────────────────────────────────────
  { id: 'w_keswa', arabic: 'كسوة', arabizi: 'Keswa', french: 'Vêtement / robe (selon contexte)', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },
  { id: 'w_serwel', arabic: 'سروال', arabizi: 'Serwel', french: 'Pantalon', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'vetements'] },
  { id: 'w_maryoul', arabic: 'مريول', arabizi: 'Maryoul', french: 'T-shirt / haut', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'vetements'] },
  { id: 'w_sabbat', arabic: 'صبّاط', arabizi: 'Sabbat', french: 'Chaussures', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'vetements'] },
  { id: 'w_t9acher', arabic: 'تقاشر', arabizi: 'T9acher', french: 'Chaussettes', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },
  { id: 'w_jakit', arabic: 'جاكيت', arabizi: 'Jakit', french: 'Veste', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },
  { id: 'w_7zem', arabic: 'حزام', arabizi: '7zem', french: 'Ceinture', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },
  { id: 'w_chanta', arabic: 'شنطة', arabizi: 'Chanta', french: 'Sac', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'vetements'] },
  { id: 'w_nadharat', arabic: 'نظارات', arabizi: 'Nadharat', french: 'Lunettes', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },
  { id: 'w_khatem', arabic: 'خاتم', arabizi: 'Khatem', french: 'Bague', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'vetements'] },

  // ── Marché et courses ─────────────────────────────────────────────────────────
  { id: 'w_dokken', arabic: 'دكان', arabizi: 'Dokken', french: 'Épicerie / petit magasin', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'marche'] },
  { id: 'w_7anout', arabic: 'حانوت', arabizi: '7anout', french: 'Magasin / boutique', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'marche'] },
  { id: 'w_khadhra', arabic: 'خضرة', arabizi: 'Khadhra', french: 'Légumes', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_ghella', arabic: 'غلة', arabizi: 'Ghella', french: 'Fruits', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_ma3dnous', arabic: 'معدنوس', arabizi: 'Ma3dnous', french: 'Persil', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_9ares', arabic: 'قارس', arabizi: '9ares', french: 'Citron', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_bourt9al', arabic: 'برتقال', arabizi: 'Bourt9al', french: 'Orange', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_tfe7', arabic: 'تفاح', arabizi: 'Tfe7', french: 'Pomme', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_delle3', arabic: 'دلاع', arabizi: 'Delle3', french: 'Pastèque', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_fa99ous', arabic: 'فقوس', arabizi: 'Fa99ous', french: 'Concombre', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_jelbena', arabic: 'جلبانة', arabizi: 'Jelbena', french: 'Petits pois', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_loubya', arabic: 'لوبيا', arabizi: 'Loubya', french: 'Haricots', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_3des', arabic: 'عدس', arabizi: '3des', french: 'Lentilles', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_7ommes', arabic: 'حمص', arabizi: '7ommes', french: 'Pois chiches', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'marche', 'nourriture'] },
  { id: 'w_djej', arabic: 'دجاج', arabizi: 'Djej', french: 'Poulet', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'marche', 'nourriture'] },

  // ── Ville et lieux ────────────────────────────────────────────────────────────
  { id: 'w_chare3', arabic: 'شارع', arabizi: 'Chare3', french: 'Rue / avenue', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'ville'] },
  { id: 'w_nehj', arabic: 'نهج', arabizi: 'Nehj', french: 'Rue', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'ville'] },
  { id: 'w_mat3am', arabic: 'مطعم', arabizi: 'Mat3am', french: 'Restaurant', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'lieux'] },
  { id: 'w_madrsa', arabic: 'مدرسة', arabizi: 'Madrsa', french: 'École', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'lieux'] },
  { id: 'w_jam3a', arabic: 'جامعة', arabizi: 'Jam3a', french: 'Université', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'lieux'] },
  { id: 'w_sbitar', arabic: 'سبيطار', arabizi: 'Sbitar', french: 'Hôpital', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'lieux'] },
  { id: 'w_bousta', arabic: 'بوسطة', arabizi: 'Bousta', french: 'Poste', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['pack02', 'lieux'] },
  { id: 'w_bank', arabic: 'بنك', arabizi: 'Bank', french: 'Banque', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'lieux'] },
  { id: 'w_blasa', arabic: 'بلاصة', arabizi: 'Blasa', french: 'Place / endroit', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['pack02', 'lieux'] },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 1 — UNIVERS « AU CAFÉ » (25 mots) · universe: 'cafe'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_cafe_express', arabic: 'إكسبراس', arabizi: 'express', french: 'Express (café serré)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'boissons'], universe: 'cafe', needsValidation: true, note: 'Emprunt — vérifier la graphie arabe avec un locuteur natif.' },
  { id: 'w_cafe_capucin', arabic: 'كابيسان', arabizi: 'capucin', french: 'Cappuccino (à la tunisienne)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'boissons'], universe: 'cafe', needsValidation: true, note: 'Emprunt — vérifier la graphie arabe avec un locuteur natif.' },
  { id: 'w_cafe_direct', arabic: 'ديراكت', arabizi: 'direct', french: 'Café allongé', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'boissons'], universe: 'cafe', needsValidation: true, note: 'Usage régional — vérifier avec un locuteur natif.' },
  { id: 'w_cafe_9ahwa_kahla', arabic: 'قهوة كحلة', arabizi: '9ahwa ka7la', french: 'Café noir (sans lait)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'boissons'], universe: 'cafe' },
  { id: 'w_cafe_9ahwa_7alib', arabic: 'قهوة بالحليب', arabizi: '9ahwa bel7alib', french: 'Café au lait', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'boissons'], universe: 'cafe' },
  { id: 'w_cafe_7alib', arabic: 'حليب', arabizi: '7alib', french: 'Lait', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'boissons'], universe: 'cafe' },
  { id: 'w_cafe_na3na3', arabic: 'نعناع', arabizi: 'na3na3', french: 'Menthe', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'the'], universe: 'cafe' },
  { id: 'w_cafe_3asir', arabic: 'عصير', arabizi: '3asir', french: 'Jus', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'boissons', 'jus'], universe: 'cafe' },
  { id: 'w_cafe_limonada', arabic: 'لمونادة', arabizi: 'limonada', french: 'Limonade / soda', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'boissons'], universe: 'cafe', needsValidation: true, note: 'Emprunt — vérifier la graphie arabe avec un locuteur natif.' },
  { id: 'w_cafe_kes', arabic: 'كاس', arabizi: 'kes', french: 'Verre', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'objets'], universe: 'cafe' },
  { id: 'w_cafe_finjen', arabic: 'فنجان', arabizi: 'finjen', french: 'Tasse (à café)', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'objets'], universe: 'cafe' },
  { id: 'w_cafe_gato', arabic: 'قاتو', arabizi: 'gato', french: 'Gâteau', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'gateaux'], universe: 'cafe' },
  { id: 'w_cafe_ka3k', arabic: 'كعك', arabizi: 'ka3k', french: 'Kaâk (gâteau sec)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'gateaux'], universe: 'cafe' },
  { id: 'w_cafe_ka3b_ghzal', arabic: 'كعب غزال', arabizi: 'ka3b ghzal', french: 'Corne de gazelle (pâtisserie)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'gateaux'], universe: 'cafe' },
  { id: 'w_cafe_frikasse', arabic: 'فريكاسي', arabizi: 'frikassé', french: 'Fricassé (sandwich frit)', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'petit_dejeuner'], universe: 'cafe', needsValidation: true, note: 'Emprunt — vérifier la graphie arabe avec un locuteur natif.' },
  { id: 'w_cafe_ftour', arabic: 'فطور', arabizi: 'ftour', french: 'Petit déjeuner', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'petit_dejeuner'], universe: 'cafe' },
  { id: 'w_cafe_7seb', arabic: 'الحساب', arabizi: 'el 7seb', french: "L'addition", category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'payer', 'addition'], universe: 'cafe' },
  { id: 'w_cafe_sarf', arabic: 'صرف', arabizi: 'sarf', french: 'Monnaie', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'payer'], universe: 'cafe' },
  { id: 'w_cafe_bakhchich', arabic: 'بخشيش', arabizi: 'bakhchich', french: 'Pourboire', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'payer'], universe: 'cafe' },
  { id: 'w_cafe_garson', arabic: 'قارسون', arabizi: 'garson', french: 'Serveur', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'serveur'], universe: 'cafe' },
  { id: 'w_cafe_9ahwaji', arabic: 'قهواجي', arabizi: '9ahwaji', french: 'Cafetier (patron du café)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'serveur'], universe: 'cafe' },
  { id: 'w_cafe_zboun', arabic: 'زبون', arabizi: 'zboun', french: 'Client', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'serveur'], universe: 'cafe' },
  { id: 'w_cafe_9a3da', arabic: 'قعدة', arabizi: '9a3da', french: 'Moment passé assis ensemble (au café)', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'ambiance', 'amis'], universe: 'cafe' },
  { id: 'w_cafe_maw3ed', arabic: 'موعد', arabizi: 'maw3ed', french: 'Rendez-vous', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['cafe', 'rendez_vous'], universe: 'cafe' },
  { id: 'w_cafe_chicha', arabic: 'شيشة', arabizi: 'chicha', french: 'Narguilé (chicha)', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['cafe', 'ambiance'], universe: 'cafe' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « SALUTATIONS » (25 mots) · universe: 'salutations'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_salut_msa_lkhir', arabic: 'مسا الخير', arabizi: 'Msa el khir', french: 'Bonsoir', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_sba7_ennour', arabic: 'صباح النور', arabizi: 'Sba7 ennour', french: 'Bonjour (réponse à « Sbe7 el khir »)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_bislama', arabic: 'بالسلامة', arabizi: 'Bislama', french: 'Au revoir', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_chokran', arabic: 'شكرا', arabizi: 'Chokran', french: 'Merci', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_barakallahofik', arabic: 'بارك الله فيك', arabizi: 'Barakallahou fik', french: 'Merci beaucoup (litt. que Dieu te bénisse)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_sam7ni', arabic: 'سامحني', arabizi: 'Sam7ni', french: 'Excuse-moi / pardon', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_min_fadhlek', arabic: 'من فضلك', arabizi: 'Min fadhlek', french: "S'il te plaît", category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_tfaddal', arabic: 'تفضّل', arabizi: 'Tfaddal', french: "Je t'en prie / vas-y / entre", category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_ahla', arabic: 'أهلا', arabizi: 'Ahla', french: 'Salut / bienvenue', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_yahla', arabic: 'يا هلا', arabizi: 'Yahla', french: 'Salut ! (chaleureux)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_kifech_7alek', arabic: 'كيفاش حالك', arabizi: 'Kifech 7alek', french: 'Comment vas-tu ?', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'questions'], universe: 'salutations' },
  { id: 'w_salut_chna7welek', arabic: 'شنحوالك', arabizi: 'Chna7welek', french: 'Comment vas-tu ? (familier)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations', 'questions'], universe: 'salutations' },
  { id: 'w_salut_w_enti', arabic: 'وإنتي', arabizi: 'W enti?', french: 'Et toi ?', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations', 'questions'], universe: 'salutations' },
  { id: 'w_salut_el7amdoulah', arabic: 'الحمد لله', arabizi: 'El7amdoulah', french: 'Dieu merci (ça va)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_inchallah', arabic: 'إن شاء الله', arabizi: 'Inchallah', french: 'Si Dieu le veut', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_3al_slema', arabic: 'على السلامة', arabizi: '3al slema', french: 'Bon retour / bienvenue', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_rabbi_m3ak', arabic: 'ربي معاك', arabizi: 'Rabbi m3ak', french: 'Que Dieu soit avec toi (au revoir)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_nchoufouk', arabic: 'نشوفوك', arabizi: 'Nchoufouk', french: 'À bientôt (litt. on te voit)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_mabrouk', arabic: 'مبروك', arabizi: 'Mabrouk', french: 'Félicitations', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_3aydek_mabrouk', arabic: 'عيدك مبروك', arabizi: '3aydek mabrouk', french: 'Bonne fête (Aïd)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations', 'fetes'], universe: 'salutations' },
  { id: 'w_salut_sa7it', arabic: 'صحيت', arabizi: 'Sa7it', french: 'Merci / bravo (litt. sois en bonne santé)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'w_salut_thalla', arabic: 'تهلّى في روحك', arabizi: 'Thalla fi ro7ek', french: 'Prends soin de toi', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_nharek_zin', arabic: 'نهارك زين', arabizi: 'Nharek zin', french: 'Bonne journée', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_lila_sa3ida', arabic: 'ليلة سعيدة', arabizi: 'Lila sa3ida', french: 'Bonne nuit', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },
  { id: 'w_salut_slemtek', arabic: 'سلامتك', arabizi: 'Slemtek', french: 'Porte-toi bien / remets-toi (à un malade)', category: 'salutations', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['salutations'], universe: 'salutations' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « AU MARCHÉ » (25 mots) · universe: 'marche'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_marche_bayya3', arabic: 'بياع', arabizi: 'Bayya3', french: 'Vendeur / marchand', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'commerce'], universe: 'marche' },
  { id: 'w_marche_chari', arabic: 'شاري', arabizi: 'Chari', french: 'Acheteur', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'commerce'], universe: 'marche' },
  { id: 'w_marche_souma', arabic: 'سومة', arabizi: 'Souma', french: 'Le prix (demandé)', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'w_marche_ghali', arabic: 'غالي', arabizi: 'Ghali', french: 'Cher', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'w_marche_rkhis', arabic: 'رخيص', arabizi: 'Rkhis', french: 'Pas cher / bon marché', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'w_marche_mizen', arabic: 'ميزان', arabizi: 'Mizen', french: 'Balance', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'commerce'], universe: 'marche' },
  { id: 'w_marche_nos_kilo', arabic: 'نص كيلو', arabizi: 'Nos kilo', french: 'Un demi-kilo', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'quantites'], universe: 'marche' },
  { id: 'w_marche_gram', arabic: 'غرام', arabizi: 'Gram', french: 'Gramme', category: 'chiffres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'quantites'], universe: 'marche' },
  { id: 'w_marche_kartouna', arabic: 'كرتونة', arabizi: 'Kartouna', french: 'Carton / caisse', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'commerce'], universe: 'marche' },
  { id: 'w_marche_9offa', arabic: 'قفة', arabizi: '9offa', french: 'Couffin / panier', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'objets'], universe: 'marche' },
  { id: 'w_marche_kis', arabic: 'كيس', arabizi: 'Kis', french: 'Sac (plastique)', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'objets'], universe: 'marche' },
  { id: 'w_marche_l7am', arabic: 'لحم', arabizi: 'L7am', french: 'Viande', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_7out', arabic: 'حوت', arabizi: '7out', french: 'Poisson', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_bidh', arabic: 'بيض', arabizi: 'Bidh', french: 'Œufs', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_jben', arabic: 'جبن', arabizi: 'Jben', french: 'Fromage', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_zebda', arabic: 'زبدة', arabizi: 'Zebda', french: 'Beurre', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_3sel', arabic: 'عسل', arabizi: '3sel', french: 'Miel', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_d9i9', arabic: 'دقيق', arabizi: 'D9i9', french: 'Farine', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_roz', arabic: 'روز', arabizi: 'Roz', french: 'Riz', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_makarouna', arabic: 'مكرونة', arabizi: 'Makarouna', french: 'Pâtes', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['marche', 'nourriture'], universe: 'marche' },
  { id: 'w_marche_frawla', arabic: 'فراولة', arabizi: 'Frawla', french: 'Fraises', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture', 'fruits'], universe: 'marche' },
  { id: 'w_marche_3neb', arabic: 'عنب', arabizi: '3neb', french: 'Raisin', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture', 'fruits'], universe: 'marche' },
  { id: 'w_marche_banan', arabic: 'بنان', arabizi: 'Banan', french: 'Bananes', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'nourriture', 'fruits'], universe: 'marche' },
  { id: 'w_marche_tri', arabic: 'طري', arabizi: 'Tri', french: 'Frais / tendre', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'qualite'], universe: 'marche' },
  { id: 'w_marche_khaddar', arabic: 'خضّار', arabizi: 'Khaddar', french: 'Marchand de légumes', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['marche', 'commerce'], universe: 'marche' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « MAISON » (25 mots) · universe: 'maison'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_maison_srir', arabic: 'سرير', arabizi: 'Srir', french: 'Lit', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison', 'meubles'], universe: 'maison' },
  { id: 'w_maison_mkhadda', arabic: 'مخدة', arabizi: 'Mkhadda', french: 'Oreiller', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'meubles'], universe: 'maison' },
  { id: 'w_maison_ghta', arabic: 'غطاء', arabizi: 'Ghta', french: 'Couverture', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_zarbiya', arabic: 'زربية', arabizi: 'Zarbiya', french: 'Tapis', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_khzana', arabic: 'خزانة', arabizi: 'Khzana', french: 'Armoire', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'meubles'], universe: 'maison' },
  { id: 'w_maison_telfza', arabic: 'تلفزة', arabizi: 'Telfza', french: 'Télévision', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_thallaja', arabic: 'ثلاجة', arabizi: 'Thallaja', french: 'Réfrigérateur', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_koucha', arabic: 'كوشة', arabizi: 'Koucha', french: 'Four', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_ghassala', arabic: 'غسالة', arabizi: 'Ghassala', french: 'Machine à laver', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_tba9', arabic: 'طبق', arabizi: 'Tba9', french: 'Assiette', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison', 'vaisselle'], universe: 'maison' },
  { id: 'w_maison_farchita', arabic: 'فرشيطة', arabizi: 'Farchita', french: 'Fourchette', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'vaisselle'], universe: 'maison' },
  { id: 'w_maison_mous', arabic: 'موس', arabizi: 'Mous', french: 'Couteau', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'vaisselle'], universe: 'maison' },
  { id: 'w_maison_m3al9a', arabic: 'معلقة', arabizi: 'M3al9a', french: 'Cuillère', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison', 'vaisselle'], universe: 'maison' },
  { id: 'w_maison_borma', arabic: 'برمة', arabizi: 'Borma', french: 'Marmite / fait-tout', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'cuisine'], universe: 'maison' },
  { id: 'w_maison_ma9la', arabic: 'مقلاة', arabizi: 'Ma9la', french: 'Poêle', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison', 'cuisine'], universe: 'maison' },
  { id: 'w_maison_dhou', arabic: 'ضوء', arabizi: 'Dhou', french: 'Lumière', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_mosba7', arabic: 'مصباح', arabizi: 'Mosba7', french: 'Lampe', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_mefte7', arabic: 'مفتاح', arabizi: 'Mefte7', french: 'Clé', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_7it', arabic: 'حيط', arabizi: '7it', french: 'Mur', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_droj', arabic: 'درج', arabizi: 'Droj', french: 'Escalier', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_ste7', arabic: 'سطح', arabizi: 'Ste7', french: 'Terrasse / toit', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_jnen', arabic: 'جنان', arabizi: 'Jnen', french: 'Jardin', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_garaj', arabic: 'قراج', arabizi: 'Garaj', french: 'Garage', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },
  { id: 'w_maison_saboun', arabic: 'صابون', arabizi: 'Saboun', french: 'Savon', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['maison', 'menage'], universe: 'maison' },
  { id: 'w_maison_menchfa', arabic: 'منشفة', arabizi: 'Menchfa', french: 'Serviette', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['maison'], universe: 'maison' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « FAMILLE » (25 mots) · universe: 'famille'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_famille_jadd', arabic: 'جد', arabizi: 'Jadd', french: 'Grand-père', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_jadda', arabic: 'جدة', arabizi: 'Jadda', french: 'Grand-mère', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_3amma', arabic: 'عمّة', arabizi: '3amma', french: 'Tante paternelle', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_khal', arabic: 'خال', arabizi: 'Khal', french: 'Oncle maternel', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_rajel', arabic: 'راجل', arabizi: 'Rajel', french: 'Mari / homme', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_mra', arabic: 'مرا', arabizi: 'Mra', french: 'Femme / épouse', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_3ris', arabic: 'عريس', arabizi: '3ris', french: 'Marié (jeune époux)', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille', 'mariage'], universe: 'famille' },
  { id: 'w_famille_3roussa', arabic: 'عروسة', arabizi: '3roussa', french: 'Mariée (jeune épouse)', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille', 'mariage'], universe: 'famille' },
  { id: 'w_famille_tfol', arabic: 'طفل', arabizi: 'Tfol', french: 'Enfant', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_wled', arabic: 'ولاد', arabizi: 'Wled', french: 'Enfants', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_okht', arabic: 'أخت', arabizi: 'Okht', french: 'Sœur', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_baba', arabic: 'بابا', arabizi: 'Baba', french: 'Papa', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_mama', arabic: 'ماما', arabizi: 'Mama', french: 'Maman', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_nsib', arabic: 'نسيب', arabizi: 'Nsib', french: 'Beau-frère / belle-famille', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_jar', arabic: 'جار', arabizi: 'Jar', french: 'Voisin', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille', 'voisinage'], universe: 'famille' },
  { id: 'w_famille_sa7eb', arabic: 'صاحب', arabizi: 'Sa7eb', french: 'Ami', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille', 'amis'], universe: 'famille' },
  { id: 'w_famille_7afid', arabic: 'حفيد', arabizi: '7afid', french: 'Petit-fils', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_3zeb', arabic: 'عازب', arabizi: '3zeb', french: 'Célibataire', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_mtzawej', arabic: 'متزوّج', arabizi: 'Mtzawej', french: 'Marié(e)', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille', 'mariage'], universe: 'famille' },
  { id: 'w_famille_7amel', arabic: 'حامل', arabizi: '7amel', french: 'Enceinte', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_mawloud', arabic: 'مولود', arabizi: 'Mawloud', french: 'Nouveau-né', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_3id_milad', arabic: 'عيد ميلاد', arabizi: '3id milad', french: 'Anniversaire', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['famille', 'fetes'], universe: 'famille' },
  { id: 'w_famille_3ors', arabic: 'عرس', arabizi: '3ors', french: 'Mariage (la noce)', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille', 'mariage', 'fetes'], universe: 'famille' },
  { id: 'w_famille_kbir', arabic: 'كبير', arabizi: 'Kbir', french: 'Grand / aîné', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },
  { id: 'w_famille_sghir', arabic: 'صغير', arabizi: 'Sghir', french: 'Petit / cadet', category: 'famille', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['famille'], universe: 'famille' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « EN LOUAGE » (25 mots) · universe: 'louage'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_louage_rakeb', arabic: 'راكب', arabizi: 'Rakeb', french: 'Passager', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'transport'], universe: 'louage' },
  { id: 'w_louage_sewa9', arabic: 'سواق', arabizi: 'Sewa9', french: 'Chauffeur', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'transport'], universe: 'louage' },
  { id: 'w_louage_ta3rifa', arabic: 'تعريفة', arabizi: 'Ta3rifa', french: 'Tarif', category: 'shopping', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'prix'], universe: 'louage' },
  { id: 'w_louage_kompli', arabic: 'كومبلي', arabizi: 'Kompli', french: 'Complet / plein', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage', needsValidation: true, note: 'Emprunt au français — graphie arabe à confirmer.' },
  { id: 'w_louage_otoroute', arabic: 'أوتوروت', arabizi: 'Otoroute', french: 'Autoroute', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage', 'route'], universe: 'louage', needsValidation: true, note: 'Emprunt au français — graphie arabe à confirmer.' },
  { id: 'w_louage_b3id', arabic: 'بعيد', arabizi: 'B3id', french: 'Loin', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'distance'], universe: 'louage' },
  { id: 'w_louage_9rib', arabic: 'قريب', arabizi: '9rib', french: 'Proche', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'distance'], universe: 'louage' },
  { id: 'w_louage_fisa3', arabic: 'فيسع', arabizi: 'Fisa3', french: 'Vite', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_bechwaya', arabic: 'بالشوية', arabizi: 'Bechwaya', french: 'Doucement', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_valiza', arabic: 'فاليزة', arabizi: 'Valiza', french: 'Valise', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage', 'bagages'], universe: 'louage' },
  { id: 'w_louage_wost', arabic: 'وسط', arabizi: 'Wost', french: 'Centre-ville / milieu', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage', 'ville'], universe: 'louage' },
  { id: 'w_louage_khrouj', arabic: 'خروج', arabizi: 'Khrouj', french: 'Départ / sortie', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_doukhoul', arabic: 'دخول', arabizi: 'Doukhoul', french: 'Entrée', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_jiha', arabic: 'جهة', arabizi: 'Jiha', french: 'Côté / direction / région', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage', 'direction'], universe: 'louage' },
  { id: 'w_louage_wlaya', arabic: 'ولاية', arabizi: 'Wlaya', french: 'Gouvernorat / région', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage', 'regions'], universe: 'louage' },
  { id: 'w_louage_saf', arabic: 'صف', arabizi: 'Saf', french: 'File / rang', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_dawr', arabic: 'دور', arabizi: 'Dawr', french: 'Tour (de passage)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_mochkla', arabic: 'مشكلة', arabizi: 'Mochkla', french: 'Problème', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_tool', arabic: 'طول', arabizi: 'Tool', french: 'Tout droit', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'direction'], universe: 'louage' },
  { id: 'w_louage_ysar', arabic: 'يسار', arabizi: 'Ysar', french: 'Gauche', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'direction'], universe: 'louage' },
  { id: 'w_louage_ymin', arabic: 'يمين', arabizi: 'Ymin', french: 'Droite', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage', 'direction'], universe: 'louage' },
  { id: 'w_louage_wa9fa', arabic: 'وقفة', arabizi: 'Wa9fa', french: 'Arrêt', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_3ajla', arabic: 'عجلة', arabizi: '3ajla', french: 'Roue', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_benzin', arabic: 'بنزين', arabizi: 'Benzin', french: 'Essence', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['louage'], universe: 'louage' },
  { id: 'w_louage_klakson', arabic: 'كلاكسون', arabizi: 'Klakson', french: 'Klaxon', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['louage'], universe: 'louage', needsValidation: true, note: 'Emprunt — graphie arabe à confirmer.' },

  // ════════════════════════════════════════════════════════════════════════════════
  // VAGUE 2 — UNIVERS « À LA PLAGE » (25 mots) · universe: 'plage'
  // ════════════════════════════════════════════════════════════════════════════════
  { id: 'w_plage_chatt', arabic: 'شط', arabizi: 'Chatt', french: 'Rivage / plage', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_blaj', arabic: 'بلاج', arabizi: 'Blaj', french: 'La plage (le lieu)', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage'], universe: 'plage', needsValidation: true, note: 'Emprunt au français — graphie arabe à confirmer.' },
  { id: 'w_plage_rmel', arabic: 'رمل', arabizi: 'Rmel', french: 'Sable', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_chams', arabic: 'شمس', arabizi: 'Chams', french: 'Soleil', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'meteo'], universe: 'plage' },
  { id: 'w_plage_mouja', arabic: 'موجة', arabizi: 'Mouja', french: 'Vague', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_mayou', arabic: 'مايو', arabizi: 'Mayou', french: 'Maillot de bain', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage', needsValidation: true, note: 'Emprunt — graphie arabe à confirmer.' },
  { id: 'w_plage_chamsiya', arabic: 'شمسية', arabizi: 'Chamsiya', french: 'Parasol', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_fouta', arabic: 'فوطة', arabizi: 'Fouta', french: 'Fouta (serviette de plage)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'culture'], universe: 'plage' },
  { id: 'w_plage_nadharat_chams', arabic: 'نظارات شمس', arabizi: 'Nadharat chams', french: 'Lunettes de soleil', category: 'vêtements', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_koura', arabic: 'كرة', arabizi: 'Koura', french: 'Ballon', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'jeux'], universe: 'plage' },
  { id: 'w_plage_markeb', arabic: 'مركب', arabizi: 'Markeb', french: 'Barque', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_babor', arabic: 'بابور', arabizi: 'Babor', french: 'Bateau / ferry', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_3awwama', arabic: 'عوامة', arabizi: '3awwama', french: 'Bouée', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_sba7a', arabic: 'سباحة', arabizi: 'Sba7a', french: 'Natation / baignade', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_dhell', arabic: 'ظل', arabizi: 'Dhell', french: 'Ombre', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_7arr', arabic: 'حر', arabizi: '7arr', french: 'Chaleur', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'meteo'], universe: 'plage' },
  { id: 'w_plage_jelati', arabic: 'جلاتي', arabizi: 'Jelati', french: 'Glace', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'nourriture'], universe: 'plage' },
  { id: 'w_plage_kazouza', arabic: 'كازوزة', arabizi: 'Kazouza', french: 'Soda / limonade', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'boissons'], universe: 'plage' },
  { id: 'w_plage_sandwich', arabic: 'ساندويتش', arabizi: 'Sandwich', french: 'Sandwich', category: 'nourriture', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'nourriture'], universe: 'plage', needsValidation: true, note: 'Emprunt — graphie arabe à confirmer.' },
  { id: 'w_plage_3otla', arabic: 'عطلة', arabizi: '3otla', french: 'Vacances', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage'], universe: 'plage' },
  { id: 'w_plage_sif', arabic: 'صيف', arabizi: 'Sif', french: 'Été', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['plage', 'saisons'], universe: 'plage' },
  { id: 'w_plage_mina', arabic: 'ميناء', arabizi: 'Mina', french: 'Port', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_sa7el', arabic: 'ساحل', arabizi: 'Sa7el', french: 'Côte / littoral', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_jzira', arabic: 'جزيرة', arabizi: 'Jzira', french: 'Île', category: 'nature', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage', 'mer'], universe: 'plage' },
  { id: 'w_plage_ghous', arabic: 'غوص', arabizi: 'Ghous', french: 'Plongée', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['plage'], universe: 'plage' },

  // VAGUE 2 — UNIVERS « À L'HÔTEL » (25 mots) · universe: 'hotel'
  { id: 'w_hotel_fondok', arabic: 'فندق', arabizi: 'Fondok', french: 'Hôtel', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'voyage'], universe: 'hotel' },
  { id: 'w_hotel_ghorfa', arabic: 'غرفة', arabizi: 'Ghorfa', french: 'Chambre', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_mefta7', arabic: 'مفتاح', arabizi: 'Mefta7', french: 'Clé', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_7ajz', arabic: 'حجز', arabizi: '7ajz', french: 'Réservation', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'voyage'], universe: 'hotel' },
  { id: 'w_hotel_isti9bal', arabic: 'استقبال', arabizi: 'Isti9bal', french: 'Réception', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_tabiq', arabic: 'طابق', arabizi: 'Tabiq', french: 'Étage', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_mossaad', arabic: 'مصعد', arabizi: 'Mossaad', french: 'Ascenseur', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_7isab', arabic: 'حساب', arabizi: '7isab', french: 'Addition / Compte', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'argent'], universe: 'hotel' },
  { id: 'w_hotel_khidma', arabic: 'خدمة', arabizi: 'Khidma', french: 'Service', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_manchfa', arabic: 'منشفة', arabizi: 'Manchfa', french: 'Serviette (de bain)', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_hammam', arabic: 'حمّام', arabizi: 'Hammem', french: 'Salle de bain', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'maison'], universe: 'hotel' },
  { id: 'w_hotel_douche', arabic: 'دوش', arabizi: 'Douche', french: 'Douche', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel', needsValidation: true, note: 'Emprunt au français — graphie arabe à confirmer.' },
  { id: 'w_hotel_klim', arabic: 'كليماتيزير', arabizi: 'Klimatizir', french: 'Climatisation', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel', needsValidation: true, note: 'La forme abrégée « klim » est la plus courante.' },
  { id: 'w_hotel_wifi', arabic: 'واي فاي', arabizi: 'Wifi', french: 'Wifi', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_piscine', arabic: 'بيسين', arabizi: 'Biscine', french: 'Piscine', category: 'loisirs', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'loisirs'], universe: 'hotel', needsValidation: true, note: 'Emprunt au français — graphie arabe à confirmer.' },
  { id: 'w_hotel_leyla', arabic: 'ليلة', arabizi: 'Leyla', french: 'Nuit (d\'hôtel)', category: 'temps', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_khruj', arabic: 'خروج', arabizi: 'Khruj', french: 'Départ / Check-out', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel', 'voyage'], universe: 'hotel' },
  { id: 'w_hotel_wsoul', arabic: 'وصول', arabizi: 'Wsoul', french: 'Arrivée / Check-in', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel', 'voyage'], universe: 'hotel' },
  { id: 'w_hotel_chenta', arabic: 'شنطة', arabizi: 'Chenta', french: 'Valise / Bagage', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'voyage'], universe: 'hotel' },
  { id: 'w_hotel_garaj', arabic: 'كراج', arabizi: 'Garaj', french: 'Parking / Garage', category: 'transport', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_saboun', arabic: 'صابون', arabizi: 'Saboun', french: 'Savon', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_nafidha', arabic: 'نافذة', arabizi: 'Nafidha', french: 'Fenêtre', category: 'maison', level: 'debutant', domain: 'quotidien', frequencyRank: 2, tags: ['hotel', 'maison'], universe: 'hotel' },
  { id: 'w_hotel_fadhya', arabic: 'فاضية', arabizi: 'Fadhya', french: 'Libre / Disponible', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel'], universe: 'hotel' },
  { id: 'w_hotel_ghali', arabic: 'غالي', arabizi: 'Ghali', french: 'Cher (prix)', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'prix'], universe: 'hotel' },
  { id: 'w_hotel_rkhis', arabic: 'رخيص', arabizi: 'Rkhis', french: 'Pas cher / Bon marché', category: 'autres', level: 'debutant', domain: 'quotidien', frequencyRank: 1, tags: ['hotel', 'prix'], universe: 'hotel' },
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
