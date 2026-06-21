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
