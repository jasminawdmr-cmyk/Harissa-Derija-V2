/**
 * /data/discover.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base du pilier DÉCOUVRIR LA TUNISIE — fiches culturelles.
 *
 * UN SEUL fichier pour Culture / Histoire / Régions / Musique / Diaspora /
 * Tunisie contemporaine, différenciés par le champ `section`. Choix délibéré
 * pour éviter 6 fichiers quasi identiques (anti sur-ingénierie, anti doublons).
 * Les RECETTES ont leur propre fichier (data/recipes.ts) car leur structure
 * (ingrédients + étapes) est réellement différente.
 *
 * ⚠️  CONTENANT VIDE — aucun contenu n'est créé ici. Contenu culturel/historique
 *     à fournir et valider séparément, puis ajouté en respectant DiscoverContent.
 *
 * Cibles à terme (voir docs/V1_BALANCED_CONTENT_PLAN.md §3) :
 *   culture ~30 · histoire ~20 · régions ~8 · musique ~6 · diaspora ~5 · …
 *
 * Convention d'ID : "disc_<section>_<slug>"  (ex : "disc_culture_hospitalite")
 *
 * Format des fiches : BLOCS COURTS (jamais de mur de texte — cf. LEARNER_PROFILE).
 * Un objet signature par écran (cf. TUNISIAN_IDENTITY_SYSTEM).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { DiscoverContent, DiscoverSection } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────

export const discoverContents: Readonly<DiscoverContent[]> = [
  // ── VAGUE 1 — UNIVERS « AU CAFÉ » (5 articles) · universe: 'cafe' ──────────────
  {
    id: 'disc_cafe_institution',
    section: 'culture',
    title: 'Le café, institution tunisienne',
    subtitle: 'Bien plus qu\'une boisson',
    level: 'debutant',
    estimatedMinutes: 3,
    coverEmoji: '☕',
    universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "En Tunisie, le café est un lieu de vie autant qu'une boisson. On y passe du temps, on y discute, on y refait le monde. Chaque quartier a son café où l'on retrouve les mêmes visages." },
      { type: 'reperes', items: ['9ahwa = café', '9ahwaji = le patron du café', 'zboun = le client'] },
    ],
    relatedWordIds: ['w_9ahwa', 'w_cafe_9ahwaji', 'w_cafe_zboun'],
    tags: ['cafe', 'culture'],
  },
  {
    id: 'disc_cafe_9a3da',
    section: 'culture',
    title: "La 9a3da : l'art de s'asseoir",
    subtitle: 'Prendre son temps',
    level: 'debutant',
    estimatedMinutes: 3,
    coverEmoji: '🪑',
    universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "La « 9a3da » désigne le moment passé assis ensemble. On peut rester une heure autour d'un seul café : l'important n'est pas la boisson mais la compagnie et la conversation." },
      { type: 'savoir', text: "Dire « 9a3da 7lowa » (une belle assise) est un compliment qui célèbre un bon moment partagé." },
    ],
    relatedWordIds: ['w_cafe_9a3da', 'w_cafe_maw3ed'],
    relatedExpressionIds: ['e_cafe_9a3da_7lowa'],
    tags: ['cafe', 'ambiance', 'amis'],
  },
  {
    id: 'disc_cafe_commander',
    section: 'culture',
    title: 'Commander comme un Tunisien',
    subtitle: 'Le vocabulaire du comptoir',
    level: 'debutant',
    estimatedMinutes: 4,
    coverEmoji: '📋',
    universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "Au café tunisien, les noms des boissons mêlent arabe et emprunts français : « express » (serré), « direct » (allongé), « capucin » (avec un nuage de lait)." },
      { type: 'reperes', items: ['9ahwa ka7la = café noir', '9ahwa bel 7alib = café au lait', 'express / direct / capucin'] },
    ],
    relatedWordIds: ['w_cafe_express', 'w_cafe_direct', 'w_cafe_capucin', 'w_cafe_9ahwa_kahla'],
    tags: ['cafe', 'commander', 'boissons'],
  },
  {
    id: 'disc_cafe_amitie',
    section: 'culture',
    title: "Le café et l'amitié",
    subtitle: 'Offrir, inviter, partager',
    level: 'debutant',
    estimatedMinutes: 3,
    coverEmoji: '🤝',
    universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "Offrir le café est un geste d'amitié. Dire « 9ahwa 3la 7sabi » (le café est pour moi) ou « na3zmek » (je t'invite) fait partie des rituels de générosité." },
      { type: 'savoir', text: "Refuser poliment puis accepter est un petit jeu social courant : l'insistance fait partie de l'hospitalité." },
    ],
    relatedWordIds: ['w_cafe_9a3da'],
    relatedExpressionIds: ['e_cafe_9ahwa_3la_7sabi'],
    tags: ['cafe', 'amis', 'politesse'],
  },
  {
    id: 'disc_cafe_patisseries',
    section: 'culture',
    title: 'Les douceurs du café',
    subtitle: 'Ce qu\'on grignote avec',
    level: 'debutant',
    estimatedMinutes: 3,
    coverEmoji: '🍰',
    universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "Le café s'accompagne souvent d'une douceur : le « ka3k » (gâteau sec en couronne), le « ka3b ghzal » (corne de gazelle aux amandes), ou un simple « gato »." },
      { type: 'reperes', items: ['ka3k = gâteau sec', 'ka3b ghzal = corne de gazelle', 'gato = gâteau'] },
    ],
    relatedWordIds: ['w_cafe_ka3k', 'w_cafe_ka3b_ghzal', 'w_cafe_gato'],
    tags: ['cafe', 'gateaux', 'nourriture'],
  },

  // ── VAGUE 2 — UNIVERS « SALUTATIONS » (5 articles) · universe: 'salutations' ────
  {
    id: 'disc_salut_codes', section: 'culture', title: 'Les codes de la salutation tunisienne', subtitle: 'Saluer, un art social', level: 'debutant', estimatedMinutes: 3, coverEmoji: '👋', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "En Tunisie, on ne croise jamais quelqu'un sans le saluer. La salutation s'accompagne souvent d'une série de questions sur la santé, la famille et le travail." },
      { type: 'reperes', items: ['Aaslema = salut', 'Sbe7 el khir = bonjour', 'Msa el khir = bonsoir'] },
    ],
    relatedWordIds: ['w_aaslema', 'w_salut_msa_lkhir', 'w_salut_kifech_7alek'],
    tags: ['salutations', 'culture'],
  },
  {
    id: 'disc_salut_sante', section: 'culture', title: 'La santé au cœur des salutations', subtitle: 'On se souhaite la « sa77a »', level: 'debutant', estimatedMinutes: 3, coverEmoji: '💪', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Beaucoup de formules tournent autour de la santé : « sa77a » (santé), « ya3tik essa77a » (merci), « slemtek » (porte-toi bien). Souhaiter la santé, c'est souhaiter le meilleur." },
      { type: 'savoir', text: "« El7amdoulah » (Dieu merci) ponctue presque toute réponse à « comment vas-tu ? »." },
    ],
    relatedWordIds: ['w_salut_el7amdoulah', 'w_salut_slemtek', 'w_salut_sa7it'],
    tags: ['salutations', 'sante'],
  },
  {
    id: 'disc_salut_religion', section: 'culture', title: 'Dieu dans le langage courant', subtitle: 'Inchallah & co.', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🤲', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Des expressions comme « inchallah » (si Dieu le veut), « barakallahou fik » (merci) ou « rabbi m3ak » (au revoir) sont employées par tous, croyants ou non : elles font partie du tissu de la langue." },
    ],
    relatedWordIds: ['w_salut_inchallah', 'w_salut_barakallahofik', 'w_salut_rabbi_m3ak'],
    tags: ['salutations', 'culture'],
  },
  {
    id: 'disc_salut_presentation', section: 'culture', title: 'Se présenter en Tunisie', subtitle: 'Nom, origine, convivialité', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🙋', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Pour se présenter : « esmi… » (je m'appelle…), « ena men… » (je viens de…). On répond à une présentation par « ahlan bik » (enchanté)." },
      { type: 'reperes', items: ['Chnowa esmek ? = comment t\'appelles-tu ?', 'Min win enti ? = d\'où viens-tu ?'] },
    ],
    relatedWordIds: ['w_salut_ahla', 'w_salut_w_enti', 'w_win'],
    tags: ['salutations', 'presentation'],
  },
  {
    id: 'disc_salut_politesse', section: 'culture', title: 'La politesse au quotidien', subtitle: 'Merci, pardon, je t\'en prie', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🙏', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Les mots de politesse rythment les échanges : « chokran » (merci), « sam7ni » (pardon), « tfaddal » (je t'en prie). La générosité verbale est très valorisée." },
    ],
    relatedWordIds: ['w_salut_chokran', 'w_salut_sam7ni', 'w_salut_tfaddal', 'w_salut_min_fadhlek'],
    relatedExpressionIds: ['e_salut_rabbi_ykhalik'],
    tags: ['salutations', 'politesse'],
  },

  // ── VAGUE 2 — UNIVERS « AU MARCHÉ » (5 articles) · universe: 'marche' ───────────
  {
    id: 'disc_marche_souk', section: 'culture', title: 'Le souk, cœur battant de la ville', subtitle: 'Couleurs, odeurs, voix', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🛒', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Le souk (sou9) est un lieu vivant où l'on fait ses courses mais aussi où l'on discute. Chaque marchand interpelle les passants pour vanter sa marchandise." },
      { type: 'reperes', items: ['sou9 = marché', 'bayya3 = vendeur', '9offa = couffin'] },
    ],
    relatedWordIds: ['w_sou9', 'w_marche_bayya3', 'w_marche_9offa'],
    tags: ['marche', 'culture'],
  },
  {
    id: 'disc_marche_negociation', section: 'culture', title: "L'art de marchander", subtitle: 'Zid w na99es', level: 'debutant', estimatedMinutes: 3, coverEmoji: '💬', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Marchander n'est pas impoli : c'est un échange attendu. On annonce « ghali » (cher), on demande « na99asli » (baisse-moi) et on conclut sur « akher souma » (dernier prix)." },
      { type: 'savoir', text: "Ne pas négocier peut même surprendre le vendeur : le marchandage fait partie du lien social." },
    ],
    relatedWordIds: ['w_marche_souma', 'w_marche_ghali', 'w_marche_rkhis'],
    relatedExpressionIds: ['e_marche_akher_souma', 'e_marche_zid_w_na99es'],
    tags: ['marche', 'negociation'],
  },
  {
    id: 'disc_marche_frais', section: 'culture', title: 'Le goût du frais', subtitle: 'Produits de saison', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🥬', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Les Tunisiens privilégient les produits « tri » (frais) et de saison : légumes, poisson de la Méditerranée, fruits gorgés de soleil." },
    ],
    relatedWordIds: ['w_marche_tri', 'w_marche_7out', 'w_khadhra'],
    tags: ['marche', 'nourriture'],
  },
  {
    id: 'disc_marche_metiers', section: 'culture', title: 'Les métiers du marché', subtitle: 'Khaddar, bayya3, 9ahwaji', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧑‍🌾', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Chaque stand a son spécialiste : le « khaddar » (marchand de légumes), le poissonnier, le boucher. On les reconnaît à leur voix et à leur étal." },
      { type: 'reperes', items: ['khaddar = marchand de légumes', 'bayya3 = vendeur', 'chari = acheteur'] },
    ],
    relatedWordIds: ['w_marche_khaddar', 'w_marche_bayya3', 'w_marche_chari'],
    tags: ['marche', 'metiers'],
  },
  {
    id: 'disc_marche_9offa', section: 'culture', title: 'La 9offa, symbole des courses', subtitle: 'Le couffin tunisien', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🧺', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "La « 9offa » (couffin en alfa tressé) est l'accessoire traditionnel des courses. Légère et solide, elle remplace avantageusement le sac plastique." },
    ],
    relatedWordIds: ['w_marche_9offa', 'w_marche_kis'],
    tags: ['marche', 'objets', 'culture'],
  },

  // ── VAGUE 2 — UNIVERS « MAISON » (5 articles) · universe: 'maison' ──────────────
  {
    id: 'disc_maison_dar', section: 'culture', title: 'La « dar » tunisienne', subtitle: 'Autour du patio', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏠', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La maison traditionnelle (dar) s'organise souvent autour d'un patio central (west eddar) qui apporte fraîcheur et lumière. C'est le cœur de la vie familiale." },
      { type: 'reperes', items: ['dar = maison', 'bit = chambre', 'ste7 = terrasse'] },
    ],
    relatedWordIds: ['w_dar', 'w_bit', 'w_maison_ste7'],
    tags: ['maison', 'culture'],
  },
  {
    id: 'disc_maison_hospitalite', section: 'culture', title: "L'hospitalité à la maison", subtitle: 'Baytek baytek', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🫖', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Recevoir est un honneur. On accueille par « tfaddal » (entre), « baytek baytek » (fais comme chez toi), et on offre toujours à boire et à manger." },
    ],
    relatedWordIds: ['w_salut_tfaddal', 'w_dar'],
    relatedExpressionIds: ['e_maison_baytek_baytek', 'e_maison_7ot_rou7ek'],
    tags: ['maison', 'accueil'],
  },
  {
    id: 'disc_maison_cuisine', section: 'culture', title: 'La cuisine, royaume du foyer', subtitle: 'Borma & koucha', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍲', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La cuisine (koujina) est centrale : on y mijote dans la « borma » (marmite), on y cuit au « koucha » (four). Les repas réunissent toute la famille." },
      { type: 'reperes', items: ['koujina = cuisine', 'borma = marmite', 'ma9la = poêle'] },
    ],
    relatedWordIds: ['w_koujina', 'w_maison_borma', 'w_maison_ma9la'],
    tags: ['maison', 'cuisine'],
  },
  {
    id: 'disc_maison_objets', section: 'culture', title: 'Les objets du quotidien', subtitle: 'Zarbiya, mkhadda…', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🪑', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Le tapis (zarbiya), les coussins (mkhadda) et les banquettes basses créent des espaces conviviaux où l'on s'assoit volontiers à plusieurs." },
    ],
    relatedWordIds: ['w_maison_zarbiya', 'w_maison_mkhadda', 'w_maison_srir'],
    tags: ['maison', 'objets'],
  },
  {
    id: 'disc_maison_menage', section: 'culture', title: 'Le ménage du week-end', subtitle: 'Une routine familiale', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🧹', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Nettoyer (nnadhaf), balayer (noknes), ranger (nrattab) : le grand ménage hebdomadaire est souvent partagé entre les membres du foyer." },
    ],
    relatedWordIds: ['w_maison_saboun', 'w_maison_menchfa'],
    tags: ['maison', 'menage'],
  },

  // ── VAGUE 2 — UNIVERS « FAMILLE » (5 articles) · universe: 'famille' ────────────
  {
    id: 'disc_famille_centrale', section: 'culture', title: 'La famille, valeur centrale', subtitle: 'Le clan avant tout', level: 'debutant', estimatedMinutes: 3, coverEmoji: '👨‍👩‍👧‍👦', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "En Tunisie, la famille élargie (3ayla) est au cœur de la vie : grands-parents, oncles, tantes et cousins forment un réseau solidaire au quotidien." },
      { type: 'reperes', items: ['3ayla = famille', 'jadd = grand-père', 'khal = oncle maternel'] },
    ],
    relatedWordIds: ['w_3ayla', 'w_famille_jadd', 'w_famille_khal'],
    tags: ['famille', 'culture'],
  },
  {
    id: 'disc_famille_respect', section: 'culture', title: 'Le respect des aînés', subtitle: 'Kbir eddar', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧓', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Le respect dû aux aînés (« kbir ») structure les relations : on les salue en premier, on les écoute, on prend soin d'eux. C'est une valeur transmise très tôt." },
    ],
    relatedWordIds: ['w_famille_kbir', 'w_famille_jadd'],
    relatedExpressionIds: ['e_famille_kbir_eddar'],
    tags: ['famille', 'valeurs'],
  },
  {
    id: 'disc_famille_mariage', section: 'culture', title: 'Le mariage tunisien', subtitle: '3ris, 3roussa, 3ors', level: 'debutant', estimatedMinutes: 4, coverEmoji: '💍', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Le mariage (3ors) est une grande célébration qui peut durer plusieurs jours. Le marié (3ris) et la mariée (3roussa) sont au centre des festivités, entourés de toute la famille." },
      { type: 'savoir', text: "On souhaite « 3o9bel 3andek » (à ton tour) aux célibataires présents." },
    ],
    relatedWordIds: ['w_famille_3ors', 'w_famille_3ris', 'w_famille_3roussa'],
    relatedExpressionIds: ['e_famille_3o9bel_3andek'],
    tags: ['famille', 'mariage', 'fetes'],
  },
  {
    id: 'disc_famille_voisinage', section: 'culture', title: 'Le voisinage, seconde famille', subtitle: 'El jar 9bel ed dar', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏘️', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Le voisin (jar) occupe une place quasi familiale. On s'entraide, on partage les plats, on veille les uns sur les autres. Un dicton dit de choisir le voisin avant la maison." },
    ],
    relatedWordIds: ['w_famille_jar', 'w_7ouma'],
    tags: ['famille', 'voisinage'],
  },
  {
    id: 'disc_famille_diaspora', section: 'diaspora', title: 'La famille à distance', subtitle: 'Garder le lien', level: 'debutant', estimatedMinutes: 3, coverEmoji: '📱', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Pour la diaspora, garder le lien familial passe par les appels vidéo du dimanche et les retours au pays. « Ntwa7ach » (tu me manques) revient souvent dans ces conversations." },
    ],
    relatedWordIds: ['w_3ayla', 'w_bled'],
    tags: ['famille', 'diaspora'],
  },

  // ── VAGUE 2 — UNIVERS « EN LOUAGE » (5 articles) · universe: 'louage' ───────────
  {
    id: 'disc_louage_systeme', section: 'contemporain', title: 'Le louage, taxi collectif tunisien', subtitle: 'Voyager entre les villes', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🚐', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Le louage est un minibus (souvent 8 places) qui relie les villes. Il part de la station dès qu'il est « kompli » (plein), sans horaire fixe." },
      { type: 'reperes', items: ['louage = taxi collectif', 'sewa9 = chauffeur', 'rakeb = passager'] },
    ],
    relatedWordIds: ['w_louage', 'w_louage_sewa9', 'w_louage_rakeb'],
    tags: ['louage', 'transport'],
  },
  {
    id: 'disc_louage_station', section: 'contemporain', title: 'À la station de louages', subtitle: 'Organisation et files', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🚏', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Chaque destination a sa file (saf). On attend son tour (dawr), on paie le tarif fixe (ta3rifa) et on monte. Tout est rapide et bon marché." },
    ],
    relatedWordIds: ['w_louage_saf', 'w_louage_dawr', 'w_louage_ta3rifa'],
    tags: ['louage', 'transport'],
  },
  {
    id: 'disc_louage_regions', section: 'regions', title: 'Relier les régions', subtitle: 'Du nord au sud', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🗺️', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Le louage dessert tous les gouvernorats (wlaya). C'est souvent le moyen le plus pratique pour rejoindre des villes mal desservies par le train." },
    ],
    relatedWordIds: ['w_louage_wlaya', 'w_louage_jiha', 'w_bled'],
    tags: ['louage', 'regions'],
  },
  {
    id: 'disc_louage_politesse', section: 'contemporain', title: 'Politesse en louage', subtitle: 'Ya 3ammi, 3la mahlek', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🙋', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "On interpelle le chauffeur par « ya 3ammi » (mon oncle) et on demande de ralentir par « 3la mahlek ». La courtoisie facilite le trajet." },
    ],
    relatedWordIds: ['w_louage_sewa9', 'w_louage_bechwaya'],
    relatedExpressionIds: ['e_louage_ya_3ammi', 'e_louage_3la_mahlek'],
    tags: ['louage', 'politesse'],
  },
  {
    id: 'disc_louage_route', section: 'contemporain', title: 'Sur la route', subtitle: 'Directions et sécurité', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🛣️', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Pour guider : « tool » (tout droit), « ysar » (gauche), « ymin » (droite). On se souhaite « tri9 essalama » (bonne route) au départ." },
      { type: 'reperes', items: ['tool = tout droit', 'ysar = gauche', 'ymin = droite'] },
    ],
    relatedWordIds: ['w_louage_tool', 'w_louage_ysar', 'w_louage_ymin'],
    relatedExpressionIds: ['e_louage_tri9_essalama'],
    tags: ['louage', 'direction'],
  },

  // ── VAGUE 2 — UNIVERS « À LA PLAGE » (5 articles) · universe: 'plage' ───────────
  {
    id: 'disc_plage_ete_tunisien', section: 'culture', title: 'L\'été à la tunisienne', subtitle: 'Sif, blaj, 3otla', level: 'debutant', estimatedMinutes: 3, coverEmoji: '☀️', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "L'été tunisien (sif) se passe largement sur le littoral. Les familles s'installent tôt sur la plage (blaj) avec fouta, chamsiya et provisions." },
      { type: 'reperes', items: ['sif = été', 'blaj = plage', '3otla = vacances', 'chatt = rivage'] },
    ],
    relatedWordIds: ['w_plage_sif', 'w_plage_blaj', 'w_plage_3otla', 'w_plage_chatt'],
    relatedExpressionIds: ['e_plage_el3otla_wlat'],
    tags: ['plage', 'culture', 'saisons'],
  },
  {
    id: 'disc_plage_fouta', section: 'culture', title: 'La fouta, tissu emblématique', subtitle: 'Art de vivre tunisien', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧣', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "La fouta est un tissu rayé en coton léger, utilisée comme serviette de plage, paréo ou nappe. Chaque région a ses couleurs distinctives." },
      { type: 'savoir', text: "La fouta de Nabeul et de Monastir sont les plus réputées. Elle s'offre comme cadeau aux visiteurs." },
    ],
    relatedWordIds: ['w_plage_fouta', 'w_plage_rmel'],
    tags: ['plage', 'culture', 'artisanat'],
  },
  {
    id: 'disc_plage_mer', section: 'regions', title: 'La mer Méditerranée en Tunisie', subtitle: 'El b7ar', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌊', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "La Tunisie a plus de 1 300 km de côtes. Hammamet, Djerba, Tabarka, Mahdia... autant de destinations balnéaires appréciées pour leur mer (b7ar) claire." },
      { type: 'reperes', items: ['b7ar = mer', 'sa7el = côte', 'jzira = île', 'mina = port'] },
    ],
    relatedWordIds: ['w_b7ar', 'w_plage_sa7el', 'w_plage_jzira', 'w_plage_mina'],
    tags: ['plage', 'regions', 'mer'],
  },
  {
    id: 'disc_plage_securite', section: 'contemporain', title: 'Sécurité à la plage', subtitle: '3awwama et signaux', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🚩', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Les plages tunisiennes organisées arborent des drapeaux de couleur. Bouée (3awwama), drapeau rouge (interdiction de nager), drapeau vert (baignade autorisée)." },
      { type: 'reperes', items: ['3awwama = bouée', 'mouj = vague', 'ghous = plongée'] },
    ],
    relatedWordIds: ['w_plage_3awwama', 'w_plage_mouja', 'w_plage_ghous'],
    tags: ['plage', 'securite'],
  },
  {
    id: 'disc_plage_nourriture', section: 'contemporain', title: 'Manger à la plage', subtitle: 'Sandwich, jelati, kazouza', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🍦', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Sur les plages tunisiennes, des vendeurs ambulants proposent glaces (jelati), sodas (kazouza), sandwichs et maïs grillé. Un snack populaire : le sandwich thon-harissa." },
    ],
    relatedWordIds: ['w_plage_jelati', 'w_plage_kazouza', 'w_plage_sandwich'],
    relatedExpressionIds: ['e_plage_jelati_barsha'],
    tags: ['plage', 'nourriture'],
  },

  // ── VAGUE 2 — UNIVERS « À L'HÔTEL » (5 articles) · universe: 'hotel' ────────────
  {
    id: 'disc_hotel_fondok', section: 'contemporain', title: 'L\'hôtellerie tunisienne', subtitle: 'Du fondok au resort', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏨', universe: 'hotel',
    blocks: [
      { type: 'paragraphe', text: "La Tunisie dispose d'une offre hôtelière variée : des petits fondoks (hôtels traditionnels) aux grands resorts balnéaires. Le tourisme représente une part importante de l'économie." },
      { type: 'reperes', items: ['fondok = hôtel', 'ghorfa = chambre', 'isti9bal = réception', 'tabiq = étage'] },
    ],
    relatedWordIds: ['w_hotel_fondok', 'w_hotel_ghorfa', 'w_hotel_tabiq'],
    tags: ['hotel', 'tourisme'],
  },
  {
    id: 'disc_hotel_riad', section: 'culture', title: 'Le riad et la médina', subtitle: 'Architecture traditionnelle', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌿', universe: 'hotel',
    blocks: [
      { type: 'paragraphe', text: "Dans les médinas (vieilles villes), des maisons traditionnelles ont été transformées en maisons d'hôtes (riad). Ces petits havens offrent une expérience authentique avec cour intérieure et zellige." },
      { type: 'savoir', text: "À Tunis, Sfax ou Sousse, les riads en médina coûtent souvent moins cher que les hôtels de bord de mer." },
    ],
    relatedWordIds: ['w_hotel_fondok', 'w_hotel_ghorfa'],
    tags: ['hotel', 'culture', 'architecture'],
  },
  {
    id: 'disc_hotel_ftour', section: 'culture', title: 'Le petit déjeuner à l\'hôtel', subtitle: 'Ftour — tradition et modernité', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🥐', universe: 'hotel',
    blocks: [
      { type: 'paragraphe', text: "Le petit déjeuner (ftour) tunisien à l'hôtel mêle tradition (pain, huile d'olive, thon, œuf) et modernité (viennoiseries, jus frais). « El ftour machmoul » signifie qu'il est inclus dans le prix." },
    ],
    relatedWordIds: ['w_cafe_ftour', 'w_hotel_fondok'],
    relatedExpressionIds: ['e_hotel_ftour_mchmel'],
    tags: ['hotel', 'nourriture', 'culture'],
  },
  {
    id: 'disc_hotel_pourboire', section: 'contemporain', title: 'Le pourboire à l\'hôtel', subtitle: 'Baksheesh — usage et codes', level: 'debutant', estimatedMinutes: 2, coverEmoji: '💰', universe: 'hotel',
    blocks: [
      { type: 'paragraphe', text: "En Tunisie, le pourboire (bakchich ou tip) est courant pour les bagagistes, femmes de chambre et serveurs d'hôtel. Ce n'est pas obligatoire, mais très apprécié." },
      { type: 'savoir', text: "Un pourboire de 2 à 5 dinars pour un service est bien reçu. On dit simplement « tqabbal » (accepte)." },
    ],
    relatedWordIds: ['w_hotel_khidma', 'w_hotel_7isab'],
    tags: ['hotel', 'argent', 'codes'],
  },
  {
    id: 'disc_hotel_confort', section: 'contemporain', title: 'Les services à l\'hôtel', subtitle: 'Wifi, clim, piscine', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🏊', universe: 'hotel',
    blocks: [
      { type: 'paragraphe', text: "Les hôtels tunisiens proposent généralement wifi (3andkom wifi?), climatisation (klim) et piscine. On demande à la réception (isti9bal) pour toute information." },
      { type: 'reperes', items: ['wifi = wifi', 'klim = climatisation', 'mossaad = ascenseur', 'garaj = parking'] },
    ],
    relatedWordIds: ['w_hotel_wifi', 'w_hotel_klim', 'w_hotel_mossaad'],
    relatedExpressionIds: ['e_hotel_wifi_7or'],
    tags: ['hotel', 'services'],
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // VAGUE 3 — ENRICHISSEMENT DÉCOUVRIR · objectif V3 : 100 articles
  // ═══════════════════════════════════════════════════════════════════════════════

  // ── CUISINE (16 articles) · section: 'cuisine' ──────────────────────────────────
  {
    id: 'disc_cuisine_couscous', section: 'cuisine', title: 'Le couscous tunisien', subtitle: 'Le plat du vendredi', level: 'debutant', estimatedMinutes: 4, coverEmoji: '🍲', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Le couscous (kosksi) est le plat emblématique de la Tunisie, traditionnellement servi le vendredi et lors des grandes occasions. Contrairement au couscous marocain, la version tunisienne est souvent relevée à la harissa et accompagnée de poisson sur le littoral." },
      { type: 'savoir', text: "À Tunis, on aime le couscous au poisson (kosksi bel 7out) ; à l'intérieur du pays, l'agneau domine." },
    ],
    relatedWordIds: ['w_b7ar'],
    tags: ['cuisine', 'tradition', 'plats'],
  },
  {
    id: 'disc_cuisine_harissa', section: 'cuisine', title: 'La harissa', subtitle: 'L\'âme piquante de la cuisine', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌶️', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "La harissa est une pâte de piments rouges, ail, coriandre et carvi. Présente sur toutes les tables, elle accompagne pain, couscous et sandwichs. C'est un marqueur identitaire fort de la cuisine tunisienne." },
      { type: 'reperes', items: ['harissa = pâte de piment', 'tabel = mélange d\'épices', 'kammoun = cumin'] },
    ],
    tags: ['cuisine', 'epices', 'identite'],
  },
  {
    id: 'disc_cuisine_brik', section: 'cuisine', title: 'La brik à l\'œuf', subtitle: 'Le défi du premier coup de dent', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🥟', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La brik (brik bel 3dham) est une feuille de malsouka frite renfermant un œuf coulant, du thon, des câpres et du persil. Incontournable du Ramadan, elle se mange chaude, en veillant à ne pas faire couler le jaune." },
    ],
    tags: ['cuisine', 'ramadan', 'entrees'],
  },
  {
    id: 'disc_cuisine_lablabi', section: 'cuisine', title: 'Le lablabi', subtitle: 'Le réconfort de l\'hiver', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍜', universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "Le lablabi est une soupe de pois chiches servie sur du pain rassis, agrémentée d'huile d'olive, harissa, cumin, œuf et thon. Plat populaire et bon marché, on le déguste dans des gargotes dès le matin en hiver." },
    ],
    relatedWordIds: ['w_cafe_ftour'],
    tags: ['cuisine', 'street-food', 'hiver'],
  },
  {
    id: 'disc_cuisine_ojja', section: 'cuisine', title: 'L\'ojja', subtitle: 'Tomates, piment et œufs', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍳', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "L'ojja (3ojja) est une poêlée de tomates et piments mijotés où l'on casse des œufs. On la décline avec merguez, crevettes ou kefteji. C'est un plat rapide et convivial du quotidien." },
    ],
    tags: ['cuisine', 'plats', 'quotidien'],
  },
  {
    id: 'disc_cuisine_makroudh', section: 'cuisine', title: 'Le makroudh', subtitle: 'Semoule, dattes et miel', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍯', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Le makroudh est une pâtisserie de semoule fourrée à la pâte de dattes, frite puis trempée dans le miel. Spécialité de Kairouan, il accompagne le thé et figure parmi les douceurs des fêtes." },
    ],
    tags: ['cuisine', 'patisserie', 'kairouan'],
  },
  {
    id: 'disc_cuisine_the_pignons', section: 'cuisine', title: 'Le thé aux pignons', subtitle: 'Tay bel snoubar', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🍵', universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "Le thé tunisien est fort, sucré et souvent servi avec des pignons de pin (snoubar) ou des amandes. Préparé longuement, il rythme les fins de repas et les après-midi entre amis." },
    ],
    relatedWordIds: ['w_tay'],
    tags: ['cuisine', 'boissons', 'convivialite'],
  },
  {
    id: 'disc_cuisine_huile_olive', section: 'cuisine', title: 'L\'huile d\'olive', subtitle: 'L\'or vert tunisien', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🫒', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "La Tunisie est l'un des plus grands producteurs mondiaux d'huile d'olive (zit zitoun). Base de presque tous les plats, elle se déguste aussi simplement avec du pain au petit déjeuner." },
      { type: 'savoir', text: "Les oliveraies de Sfax et du Sahel produisent une huile réputée à l'export." },
    ],
    tags: ['cuisine', 'agriculture', 'economie'],
  },
  {
    id: 'disc_cuisine_poisson', section: 'cuisine', title: 'Le poisson grillé', subtitle: 'Saveurs du littoral', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🐟', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Sur les côtes, le poisson frais (7out) grillé, servi avec tastira et citron, est roi. Daurade, rouget et loup se dégustent dans les ports de Bizerte, Mahdia ou Djerba." },
    ],
    relatedWordIds: ['w_plage_mina', 'w_b7ar'],
    tags: ['cuisine', 'mer', 'littoral'],
  },
  {
    id: 'disc_cuisine_merguez', section: 'cuisine', title: 'La merguez', subtitle: 'La saucisse épicée', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🌭', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "La merguez, saucisse de bœuf ou d'agneau relevée à la harissa, se grille au barbecue ou se glisse dans un sandwich. Elle est l'âme des grillades estivales et des fêtes de famille." },
    ],
    tags: ['cuisine', 'grillades', 'street-food'],
  },
  {
    id: 'disc_cuisine_fricasse', section: 'cuisine', title: 'La fricassé', subtitle: 'Le petit pain frit de Tunis', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🥪', universe: 'cafe',
    blocks: [
      { type: 'paragraphe', text: "La fricassé est un petit pain frit garni de thon, œuf, olives, pommes de terre et harissa. Snack salé typiquement tunisois, on le trouve dans toutes les sandwicheries." },
    ],
    tags: ['cuisine', 'street-food', 'tunis'],
  },
  {
    id: 'disc_cuisine_assida', section: 'cuisine', title: 'L\'assida zgougou', subtitle: 'Le dessert du Mouled', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍮', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "L'assida zgougou est une crème à base de graines de pin d'Alep, préparée pour le Mouled (naissance du Prophète). Décorée de fruits secs, elle se partage entre voisins et famille." },
    ],
    tags: ['cuisine', 'fetes', 'desserts'],
  },
  {
    id: 'disc_cuisine_marche_epices', section: 'cuisine', title: 'Les épices du marché', subtitle: 'Tabel, kammoun, harissa sèche', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧂', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Les étals d'épices colorent les souks. Le tabel (coriandre-ail), le carvi (karwiya), le cumin (kammoun) et le ras el hanout parfument la cuisine tunisienne au quotidien." },
      { type: 'reperes', items: ['tabel = coriandre/ail', 'karwiya = carvi', 'kammoun = cumin'] },
    ],
    relatedWordIds: ['w_sou9'],
    tags: ['cuisine', 'epices', 'marche'],
  },
  {
    id: 'disc_cuisine_pain_tabouna', section: 'cuisine', title: 'Le pain tabouna', subtitle: 'Cuit au four en terre', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍞', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La tabouna est un pain rond cuit dans un four en argile traditionnel. Croustillant et parfumé, il accompagne huile d'olive et fromage, surtout dans les campagnes." },
    ],
    tags: ['cuisine', 'tradition', 'pain'],
  },
  {
    id: 'disc_cuisine_ramadan', section: 'cuisine', title: 'La table du Ramadan', subtitle: 'Chorba, brik, et douceurs', level: 'debutant', estimatedMinutes: 4, coverEmoji: '🌙', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "À la rupture du jeûne (ftour), la table tunisienne s'orne de chorba (soupe), brik, et plats mijotés, suivis de pâtisseries comme le zlabia et le mlabes. C'est un moment familial central." },
      { type: 'savoir', text: "Le zlabia, beignet au miel, n'apparaît quasiment qu'en Ramadan." },
    ],
    relatedWordIds: ['w_cafe_ftour', 'w_3ayla'],
    tags: ['cuisine', 'ramadan', 'famille'],
  },
  {
    id: 'disc_cuisine_kafteji', section: 'cuisine', title: 'Le kafteji', subtitle: 'Légumes frits hachés', level: 'debutant', estimatedMinutes: 2, coverEmoji: '🍆', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Le kafteji réunit poivrons, courgettes, pommes de terre, citrouille et œufs, frits puis hachés ensemble. Plat populaire et économique, il se mange avec du pain frais." },
    ],
    tags: ['cuisine', 'plats', 'quotidien'],
  },

  // ── HISTOIRE (16 articles) · section: 'histoire' ────────────────────────────────
  {
    id: 'disc_histoire_carthage', section: 'histoire', title: 'Carthage', subtitle: 'La cité de Didon et d\'Hannibal', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🏛️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Fondée par les Phéniciens au IXe siècle av. J.-C., Carthage fut une puissance maritime rivale de Rome. Détruite lors des guerres puniques, elle renaît sous les Romains. Ses ruines, près de Tunis, sont classées à l'UNESCO." },
      { type: 'savoir', text: "Le général Hannibal, qui traversa les Alpes avec ses éléphants, était carthaginois." },
    ],
    tags: ['histoire', 'antiquite', 'patrimoine'],
  },
  {
    id: 'disc_histoire_phenicien', section: 'histoire', title: 'L\'héritage phénicien', subtitle: 'Commerçants venus de l\'Orient', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '⚓', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Les Phéniciens, navigateurs venus du Liban actuel, fondèrent des comptoirs sur les côtes tunisiennes. Ils introduisirent l'alphabet et un savoir-faire commercial qui marqua durablement la région." },
    ],
    relatedWordIds: ['w_b7ar', 'w_plage_mina'],
    tags: ['histoire', 'antiquite', 'commerce'],
  },
  {
    id: 'disc_histoire_rome', section: 'histoire', title: 'L\'Afrique romaine', subtitle: 'Le grenier de Rome', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🌾', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Sous Rome, la province d'Afrique devint un grenier à blé essentiel. Villes prospères, théâtres et thermes fleurirent. L'amphithéâtre d'El Jem témoigne encore de cette splendeur." },
      { type: 'reperes', items: ['El Jem = amphithéâtre romain', 'Dougga = cité antique', 'Bulla Regia = villas souterraines'] },
    ],
    tags: ['histoire', 'antiquite', 'patrimoine'],
  },
  {
    id: 'disc_histoire_eljem', section: 'histoire', title: 'L\'amphithéâtre d\'El Jem', subtitle: 'Le colisée d\'Afrique', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏟️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "L'amphithéâtre d'El Jem, l'un des mieux conservés au monde, pouvait accueillir 35 000 spectateurs. Classé à l'UNESCO, il accueille aujourd'hui un festival de musique symphonique." },
    ],
    tags: ['histoire', 'patrimoine', 'unesco'],
  },
  {
    id: 'disc_histoire_kairouan', section: 'histoire', title: 'Kairouan, ville sainte', subtitle: 'Première cité de l\'Islam au Maghreb', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🕌', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Fondée en 670, Kairouan fut la première grande ville musulmane du Maghreb. Sa Grande Mosquée, l'une des plus anciennes, en fait un haut lieu spirituel et un joyau architectural classé à l'UNESCO." },
    ],
    tags: ['histoire', 'islam', 'patrimoine'],
  },
  {
    id: 'disc_histoire_aghlabides', section: 'histoire', title: 'Les Aghlabides', subtitle: 'Bassins et savoir hydraulique', level: 'intermediaire', estimatedMinutes: 3, coverEmoji: '💧', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La dynastie aghlabide (IXe siècle) fit de Kairouan un centre de pouvoir. Elle laissa de remarquables ouvrages hydrauliques, comme les bassins des Aghlabides, qui alimentaient la ville en eau." },
    ],
    tags: ['histoire', 'dynasties', 'patrimoine'],
  },
  {
    id: 'disc_histoire_zitouna', section: 'histoire', title: 'La mosquée Zitouna', subtitle: 'Cœur savant de Tunis', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '📜', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La mosquée Zitouna, au cœur de la médina de Tunis, fut un grand centre d'enseignement pendant des siècles. Son université forma savants, juristes et lettrés du monde musulman." },
    ],
    tags: ['histoire', 'savoir', 'tunis'],
  },
  {
    id: 'disc_histoire_hafsides', section: 'histoire', title: 'Les Hafsides', subtitle: 'L\'âge d\'or de Tunis', level: 'intermediaire', estimatedMinutes: 3, coverEmoji: '👑', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Sous les Hafsides (XIIIe-XVIe siècle), Tunis devint une capitale florissante du commerce méditerranéen. La médina actuelle conserve l'empreinte de cette période faste." },
    ],
    tags: ['histoire', 'dynasties', 'tunis'],
  },
  {
    id: 'disc_histoire_ottomans', section: 'histoire', title: 'L\'époque ottomane', subtitle: 'Beys et régence de Tunis', level: 'intermediaire', estimatedMinutes: 4, coverEmoji: '🏰', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Intégrée à l'Empire ottoman au XVIe siècle, la Tunisie fut gouvernée par des beys largement autonomes. Cette époque façonna l'administration, l'architecture des palais et une partie du vocabulaire encore utilisé." },
    ],
    tags: ['histoire', 'ottomans', 'patrimoine'],
  },
  {
    id: 'disc_histoire_protectorat', section: 'histoire', title: 'Le protectorat français', subtitle: '1881-1956', level: 'intermediaire', estimatedMinutes: 4, coverEmoji: '🇫🇷', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "De 1881 à 1956, la Tunisie fut un protectorat français. Cette période laissa des traces dans l'urbanisme (la ville européenne de Tunis), l'enseignement et la langue, avec de nombreux emprunts au français dans le darija." },
    ],
    tags: ['histoire', 'colonisation', 'langue'],
  },
  {
    id: 'disc_histoire_independance', section: 'histoire', title: 'L\'indépendance de 1956', subtitle: 'Naissance de la Tunisie moderne', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '🎗️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Le 20 mars 1956, la Tunisie obtient son indépendance. Habib Bourguiba, figure du mouvement national, devient le premier président et engage de profondes réformes, notamment l'éducation et le statut de la femme." },
      { type: 'savoir', text: "Le 20 mars reste la fête nationale tunisienne." },
    ],
    tags: ['histoire', 'independance', 'nation'],
  },
  {
    id: 'disc_histoire_bourguiba', section: 'histoire', title: 'Habib Bourguiba', subtitle: 'Le combattant suprême', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '🎖️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Premier président de la Tunisie indépendante, Bourguiba modernisa le pays : Code du statut personnel (1956) émancipant la femme, généralisation de l'école, et politiques de santé publique." },
    ],
    tags: ['histoire', 'politique', 'reformes'],
  },
  {
    id: 'disc_histoire_csp', section: 'histoire', title: 'Le Code du statut personnel', subtitle: 'Une avancée pour les droits', level: 'intermediaire', estimatedMinutes: 3, coverEmoji: '⚖️', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Promulgué en 1956, le Code du statut personnel abolit la polygamie et instaura le divorce judiciaire et le consentement au mariage. Il fait de la Tunisie un pays pionnier des droits des femmes dans la région." },
    ],
    relatedWordIds: ['w_famille_3ors'],
    tags: ['histoire', 'droit', 'famille'],
  },
  {
    id: 'disc_histoire_2011', section: 'histoire', title: 'La révolution de 2011', subtitle: 'Dignité et liberté', level: 'intermediaire', estimatedMinutes: 4, coverEmoji: '✊', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "En décembre 2010 - janvier 2011, un soulèvement populaire conduit au départ du président Ben Ali. La révolution tunisienne ouvre une période de transition démocratique et inspire d'autres mouvements dans la région." },
    ],
    tags: ['histoire', 'contemporain', 'societe'],
  },
  {
    id: 'disc_histoire_medina', section: 'histoire', title: 'La médina de Tunis', subtitle: 'Mille ans d\'urbanisme', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🚪', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La médina de Tunis, classée à l'UNESCO, est un labyrinthe de ruelles, souks, mosquées et palais (dar). Elle constitue le cœur historique de la capitale et un témoignage vivant de l'architecture arabo-musulmane." },
    ],
    relatedWordIds: ['w_dar', 'w_sou9'],
    tags: ['histoire', 'patrimoine', 'tunis'],
  },
  {
    id: 'disc_histoire_juifs', section: 'histoire', title: 'Le patrimoine judéo-tunisien', subtitle: 'La Ghriba de Djerba', level: 'intermediaire', estimatedMinutes: 3, coverEmoji: '🕎', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "La communauté juive de Tunisie, très ancienne, a laissé un riche patrimoine. La synagogue de la Ghriba, à Djerba, l'une des plus anciennes au monde, accueille chaque année un pèlerinage." },
    ],
    tags: ['histoire', 'patrimoine', 'religions'],
  },

  // ── RÉGIONS & GÉOGRAPHIE (14 articles) · section: 'regions' ─────────────────────
  {
    id: 'disc_regions_tunis', section: 'regions', title: 'Tunis, la capitale', subtitle: 'Entre médina et lac', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏙️', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Tunis, capitale du pays, mêle médina historique, avenue Habib-Bourguiba à la française et quartiers modernes autour du lac. C'est le cœur politique, économique et culturel de la Tunisie." },
    ],
    relatedWordIds: ['w_louage_wlaya'],
    tags: ['regions', 'villes', 'capitale'],
  },
  {
    id: 'disc_regions_sidi_bou', section: 'regions', title: 'Sidi Bou Saïd', subtitle: 'Le village bleu et blanc', level: 'debutant', estimatedMinutes: 3, coverEmoji: '💙', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Perché sur une falaise au-dessus de la Méditerranée, Sidi Bou Saïd séduit par ses maisons blanches aux portes bleues, ses ruelles fleuries et ses cafés panoramiques. Un lieu emblématique des artistes." },
    ],
    relatedWordIds: ['w_b7ar'],
    tags: ['regions', 'tourisme', 'patrimoine'],
  },
  {
    id: 'disc_regions_carthage_quartier', section: 'regions', title: 'La banlieue nord', subtitle: 'Carthage, La Marsa, Gammarth', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌊', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "La banlieue nord de Tunis aligne plages, résidences et sites antiques. La Marsa et Gammarth sont prisées l'été pour leurs cafés en bord de mer et leur ambiance balnéaire." },
    ],
    relatedWordIds: ['w_plage_blaj', 'w_b7ar'],
    tags: ['regions', 'littoral', 'tourisme'],
  },
  {
    id: 'disc_regions_sahel', section: 'regions', title: 'Le Sahel', subtitle: 'Sousse, Monastir, Mahdia', level: 'debutant', estimatedMinutes: 4, coverEmoji: '🏖️', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Le Sahel, sur la côte est, regroupe Sousse, Monastir et Mahdia. Plages dorées, médinas, ribats et oliveraies en font un cœur touristique et agricole du pays." },
      { type: 'reperes', items: ['Sousse = la perle du Sahel', 'Monastir = ribat et marina', 'Mahdia = pêche et plages'] },
    ],
    relatedWordIds: ['w_plage_sa7el', 'w_plage_blaj'],
    tags: ['regions', 'littoral', 'tourisme'],
  },
  {
    id: 'disc_regions_djerba', section: 'regions', title: 'Djerba', subtitle: 'L\'île des Lotophages', level: 'debutant', estimatedMinutes: 4, coverEmoji: '🏝️', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Djerba, plus grande île d'Afrique du Nord, est célèbre pour ses plages, ses maisons blanches (houch), son artisanat et sa cohabitation des cultures. La légende l'associe à l'épisode des Lotophages de l'Odyssée." },
    ],
    relatedWordIds: ['w_plage_jzira', 'w_b7ar'],
    tags: ['regions', 'iles', 'tourisme'],
  },
  {
    id: 'disc_regions_sfax', section: 'regions', title: 'Sfax', subtitle: 'La capitale économique', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏭', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Sfax, deuxième ville du pays, est un grand pôle économique : commerce, industrie, huile d'olive et pêche. Sa médina fortifiée et son esprit entrepreneurial la distinguent." },
    ],
    tags: ['regions', 'villes', 'economie'],
  },
  {
    id: 'disc_regions_kairouan_ville', section: 'regions', title: 'Kairouan', subtitle: 'Tapis et spiritualité', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧎', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Ville sainte au centre du pays, Kairouan est réputée pour ses tapis noués à la main et ses douceurs (makroudh). Son patrimoine religieux et artisanal attire pèlerins et visiteurs." },
    ],
    tags: ['regions', 'artisanat', 'patrimoine'],
  },
  {
    id: 'disc_regions_bizerte', section: 'regions', title: 'Bizerte', subtitle: 'La ville la plus au nord', level: 'debutant', estimatedMinutes: 3, coverEmoji: '⛵', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Bizerte, ville la plus septentrionale d'Afrique, possède un vieux port pittoresque et des plages réputées. Entre lac, mer et montagnes, la région offre des paysages variés." },
    ],
    relatedWordIds: ['w_plage_mina', 'w_b7ar'],
    tags: ['regions', 'littoral', 'nord'],
  },
  {
    id: 'disc_regions_tabarka', section: 'regions', title: 'Tabarka et le nord-ouest', subtitle: 'Forêts, corail et jazz', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌲', universe: 'plage',
    blocks: [
      { type: 'paragraphe', text: "Le nord-ouest, verdoyant, contraste avec le reste du pays. Tabarka, entre forêts de chêne-liège et mer, est connue pour son corail, ses aiguilles rocheuses et son festival de jazz." },
    ],
    relatedWordIds: ['w_b7ar'],
    tags: ['regions', 'nature', 'nord-ouest'],
  },
  {
    id: 'disc_regions_sahara', section: 'regions', title: 'Le Sahara', subtitle: 'Douz, porte du désert', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🐪', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Au sud, le Sahara déploie dunes, oasis et palmeraies. Douz, « porte du désert », accueille un festival du Sahara. Les excursions à dos de dromadaire et les nuits sous tente y sont prisées." },
    ],
    tags: ['regions', 'desert', 'sud'],
  },
  {
    id: 'disc_regions_tozeur', section: 'regions', title: 'Tozeur et les oasis', subtitle: 'Palmeraies et briques ocre', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '🌴', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "Tozeur, célèbre pour son immense palmeraie et son architecture de briques ocre, est une porte vers les oasis de montagne (Chebika, Tamerza) et les décors de cinéma du grand sud." },
    ],
    tags: ['regions', 'oasis', 'sud'],
  },
  {
    id: 'disc_regions_matmata', section: 'regions', title: 'Matmata', subtitle: 'Les maisons troglodytes', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '🕳️', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "À Matmata, les habitations troglodytes sont creusées dans la roche pour se protéger de la chaleur. Ces maisons souterraines, encore habitées, ont notamment servi de décor à des films célèbres." },
    ],
    relatedWordIds: ['w_dar'],
    tags: ['regions', 'habitat', 'sud'],
  },
  {
    id: 'disc_regions_cap_bon', section: 'regions', title: 'Le Cap Bon', subtitle: 'Agrumes et plages', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🍊', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Péninsule fertile du nord-est, le Cap Bon est réputé pour ses agrumes, ses vignes, ses plages (Hammamet, Nabeul) et son artisanat de poterie et de fleur d'oranger." },
    ],
    tags: ['regions', 'agriculture', 'tourisme'],
  },
  {
    id: 'disc_regions_geographie', section: 'regions', title: 'Géographie de la Tunisie', subtitle: 'Du nord vert au sud désertique', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🗺️', universe: 'louage',
    blocks: [
      { type: 'paragraphe', text: "La Tunisie s'étire sur 1 300 km de côtes, du nord montagneux et verdoyant au sud saharien, en passant par les plaines céréalières et les oliveraies du centre. Cette diversité façonne climats et modes de vie." },
      { type: 'reperes', items: ['Nord = forêts et montagnes', 'Centre = steppes et oliviers', 'Sud = oasis et désert'] },
    ],
    relatedWordIds: ['w_louage_jiha', 'w_louage_wlaya'],
    tags: ['regions', 'geographie', 'climat'],
  },

  // ── ART & PATRIMOINE (14 articles) · section: 'art' ─────────────────────────────
  {
    id: 'disc_art_zellige', section: 'art', title: 'Le zellige', subtitle: 'La mosaïque de faïence', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🟦', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Le zellige est un assemblage de carreaux de faïence émaillée formant des motifs géométriques. Il orne murs, fontaines et patios des maisons traditionnelles (dar) et des palais de la médina." },
    ],
    relatedWordIds: ['w_dar'],
    tags: ['art', 'artisanat', 'patrimoine'],
  },
  {
    id: 'disc_art_poterie', section: 'art', title: 'La poterie de Nabeul', subtitle: 'Terre et couleurs', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🏺', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Nabeul et Sejnane sont des hauts lieux de la poterie tunisienne. À Sejnane, la poterie modelée à la main par les femmes, aux motifs berbères, est inscrite au patrimoine immatériel de l'UNESCO." },
    ],
    tags: ['art', 'artisanat', 'unesco'],
  },
  {
    id: 'disc_art_tapis', section: 'art', title: 'Le tapis de Kairouan', subtitle: 'Nœuds et symboles', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧶', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Le tapis noué de Kairouan, aux motifs géométriques et au médaillon central, est un art transmis de mère en fille. Chaque pièce, faite main, peut demander des mois de travail." },
    ],
    tags: ['art', 'artisanat', 'kairouan'],
  },
  {
    id: 'disc_art_chechia', section: 'art', title: 'La chéchia', subtitle: 'Le bonnet rouge feutré', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧢', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "La chéchia, bonnet de laine feutrée rouge, est un emblème de l'artisanat tunisois. Son façonnage, regroupé dans le souk des chéchias, suit un savoir-faire séculaire." },
    ],
    tags: ['art', 'artisanat', 'vetements'],
  },
  {
    id: 'disc_art_malouf', section: 'art', title: 'Le malouf', subtitle: 'La musique arabo-andalouse', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🎻', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Le malouf, musique arabo-andalouse héritée de l'exode de l'Andalousie, est le répertoire classique tunisien. Joué au luth, violon et percussions, il est préservé comme patrimoine national." },
    ],
    tags: ['art', 'musique', 'patrimoine'],
  },
  {
    id: 'disc_art_mezoued', section: 'art', title: 'Le mezoued', subtitle: 'La cornemuse populaire', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🎶', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Le mezoued est une cornemuse tunisienne et, par extension, un genre musical populaire né dans les quartiers urbains. Festif et rythmé, il anime mariages et fêtes." },
    ],
    relatedWordIds: ['w_famille_3ors'],
    tags: ['art', 'musique', 'populaire'],
  },
  {
    id: 'disc_art_calligraphie', section: 'art', title: 'La calligraphie arabe', subtitle: 'L\'écriture devenue art', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '✒️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "La calligraphie élève l'écriture arabe au rang d'art. Sur les mosquées, manuscrits et œuvres contemporaines, les styles (coufique, naskhi) déploient des compositions d'une grande élégance." },
    ],
    tags: ['art', 'ecriture', 'patrimoine'],
  },
  {
    id: 'disc_art_porte_tunis', section: 'art', title: 'Les portes de Tunis', subtitle: 'Bleu et clous forgés', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🚪', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "Les portes traditionnelles, souvent bleues, cloutées et cintrées, sont une signature visuelle des médinas. Leurs motifs et heurtoirs racontent le statut et le goût de chaque maison (dar)." },
    ],
    relatedWordIds: ['w_dar', 'w_beb'],
    tags: ['art', 'architecture', 'patrimoine'],
  },
  {
    id: 'disc_art_cuivre', section: 'art', title: 'Le travail du cuivre', subtitle: 'Plateaux et lanternes', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🪔', universe: 'marche',
    blocks: [
      { type: 'paragraphe', text: "Dans les souks, les dinandiers martèlent le cuivre pour créer plateaux, théières et lanternes ciselés. Le son rythmé des marteaux fait partie de l'ambiance de la médina." },
    ],
    relatedWordIds: ['w_sou9'],
    tags: ['art', 'artisanat', 'medina'],
  },
  {
    id: 'disc_art_broderie', section: 'art', title: 'La broderie et le costume', subtitle: 'Habits de fête', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🧵', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Les costumes de mariage (fouta-blouza, keswa) sont rehaussés de broderies d'or et d'argent. Chaque région a ses motifs et ses parures, transmis lors des grandes célébrations familiales." },
    ],
    relatedWordIds: ['w_famille_3ors', 'w_plage_fouta'],
    tags: ['art', 'costume', 'mariage'],
  },
  {
    id: 'disc_art_cinema', section: 'art', title: 'Le cinéma tunisien', subtitle: 'Des décors aux festivals', level: 'elementaire', estimatedMinutes: 3, coverEmoji: '🎬', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Le cinéma tunisien rayonne par ses auteurs et les Journées Cinématographiques de Carthage, l'un des plus anciens festivals d'Afrique. Les paysages du sud ont aussi servi de décor à de grandes productions internationales." },
    ],
    tags: ['art', 'cinema', 'festivals'],
  },
  {
    id: 'disc_art_mosaique', section: 'art', title: 'Les mosaïques du Bardo', subtitle: 'Trésor de l\'antiquité', level: 'elementaire', estimatedMinutes: 4, coverEmoji: '🖼️', universe: 'salutations',
    blocks: [
      { type: 'paragraphe', text: "Le musée du Bardo, à Tunis, abrite l'une des plus riches collections de mosaïques romaines au monde. Scènes mythologiques et de vie quotidienne y sont conservées avec une finesse remarquable." },
    ],
    tags: ['art', 'antiquite', 'musee'],
  },
  {
    id: 'disc_art_henne', section: 'art', title: 'Le henné', subtitle: 'Motifs des grandes occasions', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🤲', universe: 'famille',
    blocks: [
      { type: 'paragraphe', text: "Le henné orne mains et pieds lors des mariages et des fêtes. La « nuit du henné » est une étape clé des noces tunisiennes, mêlant motifs, chants et bénédictions." },
    ],
    relatedWordIds: ['w_famille_3ors'],
    tags: ['art', 'rituels', 'mariage'],
  },
  {
    id: 'disc_art_verre_parfum', section: 'art', title: 'Parfums et eaux florales', subtitle: 'Fleur d\'oranger et géranium', level: 'debutant', estimatedMinutes: 3, coverEmoji: '🌸', universe: 'maison',
    blocks: [
      { type: 'paragraphe', text: "La distillation des fleurs (oranger, rose, géranium) produit des eaux florales utilisées en cuisine et en parfumerie. Nabeul est réputée pour sa fleur d'oranger, symbole du printemps tunisien." },
    ],
    tags: ['art', 'artisanat', 'parfums'],
  },
] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const discoverContentsById: Readonly<Record<string, DiscoverContent>> =
  Object.fromEntries(discoverContents.map((d) => [d.id, d]));

/** Retourne une fiche par son ID */
export function getDiscoverContentById(
  id: string
): DiscoverContent | undefined {
  return discoverContentsById[id];
}

/** Retourne toutes les fiches d'une section (culture, histoire, régions…) */
export function getDiscoverBySection(
  section: DiscoverSection
): DiscoverContent[] {
  return discoverContents.filter((d) => d.section === section);
}
