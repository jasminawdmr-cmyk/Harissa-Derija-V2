import { Colors, SemanticColors } from './Colors';
import {
  GrammarColors,
  GenderColors,
  PersonColors,
  TenseColors,
  CategoryColors,
  MasteryColors,
} from './Colors';
import { FontFamilies, FontSizes, FontWeights, LineHeights, LetterSpacings, TextStyles } from './Typography';

/**
 * Thème unifié — source de vérité unique pour le design system.
 * Import ce fichier dans les composants plutôt que Colors ou Typography séparément.
 */

// Espacement — échelle de 4px
export const Spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const;

// Rayons de bordure
export const Radii = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  '2xl': 32,
  full: 9999,
} as const;

// Ombres (iOS shadow + Android elevation)
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: Colors.neutral[700],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: Colors.neutral[700],
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.neutral[700],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 8,
  },
  accent: {
    shadowColor: Colors.terracotta[400],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;

// Dimensions de mise en page
export const Layout = {
  // Largeur max du contenu sur tablette/web
  maxContentWidth: 480,
  // Padding horizontal standard des écrans
  screenPaddingHorizontal: Spacing[5],
  // Padding vertical standard des écrans
  screenPaddingTop: Spacing[4],
  // Hauteur de la tab bar (approximative)
  tabBarHeight: 80,
  // Hauteur d'une carte standard
  cardMinHeight: 80,
  // Hauteur des boutons
  buttonHeight: 52,
  buttonHeightSmall: 40,
  // Taille des icônes
  iconSm: 16,
  iconMd: 20,
  iconLg: 24,
  iconXl: 32,
} as const;

// Durées d'animation
export const Durations = {
  fast: 150,
  normal: 250,
  slow: 400,
  verySlow: 600,
} as const;

// Export du thème complet
export const Theme = {
  colors: SemanticColors,
  rawColors: Colors,
  fonts: FontFamilies,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  lineHeights: LineHeights,
  letterSpacings: LetterSpacings,
  textStyles: TextStyles,
  spacing: Spacing,
  radii: Radii,
  shadows: Shadows,
  layout: Layout,
  durations: Durations,
  // Charte visuelle universelle
  grammar: GrammarColors,
  gender: GenderColors,
  person: PersonColors,
  tense: TenseColors,
  category: CategoryColors,
  mastery: MasteryColors,
} as const;

export type Theme = typeof Theme;

// Export individuel pour imports ciblés
export { Colors, SemanticColors } from './Colors';

// Charte visuelle universelle — tokens sémantiques réutilisables
export {
  GrammarColors,
  GenderColors,
  PersonColors,
  TenseColors,
  CategoryColors,
  MasteryColors,
  getMasteryToken,
  getPersonToken,
} from './Colors';
export type { VisualToken } from './Colors';

export {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings,
  TextStyles,
} from './Typography';
