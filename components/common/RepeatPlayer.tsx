/**
 * /components/common/RepeatPlayer.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Lecteur avec répétition contrôlée.
 *
 * Permet à l'apprenant de rejouer N fois un mot ou une phrase pour ancrer
 * la prononciation. Affiche un compteur de répétitions visuel.
 *
 * L'intégration expo-av (lecture en boucle) sera activée quand
 * les fichiers audio seront fournis.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

const REPEAT_OPTIONS = [1, 2, 3, 5] as const;
type RepeatCount = (typeof REPEAT_OPTIONS)[number];

interface RepeatPlayerProps {
  /** Texte arabizi */
  arabizi: string;
  /** Texte arabe */
  arabic: string;
  /** Traduction française */
  french: string;
  /** Clé audio V3 */
  audioKey?: string;
  /** Nombre de répétitions par défaut */
  defaultRepeat?: RepeatCount;
  onPlay?: (key: string, count: number) => void;
  style?: ViewStyle;
}

export function RepeatPlayer({
  arabizi,
  arabic,
  french,
  audioKey,
  defaultRepeat = 3,
  onPlay,
  style,
}: RepeatPlayerProps) {
  const [selectedRepeat, setSelectedRepeat] = useState<RepeatCount>(defaultRepeat);
  const [currentRep, setCurrentRep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasAudio = !!audioKey;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      // Arrêter la répétition en cours
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsPlaying(false);
      setCurrentRep(0);
      return;
    }

    setIsPlaying(true);
    setCurrentRep(0);
    onPlay?.(audioKey ?? arabizi, selectedRepeat);

    // Simule chaque répétition (1.5s par répétition)
    for (let i = 0; i < selectedRepeat; i++) {
      timerRef.current = setTimeout(() => {
        setCurrentRep(i + 1);
        if (i + 1 === selectedRepeat) {
          setTimeout(() => {
            setIsPlaying(false);
            setCurrentRep(0);
          }, 600);
        }
      }, i * 1500 + 200);
    }
  }, [isPlaying, selectedRepeat, audioKey, arabizi, onPlay]);

  return (
    <View style={[styles.container, style]}>
      {/* Contenu à répéter */}
      <View style={styles.contentBlock}>
        <Text style={styles.arabic}>{arabic}</Text>
        <Text style={styles.arabizi}>{arabizi}</Text>
        <Text style={styles.french}>{french}</Text>
      </View>

      {/* Sélecteur de répétitions */}
      <View style={styles.controls}>
        <Text style={styles.controlLabel}>Répétitions :</Text>
        <View style={styles.repeatSelector}>
          {REPEAT_OPTIONS.map((n) => (
            <TouchableOpacity
              key={n}
              onPress={() => !isPlaying && setSelectedRepeat(n)}
              style={[
                styles.repeatOption,
                selectedRepeat === n && styles.repeatOptionSelected,
              ]}
              disabled={isPlaying}
            >
              <Text
                style={[
                  styles.repeatOptionText,
                  selectedRepeat === n && styles.repeatOptionTextSelected,
                ]}
              >
                ×{n}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bouton lecture + compteur */}
      <View style={styles.playRow}>
        <TouchableOpacity
          onPress={handlePlay}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={
            isPlaying
              ? 'Arrêter la répétition'
              : hasAudio
              ? `Répéter ${selectedRepeat} fois`
              : 'Audio bientôt disponible'
          }
          style={[
            styles.playBtn,
            hasAudio || !isPlaying
              ? isPlaying
                ? styles.playBtnStop
                : styles.playBtnEnabled
              : styles.playBtnDisabled,
          ]}
        >
          <Text style={styles.playIcon}>{isPlaying ? '⏹' : '🔁'}</Text>
          <Text style={styles.playText}>
            {isPlaying ? 'Arrêter' : `Répéter ×${selectedRepeat}`}
          </Text>
        </TouchableOpacity>

        {/* Indicateur de progression */}
        {isPlaying && (
          <View style={styles.repIndicator}>
            {Array.from({ length: selectedRepeat }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.repDot,
                  i < currentRep && styles.repDotDone,
                  i === currentRep - 1 && styles.repDotCurrent,
                ]}
              />
            ))}
          </View>
        )}
      </View>

      {!hasAudio && (
        <Text style={styles.hint}>Audio bientôt disponible — l'animation visuelle est active</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[3],
  },
  contentBlock: {
    alignItems: 'center',
    gap: 4,
  },
  arabic: {
    fontSize: 22,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
  },
  arabizi: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.rawColors.terracotta[400],
  },
  french: {
    fontSize: 13,
    color: Theme.colors.textSecondary,
    fontStyle: 'italic',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  controlLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  repeatSelector: {
    flexDirection: 'row',
    gap: Theme.spacing[1],
  },
  repeatOption: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
    borderRadius: Theme.radii.sm,
    backgroundColor: Theme.rawColors.sand[200],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  repeatOptionSelected: {
    backgroundColor: Theme.rawColors.terracotta[100],
    borderColor: Theme.rawColors.terracotta[300],
  },
  repeatOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
  },
  repeatOptionTextSelected: {
    color: Theme.rawColors.terracotta[500],
  },
  playRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
  },
  playBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[2],
    borderRadius: Theme.radii.full,
    borderWidth: 1,
  },
  playBtnEnabled: {
    backgroundColor: Theme.rawColors.azure[100],
    borderColor: Theme.rawColors.azure[300],
  },
  playBtnStop: {
    backgroundColor: Theme.rawColors.terracotta[100],
    borderColor: Theme.rawColors.terracotta[300],
  },
  playBtnDisabled: {
    backgroundColor: Theme.rawColors.sand[200],
    borderColor: Theme.colors.borderLight,
    opacity: 0.5,
  },
  playIcon: {
    fontSize: 16,
  },
  playText: {
    fontSize: 14,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
  },
  repIndicator: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  repDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Theme.rawColors.sand[300],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  repDotDone: {
    backgroundColor: Theme.rawColors.olive[400],
    borderColor: Theme.rawColors.olive[500],
  },
  repDotCurrent: {
    backgroundColor: Theme.rawColors.azure[400],
    borderColor: Theme.rawColors.azure[500],
    transform: [{ scale: 1.3 }],
  },
  hint: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
