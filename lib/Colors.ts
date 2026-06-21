/**
 * Palette de couleurs inspirée de la Tunisie :
 * sable du désert, terracotta des médinas, olive des oliveraies,
 * ivoire des mosaïques, azur de la Méditerranée.
 */

export const Colors = {
  // Couleurs principales
  sand: {
    50: '#FDF8F0',
    100: '#F9EDD8',
    200: '#F5ECD7',   // Fond principal
    300: '#EDD9B5',
    400: '#E0C48A',
    500: '#C9A55A',
  },

  terracotta: {
    50: '#FDF0EC',
    100: '#F9D5C8',
    200: '#F0A882',
    300: '#E07850',
    400: '#C85A2E',   // Accent principal
    500: '#A0421E',
    600: '#7A2E10',
  },

  olive: {
    50: '#F2F4EE',
    100: '#DCE3D0',
    200: '#B8C9A0',
    300: '#8FA872',
    400: '#6B8C4A',   // Vert accent
    500: '#4E6B32',
    600: '#364A20',
  },

  ivory: {
    50: '#FDFCF8',
    100: '#F8F5EC',   // Fond secondaire
    200: '#EDE8D8',
    300: '#DDD5BF',
    400: '#C8BDA0',
  },

  // Bleu méditerranéen — utilisé avec parcimonie
  azure: {
    100: '#D4E8F2',
    200: '#A8D0E6',
    300: '#6AAED4',
    400: '#3B8EC0',
    500: '#1E6E9E',
  },

  // Neutres
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAF8',
    100: '#F0EDEA',
    200: '#DDD9D4',
    300: '#B8B2AA',
    400: '#8C857C',
    500: '#5E5650',
    600: '#3D3830',
    700: '#1E1A14',
    900: '#0A0806',
  },

  // États fonctionnels
  success: '#5A8A5E',
  warning: '#C8882E',
  error: '#C84040',
  info: '#3B8EC0',

  // Transparences fréquentes
  overlay: 'rgba(10, 8, 6, 0.4)',
  overlayLight: 'rgba(245, 236, 215, 0.85)',
} as const;

// Alias sémantiques pour l'UI
export const SemanticColors = {
  // Fonds
  backgroundPrimary: Colors.sand[200],
  backgroundSecondary: Colors.ivory[100],
  backgroundCard: Colors.ivory[50],
  backgroundAccent: Colors.terracotta[400],

  // Textes
  textPrimary: Colors.neutral[700],
  textSecondary: Colors.neutral[500],
  textMuted: Colors.neutral[400],
  textOnAccent: Colors.ivory[50],
  textOnDark: Colors.ivory[100],

  // Bordures
  borderLight: Colors.sand[300],
  borderMedium: Colors.neutral[200],

  // Interactif
  primary: Colors.terracotta[400],
  primaryHover: Colors.terracotta[500],
  secondary: Colors.olive[400],
  accent: Colors.azure[400],

  // Navigation
  tabActive: Colors.terracotta[400],
  tabInactive: Colors.neutral[400],
  tabBackground: Colors.ivory[50],

  // Progression / gamification
  progressFill: Colors.olive[400],
  progressTrack: Colors.sand[300],
  streak: Colors.terracotta[300],
} as const;

export type ColorKey = keyof typeof Colors;
export type SemanticColorKey = keyof typeof SemanticColors;

// ═══════════════════════════════════════════════════════════════════════════════
// CHARTE VISUELLE UNIVERSELLE
// ───────────────────────────────────────────────────────────────────────────────
// Code couleur OBLIGATOIRE, pensé pour un profil très visuel / TDAH.
// Chaque famille de sens a sa palette dédiée. Toujours référencer ces constantes
// plutôt que des couleurs codées en dur dans les composants.
//
// Chaque entrée fournit :
//   - main   : couleur de référence (texte, bordure forte, picto)
//   - soft   : fond clair pour cartes / tags (toujours lisible avec texte main)
//   - label  : libellé français court affiché dans les légendes
//   - icon   : pictogramme emoji associé
// ═══════════════════════════════════════════════════════════════════════════════

/** Forme standard d'une entrée de la charte visuelle */
export interface VisualToken {
  main: string;
  soft: string;
  label: string;
  icon: string;
}

// ─── GRAMMAIRE : rôle morphologique ───────────────────────────────────────────
export const GrammarColors = {
  prefix:    { main: '#2F6FB0', soft: '#DCEAF7', label: 'Préfixe',   icon: '◀' },  // bleu
  root:      { main: '#4E8C3A', soft: '#DEEFD3', label: 'Radical',   icon: '●' },  // vert
  suffix:    { main: '#7E4FB0', soft: '#E8DCF5', label: 'Suffixe',   icon: '▶' },  // violet
  conjugation:{ main: '#D6792A', soft: '#FAE6D2', label: 'Conjugaison', icon: '↻' }, // orange
  exception: { main: '#C8403F', soft: '#F7DAD9', label: 'Exception', icon: '⚠' },  // rouge
  particle:  { main: '#8C857C', soft: '#E8E5E1', label: 'Particule', icon: '○' },  // gris
} as const satisfies Record<string, VisualToken>;

// ─── GENRE ─────────────────────────────────────────────────────────────────────
export const GenderColors = {
  masculine: { main: '#3B8EC0', soft: '#D6EAF6', label: 'Masculin',     icon: '♂' }, // bleu clair
  feminine:  { main: '#D46A93', soft: '#F8DEE9', label: 'Féminin',      icon: '♀' }, // rose clair
  neutral:   { main: '#8C857C', soft: '#F4F2EE', label: 'Neutre / mixte', icon: '◇' }, // blanc/neutre
} as const satisfies Record<string, VisualToken>;

