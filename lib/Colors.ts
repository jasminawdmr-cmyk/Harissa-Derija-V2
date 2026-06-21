/**
 * Palette de couleurs Blablalouni V3.
 * Inspirée de la Tunisie : crème des médinas, orange brûlé des épices,
 * olive des oliveraies, safran des marchés, bleu de Sidi Bou Saïd.
 */

export const Colors = {
  // Fonds chauds — crème tunisienne
  sand: {
    50: '#FDFAF4',
    100: '#F9F3E3',
    200: '#F7F1E6',   // Fond principal — crème chaud
    300: '#EDE0C4',
    400: '#D6C89A',
    500: '#D6A658',   // Jaune safran
  },

  // Orange brûlé / rouge brique — accent principal
  terracotta: {
    50: '#FAEEE9',
    100: '#F2D0C4',
    200: '#E8A888',
    300: '#D97A5A',
    400: '#C76543',   // Orange brûlé — accent principal
    500: '#A04030',
    600: '#8B1E1E',   // Rouge brique — accent fort
  },

  // Olive — accent nature
  olive: {
    50: '#EDF2EA',
    100: '#D5E2CE',
    200: '#B0C6A4',
    300: '#8AAA78',
    400: '#607A53',   // Vert olive principal
    500: '#475C3D',
    600: '#32432B',
  },

  // Crème clair — fonds secondaires
  ivory: {
    50: '#FDFCF8',
    100: '#F7F1E6',
    200: '#EDE0C4',
    300: '#DDD5BF',
    400: '#C8BDA0',
  },

  // Bleu Sidi Bou Saïd
  azure: {
    100: '#D0E2EF',
    200: '#A0C4DF',
    300: '#5F9AC4',
    400: '#1F5F8B',   // Bleu Sidi Bou Saïd — accent froid
    500: '#164872',
  },

  // Neutres — du crème au brun noir
  neutral: {
    0: '#FFFFFF',
    50: '#FDFAF4',
    100: '#F0EBE0',
    200: '#DDD5C0',
    300: '#B8AC98',
    400: '#8C8070',
    500: '#5E5248',
    600: '#3D342A',
    700: '#1F1712',   // Brun noir principal
    900: '#0A0806',
  },

  // États fonctionnels
  success: '#607A53',
  warning: '#D6A658',
  error: '#8B1E1E',
  info: '#1F5F8B',

  // Transparences
  overlay: 'rgba(31, 23, 18, 0.45)',
  overlayLight: 'rgba(247, 241, 230, 0.90)',
} as const;

// Alias sémantiques pour l'UI
export const SemanticColors = {
  // Fonds
  backgroundPrimary: '#F7F1E6',
  backgroundSecondary: '#F9F3E3',
  backgroundCard: '#FDFCF8',
  backgroundAccent: '#C76543',

  // Textes
  textPrimary: '#1F1712',
  textSecondary: '#5E5248',
  textMuted: '#8C8070',
  textOnAccent: '#FDFCF8',
  textOnDark: '#F7F1E6',

  // Bordures
  borderLight: '#EDE0C4',
  borderMedium: '#DDD5C0',

  // Interactif
  primary: '#C76543',     // orange brûlé
  primaryHover: '#A04030',
  secondary: '#607A53',   // olive
  accent: '#1F5F8B',      // bleu Sidi Bou Saïd

  // Navigation
  tabActive: '#C76543',
  tabInactive: '#8C8070',
  tabBackground: '#FDFCF8',

  // Progression / gamification
  progressFill: '#607A53',
  progressTrack: '#EDE0C4',
  streak: '#D6A658',      // safran
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
  prefix:    { main: '#2F6FB0', soft: '#DCEAF7', label: 'Préfixe',   icon: '◀' },
  root:      { main: '#4E8C3A', soft: '#DEEFD3', label: 'Radical',   icon: '●' },
  suffix:    { main: '#7E4FB0', soft: '#E8DCF5', label: 'Suffixe',   icon: '▶' },
  conjugation:{ main: '#D6792A', soft: '#FAE6D2', label: 'Conjugaison', icon: '↻' },
  exception: { main: '#C8403F', soft: '#F7DAD9', label: 'Exception', icon: '⚠' },
  particle:  { main: '#8C857C', soft: '#E8E5E1', label: 'Particule', icon: '○' },
} as const satisfies Record<string, VisualToken>;

// ─── GENRE ─────────────────────────────────────────────────────────────────────
// Aligné sur le registre central : masculin/féminin réutilisent la couleur de la
// notion grammaticale homonyme (cf. data/grammarVisualLegend.ts + lib/colorRegistry.ts).
export const GenderColors = {
  masculine: { main: '#1F3A5F', soft: '#D2DCE6', label: 'Masculin',     icon: '♂' },
  feminine:  { main: '#C08497', soft: '#F1DEE4', label: 'Féminin',      icon: '♀' },
  neutral:   { main: '#8C8070', soft: '#F4F2EE', label: 'Neutre / mixte', icon: '◇' },
} as const satisfies Record<string, VisualToken>;

