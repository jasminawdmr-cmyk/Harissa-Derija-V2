import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * Anneau de progression circulaire dessiné sans dépendance SVG externe.
 * Utilise une astuce de deux demi-cercles pivotés pour rester 100% RN core.
 */

interface CircularProgressProps {
  /** Progression de 0 à 1 */
  progress: number;
  /** Diamètre du cercle en px */
  size?: number;
  /** Épaisseur de l'anneau */
  strokeWidth?: number;
  /** Couleur de remplissage */
  color?: string;
  /** Couleur de la piste */
  trackColor?: string;
  /** Contenu central (ex: pourcentage) */
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function CircularProgress({
  progress,
  size = 120,
  strokeWidth = 10,
  color = Theme.colors.primary,
  trackColor = Theme.colors.progressTrack,
  children,
  style,
}: CircularProgressProps) {
  const clamped = Math.min(1, Math.max(0, progress));
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  // Rotation des demi-cercles selon la progression
  const firstHalfDegrees = clamped <= 0.5 ? clamped * 360 : 180;
  const secondHalfDegrees = clamped > 0.5 ? (clamped - 0.5) * 360 : 0;

  const ringStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const halfCircleStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: strokeWidth,
    borderColor: color,
    position: 'absolute',
  };

  return (
    <View style={[styles.container, ringStyle, style]}>
      {/* Piste de fond */}
      <View
        style={[
          halfCircleStyle,
          { borderColor: trackColor },
        ]}
      />

      {/* Première moitié (0% → 50%) */}
      <View style={[styles.clip, ringStyle]}>
        <View
          style={[
            styles.half,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: strokeWidth,
              borderTopColor: color,
              borderRightColor: color,
              borderBottomColor: 'transparent',
              borderLeftColor: 'transparent',
              transform: [{ rotate: `${-135 + firstHalfDegrees}deg` }],
            },
          ]}
        />
      </View>

      {/* Seconde moitié (50% → 100%) */}
      {clamped > 0.5 && (
        <View style={[styles.clip, ringStyle]}>
          <View
            style={[
              styles.half,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: strokeWidth,
                borderTopColor: color,
                borderRightColor: color,
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
                transform: [{ rotate: `${45 + secondHalfDegrees}deg` }],
              },
            ]}
          />
        </View>
      )}

      {/* Contenu central */}
      <View style={[styles.center, { width: size, height: size }]}>
        {children}
      </View>
    </View>
  );
}

/** Variante prête à l'emploi affichant un pourcentage au centre */
export function CircularProgressPercent(props: CircularProgressProps) {
  const percent = Math.round(Math.min(1, Math.max(0, props.progress)) * 100);
  return (
    <CircularProgress {...props}>
      <Text style={styles.percentValue}>{percent}</Text>
      <Text style={styles.percentSign}>%</Text>
    </CircularProgress>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clip: {
    position: 'absolute',
    overflow: 'hidden',
  },
  half: {
    position: 'absolute',
  },
  center: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  percentValue: {
    ...TextStyles.screenTitle,
    fontSize: 32,
    color: Theme.colors.textPrimary,
  },
  percentSign: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    marginTop: 4,
  },
});
