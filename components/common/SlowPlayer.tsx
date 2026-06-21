/**
 * /components/common/SlowPlayer.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Lecteur à vitesse réduite pour les apprenants débutants.
 *
 * Affiche le mot syllabe par syllabe (décomposition phonétique)
 * et simule une lecture lente via un affichage progressif des syllabes.
 *
 * L'intégration audio réelle (expo-av playbackRate) sera activée
 * quand les fichiers audio seront fournis.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface SlowPlayerProps {
  /** Texte arabizi à découper en syllabes */
  arabizi: string;
  /** Texte arabe */
  arabic: string;
  /** Syllabes découpées manuellement (ex: ["Aas","le","ma"]) */
  syllables?: string[];
  /** Clé audio V3 */
  audioKey?: string;
  onPlay?: (key: string, speed: 'slow') => void;
  style?: ViewStyle;
}

export function SlowPlayer({
  arabizi,
  arabic,
  syllables,
  audioKey,
  onPlay,
  style,
}: SlowPlayerProps) {
  const [activeSyllable, setActiveSyllable] = useState<number>(-1);
  const hasAudio = !!audioKey;

  // Découpage automatique si aucune syllabe fournie
  const parts: string[] = syllables ?? arabizi.split(/(?=[A-Z3789])/g).filter(Boolean);

  const handlePlay = useCallback(() => {
    if (!hasAudio && parts.length === 0) return;

    onPlay?.(audioKey ?? arabizi, 'slow');

    // Affiche chaque syllabe à la suite (animation pédagogique)
    parts.forEach((_, idx) => {
      setTimeout(() => {
        setActiveSyllable(idx);
        if (idx === parts.length - 1) {
          setTimeout(() => setActiveSyllable(-1), 600);
        }
      }, idx * 700);
    });
  }, [hasAudio, audioKey, arabizi, onPlay, parts]);

  return (
    <View style={[styles.container, style]}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.label}>Lire lentement</Text>
        <TouchableOpacity
          onPress={handlePlay}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Lecture lente syllabe par syllabe"
          style={[styles.slowBtn, hasAudio ? styles.slowBtnEnabled : styles.slowBtnDisabled]}
        >
          <Text style={styles.slowIcon}>🐢</Text>
          <Text style={styles.slowText}>Lent</Text>
        </TouchableOpacity>
      </View>

      {/* Décomposition syllabique */}
      <View style={styles.syllableRow}>
        {parts.map((syl, idx) => (
          <View
            key={idx}
            style={[
              styles.syllable,
              activeSyllable === idx && styles.syllableActive,
            ]}
          >
            <Text
              style={[
                styles.syllableText,
                activeSyllable === idx && styles.syllableTextActive,
              ]}
            >
              {syl}
            </Text>
          </View>
        ))}
      </View>

      {/* Texte arabe */}
      <Text style={styles.arabic}>{arabic}</Text>

      {!hasAudio && (
        <Text style={styles.hint}>Audio bientôt disponible — découpage visuel actif</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.rawColors.olive[50],
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    borderWidth: 1,
    borderColor: Theme.rawColors.olive[100],
    gap: Theme.spacing[2],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    ...TextStyles.label,
    color: Theme.rawColors.olive[500],
  },
  slowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: 6,
    borderRadius: Theme.radii.full,
    borderWidth: 1,
  },
  slowBtnEnabled: {
    backgroundColor: Theme.rawColors.olive[100],
    borderColor: Theme.rawColors.olive[300],
  },
  slowBtnDisabled: {
    backgroundColor: Theme.rawColors.sand[200],
    borderColor: Theme.colors.borderLight,
    opacity: 0.6,
  },
  slowIcon: {
    fontSize: 14,
  },
  slowText: {
    fontSize: 12,
    fontWeight: '600',
    color: Theme.rawColors.olive[500],
  },
  syllableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[1],
    alignItems: 'center',
  },
  syllable: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 4,
    borderRadius: Theme.radii.sm,
    backgroundColor: Theme.rawColors.sand[200],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  syllableActive: {
    backgroundColor: Theme.rawColors.olive[300],
    borderColor: Theme.rawColors.olive[400],
  },
  syllableText: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
  },
  syllableTextActive: {
    color: Theme.rawColors.neutral[0],
  },
  arabic: {
    fontSize: 20,
    color: Theme.colors.textPrimary,
    textAlign: 'right',
    fontWeight: '500',
  },
  hint: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
