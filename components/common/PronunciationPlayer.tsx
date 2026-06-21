/**
 * /components/common/PronunciationPlayer.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Lecteur de prononciation pour un mot ou une phrase en darija.
 *
 * Architecture audio V3 :
 * - audioKey  → fichier audio pré-enregistré (assets/audio/<audioKey>.mp3)
 * - ttsKey    → texte à synthétiser via TTS (arabe ou arabizi)
 * - pronunciationKey → guide phonétique simplifié affiché à l'utilisateur
 *
 * État actuel : les boutons de lecture sont fonctionnels visuellement.
 * L'intégration expo-av sera activée quand les fichiers audio seront fournis.
 *
 * Scope V3 : Salutations + Au Café uniquement.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Animated,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface PronunciationPlayerProps {
  /** Texte en arabe */
  arabic: string;
  /** Transcription arabizi */
  arabizi: string;
  /** Guide phonétique simplifié (ex: "aas-LE-ma") */
  pronunciationKey?: string;
  /** Clé fichier audio V3 (ex: "salutations/aaslema") */
  audioKey?: string;
  /** Texte pour TTS */
  ttsKey?: string;
  /** Callback optionnel quand la lecture est déclenchée */
  onPlay?: (key: string) => void;
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

export function PronunciationPlayer({
  arabic,
  arabizi,
  pronunciationKey,
  audioKey,
  ttsKey,
  onPlay,
  size = 'md',
  style,
}: PronunciationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasAudio = !!(audioKey || ttsKey);

  const handlePlay = useCallback(() => {
    if (!hasAudio) return;
    setIsPlaying(true);
    const key = audioKey ?? ttsKey ?? '';
    onPlay?.(key);
    // Simule la durée de lecture — sera remplacé par expo-av
    setTimeout(() => setIsPlaying(false), 1500);
  }, [hasAudio, audioKey, ttsKey, onPlay]);

  const isLarge = size === 'lg';
  const isMedium = size === 'md';

  return (
    <View style={[styles.container, isLarge && styles.containerLg, style]}>
      {/* Texte arabe */}
      <View style={styles.textBlock}>
        <Text style={[styles.arabic, isLarge && styles.arabicLg]}>{arabic}</Text>
        <Text style={[styles.arabizi, isMedium || isLarge ? styles.arabiziMd : styles.arabiziSm]}>
          {arabizi}
        </Text>
        {pronunciationKey ? (
          <Text style={styles.phonetic}>/{pronunciationKey}/</Text>
        ) : null}
      </View>

      {/* Bouton de lecture */}
      <TouchableOpacity
        onPress={handlePlay}
        disabled={!hasAudio}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={hasAudio ? 'Écouter la prononciation' : 'Audio bientôt disponible'}
        accessibilityState={{ disabled: !hasAudio }}
        style={[
          styles.playBtn,
          isLarge && styles.playBtnLg,
          hasAudio ? (isPlaying ? styles.playBtnActive : styles.playBtnEnabled) : styles.playBtnDisabled,
        ]}
      >
        <Text style={[styles.playIcon, isLarge && styles.playIconLg]}>
          {isPlaying ? '⏸' : hasAudio ? '🔊' : '🔇'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: Theme.spacing[2],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
  },
  containerLg: {
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[3],
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  arabic: {
    fontSize: 18,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
    textAlign: 'right',
  },
  arabicLg: {
    fontSize: 24,
  },
  arabizi: {
    color: Theme.rawColors.terracotta[400],
    fontWeight: '600',
  },
  arabiziSm: {
    fontSize: 13,
  },
  arabiziMd: {
    fontSize: 15,
  },
  phonetic: {
    fontSize: 12,
    color: Theme.colors.textMuted,
    fontStyle: 'italic',
  },
  playBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  playBtnLg: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  playBtnEnabled: {
    backgroundColor: Theme.rawColors.azure[100],
    borderColor: Theme.rawColors.azure[300],
  },
  playBtnActive: {
    backgroundColor: Theme.rawColors.azure[200],
    borderColor: Theme.rawColors.azure[400],
  },
  playBtnDisabled: {
    backgroundColor: Theme.rawColors.sand[200],
    borderColor: Theme.colors.borderLight,
    opacity: 0.5,
  },
  playIcon: {
    fontSize: 18,
  },
  playIconLg: {
    fontSize: 22,
  },
});
