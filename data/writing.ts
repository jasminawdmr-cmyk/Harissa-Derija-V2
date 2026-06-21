/**
 * /data/writing.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Base du mini-parcours d'ÉCRITURE TUNISIENNE sur les 3 systèmes :
 *   1. latin (translittération)  2. arabizi (chiffres + lettres)  3. arabe
 *
 * L'Arabizi est une composante FORTE de Harissa (cf. TUNISIAN_WRITING_SYSTEM.md).
 *
 * ⚠️  CONTENANT VIDE — aucun contenu n'est créé ici. Lettres, sons, exemples et
 *     graphies arabes à fournir et valider séparément (locuteur natif).
 *
 * Cible à terme : ~20 micro-leçons d'écriture.
 *
 * Convention d'ID : "write_<systeme>_<slug>"  (ex : "write_arabizi_3")
 *
 * Priorisation des chiffres Arabizi (cf. V1_BALANCED_CONTENT_PLAN §4.2) :
 *   PRIORITAIRES : 3=ع · 7=ح · 9=ق · kh=خ
 *   SECONDAIRES  : 5=خ(variante) · gh/8=غ · 2=ء · 6=ط
 *   → marquer isPriority en conséquence sur chaque WritingGlyph.
 *
 * Passerelles : renseigner `bridges` (latin → arabizi → arabe) pour relier les
 * trois systèmes, idéalement vers un mot existant (wordId).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { WritingLesson, WritingSystem } from '../types';

// ─── Données ──────────────────────────────────────────────────────────────────

export const writingLessons: Readonly<WritingLesson[]> = [
  // ── VAGUE 1 — UNIVERS « AU CAFÉ » (3 exercices d'écriture) · universe: 'cafe' ──
  {
    id: 'wr_cafe_01',
    system: 'arabizi',
    title: 'La lettre ق (9) — au café',
    objective: 'Reconnaître et écrire le son « 9 » (ق) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 1,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'q', arabizi: '9', arabic: 'ق', soundDescription: 'Son « q » prononcé au fond de la gorge, noté 9 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_9ahwa', 'w_cafe_9a3da'] },
    ],
    bridges: [
      { latin: 'qahwa', arabizi: '9ahwa', arabic: 'قهوة', wordId: 'w_9ahwa', french: 'café' },
      { latin: 'qa3da', arabizi: '9a3da', arabic: 'قعدة', wordId: 'w_cafe_9a3da', french: 'moment passé assis' },
    ],
  },
  {
    id: 'wr_cafe_02',
    system: 'arabizi',
    title: 'La lettre ح (7) — au café',
    objective: 'Reconnaître et écrire le son « 7 » (ح) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 2,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'h', arabizi: '7', arabic: 'ح', soundDescription: 'Son « h » fortement soufflé (pharyngal), noté 7 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_cafe_7alib', 'w_cafe_7seb'] },
    ],
    bridges: [
      { latin: 'halib', arabizi: '7alib', arabic: 'حليب', wordId: 'w_cafe_7alib', french: 'lait' },
      { latin: 'hsab', arabizi: 'el 7seb', arabic: 'الحساب', wordId: 'w_cafe_7seb', french: "l'addition" },
    ],
  },
  {
    id: 'wr_cafe_03',
    system: 'arabizi',
    title: 'La lettre ع (3) — au café',
    objective: 'Reconnaître et écrire le son « 3 » (ع) à partir du vocabulaire du café.',
    level: 'debutant',
    estimatedMinutes: 4,
    order: 3,
    universe: 'cafe',
    tags: ['cafe', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: '3', arabizi: '3', arabic: 'ع', soundDescription: 'Son « ع » guttural propre à l\'arabe, noté 3 en arabizi.', difficulty: 4, isPriority: true, exampleWordIds: ['w_cafe_3asir', 'w_cafe_na3na3'] },
    ],
    bridges: [
      { latin: 'asir', arabizi: '3asir', arabic: 'عصير', wordId: 'w_cafe_3asir', french: 'jus' },
      { latin: 'na3na3', arabizi: 'na3na3', arabic: 'نعناع', wordId: 'w_cafe_na3na3', french: 'menthe' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « SALUTATIONS » (3 exercices) · universe: 'salutations' ───
  {
    id: 'wr_salut_01', system: 'arabizi', title: 'La lettre ش (ch) — salutations',
    objective: 'Reconnaître et écrire le son « ch » (ش) avec les formules de politesse.',
    level: 'debutant', estimatedMinutes: 4, order: 4, universe: 'salutations', tags: ['salutations', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'ch', arabizi: 'ch', arabic: 'ش', soundDescription: 'Son « ch » comme dans « chat », noté ch en arabizi.', difficulty: 1, isPriority: true, exampleWordIds: ['w_salut_chokran', 'w_salut_chna7welek'] },
    ],
    bridges: [
      { latin: 'chokran', arabizi: 'chokran', arabic: 'شكرا', wordId: 'w_salut_chokran', french: 'merci' },
      { latin: 'chnowa', arabizi: 'chnowa', arabic: 'شنوة', french: 'quoi' },
    ],
  },
  {
    id: 'wr_salut_02', system: 'arabizi', title: 'La lettre خ (kh) — salutations',
    objective: 'Reconnaître et écrire le son « kh » (خ) dans les salutations.',
    level: 'debutant', estimatedMinutes: 4, order: 5, universe: 'salutations', tags: ['salutations', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'kh', arabizi: 'kh', arabic: 'خ', soundDescription: 'Son « kh » raclé (comme la jota espagnole), noté kh en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_salut_msa_lkhir'] },
    ],
    bridges: [
      { latin: 'khir', arabizi: 'khir', arabic: 'خير', wordId: 'w_salut_msa_lkhir', french: 'le bien / bon' },
      { latin: 'akhbar', arabizi: 'akhbar', arabic: 'أخبار', french: 'nouvelles' },
    ],
  },
  {
    id: 'wr_salut_03', system: 'arabizi', title: 'Écrire son prénom : le possessif -i',
    objective: 'Écrire « esmi » (mon nom) et « esmek » (ton nom) avec le suffixe possessif.',
    level: 'debutant', estimatedMinutes: 4, order: 6, universe: 'salutations', tags: ['salutations', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'i', arabizi: 'i', arabic: 'ي', soundDescription: 'La voyelle « i » (ي) sert de suffixe possessif « mon ».', difficulty: 1, isPriority: false, exampleWordIds: ['w_salut_chokran'] },
    ],
    bridges: [
      { latin: 'esmi', arabizi: 'esmi', arabic: 'اسمي', french: 'mon nom' },
      { latin: 'esmek', arabizi: 'esmek', arabic: 'اسمك', french: 'ton nom' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « AU MARCHÉ » (3 exercices) · universe: 'marche' ──────────
  {
    id: 'wr_marche_01', system: 'arabizi', title: 'La lettre غ (gh) — au marché',
    objective: 'Reconnaître et écrire le son « gh » (غ) avec le vocabulaire du marché.',
    level: 'debutant', estimatedMinutes: 4, order: 7, universe: 'marche', tags: ['marche', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'gh', arabizi: 'gh', arabic: 'غ', soundDescription: 'Son « gh » proche du « r » grasseyé français, noté gh en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_marche_ghali', 'w_ghella'] },
    ],
    bridges: [
      { latin: 'ghali', arabizi: 'ghali', arabic: 'غالي', wordId: 'w_marche_ghali', french: 'cher' },
      { latin: 'ghella', arabizi: 'ghella', arabic: 'غلة', wordId: 'w_ghella', french: 'fruits' },
    ],
  },
  {
    id: 'wr_marche_02', system: 'arabizi', title: 'La lettre ج (j) — au marché',
    objective: 'Reconnaître et écrire le son « j » (ج) avec le vocabulaire du marché.',
    level: 'debutant', estimatedMinutes: 4, order: 8, universe: 'marche', tags: ['marche', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'j', arabizi: 'j', arabic: 'ج', soundDescription: 'Son « j » comme dans « jour », noté j en arabizi.', difficulty: 1, isPriority: true, exampleWordIds: ['w_marche_jben', 'w_djej'] },
    ],
    bridges: [
      { latin: 'jben', arabizi: 'jben', arabic: 'جبن', wordId: 'w_marche_jben', french: 'fromage' },
      { latin: 'djej', arabizi: 'djej', arabic: 'دجاج', wordId: 'w_djej', french: 'poulet' },
    ],
  },
  {
    id: 'wr_marche_03', system: 'arabizi', title: 'Écrire les quantités au marché',
    objective: 'Écrire les quantités courantes : kilo, nos kilo, gram.',
    level: 'debutant', estimatedMinutes: 4, order: 9, universe: 'marche', tags: ['marche', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'k', arabizi: 'k', arabic: 'ك', soundDescription: 'La lettre « k » (ك), comme dans « kilo ».', difficulty: 1, isPriority: false, exampleWordIds: ['w_kilo'] },
    ],
    bridges: [
      { latin: 'kilo', arabizi: 'kilo', arabic: 'كيلو', wordId: 'w_kilo', french: 'kilo' },
      { latin: 'nos kilo', arabizi: 'nos kilo', arabic: 'نص كيلو', wordId: 'w_marche_nos_kilo', french: 'demi-kilo' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « MAISON » (3 exercices) · universe: 'maison' ─────────────
  {
    id: 'wr_maison_01', system: 'arabizi', title: 'La lettre ط (t emphatique) — maison',
    objective: 'Reconnaître le « t » emphatique (ط) avec le vocabulaire de la maison.',
    level: 'debutant', estimatedMinutes: 4, order: 10, universe: 'maison', tags: ['maison', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 't', arabizi: 't', arabic: 'ط', soundDescription: 'Le « t » emphatique (ط), plus appuyé que le t normal.', difficulty: 2, isPriority: false, exampleWordIds: ['w_maison_tba9'] },
    ],
    bridges: [
      { latin: 'tba9', arabizi: 'tba9', arabic: 'طبق', wordId: 'w_maison_tba9', french: 'assiette' },
      { latin: 'tawla', arabizi: 'tawla', arabic: 'طاولة', wordId: 'w_tawla', french: 'table' },
    ],
  },
  {
    id: 'wr_maison_02', system: 'arabizi', title: 'La lettre ح (7) — maison',
    objective: 'Reconnaître le son « 7 » (ح) avec le vocabulaire de la maison.',
    level: 'debutant', estimatedMinutes: 4, order: 11, universe: 'maison', tags: ['maison', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'h', arabizi: '7', arabic: 'ح', soundDescription: 'Son « 7 » pharyngal soufflé (ح), noté 7 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_maison_7it'] },
    ],
    bridges: [
      { latin: 'hit', arabizi: '7it', arabic: 'حيط', wordId: 'w_maison_7it', french: 'mur' },
      { latin: 'hammem', arabizi: '7ammem', arabic: 'حمّام', wordId: 'w_7ammem', french: 'salle de bain' },
    ],
  },
  {
    id: 'wr_maison_03', system: 'arabizi', title: 'Écrire les objets de la maison',
    objective: 'Écrire des objets courants : mefte7, srir, tba9.',
    level: 'debutant', estimatedMinutes: 4, order: 12, universe: 'maison', tags: ['maison', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 's', arabizi: 's', arabic: 'س', soundDescription: 'La lettre « s » (س), comme dans « srir » (lit).', difficulty: 1, isPriority: false, exampleWordIds: ['w_maison_srir'] },
    ],
    bridges: [
      { latin: 'srir', arabizi: 'srir', arabic: 'سرير', wordId: 'w_maison_srir', french: 'lit' },
      { latin: 'mefteh', arabizi: 'mefte7', arabic: 'مفتاح', wordId: 'w_maison_mefte7', french: 'clé' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « FAMILLE » (3 exercices) · universe: 'famille' ───────────
  {
    id: 'wr_famille_01', system: 'arabizi', title: 'La lettre ج (j) — famille',
    objective: 'Reconnaître le son « j » (ج) avec le vocabulaire de la famille.',
    level: 'debutant', estimatedMinutes: 4, order: 13, universe: 'famille', tags: ['famille', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'j', arabizi: 'j', arabic: 'ج', soundDescription: 'Son « j » comme dans « jour », noté j en arabizi.', difficulty: 1, isPriority: false, exampleWordIds: ['w_famille_jadd', 'w_famille_jar'] },
    ],
    bridges: [
      { latin: 'jadd', arabizi: 'jadd', arabic: 'جد', wordId: 'w_famille_jadd', french: 'grand-père' },
      { latin: 'jar', arabizi: 'jar', arabic: 'جار', wordId: 'w_famille_jar', french: 'voisin' },
    ],
  },
  {
    id: 'wr_famille_02', system: 'arabizi', title: 'La lettre ع (3) — famille',
    objective: 'Reconnaître le son « 3 » (ع) avec le vocabulaire de la famille.',
    level: 'debutant', estimatedMinutes: 4, order: 14, universe: 'famille', tags: ['famille', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: '3', arabizi: '3', arabic: 'ع', soundDescription: 'Son « ع » guttural, noté 3 en arabizi.', difficulty: 4, isPriority: true, exampleWordIds: ['w_3ayla', 'w_famille_3ors'] },
    ],
    bridges: [
      { latin: '3ayla', arabizi: '3ayla', arabic: 'عايلة', wordId: 'w_3ayla', french: 'famille' },
      { latin: '3ors', arabizi: '3ors', arabic: 'عرس', wordId: 'w_famille_3ors', french: 'mariage' },
    ],
  },
  {
    id: 'wr_famille_03', system: 'arabizi', title: 'Écrire les membres de la famille',
    objective: 'Écrire les noms des proches : baba, mama, okht.',
    level: 'debutant', estimatedMinutes: 4, order: 15, universe: 'famille', tags: ['famille', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'b', arabizi: 'b', arabic: 'ب', soundDescription: 'La lettre « b » (ب), comme dans « baba » (papa).', difficulty: 1, isPriority: false, exampleWordIds: ['w_famille_baba'] },
    ],
    bridges: [
      { latin: 'baba', arabizi: 'baba', arabic: 'بابا', wordId: 'w_famille_baba', french: 'papa' },
      { latin: 'mama', arabizi: 'mama', arabic: 'ماما', wordId: 'w_famille_mama', french: 'maman' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « EN LOUAGE » (3 exercices) · universe: 'louage' ──────────
  {
    id: 'wr_louage_01', system: 'arabizi', title: 'La lettre ق (9) — en louage',
    objective: 'Reconnaître le son « 9 » (ق) avec le vocabulaire du louage.',
    level: 'debutant', estimatedMinutes: 4, order: 16, universe: 'louage', tags: ['louage', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'q', arabizi: '9', arabic: 'ق', soundDescription: 'Son « q » du fond de la gorge (ق), noté 9 en arabizi.', difficulty: 3, isPriority: true, exampleWordIds: ['w_louage_9rib'] },
    ],
    bridges: [
      { latin: 'qrib', arabizi: '9rib', arabic: 'قريب', wordId: 'w_louage_9rib', french: 'proche' },
      { latin: 'waqfa', arabizi: 'wa9fa', arabic: 'وقفة', wordId: 'w_louage_wa9fa', french: 'arrêt' },
    ],
  },
  {
    id: 'wr_louage_02', system: 'arabizi', title: 'Les directions en arabizi',
    objective: 'Écrire les directions : tool, ysar, ymin.',
    level: 'debutant', estimatedMinutes: 4, order: 17, universe: 'louage', tags: ['louage', 'ecriture', 'arabizi', 'direction'],
    glyphs: [
      { latin: 'y', arabizi: 'y', arabic: 'ي', soundDescription: 'La lettre « y » (ي), comme dans « ymin » (droite).', difficulty: 1, isPriority: false, exampleWordIds: ['w_louage_ymin'] },
    ],
    bridges: [
      { latin: 'ymin', arabizi: 'ymin', arabic: 'يمين', wordId: 'w_louage_ymin', french: 'droite' },
      { latin: 'ysar', arabizi: 'ysar', arabic: 'يسار', wordId: 'w_louage_ysar', french: 'gauche' },
    ],
  },
  {
    id: 'wr_louage_03', system: 'arabizi', title: 'La lettre س (s) — en louage',
    objective: 'Reconnaître le son « s » (س) avec le vocabulaire du louage.',
    level: 'debutant', estimatedMinutes: 4, order: 18, universe: 'louage', tags: ['louage', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 's', arabizi: 's', arabic: 'س', soundDescription: 'La lettre « s » (س), comme dans « sewa9 » (chauffeur).', difficulty: 1, isPriority: false, exampleWordIds: ['w_louage_sewa9'] },
    ],
    bridges: [
      { latin: 'sewaq', arabizi: 'sewa9', arabic: 'سواق', wordId: 'w_louage_sewa9', french: 'chauffeur' },
      { latin: 'safar', arabizi: 'nsefer', arabic: 'نسافر', wordId: 'w_louage_b3id', french: 'voyager / loin' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « À LA PLAGE » (3 exercices) · universe: 'plage' ──────────
  {
    id: 'wr_plage_01', system: 'arabizi', title: 'Le ch (ش) — sons de la plage',
    objective: 'Reconnaître le son « ch » (ش) avec le vocabulaire de la plage.',
    level: 'debutant', estimatedMinutes: 4, order: 19, universe: 'plage', tags: ['plage', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'ch', arabizi: 'ch', arabic: 'ش', soundDescription: 'Le son « ch » (ش), comme dans « chams » (soleil) ou « chamsiya » (parasol).', difficulty: 2, isPriority: true, exampleWordIds: ['w_plage_chams', 'w_plage_chamsiya'] },
    ],
    bridges: [
      { latin: 'chams', arabizi: 'chams', arabic: 'شمس', wordId: 'w_plage_chams', french: 'soleil' },
      { latin: 'chamsiya', arabizi: 'chamsiya', arabic: 'شمسية', wordId: 'w_plage_chamsiya', french: 'parasol' },
      { latin: 'chatt', arabizi: 'chatt', arabic: 'شط', wordId: 'w_plage_chatt', french: 'rivage' },
    ],
  },
  {
    id: 'wr_plage_02', system: 'arabizi', title: 'Le 7 (ح) — à la plage',
    objective: 'Reconnaître le son guttural « 7 » (ح) dans le vocabulaire de la plage.',
    level: 'debutant', estimatedMinutes: 4, order: 20, universe: 'plage', tags: ['plage', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: '7', arabizi: '7', arabic: 'ح', soundDescription: 'Le son « 7 » (ح), guttural, comme dans « 7arr » (chaleur) ou « sba7a » (natation).', difficulty: 3, isPriority: true, exampleWordIds: ['w_plage_7arr', 'w_plage_sba7a'] },
    ],
    bridges: [
      { latin: '7arr', arabizi: '7arr', arabic: 'حر', wordId: 'w_plage_7arr', french: 'chaleur' },
      { latin: 'sba7a', arabizi: 'sba7a', arabic: 'سباحة', wordId: 'w_plage_sba7a', french: 'natation' },
    ],
  },
  {
    id: 'wr_plage_03', system: 'arabizi', title: 'Écrire la mer et l\'été',
    objective: 'Écrire les mots essentiels de l\'été : rmel, mouja, sif.',
    level: 'debutant', estimatedMinutes: 4, order: 21, universe: 'plage', tags: ['plage', 'ecriture', 'arabizi', 'nature'],
    glyphs: [
      { latin: 'r', arabizi: 'r', arabic: 'ر', soundDescription: 'La lettre « r » (ر), roulée légèrement, comme dans « rmel » (sable).', difficulty: 1, isPriority: false, exampleWordIds: ['w_plage_rmel'] },
    ],
    bridges: [
      { latin: 'rmel', arabizi: 'rmel', arabic: 'رمل', wordId: 'w_plage_rmel', french: 'sable' },
      { latin: 'mouja', arabizi: 'mouja', arabic: 'موجة', wordId: 'w_plage_mouja', french: 'vague' },
      { latin: 'sif', arabizi: 'sif', arabic: 'صيف', wordId: 'w_plage_sif', french: 'été' },
    ],
  },

  // ── VAGUE 2 — UNIVERS « À L'HÔTEL » (3 exercices) · universe: 'hotel' ───────────
  {
    id: 'wr_hotel_01', system: 'arabizi', title: 'Le gh (غ) — à l\'hôtel',
    objective: 'Reconnaître le son « gh » (غ) dans le vocabulaire de l\'hôtel.',
    level: 'debutant', estimatedMinutes: 4, order: 22, universe: 'hotel', tags: ['hotel', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'gh', arabizi: 'gh', arabic: 'غ', soundDescription: 'Le son « gh » (غ), comme dans « ghorfa » (chambre). Proche du « r » parisien.', difficulty: 3, isPriority: true, exampleWordIds: ['w_hotel_ghorfa'] },
    ],
    bridges: [
      { latin: 'ghorfa', arabizi: 'ghorfa', arabic: 'غرفة', wordId: 'w_hotel_ghorfa', french: 'chambre' },
      { latin: 'ghali', arabizi: 'ghali', arabic: 'غالي', wordId: 'w_hotel_ghali', french: 'cher' },
    ],
  },
  {
    id: 'wr_hotel_02', system: 'arabizi', title: 'Le f (ف) — à l\'hôtel',
    objective: 'Reconnaître la lettre « f » (ف) dans le vocabulaire de l\'hôtel.',
    level: 'debutant', estimatedMinutes: 4, order: 23, universe: 'hotel', tags: ['hotel', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'f', arabizi: 'f', arabic: 'ف', soundDescription: 'La lettre « f » (ف), comme dans « fondok » (hôtel) ou « mefta7 » (clé).', difficulty: 1, isPriority: false, exampleWordIds: ['w_hotel_fondok', 'w_hotel_mefta7'] },
    ],
    bridges: [
      { latin: 'fondok', arabizi: 'fondok', arabic: 'فندق', wordId: 'w_hotel_fondok', french: 'hôtel' },
      { latin: 'mefta7', arabizi: 'mefta7', arabic: 'مفتاح', wordId: 'w_hotel_mefta7', french: 'clé' },
      { latin: 'ftour', arabizi: 'ftour', arabic: 'فطور', wordId: 'w_cafe_ftour', french: 'petit déjeuner' },
    ],
  },
  {
    id: 'wr_hotel_03', system: 'arabizi', title: 'Écrire les mots de l\'hôtel',
    objective: 'Écrire les mots clés de l\'hôtel : 7isab, tabiq, khidma.',
    level: 'debutant', estimatedMinutes: 4, order: 24, universe: 'hotel', tags: ['hotel', 'ecriture', 'arabizi'],
    glyphs: [
      { latin: 'kh', arabizi: 'kh', arabic: 'خ', soundDescription: 'Le son « kh » (خ), guttural, comme dans « khidma » (service) ou « mefta7 » (clé).', difficulty: 3, isPriority: true, exampleWordIds: ['w_hotel_khidma'] },
    ],
    bridges: [
      { latin: 'khidma', arabizi: 'khidma', arabic: 'خدمة', wordId: 'w_hotel_khidma', french: 'service' },
      { latin: 'tabiq', arabizi: 'tabiq', arabic: 'طابق', wordId: 'w_hotel_tabiq', french: 'étage' },
      { latin: '7isab', arabizi: '7isab', arabic: 'حساب', wordId: 'w_hotel_7isab', french: 'addition / compte' },
    ],
  },
] as const;

// ─── Accès ────────────────────────────────────────────────────────────────────

export const writingLessonsById: Readonly<Record<string, WritingLesson>> =
  Object.fromEntries(writingLessons.map((w) => [w.id, w]));

/** Retourne une leçon d'écriture par son ID */
export function getWritingLessonById(id: string): WritingLesson | undefined {
  return writingLessonsById[id];
}

/** Retourne les leçons d'un système d'écriture (latin / arabizi / arabe) */
export function getWritingLessonsBySystem(
  system: WritingSystem
): WritingLesson[] {
  return writingLessons
    .filter((w) => w.system === system)
    .sort((a, b) => a.order - b.order);
}
