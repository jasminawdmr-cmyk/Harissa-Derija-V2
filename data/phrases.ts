/**
 * /data/phrases.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base des PHRASES complètes prêtes à l'emploi (≠ mots isolés, ≠ dialogues).
 *
 * ⚠️  CONTENANT VIDE — aucun contenu linguistique n'est créé ici.
 *     Le contenu (darija) sera fourni et validé séparément (locuteur natif),
 *     puis ajouté ci-dessous en respectant l'interface Phrase.
 *
 * Cible à terme : ~300 phrases (voir docs/LANGUAGE_MASTER_PLAN.md §3).
 *
 * Convention d'ID : "p_<contexte>_<NN>"  (ex : "p_salutations_01")
 * Translittération : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Comment ajouter une phrase :
 *   1. Créer une constante `const PHRASE_XXX: Phrase = { ... }`
 *   2. L'ajouter au tableau `phrases` ci-dessous
 *   3. Renseigner darija + darijaLatin (validés), french, category, level, domain
 *   4. Lier wordIds / grammarRuleId si pertinent (réutilisation = renforcement)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Phrase } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────

export const phrases: Readonly<Phrase[]> = [
  // ── VAGUE 1 — UNIVERS « AU CAFÉ » (15 phrases) · universe: 'cafe' ──────────────
  { id: 'p_cafe_01', arabic: 'أعطيني قهوة عيشك', arabizi: 'A3tini 9ahwa 3aychek', french: "Donne-moi un café, s'il te plaît", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'politesse'], universe: 'cafe', wordIds: ['w_9ahwa'] },
  { id: 'p_cafe_02', arabic: 'شنوة تحب تشرب؟', arabizi: 'Chnowa t7eb techreb?', french: "Qu'est-ce que tu veux boire ?", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'questions', 'serveur'], universe: 'cafe', grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_cafe_03', arabic: 'نحب قهوة بلا سكر', arabizi: 'N7eb 9ahwa bla sokkor', french: 'Je veux un café sans sucre', category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'preferences'], universe: 'cafe', wordIds: ['w_9ahwa', 'w_sokker'] },
  { id: 'p_cafe_04', arabic: 'قهوة بالحليب عيشك', arabizi: '9ahwa bel 7alib 3aychek', french: "Un café au lait, s'il te plaît", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'boissons'], universe: 'cafe', wordIds: ['w_cafe_9ahwa_7alib', 'w_cafe_7alib'], grammarRuleId: 'g_cafe_preposition_b' },
  { id: 'p_cafe_05', arabic: 'جيب لي الحساب', arabizi: 'Jib li el 7seb', french: "Apporte-moi l'addition", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'payer', 'addition'], universe: 'cafe', wordIds: ['w_cafe_7seb'] },
  { id: 'p_cafe_06', arabic: 'قدّاش الحساب؟', arabizi: '9addech el 7seb?', french: "Ça fait combien, l'addition ?", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'payer', 'questions'], universe: 'cafe', wordIds: ['w_cafe_7seb', 'w_9addech'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_cafe_07', arabic: 'خلّي الباقي', arabizi: 'Khalli el ba9i', french: 'Garde la monnaie', category: 'politesse', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'payer', 'pourboire'], universe: 'cafe', wordIds: ['w_cafe_bakhchich'] },
  { id: 'p_cafe_08', arabic: 'نقعدوا هوني؟', arabizi: 'No93do houni?', french: "On s'assoit ici ?", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['cafe', 's_asseoir', 'questions'], universe: 'cafe', grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_cafe_09', arabic: 'تاي بالنعناع عيشك', arabizi: 'Tay bel na3na3 3aychek', french: "Un thé à la menthe, s'il te plaît", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'the'], universe: 'cafe', wordIds: ['w_tay', 'w_cafe_na3na3'], grammarRuleId: 'g_cafe_preposition_b' },
  { id: 'p_cafe_10', arabic: 'فمّا طاولة فاضية؟', arabizi: 'Famma tawla fadhya?', french: 'Y a-t-il une table libre ?', category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 's_asseoir', 'questions'], universe: 'cafe', wordIds: ['w_tawla'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_cafe_11', arabic: 'نستنّاو صاحبي', arabizi: 'Nestannaw sa7bi', french: 'On attend mon ami', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'attendre', 'amis'], universe: 'cafe' },
  { id: 'p_cafe_12', arabic: 'قهوة حارة عيشك', arabizi: '9ahwa 7ara 3aychek', french: "Un café chaud, s'il te plaît", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'preferences'], universe: 'cafe', wordIds: ['w_9ahwa'] },
  { id: 'p_cafe_13', arabic: 'زيدني كاس ماء', arabizi: 'Zidni kes ma', french: "Ajoute-moi un verre d'eau", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'commander', 'eau'], universe: 'cafe', wordIds: ['w_cafe_kes', 'w_ma'] },
  { id: 'p_cafe_14', arabic: 'وين نجّم نخلّص؟', arabizi: 'Win nnajjem nkhalles?', french: 'Où est-ce que je peux payer ?', category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'payer', 'questions'], universe: 'cafe', wordIds: ['w_win'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_cafe_15', arabic: 'القهوة هنا بنينة برشة', arabizi: 'El 9ahwa hne bnina barsha', french: 'Le café ici est très bon', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['cafe', 'ambiance', 'preferences'], universe: 'cafe', wordIds: ['w_9ahwa', 'w_barsha'] },

  // ── VAGUE 2 — UNIVERS « SALUTATIONS » (15 phrases) · universe: 'salutations' ────
  { id: 'p_salut_01', arabic: 'عسلامة، كيفاش حالك؟', arabizi: 'Aaslema, kifech 7alek?', french: 'Salut, comment vas-tu ?', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_aaslema', 'w_salut_kifech_7alek'], grammarRuleId: 'g_salut_questions' },
  { id: 'p_salut_02', arabic: 'أنا لاباس، الحمد لله', arabizi: 'Ena labes, el7amdoulah', french: 'Je vais bien, Dieu merci', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_labes', 'w_salut_el7amdoulah'] },
  { id: 'p_salut_03', arabic: 'صباح الخير، شنحوالك؟', arabizi: 'Sba7 el khir, chna7welek?', french: 'Bonjour, comment vas-tu ?', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_sbeh_el_khir', 'w_salut_chna7welek'] },
  { id: 'p_salut_04', arabic: 'مسا الخير، وإنتي؟', arabizi: 'Msa el khir, w enti?', french: 'Bonsoir, et toi ?', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_salut_msa_lkhir', 'w_salut_w_enti'] },
  { id: 'p_salut_05', arabic: 'شكرا برشة', arabizi: 'Chokran barsha', french: 'Merci beaucoup', category: 'politesse', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'politesse'], universe: 'salutations', wordIds: ['w_salut_chokran', 'w_barsha'] },
  { id: 'p_salut_06', arabic: 'سامحني، تأخرت', arabizi: 'Sam7ni, t2akhart', french: 'Excuse-moi, je suis en retard', category: 'politesse', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'politesse'], universe: 'salutations', wordIds: ['w_salut_sam7ni', 'w_met2akher'] },
  { id: 'p_salut_07', arabic: 'تفضّل أدخل', arabizi: 'Tfaddal odkhol', french: "Je t'en prie, entre", category: 'politesse', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'politesse'], universe: 'salutations', wordIds: ['w_salut_tfaddal'] },
  { id: 'p_salut_08', arabic: 'بالسلامة، نشوفوك غدوة', arabizi: 'Bislama, nchoufouk ghodwa', french: 'Au revoir, à demain', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_salut_bislama', 'w_salut_nchoufouk', 'w_ghodwa'] },
  { id: 'p_salut_09', arabic: 'مبروك عليك!', arabizi: 'Mabrouk 3lik!', french: 'Félicitations à toi !', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'fetes'], universe: 'salutations', wordIds: ['w_salut_mabrouk'] },
  { id: 'p_salut_10', arabic: 'شنوة اسمك؟', arabizi: 'Chnowa esmek?', french: "Comment tu t'appelles ?", category: 'presentation', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'presentation', 'questions'], universe: 'salutations', grammarRuleId: 'g_salut_possessif' },
  { id: 'p_salut_11', arabic: 'اسمي كريم', arabizi: 'Esmi Karim', french: "Je m'appelle Karim", category: 'presentation', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'presentation'], universe: 'salutations', grammarRuleId: 'g_salut_possessif' },
  { id: 'p_salut_12', arabic: 'من وين إنتي؟', arabizi: 'Min win enti?', french: "D'où viens-tu ?", category: 'presentation', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'presentation', 'questions'], universe: 'salutations', wordIds: ['w_win'], grammarRuleId: 'g_salut_questions' },
  { id: 'p_salut_13', arabic: 'أنا من تونس', arabizi: 'Ena men Tounes', french: 'Je viens de Tunisie', category: 'presentation', level: 'debutant', domain: 'quotidien', tags: ['salutations', 'presentation'], universe: 'salutations' },
  { id: 'p_salut_14', arabic: 'نهارك زين!', arabizi: 'Nharek zin!', french: 'Bonne journée !', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_salut_nharek_zin'] },
  { id: 'p_salut_15', arabic: 'تهلّى في روحك', arabizi: 'Thalla fi ro7ek', french: 'Prends soin de toi', category: 'salutations', level: 'debutant', domain: 'quotidien', tags: ['salutations'], universe: 'salutations', wordIds: ['w_salut_thalla'] },

  // ── VAGUE 2 — UNIVERS « AU MARCHÉ » (15 phrases) · universe: 'marche' ───────────
  { id: 'p_marche_01', arabic: 'قدّاش الكيلو؟', arabizi: '9addech el kilo?', french: "C'est combien le kilo ?", category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix', 'questions'], universe: 'marche', wordIds: ['w_9addech', 'w_kilo'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_marche_02', arabic: 'غالي برشة!', arabizi: 'Ghali barsha!', french: "C'est très cher !", category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix'], universe: 'marche', wordIds: ['w_marche_ghali', 'w_barsha'] },
  { id: 'p_marche_03', arabic: 'نقّصلي شوية', arabizi: 'Na99asli chwaya', french: 'Baisse-moi un peu (le prix)', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix', 'negociation'], universe: 'marche', wordIds: ['w_chwaya'] },
  { id: 'p_marche_04', arabic: 'أعطيني نص كيلو طماطم', arabizi: 'A3tini nos kilo tmatem', french: 'Donne-moi un demi-kilo de tomates', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'commander'], universe: 'marche', wordIds: ['w_marche_nos_kilo', 'w_tmatem'] },
  { id: 'p_marche_05', arabic: 'الخضرة طرية؟', arabizi: 'El khodhra tri?', french: 'Les légumes sont frais ?', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'questions', 'qualite'], universe: 'marche', wordIds: ['w_khadhra', 'w_marche_tri'] },
  { id: 'p_marche_06', arabic: 'نحب كيلو تفاح', arabizi: 'N7eb kilo tfe7', french: 'Je veux un kilo de pommes', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'commander'], universe: 'marche', wordIds: ['w_kilo', 'w_tfe7'] },
  { id: 'p_marche_07', arabic: 'عندك حوت طري؟', arabizi: '3andek 7out tri?', french: 'Tu as du poisson frais ?', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'questions'], universe: 'marche', wordIds: ['w_marche_7out', 'w_marche_tri'] },
  { id: 'p_marche_08', arabic: 'هذا بقدّاش؟', arabizi: 'Hedha b9addech?', french: "Celui-ci, c'est combien ?", category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix', 'questions'], universe: 'marche', wordIds: ['w_hedha', 'w_9addech'], grammarRuleId: 'g_marche_demonstratifs' },
  { id: 'p_marche_09', arabic: 'أعطيني قفة', arabizi: 'A3tini 9offa', french: 'Donne-moi un couffin', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'objets'], universe: 'marche', wordIds: ['w_marche_9offa'] },
  { id: 'p_marche_10', arabic: 'السومة غالية', arabizi: 'El souma ghalya', french: 'Le prix est cher', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix'], universe: 'marche', wordIds: ['w_marche_souma', 'w_marche_ghali'] },
  { id: 'p_marche_11', arabic: 'فمّا أرخص؟', arabizi: 'Famma arkhas?', french: 'Y a-t-il moins cher ?', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix', 'questions'], universe: 'marche', wordIds: ['w_marche_rkhis'], grammarRuleId: 'g_marche_comparaison' },
  { id: 'p_marche_12', arabic: 'زيدني كيس', arabizi: 'Zidni kis', french: 'Ajoute-moi un sac', category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'objets'], universe: 'marche', wordIds: ['w_marche_kis'] },
  { id: 'p_marche_13', arabic: 'البيض بقدّاش؟', arabizi: 'El bidh b9addech?', french: "Les œufs, c'est combien ?", category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix', 'questions'], universe: 'marche', wordIds: ['w_marche_bidh', 'w_9addech'] },
  { id: 'p_marche_14', arabic: 'هذا رخيص برشة', arabizi: 'Hedha rkhis barsha', french: "Celui-ci est très bon marché", category: 'marche', level: 'debutant', domain: 'quotidien', tags: ['marche', 'prix'], universe: 'marche', wordIds: ['w_hedha', 'w_marche_rkhis', 'w_barsha'], grammarRuleId: 'g_marche_demonstratifs' },
  { id: 'p_marche_15', arabic: 'يعطيك الصحة، بارك الله فيك', arabizi: 'Ya3tik essa77a, barakallahou fik', french: 'Merci beaucoup', category: 'politesse', level: 'debutant', domain: 'quotidien', tags: ['marche', 'politesse'], universe: 'marche', wordIds: ['w_salut_barakallahofik'] },

  // ── VAGUE 2 — UNIVERS « MAISON » (15 phrases) · universe: 'maison' ──────────────
  { id: 'p_maison_01', arabic: 'الدار متاعنا كبيرة', arabizi: 'El dar mte3na kbira', french: 'Notre maison est grande', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_dar'], grammarRuleId: 'g_maison_possession' },
  { id: 'p_maison_02', arabic: 'وين المفتاح؟', arabizi: 'Win el mefte7?', french: 'Où est la clé ?', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison', 'questions'], universe: 'maison', wordIds: ['w_maison_mefte7', 'w_win'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_maison_03', arabic: 'نشعّل الضوء', arabizi: 'Ncha33el el dhou', french: "J'allume la lumière", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_dhou'] },
  { id: 'p_maison_04', arabic: 'الثلاجة فارغة', arabizi: 'El thallaja fargha', french: 'Le frigo est vide', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_thallaja'] },
  { id: 'p_maison_05', arabic: 'نرتّب البيت', arabizi: 'Nrattab el bit', french: 'Je range la chambre', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_bit'] },
  { id: 'p_maison_06', arabic: 'الكوجينة نظيفة', arabizi: 'El koujina nadhifa', french: 'La cuisine est propre', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_koujina'] },
  { id: 'p_maison_07', arabic: 'عندي دار صغيرة', arabizi: '3andi dar sghira', french: "J'ai une petite maison", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_dar'], grammarRuleId: 'g_maison_possession' },
  { id: 'p_maison_08', arabic: 'المفتاح فوق الطاولة', arabizi: 'El mefte7 fou9 el tawla', french: 'La clé est sur la table', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_mefte7', 'w_tawla'], grammarRuleId: 'g_maison_localisation' },
  { id: 'p_maison_09', arabic: 'سكّر الباب', arabizi: 'Sakkar el beb', french: 'Ferme la porte', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_beb'] },
  { id: 'p_maison_10', arabic: 'الغسالة تخدم؟', arabizi: 'El ghassala tekhdem?', french: 'La machine à laver marche ?', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison', 'questions'], universe: 'maison', wordIds: ['w_maison_ghassala'] },
  { id: 'p_maison_11', arabic: 'نرقد في البيت', arabizi: 'Nor9od fel bit', french: 'Je dors dans la chambre', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_bit'], grammarRuleId: 'g_maison_localisation' },
  { id: 'p_maison_12', arabic: 'جيب المنشفة', arabizi: 'Jib el menchfa', french: 'Apporte la serviette', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_menchfa'] },
  { id: 'p_maison_13', arabic: 'التلفزة تخدم', arabizi: 'El telfza tekhdem', french: 'La télé marche', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_telfza'] },
  { id: 'p_maison_14', arabic: 'ننظّف الدار كل جمعة', arabizi: 'Nnadhaf el dar kol jem3a', french: 'Je nettoie la maison chaque semaine', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison', 'menage'], universe: 'maison', wordIds: ['w_dar'] },
  { id: 'p_maison_15', arabic: 'الجنان قدّام الدار', arabizi: 'El jnen 9oddem el dar', french: 'Le jardin est devant la maison', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['maison'], universe: 'maison', wordIds: ['w_maison_jnen', 'w_dar'], grammarRuleId: 'g_maison_localisation' },

  // ── VAGUE 2 — UNIVERS « FAMILLE » (15 phrases) · universe: 'famille' ────────────
  { id: 'p_famille_01', arabic: 'عندي زوز ولاد', arabizi: '3andi zouz wled', french: "J'ai deux enfants", category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_zouz', 'w_famille_wled'], grammarRuleId: 'g_maison_possession' },
  { id: 'p_famille_02', arabic: 'خويا كبير منّي', arabizi: 'Khouya kbir menni', french: 'Mon frère est plus grand que moi', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_khouya', 'w_famille_kbir'], grammarRuleId: 'g_marche_comparaison' },
  { id: 'p_famille_03', arabic: 'بويا يخدم', arabizi: 'Bouya yekhdem', french: 'Mon père travaille', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_bouya', 'w_khedma'] },
  { id: 'p_famille_04', arabic: 'ماما تطيّب باهي', arabizi: 'Mama ttayeb behi', french: 'Maman cuisine bien', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_famille_mama', 'w_bahi'] },
  { id: 'p_famille_05', arabic: 'نزور جدّي كل سبت', arabizi: 'Nzour jaddi kol sebt', french: 'Je rends visite à mon grand-père chaque samedi', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_famille_jadd'] },
  { id: 'p_famille_06', arabic: 'عيلتي كبيرة', arabizi: '3ayelti kbira', french: 'Ma famille est grande', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_3ayla', 'w_famille_kbir'], grammarRuleId: 'g_famille_adjectif' },
  { id: 'p_famille_07', arabic: 'باش نتزوّج', arabizi: 'Besh netzawej', french: 'Je vais me marier', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'mariage'], universe: 'famille', grammarRuleId: 'g_famille_futur' },
  { id: 'p_famille_08', arabic: 'أختي صغيرة', arabizi: 'Okhti sghira', french: 'Ma sœur est petite', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_okhti', 'w_famille_sghir'], grammarRuleId: 'g_famille_adjectif' },
  { id: 'p_famille_09', arabic: 'نتوحّش عيلتي', arabizi: 'Ntwa7ach 3ayelti', french: 'Ma famille me manque', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'diaspora'], universe: 'famille', wordIds: ['w_3ayla'] },
  { id: 'p_famille_10', arabic: 'عندك ولاد؟', arabizi: '3andek wled?', french: 'Tu as des enfants ?', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'questions'], universe: 'famille', wordIds: ['w_famille_wled'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_famille_11', arabic: 'العرس الجمعة الجاية', arabizi: 'El 3ors el jem3a ej jaya', french: 'Le mariage est la semaine prochaine', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'mariage'], universe: 'famille', wordIds: ['w_famille_3ors'] },
  { id: 'p_famille_12', arabic: 'مبروك على المولود', arabizi: 'Mabrouk 3la el mawloud', french: 'Félicitations pour le nouveau-né', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'fetes'], universe: 'famille', wordIds: ['w_salut_mabrouk', 'w_famille_mawloud'] },
  { id: 'p_famille_13', arabic: 'جارنا عزيز علينا', arabizi: 'Jarna 3aziz 3lina', french: 'Notre voisin nous est cher', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'voisinage'], universe: 'famille', wordIds: ['w_famille_jar'] },
  { id: 'p_famille_14', arabic: 'نحترم الكبير', arabizi: 'Na7trem el kbir', french: 'Je respecte les aînés', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille'], universe: 'famille', wordIds: ['w_famille_kbir'] },
  { id: 'p_famille_15', arabic: 'صاحبي كي خويا', arabizi: 'Sa7bi ki khouya', french: 'Mon ami est comme mon frère', category: 'famille', level: 'debutant', domain: 'quotidien', tags: ['famille', 'amis'], universe: 'famille', wordIds: ['w_famille_sa7eb', 'w_khouya'] },

  // ── VAGUE 2 — UNIVERS « EN LOUAGE » (15 phrases) · universe: 'louage' ───────────
  { id: 'p_louage_01', arabic: 'اللواج لتونس وين؟', arabizi: 'El louage l Tounes win?', french: 'Où est le louage pour Tunis ?', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'questions'], universe: 'louage', wordIds: ['w_louage', 'w_win'], grammarRuleId: 'g_louage_direction' },
  { id: 'p_louage_02', arabic: 'قدّاش التعريفة؟', arabizi: '9addech el ta3rifa?', french: "C'est combien le tarif ?", category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'prix', 'questions'], universe: 'louage', wordIds: ['w_louage_ta3rifa', 'w_9addech'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_louage_03', arabic: 'اللواج كومبلي؟', arabizi: 'El louage kompli?', french: 'Le louage est complet ?', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'questions'], universe: 'louage', wordIds: ['w_louage', 'w_louage_kompli'] },
  { id: 'p_louage_04', arabic: 'وقّف هوني عيشك', arabizi: 'Wa99ef houni 3aychek', french: "Arrête-toi ici s'il te plaît", category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'politesse'], universe: 'louage', grammarRuleId: 'g_louage_imperatif' },
  { id: 'p_louage_05', arabic: 'نسافر لسوسة', arabizi: 'Nsefer l Sousse', french: 'Je voyage à Sousse', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'voyage'], universe: 'louage', grammarRuleId: 'g_louage_direction' },
  { id: 'p_louage_06', arabic: 'دور على اليسار', arabizi: 'Dour 3la el ysar', french: 'Tourne à gauche', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'direction'], universe: 'louage', wordIds: ['w_louage_ysar'], grammarRuleId: 'g_louage_imperatif' },
  { id: 'p_louage_07', arabic: 'امشي طول', arabizi: 'Emchi tool', french: 'Va tout droit', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'direction'], universe: 'louage', wordIds: ['w_louage_tool'], grammarRuleId: 'g_louage_imperatif' },
  { id: 'p_louage_08', arabic: 'فمّا بلاصة؟', arabizi: 'Famma blasa?', french: 'Y a-t-il une place ?', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'questions'], universe: 'louage', wordIds: ['w_blasa'] },
  { id: 'p_louage_09', arabic: 'حط الفاليزة', arabizi: 'Hat el valiza', french: 'Mets la valise', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'bagages'], universe: 'louage', wordIds: ['w_louage_valiza'], grammarRuleId: 'g_louage_imperatif' },
  { id: 'p_louage_10', arabic: 'قريب ولا بعيد؟', arabizi: '9rib wala b3id?', french: 'Proche ou loin ?', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'distance', 'questions'], universe: 'louage', wordIds: ['w_louage_9rib', 'w_louage_b3id'] },
  { id: 'p_louage_11', arabic: 'سوق بالشوية', arabizi: 'Sou9 bechwaya', french: 'Conduis doucement', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage'], universe: 'louage', wordIds: ['w_louage_bechwaya'], grammarRuleId: 'g_louage_imperatif' },
  { id: 'p_louage_12', arabic: 'وين المحطة؟', arabizi: 'Win el ma7atta?', french: 'Où est la station ?', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'questions'], universe: 'louage', wordIds: ['w_ma7atta', 'w_win'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_louage_13', arabic: 'نستنّى دوري', arabizi: 'Nestanna dawri', french: "J'attends mon tour", category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage'], universe: 'louage', wordIds: ['w_louage_dawr'] },
  { id: 'p_louage_14', arabic: 'البنزين غالي', arabizi: 'El benzin ghali', french: "L'essence est chère", category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'prix'], universe: 'louage', wordIds: ['w_louage_benzin', 'w_marche_ghali'] },
  { id: 'p_louage_15', arabic: 'وصلنا للبلاد', arabizi: 'Wsolna lel bled', french: 'Nous sommes arrivés à destination', category: 'transport', level: 'debutant', domain: 'quotidien', tags: ['louage', 'voyage'], universe: 'louage', wordIds: ['w_bled'] },

  // ── VAGUE 2 — UNIVERS « À LA PLAGE » (15 phrases) · universe: 'plage' ───────────
  { id: 'p_plage_01', arabic: 'البحر زين اليوم', arabizi: 'El b7ar zin elyoum', french: 'La mer est belle aujourd\'hui', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_b7ar', 'w_elyoum'] },
  { id: 'p_plage_02', arabic: 'نحب نعوم', arabizi: 'N7eb n3oum', french: 'Je veux nager', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage' },
  { id: 'p_plage_03', arabic: 'الشمس حارة برشة', arabizi: 'El chams 7arra barsha', french: 'Le soleil tape fort', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'meteo'], universe: 'plage', wordIds: ['w_plage_chams', 'w_plage_7arr', 'w_barsha'] },
  { id: 'p_plage_04', arabic: 'فمّا ظل؟', arabizi: 'Famma dhell?', french: "Y a-t-il de l'ombre ?", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'questions'], universe: 'plage', wordIds: ['w_plage_dhell'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_plage_05', arabic: 'لازم نجيبو الشمسية', arabizi: 'Lazem njibou el chamsiya', french: 'Il faut apporter le parasol', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_plage_chamsiya'], grammarRuleId: 'g_plage_obligation' },
  { id: 'p_plage_06', arabic: 'نحب جلاتي', arabizi: 'N7eb jelati', french: 'Je veux une glace', category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['plage', 'nourriture'], universe: 'plage', wordIds: ['w_plage_jelati'] },
  { id: 'p_plage_07', arabic: 'الماء بارد', arabizi: 'El ma bared', french: "L'eau est froide", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_ma'] },
  { id: 'p_plage_08', arabic: 'نمشيو للبلاج؟', arabizi: 'Nemchiw lel blaj?', french: 'On va à la plage ?', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'questions'], universe: 'plage', wordIds: ['w_plage_blaj'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_plage_09', arabic: 'خلّي الفوطة على الرمل', arabizi: 'Khalli el fouta 3al rmel', french: 'Pose la fouta sur le sable', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_plage_fouta', 'w_plage_rmel'] },
  { id: 'p_plage_10', arabic: 'الموج عالي', arabizi: 'El mouj 3ali', french: 'Les vagues sont hautes', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'mer'], universe: 'plage', wordIds: ['w_plage_mouja'] },
  { id: 'p_plage_11', arabic: 'أنا وصاحبي على الشط', arabizi: 'Ena w sa7bi 3al chatt', french: 'Mon ami et moi sommes sur la plage', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'amis'], universe: 'plage', wordIds: ['w_famille_sa7eb', 'w_plage_chatt'], grammarRuleId: 'g_plage_conjonctions' },
  { id: 'p_plage_12', arabic: 'تحب كازوزة ولا ماء؟', arabizi: 'T7eb kazouza wala ma?', french: "Tu veux un soda ou de l'eau ?", category: 'restaurant', level: 'debutant', domain: 'quotidien', tags: ['plage', 'boissons', 'questions'], universe: 'plage', wordIds: ['w_plage_kazouza', 'w_ma'], grammarRuleId: 'g_plage_conjonctions' },
  { id: 'p_plage_13', arabic: 'الصيف سخون', arabizi: 'Es sif skhoun', french: "L'été est chaud", category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage', 'saisons'], universe: 'plage', wordIds: ['w_plage_sif', 'w_skhoun'] },
  { id: 'p_plage_14', arabic: 'نستحمّ شوية', arabizi: 'Nesta7amm chwaya', french: 'Je me baigne un peu', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_chwaya'] },
  { id: 'p_plage_15', arabic: 'العطلة بدات', arabizi: 'El 3otla bdat', french: 'Les vacances ont commencé', category: 'quotidien', level: 'debutant', domain: 'quotidien', tags: ['plage'], universe: 'plage', wordIds: ['w_plage_3otla'] },

  // ── VAGUE 2 — UNIVERS « À L'HÔTEL » (15 phrases) · universe: 'hotel' ──────────────
  { id: 'p_hotel_01', arabic: 'عندي حجز', arabizi: '3andi 7ajz', french: 'J\'ai une réservation', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'voyage'], universe: 'hotel', wordIds: ['w_hotel_7ajz'], grammarRuleId: 'g_hotel_question' },
  { id: 'p_hotel_02', arabic: 'عندكم غرفة فاضية؟', arabizi: '3andkom ghorfa fadhya?', french: 'Avez-vous une chambre libre ?', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'questions'], universe: 'hotel', wordIds: ['w_hotel_ghorfa', 'w_hotel_fadhya'], grammarRuleId: 'g_hotel_question' },
  { id: 'p_hotel_03', arabic: 'الغرفة في الطابق الثالث', arabizi: 'El ghorfa fi et tabiq ettaleth', french: 'La chambre est au troisième étage', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_ghorfa', 'w_hotel_tabiq'], grammarRuleId: 'g_hotel_localisation' },
  { id: 'p_hotel_04', arabic: 'هاك المفتاح ديالك', arabizi: 'Haka el mefta7 dyalek', french: 'Voici votre clé', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_mefta7'] },
  { id: 'p_hotel_05', arabic: 'قدّاش الليلة؟', arabizi: '9addech el leyla?', french: 'Combien coûte la nuit ?', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'questions', 'prix'], universe: 'hotel', wordIds: ['w_hotel_leyla'], grammarRuleId: 'g_cafe_interrogation' },
  { id: 'p_hotel_06', arabic: 'الفطور مشمول في السعر', arabizi: 'El ftour machmoul fi es si3r', french: 'Le petit déjeuner est compris dans le prix', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'nourriture'], universe: 'hotel', wordIds: ['w_cafe_ftour', 'w_hotel_fondok'] },
  { id: 'p_hotel_07', arabic: 'نحب نخرج غدوة الصبح', arabizi: 'N7eb nokhroj ghodwa essba7', french: 'Je voudrais partir demain matin', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_khruj', 'w_ghodwa'] },
  { id: 'p_hotel_08', arabic: 'عندكم واي فاي؟', arabizi: '3andkom wifi?', french: 'Avez-vous le wifi ?', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'questions'], universe: 'hotel', wordIds: ['w_hotel_wifi'], grammarRuleId: 'g_hotel_question' },
  { id: 'p_hotel_09', arabic: 'المصعد فوق على اليمين', arabizi: 'El mossaad fo9 3al ymin', french: 'L\'ascenseur est en haut à droite', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_mossaad'], grammarRuleId: 'g_hotel_localisation' },
  { id: 'p_hotel_10', arabic: 'الغرفة نظيفة ومريحة', arabizi: 'El ghorfa ndhifa w mri7a', french: 'La chambre est propre et confortable', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_ghorfa'] },
  { id: 'p_hotel_11', arabic: 'نحتاج منشفتين إضافيتين', arabizi: 'N7taj manchftin idhafiytin', french: 'J\'ai besoin de deux serviettes supplémentaires', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_manchfa'] },
  { id: 'p_hotel_12', arabic: 'الكراج تحت الفندق', arabizi: 'El garaj ta7t el fondok', french: 'Le parking est sous l\'hôtel', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel'], universe: 'hotel', wordIds: ['w_hotel_garaj', 'w_hotel_fondok'], grammarRuleId: 'g_hotel_localisation' },
  { id: 'p_hotel_13', arabic: 'نخلّص الحساب بكارت', arabizi: 'Nkhelles el 7isab b kart', french: 'Je paye l\'addition par carte', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'argent'], universe: 'hotel', wordIds: ['w_hotel_7isab'] },
  { id: 'p_hotel_14', arabic: 'الشنطة ثقيلة برشة', arabizi: 'El chenta t9ila barsha', french: 'La valise est très lourde', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'voyage'], universe: 'hotel', wordIds: ['w_hotel_chenta', 'w_barsha'] },
  { id: 'p_hotel_15', arabic: 'مرحبا بيكم في فندقنا', arabizi: 'Mar7ba bikom fi fondokna', french: 'Bienvenue dans notre hôtel', category: 'voyage', level: 'debutant', domain: 'quotidien', tags: ['hotel', 'accueil'], universe: 'hotel', wordIds: ['w_hotel_fondok'] },
] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const phrasesById: Readonly<Record<string, Phrase>> =
  Object.fromEntries(phrases.map((p) => [p.id, p]));

/** Retourne une phrase par son ID */
export function getPhraseById(id: string): Phrase | undefined {
  return phrasesById[id];
}

/** Retourne les phrases d'une catégorie donnée */
export function getPhrasesByCategory(
  category: Phrase['category']
): Phrase[] {
  return phrases.filter((p) => p.category === category);
}

/** Retourne les phrases d'un niveau donné */
export function getPhrasesByLevel(level: Phrase['level']): Phrase[] {
  return phrases.filter((p) => p.level === level);
}

/** Retourne les phrases du registre diaspora */
export function getDiasporaPhrases(): Phrase[] {
  return phrases.filter((p) => p.domain === 'diaspora');
}
