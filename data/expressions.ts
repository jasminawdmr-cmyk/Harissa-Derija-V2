/**
 * /data/expressions.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base des EXPRESSIONS typiquement tunisiennes (idiomes, proverbes, formules,
 * interjections). Le sel de la langue vivante.
 *
 * ⚠️  CONTENANT VIDE — aucun contenu linguistique n'est créé ici.
 *     Contenu à fournir et valider séparément (locuteur natif).
 *
 * Cible à terme : ~50 expressions (voir docs/DISCOVER_TUNISIA_SYSTEM.md §8).
 *
 * Convention d'ID : "exp_<slug>"  (ex : "exp_bsa77a")
 * Translittération : 7=ح · 3=ع · 9=ق · kh=خ · gh=غ
 *
 * Particularité : une expression porte souvent un sens LITTÉRAL différent du
 * sens RÉEL. Renseigner `literalFrench` (mot à mot) ET `french` (sens d'usage).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Expression } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────

export const expressions: Readonly<Expression[]> = [
  // ── VAGUE 1 — UNIVERS « AU CAFÉ » (10 expressions) · universe: 'cafe' ──────────
  { id: 'e_cafe_bil_hna_wel_chifa', arabic: 'بالهنا والشفاء', arabizi: 'Bil hna wel chifa', literalFrench: 'Avec le plaisir et la santé', french: 'Bon appétit / régale-toi', kind: 'formule', level: 'debutant', usageContext: 'Se dit en servant ou en voyant quelqu\'un boire/manger.', typicalReply: 'Ya3tik essa77a', tags: ['cafe', 'politesse'], universe: 'cafe' },
  { id: 'e_cafe_ya3tik_essa77a', arabic: 'يعطيك الصحة', arabizi: 'Ya3tik essa77a', literalFrench: 'Que Dieu te donne la santé', french: 'Merci (chaleureux)', kind: 'formule', level: 'debutant', usageContext: 'Remerciement courant, notamment au serveur.', tags: ['cafe', 'politesse', 'serveur'], universe: 'cafe' },
  { id: 'e_cafe_sa77a', arabic: 'صحة', arabizi: 'Sa77a', literalFrench: 'Santé', french: 'Santé ! / À la tienne !', kind: 'interjection', level: 'debutant', usageContext: 'En trinquant ou en offrant une boisson.', tags: ['cafe', 'boissons'], universe: 'cafe' },
  { id: 'e_cafe_9ahwa_3la_7sabi', arabic: 'قهوة على حسابي', arabizi: '9ahwa 3la 7sabi', literalFrench: 'Un café à mon compte', french: "Le café, c'est pour moi (je régale)", kind: 'formule', level: 'debutant', usageContext: 'Pour offrir la consommation à un ami.', tags: ['cafe', 'amis', 'payer'], universe: 'cafe' },
  { id: 'e_cafe_ya3aychek', arabic: 'يعيشك', arabizi: 'Ya3aychek', literalFrench: 'Que tu vives', french: "Merci / s'il te plaît", kind: 'formule', level: 'debutant', usageContext: 'Politesse passe-partout, demande ou remerciement.', tags: ['cafe', 'politesse'], universe: 'cafe' },
  { id: 'e_cafe_9a3da_7lowa', arabic: 'قعدة حلوة', arabizi: '9a3da 7lowa', literalFrench: 'Une belle assise', french: 'Un bon moment (entre amis)', kind: 'formule', level: 'debutant', usageContext: 'Pour qualifier un agréable moment passé au café.', tags: ['cafe', 'ambiance', 'amis'], universe: 'cafe' },
  { id: 'e_cafe_3la_rasi', arabic: 'على راسي', arabizi: '3la rasi', literalFrench: 'Sur ma tête', french: 'Avec plaisir / volontiers', kind: 'formule', level: 'debutant', usageContext: 'Réponse polie pour accepter de rendre service.', tags: ['cafe', 'politesse'], universe: 'cafe' },
  { id: 'e_cafe_marhba_bik', arabic: 'مرحبا بيك', arabizi: 'Marhba bik', literalFrench: 'Bienvenue à toi', french: 'Bienvenue', kind: 'formule', level: 'debutant', usageContext: "Accueil d'un client ou d'un ami qui arrive.", tags: ['cafe', 'accueil'], universe: 'cafe' },
  { id: 'e_cafe_sa77a_chrabtek', arabic: 'صحة شربتك', arabizi: 'Sa77a chrabtek', literalFrench: 'Santé à ta boisson', french: 'À ta santé (après avoir bu)', kind: 'formule', level: 'debutant', usageContext: 'Se dit à quelqu\'un qui vient de boire.', tags: ['cafe', 'boissons'], universe: 'cafe', needsValidation: true, note: 'Variante courante — confirmer la tournure avec un locuteur natif.' },
  { id: 'e_cafe_yhanniik', arabic: 'يهنّيك', arabizi: 'Yhanniik', literalFrench: "Qu'il te rende serein", french: 'Que ça te profite', kind: 'formule', level: 'debutant', usageContext: 'Vœu adressé après une consommation.', tags: ['cafe', 'politesse'], universe: 'cafe', needsValidation: true, note: 'Graphie/usage à confirmer avec un locuteur natif.' },

  // ── VAGUE 2 — UNIVERS « SALUTATIONS » (10 expressions) · universe: 'salutations' ─
  { id: 'e_salut_sa77a_w_3afya', arabic: 'صحة وعافية', arabizi: 'Sa77a w 3afya', literalFrench: 'Santé et vigueur', french: 'Bonne santé (vœu chaleureux)', kind: 'formule', level: 'debutant', usageContext: "Vœu de bien-être adressé à quelqu'un.", tags: ['salutations'], universe: 'salutations' },
  { id: 'e_salut_rabbi_ykhalik', arabic: 'ربي يخليك', arabizi: 'Rabbi ykhalik', literalFrench: 'Que Dieu te garde', french: 'Merci infiniment / que Dieu te préserve', kind: 'formule', level: 'debutant', usageContext: 'Remerciement chaleureux ou demande insistante polie.', tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'e_salut_mar7ba_bik_3andna', arabic: 'مرحبا بيك عندنا', arabizi: 'Mar7ba bik 3andna', literalFrench: 'Bienvenue à toi chez nous', french: 'Bienvenue chez nous', kind: 'formule', level: 'debutant', usageContext: "Accueil d'un invité à la maison.", tags: ['salutations', 'accueil'], universe: 'salutations' },
  { id: 'e_salut_twa7echtek', arabic: 'توحّشتك', arabizi: 'Twa7echtek', literalFrench: "Je me suis ennuyé de toi", french: 'Tu m\'as manqué', kind: 'formule', level: 'debutant', usageContext: 'Retrouvailles après une absence.', tags: ['salutations', 'amis'], universe: 'salutations' },
  { id: 'e_salut_rabbi_y3awnek', arabic: 'ربي يعاونك', arabizi: 'Rabbi y3awnek', literalFrench: "Que Dieu t'aide", french: 'Bon courage', kind: 'formule', level: 'debutant', usageContext: "Encouragement à quelqu'un qui travaille ou peine.", tags: ['salutations'], universe: 'salutations' },
  { id: 'e_salut_ahlan_bik', arabic: 'أهلا بيك', arabizi: 'Ahlan bik', literalFrench: 'Bienvenue à toi', french: 'Bienvenue / enchanté', kind: 'formule', level: 'debutant', usageContext: "Accueil chaleureux d'une personne.", tags: ['salutations', 'accueil'], universe: 'salutations' },
  { id: 'e_salut_3la_khatrek', arabic: 'على خاطرك', arabizi: '3la khatrek', literalFrench: 'Selon ton gré', french: 'Comme tu veux / par égard pour toi', kind: 'formule', level: 'debutant', usageContext: "Marque de déférence ou d'accord poli.", tags: ['salutations', 'politesse'], universe: 'salutations' },
  { id: 'e_salut_rodd_balek', arabic: 'رد بالك', arabizi: 'Rodd balek', literalFrench: 'Ramène ton esprit', french: 'Fais attention (à toi)', kind: 'interjection', level: 'debutant', usageContext: 'Mise en garde affectueuse en se quittant.', tags: ['salutations'], universe: 'salutations' },
  { id: 'e_salut_rabbi_ysahhel', arabic: 'ربي يسهّل', arabizi: 'Rabbi ysahhel', literalFrench: 'Que Dieu facilite', french: 'Bon courage / que ça se passe bien', kind: 'formule', level: 'debutant', usageContext: 'Souhait avant une épreuve ou une démarche.', tags: ['salutations'], universe: 'salutations' },
  { id: 'e_salut_yfar7ek', arabic: 'يفرّحك', arabizi: 'Yfar7ek', literalFrench: 'Quil te réjouisse', french: 'Réponse à un remerciement (de rien)', kind: 'formule', level: 'debutant', usageContext: 'Réponse à « ya3tik essa77a ».', tags: ['salutations', 'politesse'], universe: 'salutations', needsValidation: true, note: 'Usage régional — à confirmer avec un locuteur natif.' },

  // ── VAGUE 2 — UNIVERS « AU MARCHÉ » (10 expressions) · universe: 'marche' ───────
  { id: 'e_marche_ghali_3lia', arabic: 'غالي عليا', arabizi: 'Ghali 3lia', literalFrench: 'Cher sur moi', french: 'C\'est trop cher pour moi', kind: 'formule', level: 'debutant', usageContext: 'Pour entamer la négociation.', tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'e_marche_akher_souma', arabic: 'آخر سومة', arabizi: 'Akher souma', literalFrench: 'Dernier prix', french: 'C\'est mon dernier prix', kind: 'formule', level: 'debutant', usageContext: 'Pour clôturer la négociation.', tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'e_marche_blech', arabic: 'بلاش', arabizi: 'Blech', literalFrench: 'Sans rien', french: 'Gratuit / pour rien', kind: 'interjection', level: 'debutant', usageContext: 'Quand quelque chose est offert ou très bon marché.', tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'e_marche_3andek_el7a9', arabic: 'عندك الحق', arabizi: '3andek el 7a9', literalFrench: 'Tu as le droit', french: 'Tu as raison', kind: 'formule', level: 'debutant', usageContext: 'Pour donner raison à son interlocuteur.', tags: ['marche'], universe: 'marche' },
  { id: 'e_marche_ya_rkhis', arabic: 'يا رخيص!', arabizi: 'Ya rkhis!', literalFrench: 'Ô bon marché', french: 'Que c\'est bon marché !', kind: 'interjection', level: 'debutant', usageContext: 'Exclamation devant un bon prix.', tags: ['marche', 'prix'], universe: 'marche' },
  { id: 'e_marche_3la_kifek', arabic: 'على كيفك', arabizi: '3la kifek', literalFrench: 'Selon ton humeur', french: 'Comme tu veux / à ta guise', kind: 'formule', level: 'debutant', usageContext: 'Pour laisser le choix.', tags: ['marche'], universe: 'marche' },
  { id: 'e_marche_ma3lich', arabic: 'معليش', arabizi: 'Ma3lich', literalFrench: 'Ce n\'est rien sur', french: 'Ce n\'est pas grave / tant pis', kind: 'interjection', level: 'debutant', usageContext: 'Mot passe-partout pour dédramatiser.', tags: ['marche'], universe: 'marche' },
  { id: 'e_marche_rabbi_yzidek', arabic: 'ربي يزيدك', arabizi: 'Rabbi yzidek', literalFrench: 'Que Dieu t\'augmente', french: 'Merci (que Dieu t\'accorde plus)', kind: 'formule', level: 'debutant', usageContext: 'Remerciement au vendeur après un achat.', tags: ['marche', 'politesse'], universe: 'marche' },
  { id: 'e_marche_zid_w_na99es', arabic: 'زيد وانقص', arabizi: 'Zid w na99es', literalFrench: 'Ajoute et baisse', french: 'Marchande un peu', kind: 'idiome', level: 'debutant', usageContext: 'Invitation à négocier le prix.', tags: ['marche', 'negociation'], universe: 'marche' },
  { id: 'e_marche_dir_souma', arabic: 'دير سومة', arabizi: 'Dir souma', literalFrench: 'Fais un prix', french: 'Fais-moi un prix', kind: 'formule', level: 'debutant', usageContext: 'Pour demander une remise.', tags: ['marche', 'prix', 'negociation'], universe: 'marche' },

  // ── VAGUE 2 — UNIVERS « MAISON » (10 expressions) · universe: 'maison' ──────────
  { id: 'e_maison_dar_dyar', arabic: 'دار ديار', arabizi: 'Dar dyar', literalFrench: 'Une maison de maisons', french: 'Une vraie grande maison', kind: 'idiome', level: 'debutant', usageContext: 'Pour décrire une maison vaste et accueillante.', tags: ['maison'], universe: 'maison', needsValidation: true, note: 'Tournure imagée — à confirmer avec un locuteur natif.' },
  { id: 'e_maison_baytek_baytek', arabic: 'بيتك بيتك', arabizi: 'Baytek baytek', literalFrench: 'Ta maison (c\'est) ta maison', french: 'Fais comme chez toi', kind: 'formule', level: 'debutant', usageContext: "Accueil chaleureux d'un invité.", tags: ['maison', 'accueil'], universe: 'maison' },
  { id: 'e_maison_3la_rasi', arabic: 'على راسي وعيني', arabizi: '3la rasi w 3ini', literalFrench: 'Sur ma tête et mon œil', french: 'Avec grand plaisir (accueil)', kind: 'formule', level: 'debutant', usageContext: 'Pour accueillir ou accepter de bon cœur.', tags: ['maison', 'accueil'], universe: 'maison' },
  { id: 'e_maison_dar_l7ana', arabic: 'دار الحنانة', arabizi: 'Dar el 7nana', literalFrench: 'La maison de la tendresse', french: 'Un foyer chaleureux', kind: 'idiome', level: 'debutant', usageContext: 'Pour parler d\'un foyer aimant.', tags: ['maison'], universe: 'maison', needsValidation: true, note: 'Expression affective — à confirmer.' },
  { id: 'e_maison_7ot_rou7ek', arabic: 'حط روحك في دارك', arabizi: '7ot rou7ek fi darek', literalFrench: 'Mets-toi dans ta maison', french: 'Mets-toi à l\'aise', kind: 'formule', level: 'debutant', usageContext: 'Inviter un hôte à se détendre.', tags: ['maison', 'accueil'], universe: 'maison' },
  { id: 'e_maison_klem_eddar', arabic: 'كلام الدار', arabizi: 'Klem eddar', literalFrench: 'Les paroles de la maison', french: 'Les affaires privées (de la famille)', kind: 'idiome', level: 'debutant', usageContext: 'Pour dire que ça reste entre soi.', tags: ['maison', 'famille'], universe: 'maison' },
  { id: 'e_maison_dima_3amra', arabic: 'دارك ديما عامرة', arabizi: 'Darek dima 3amra', literalFrench: 'Que ta maison soit toujours pleine', french: 'Que ta maison soit toujours animée (vœu)', kind: 'formule', level: 'debutant', usageContext: 'Vœu de bonheur pour un foyer.', tags: ['maison'], universe: 'maison' },
  { id: 'e_maison_rabbi_y3ammar', arabic: 'ربي يعمّر دارك', arabizi: 'Rabbi y3ammar darek', literalFrench: 'Que Dieu remplisse ta maison', french: 'Merci (vœu de prospérité au foyer)', kind: 'formule', level: 'debutant', usageContext: 'Remerciement chaleureux à un hôte.', tags: ['maison', 'politesse'], universe: 'maison' },
  { id: 'e_maison_3andna_fdar', arabic: 'عندنا في الدار', arabizi: '3andna fed dar', literalFrench: 'Chez nous à la maison', french: 'À la maison / en famille', kind: 'formule', level: 'debutant', usageContext: 'Pour situer une habitude familiale.', tags: ['maison', 'famille'], universe: 'maison' },
  { id: 'e_maison_steh_w_jnen', arabic: 'سطح وجنان', arabizi: 'Ste7 w jnen', literalFrench: 'Terrasse et jardin', french: 'Tout le confort (litt. terrasse et jardin)', kind: 'idiome', level: 'debutant', usageContext: 'Pour vanter une maison agréable.', tags: ['maison'], universe: 'maison', needsValidation: true, note: 'Tournure descriptive — à confirmer.' },

  // ── VAGUE 2 — UNIVERS « FAMILLE » (10 expressions) · universe: 'famille' ────────
  { id: 'e_famille_3aychek_ya_weldi', arabic: 'عيّشك يا ولدي', arabizi: '3aychek ya weldi', literalFrench: 'Que tu vives, mon fils', french: 'Merci mon enfant (affection)', kind: 'formule', level: 'debutant', usageContext: 'Vœu affectueux d\'un parent à son enfant.', tags: ['famille'], universe: 'famille' },
  { id: 'e_famille_rabbi_y5allihomlek', arabic: 'ربي يخليهملك', arabizi: 'Rabbi ykhallihomlek', literalFrench: 'Que Dieu te les garde', french: 'Que Dieu te garde tes proches', kind: 'formule', level: 'debutant', usageContext: 'Vœu pour la famille de quelqu\'un.', tags: ['famille'], universe: 'famille' },
  { id: 'e_famille_3la_3youni', arabic: 'على عيوني', arabizi: '3la 3youni', literalFrench: 'Sur mes yeux', french: 'Avec grand plaisir (pour un proche)', kind: 'formule', level: 'debutant', usageContext: 'Accepter de bon cœur pour un proche.', tags: ['famille'], universe: 'famille' },
  { id: 'e_famille_dem_ma_ywalli_ma', arabic: 'الدم ما يولّيش ماء', arabizi: 'Ed dem ma ywallich ma', literalFrench: 'Le sang ne devient pas eau', french: 'Les liens du sang restent les plus forts', kind: 'proverbe', level: 'debutant', usageContext: 'Pour souligner l\'importance de la famille.', tags: ['famille'], universe: 'famille', needsValidation: true, note: 'Proverbe — confirmer la formulation exacte.' },
  { id: 'e_famille_mabrouk', arabic: 'مبروك', arabizi: 'Mabrouk', literalFrench: 'Béni', french: 'Félicitations', kind: 'formule', level: 'debutant', usageContext: 'Pour féliciter (mariage, naissance…).', tags: ['famille', 'fetes'], universe: 'famille' },
  { id: 'e_famille_3o9bel_3andek', arabic: 'عقبال عندك', arabizi: '3o9bel 3andek', literalFrench: 'Que ce soit ton tour ensuite', french: 'À ton tour bientôt (vœu après un mariage)', kind: 'formule', level: 'debutant', usageContext: 'Vœu adressé aux célibataires lors d\'un mariage.', tags: ['famille', 'mariage'], universe: 'famille' },
  { id: 'e_famille_yhanniik_bih', arabic: 'يهنّيك بيه', arabizi: 'Yhanniik bih', literalFrench: 'Qu\'il te rende heureux avec lui', french: 'Qu\'il/elle fasse ton bonheur (pour un enfant/conjoint)', kind: 'formule', level: 'debutant', usageContext: 'Vœu pour un nouveau-né ou un mariage.', tags: ['famille'], universe: 'famille', needsValidation: true, note: 'Tournure affective — à confirmer.' },
  { id: 'e_famille_kbir_eddar', arabic: 'كبير الدار', arabizi: 'Kbir eddar', literalFrench: 'Le grand de la maison', french: 'Le chef de famille / l\'aîné', kind: 'idiome', level: 'debutant', usageContext: 'Pour désigner le doyen respecté.', tags: ['famille'], universe: 'famille' },
  { id: 'e_famille_weld_ennas', arabic: 'ولد الناس', arabizi: 'Weld ennas', literalFrench: 'Le fils des gens', french: 'Quelqu\'un de bonne éducation', kind: 'idiome', level: 'debutant', usageContext: 'Compliment sur le savoir-vivre.', tags: ['famille'], universe: 'famille' },
  { id: 'e_famille_3ayla_w7da', arabic: 'عيلة وحدة', arabizi: '3ayla w7da', literalFrench: 'Une seule famille', french: 'On est une seule famille (solidarité)', kind: 'formule', level: 'debutant', usageContext: 'Pour exprimer l\'unité familiale ou amicale.', tags: ['famille'], universe: 'famille' },
] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const expressionsById: Readonly<Record<string, Expression>> =
  Object.fromEntries(expressions.map((e) => [e.id, e]));

/** Retourne une expression par son ID */
export function getExpressionById(id: string): Expression | undefined {
  return expressionsById[id];
}

/** Retourne les expressions d'un type donné (idiome, proverbe…) */
export function getExpressionsByKind(
  kind: Expression['kind']
): Expression[] {
  return expressions.filter((e) => e.kind === kind);
}

/** Retourne les expressions d'un niveau donné */
export function getExpressionsByLevel(level: Expression['level']): Expression[] {
  return expressions.filter((e) => e.level === level);
}
