import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Button } from './Button';

/**
 * Carte d'appel à l'action principale de l'Accueil :
 * met en avant la session du jour avec le nombre de cartes à revoir,
 * le temps estimé, et le bouton pour démarrer.
 */

interface SessionCardProps {
  /** Nombre de cartes à revoir aujourd'hui */
  cardsToReview: number;
  /** Temps estimé en minutes */
  estimatedMinutes: number;
  /** Callback du bouton démarrer */
  onStart: () => void;
  style?: ViewStyle;
}

export function SessionCard({
  cardsToReview,
  estimatedMinutes,
  onStart,
  style,
}: SessionCardProps) {
  const hasCards = cardsToReview > 0;

  return (
    <View style={[styles.container, style]}>
      {/* Décor : cercles en arrière-plan pour la chaleur visuelle */}
      <View style={styles.decorCircleLarge} />
      <View style={styles.decorCircleSmall} />

      <View style={styles.content}>
        <Text style={styles.eyebrow}>SESSION DU JOUR</Text>

        {hasCards ? (
          <>
            <View style={styles.headline}>
              <Text style={styles.bigNumber}>{cardsToReview}</Text>
              <Text style={styles.bigNumberLabel}>
                {cardsToReview === 1 ? 'carte\nà revoir' : 'cartes\nà revoir'}
              </Text>
            </View>

            <View style={styles.metaRow}>
              <Text style={styles.metaIcon}>⏱️</Text>
              <Text style={styles.metaText}>
                Environ {estimatedMinutes} min
              </Text>
            </View>

            <Button
              label="Commencer la session"
              onPress={onStart}
              variant="secondary"
              fullWidth
              style={styles.button}
              labelStyle={styles.buttonLabel}
            />
          </>
        ) : (
          <>
            <Text style={styles.allDoneTitle}>Tout est à jour ✨</Text>
            <Text style={styles.allDoneText}>
              Vous avez terminé vos révisions du jour. Revenez demain ou
              apprenez de nouveaux mots.
            </Text>
            <Button
              label="Apprendre du nouveau"
              onPress={onStart}
              variant="outline"
              fullWidth
              style={styles.button}
              labelStyle={styles.buttonLabelOutline}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.radii.xl,
    overflow: 'hidden',
    ...Theme.shadows.accent,
  },
  content: {
    padding: Theme.spacing[6],
    gap: Theme.spacing[3],
  },
  // Cercles décoratifs translucides
  decorCircleLarge: {
    position: 'absolute',
    top: -50,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  decorCircleSmall: {
    position: 'absolute',
    bottom: -30,
    left: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  eyebrow: {
    ...TextStyles.label,
    color: 'rgba(255, 255, 255, 0.8)',
    letterSpacing: 1.4,
  },
  headline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  bigNumber: {
    fontSize: 56,
    fontWeight: '800',
    color: Theme.colors.textOnAccent,
    lineHeight: 60,
  },
  bigNumberLabel: {
    ...TextStyles.cardTitle,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  metaIcon: {
    fontSize: 16,
  },
  metaText: {
    ...TextStyles.body,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  button: {
    marginTop: Theme.spacing[2],
  },
  buttonLabel: {
    color: Theme.colors.textOnAccent,
  },
  buttonLabelOutline: {
    color: Theme.colors.textOnAccent,
  },
  allDoneTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textOnAccent,
  },
  allDoneText: {
    ...TextStyles.body,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
});
