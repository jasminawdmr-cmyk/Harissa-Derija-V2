import { Platform } from 'react-native';

/**
 * Système typographique pour Darija Tunisien.
 *
 * Corpo : Inter (clarté, lisibilité sur mobile)
 * Arabe / Darija translittéré : sera géré par une police système
 * Display : poids bold d'Inter pour les titres d'écran
 */

// Familles de polices
export const FontFamilies = {
  // Police principale — system font stack performant sur iOS/Android
  sans: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'System',
  }),
  // Police pour les chiffres et données
  mono: Platform.select({
    ios: 'Courier New',
    android: 'monospace',
    default: 'monospace',
  }),
} as const;

// Échelle de tailles (en px / dp)
export const FontSizes = {
  xs: 11,
  sm: 13,
  base: 15,
  md: 17,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 34,
  '4xl': 40,
} as const;

// Poids de police
export const FontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
} as const;

// Hauteurs de ligne (line-height)
export const LineHeights = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.65,
  loose: 1.8,
} as const;

// Espacement des lettres
export const LetterSpacings = {
  tighter: -0.5,
  tight: -0.2,
  normal: 0,
  wide: 0.3,
  wider: 0.6,
  widest: 1.2,
} as const;

// Styles de texte composites — à utiliser directement dans StyleSheet
export const TextStyles = {
  // Titres d'écran
  screenTitle: {
    fontSize: FontSizes['2xl'],
    fontWeight: FontWeights.bold,
    lineHeight: FontSizes['2xl'] * LineHeights.tight,
    letterSpacing: LetterSpacings.tight,
  },
  // Titre de section
  sectionTitle: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    lineHeight: FontSizes.xl * LineHeights.snug,
    letterSpacing: LetterSpacings.tight,
  },
  // Titre de carte
  cardTitle: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    lineHeight: FontSizes.md * LineHeights.snug,
    letterSpacing: LetterSpacings.normal,
  },
  // Corps de texte principal
  body: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.base * LineHeights.normal,
    letterSpacing: LetterSpacings.normal,
  },
  // Corps secondaire
  bodySmall: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.sm * LineHeights.relaxed,
    letterSpacing: LetterSpacings.normal,
  },
  // Labels / étiquettes
  label: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.semibold,
    lineHeight: FontSizes.xs * LineHeights.normal,
    letterSpacing: LetterSpacings.widest,
    textTransform: 'uppercase' as const,
  },
  // Mot en darija (taille plus grande, respirant)
  darijaWord: {
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    lineHeight: FontSizes['3xl'] * LineHeights.snug,
    letterSpacing: LetterSpacings.wide,
  },
  // Translittération phonétique
  phonetic: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.medium,
    lineHeight: FontSizes.lg * LineHeights.normal,
    letterSpacing: LetterSpacings.wide,
    fontStyle: 'italic' as const,
  },
  // Traduction française
  translation: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.md * LineHeights.normal,
    letterSpacing: LetterSpacings.normal,
  },
  // Boutons
  button: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semibold,
    lineHeight: FontSizes.base * LineHeights.tight,
    letterSpacing: LetterSpacings.wide,
  },
  buttonSmall: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
    lineHeight: FontSizes.sm * LineHeights.tight,
    letterSpacing: LetterSpacings.wide,
  },
  // Labels de navigation (tab bar)
  tabLabel: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.medium,
    lineHeight: FontSizes.xs * LineHeights.tight,
    letterSpacing: LetterSpacings.normal,
  },
  // Métadonnées, compteurs
  caption: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.regular,
    lineHeight: FontSizes.xs * LineHeights.relaxed,
    letterSpacing: LetterSpacings.normal,
  },
} as const;

export type TextStyleKey = keyof typeof TextStyles;