// ─── PERSONNES (pronoms) ───────────────────────────────────────────────────────
export const PersonColors = {
  '1s':  { main: '#607A53', soft: '#D5E2CE', label: 'Je',        icon: '🟢' },
  '2sm': { main: '#1F5F8B', soft: '#D0E2EF', label: 'Tu (m)',    icon: '🔵' },
  '2sf': { main: '#C76543', soft: '#FAEEE9', label: 'Tu (f)',    icon: '🌸' },
  '3sm': { main: '#164872', soft: '#C5D8E8', label: 'Il',        icon: '🔷' },
  '3sf': { main: '#7E4FB0', soft: '#E8DCF5', label: 'Elle',      icon: '🟣' },
  '1p':  { main: '#D6A658', soft: '#F5EAC9', label: 'Nous',      icon: '🟡' },
  '2p':  { main: '#C76543', soft: '#FAEEE9', label: 'Vous',      icon: '🟠' },
  '3p':  { main: '#3D342A', soft: '#E0D8CC', label: 'Ils/Elles', icon: '🟤' },
} as const satisfies Record<string, VisualToken>;

// ─── TEMPS ─────────────────────────────────────────────────────────────────────
// Aligné sur le registre central : présent/passé/futur réutilisent la couleur de
// la notion grammaticale homonyme (cf. data/grammarVisualLegend.ts + colorRegistry.ts).
export const TenseColors = {
  present: { main: '#6B7A3A', soft: '#E5E9D1', label: 'Présent', icon: '⏺' },
  passe:   { main: '#6E1A2E', soft: '#F0D9DE', label: 'Passé',   icon: '⏪' },
  futur:   { main: '#E6B422', soft: '#FBEFC9', label: 'Futur',   icon: '⏩' },
  imperatif:{ main: '#C76543', soft: '#FAEEE9', label: 'Impératif', icon: '❗' },
} as const satisfies Record<string, VisualToken>;

// ─── CATÉGORIES de vocabulaire ─────────────────────────────────────────────────
export const CategoryColors = {
  famille:       { main: '#3D342A', soft: '#E0D8CC', label: 'Famille',        icon: '👨‍👩‍👧' },
  maison:        { main: '#607A53', soft: '#D5E2CE', label: 'Maison',         icon: '🏠' },
  verbes:        { main: '#C76543', soft: '#FAEEE9', label: 'Verbes',         icon: '🗣️' },
  emotions:      { main: '#8B1E1E', soft: '#F2D0C4', label: 'Émotions',       icon: '❤️' },
  deplacements:  { main: '#1F5F8B', soft: '#D0E2EF', label: 'Déplacements',   icon: '🚐' },
  grammaire:     { main: '#7E4FB0', soft: '#E8DCF5', label: 'Grammaire',      icon: '📜' },
  nourriture:    { main: '#D6A658', soft: '#F5EAC9', label: 'Nourriture',     icon: '🍽️' },
  temps:         { main: '#8C8070', soft: '#E8E5E1', label: 'Temps',          icon: '🕐' },
  sante:         { main: '#8B1E1E', soft: '#F2D0C4', label: 'Santé',          icon: '🩺' },
  travail:       { main: '#3D342A', soft: '#E0D8CC', label: 'Travail',        icon: '💼' },
  administration:{ main: '#A04030', soft: '#F2DCC4', label: 'Administration', icon: '🏛️' },
} as const satisfies Record<string, VisualToken>;

// ─── MAÎTRISE (niveau d'acquisition) ───────────────────────────────────────────
export const MasteryColors = {
  notAcquired: { main: '#8B1E1E', soft: '#F2D0C4', label: 'Non acquis',    icon: '🔴' },
  fragile:     { main: '#C76543', soft: '#FAEEE9', label: 'Fragile',       icon: '🟠' },
  progressing: { main: '#D6A658', soft: '#F5EAC9', label: 'En progression', icon: '🟡' },
  mastered:    { main: '#607A53', soft: '#D5E2CE', label: 'Maîtrisé',      icon: '🟢' },
  automated:   { main: '#D6A658', soft: '#F5EAC9', label: 'Automatisé',    icon: '⭐' },
} as const satisfies Record<string, VisualToken>;

// ─── Helpers de correspondance ─────────────────────────────────────────────────

/** Mappe un MasteryScore (0–5) vers le token de maîtrise correspondant */
export function getMasteryToken(score: number): VisualToken {
  if (score <= 0) return MasteryColors.notAcquired;
  if (score === 1) return MasteryColors.fragile;
  if (score === 2) return MasteryColors.progressing;
  if (score <= 4) return MasteryColors.mastered;
  return MasteryColors.automated;
}

/**
 * Mappe une clé Person vers un token.
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
