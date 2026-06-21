/**
 * /components/common/FadeInView.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Micro-animation d'apparition douce (fondu + léger glissement vertical).
 *
 * Volontairement minimaliste : une seule animation parallèle au montage, pilotée
 * par le driver natif. Sert à donner du rythme aux listes (effet « stagger » via
 * la prop `delay`) sans alourdir le rendu. Aucune dépendance externe.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Theme } from '@/lib/Theme';

interface FadeInViewProps {
  children: React.ReactNode;
  /** Durée du fondu (ms) */
  duration?: number;
  /** Décalage avant démarrage (ms) — utile pour un effet « stagger » en liste */
  delay?: number;
  /** Distance de glissement vertical initial (px) */
  offsetY?: number;
  style?: ViewStyle;
}

export function FadeInView({
  children,
  duration = Theme.durations.normal,
  delay = 0,
  offsetY = 8,
  style,
}: FadeInViewProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(offsetY)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
    // Animation jouée une seule fois au montage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[{ opacity, transform: [{ translateY }] }, style]}
    >
      {children}
    </Animated.View>
  );
}