// ─── PERSONNES (pronoms) ───────────────────────────────────────────────────────
// Clés alignées sur le type Person : 1s, 2s(m/f), 3sm, 3sf, 1p, 2p, 3p.
export const PersonColors = {
  '1s':  { main: '#4E8C3A', soft: '#DEEFD3', label: 'Je',        icon: '🟢' }, // vert
  '2sm': { main: '#3B8EC0', soft: '#D6EAF6', label: 'Tu (m)',    icon: '🔵' }, // bleu clair
  '2sf': { main: '#D46A93', soft: '#F8DEE9', label: 'Tu (f)',    icon: '🌸' }, // rose clair
  '3sm': { main: '#1E5A8A', soft: '#CFE0EC', label: 'Il',        icon: '🔷' }, // bleu foncé
  '3sf': { main: '#7E4FB0', soft: '#E8DCF5', label: 'Elle',      icon: '🟣' }, // violet
  '1p':  { main: '#D8B22E', soft: '#F7EFC9', label: 'Nous',      icon: '🟡' }, // jaune
  '2p':  { main: '#D6792A', soft: '#FAE6D2', label: 'Vous',      icon: '🟠' }, // orange
  '3p':  { main: '#7A5230', soft: '#E8DBCC', label: 'Ils/Elles', icon: '🟤' }, // brun
} as const satisfies Record<string, VisualToken>;

// ─── TEMPS ─────────────────────────────────────────────────────────────────────
export const TenseColors = {
  present: { main: '#4E8C3A', soft: '#DEEFD3', label: 'Présent', icon: '⏺' }, // vert
  passe:   { main: '#D8B22E', soft: '#F7EFC9', label: 'Passé',   icon: '⏪' }, // jaune
  futur:   { main: '#7E4FB0', soft: '#E8DCF5', label: 'Futur',   icon: '⏩' }, // violet
  imperatif:{ main: '#D6792A', soft: '#FAE6D2', label: 'Impératif', icon: '❗' }, // orange (proche conjugaison)
} as const satisfies Record<string, VisualToken>;

// ─── CATÉGORIES de vocabulaire ─────────────────────────────────────────────────
export const CategoryColors = {
  famille:       { main: '#7A5230', soft: '#E8DBCC', label: 'Famille',        icon: '👨‍👩‍👧' }, // brun
  maison:        { main: '#6B7C3A', soft: '#E2E8CF', label: 'Maison',         icon: '🏠' }, // vert olive
  verbes:        { main: '#C85A2E', soft: '#FAE0D2', label: 'Verbes',         icon: '🗣️' }, // terracotta
  emotions:      { main: '#D46A93', soft: '#F8DEE9', label: 'Émotions',       icon: '❤️' }, // rose
  deplacements:  { main: '#2BA89E', soft: '#CDEEEA', label: 'Déplacements',   icon: '🚌' }, // turquoise
  grammaire:     { main: '#9B8AC4', soft: '#E7E1F2', label: 'Grammaire',      icon: '📜' }, // lavande
  nourriture:    { main: '#D8B22E', soft: '#F7EFC9', label: 'Nourriture',     icon: '🍽️' }, // jaune
  temps:         { main: '#8C857C', soft: '#E8E5E1', label: 'Temps',          icon: '🕐' }, // gris
  sante:         { main: '#C8403F', soft: '#F7DAD9', label: 'Santé',          icon: '🩺' }, // rouge
  travail:       { main: '#5A3A22', soft: '#DECEBF', label: 'Travail',        icon: '💼' }, // brun foncé
  administration:{ main: '#B5611E', soft: '#F2DCC4', label: 'Administration', icon: '🏛️' }, // orange foncé
} as const satisfies Record<string, VisualToken>;

// ─── MAÎTRISE (niveau d'acquisition) ───────────────────────────────────────────
// Aligné sur MasteryScore 0–5 via le helper getMasteryToken() ci-dessous.
export const MasteryColors = {
  notAcquired: { main: '#C8403F', soft: '#F7DAD9', label: 'Non acquis',    icon: '🔴' }, // rouge
  fragile:     { main: '#D6792A', soft: '#FAE6D2', label: 'Fragile',       icon: '🟠' }, // orange
  progressing: { main: '#D8B22E', soft: '#F7EFC9', label: 'En progression', icon: '🟡' }, // jaune
  mastered:    { main: '#4E8C3A', soft: '#DEEFD3', label: 'Maîtrisé',      icon: '🟢' }, // vert
  automated:   { main: '#C9A55A', soft: '#F5ECD7', label: 'Automatisé',    icon: '⭐' }, // étoile
} as const satisfies Record<string, VisualToken>;

// ─── Helpers de correspondance ─────────────────────────────────────────────────

/** Mappe un MasteryScore (0–5) vers le token de maîtrise correspondant */
export function getMasteryToken(score: number): VisualToken {
  if (score <= 0) return MasteryColors.notAcquired;
  if (score === 1) return MasteryColors.fragile;
  if (score === 2) return MasteryColors.progressing;
  if (score <= 4) return MasteryColors.mastered;
  return MasteryColors.automated; // 5 = automatisé
}

/**
 * Mappe une clé Person (du type domaine : 1s, 2s, 3sm…) vers un token.
 * Le type Person ne distingue pas 2sm/2sf ; on retombe sur 2sm par défaut
 * et l'appelant peut forcer le genre s'il le connaît.
 */
export function getPersonToken(
  person: string,
  feminineSecond = false
): VisualToken {
  if (person === '2s') {
    return feminineSecond ? PersonColors['2sf'] : PersonColors['2sm'];
  }
  return (PersonColors as Record<string, VisualToken>)[person] ?? PersonColors['1s'];
}
