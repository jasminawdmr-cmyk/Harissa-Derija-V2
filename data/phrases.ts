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
