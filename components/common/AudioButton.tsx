import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * /components/common/AudioButton.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Bouton de lecture audio.
 *
 * État actuel : DÉSACTIVÉ tant que les fichiers audio n'existent pas.
 * Le composant détecte automatiquement l'absence d'audio (audioFileName vide /
 * undefined) et se grise, avec un retour visuel clair (cadenas discret).
 *
 * Quand les audios seront ajoutés (V2), il suffira de passer `audioFileName`
 * et `onPlay` : le bouton s'activera sans changement d'API.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface AudioButtonProps {
  /** Nom du fichier audio ; absent/undefined => bouton désactivé */
  audioFileName?: string;
  /** Callback de lecture (appelé seulement si un audio existe) */
  onPlay?: (audioFileName: string) => void;
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

export function AudioButton({
  audioFileName,
  onPlay,
  size = 'md',
  style,
}: AudioButtonProps) {
  const available = !!audioFileName;

  const handlePress = () => {
    if (available && onPlay) onPlay(audioFileName!);
  };

  const dimension =
    size === 'lg' ? 48 : size === 'md' ? 40 : 32;
  const iconSize = size === 'lg' ? 20 : size === 'md' ? 16 : 14;

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={!available}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={
        available ? 'Écouter la prononciation' : 'Audio bientôt disponible'
      }
      accessibilityState={{ disabled: !available }}
      style={[
        styles.button,
        { width: dimension, height: dimension, borderRadius: dimension / 2 },
        available ? styles.enabled : styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.icon, { fontSize: iconSize }]}>
        {available ? '🔊' : '🔇'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  enabled: {
    backgroundColor: Theme.rawColors.azure[100],
    borderColor: Theme.rawColors.azure[300],
  },
  disabled: {
    backgroundColor: Theme.rawColors.sand[200],
    borderColor: Theme.colors.borderLight,
    opacity: 0.6,
  },
  icon: {
    textAlign: 'center',
  },
});
