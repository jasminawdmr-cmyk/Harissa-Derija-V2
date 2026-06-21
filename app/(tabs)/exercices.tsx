/**
 * /app/(tabs)/exercices.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Écran Exercices — 120 exercices interactifs branchés sur data/exercises.ts.
 *
 * Types : conjugaison · grammaire · prononciation · écoute · association · ordre_mots
 * Fonctionnement : chaque carte est autonome (réponse immédiate + explication).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { FilterPills, FilterOption } from '@/components/common/FilterPills';
import { EmptyState } from '@/components/common/EmptyState';
import { PronunciationPlayer } from '@/components/common/PronunciationPlayer';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { exercises } from '@/data/exercises';
import type { Exercise, ExerciseType, ExerciseChoice } from '@/types';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Texte affiché pour un choix (arabizi en priorité, sinon french). */
function choiceLabel(c: ExerciseChoice): string {
  return c.arabizi ?? c.french ?? '';
}

function checkAnswer(ex: Exercise, chosen: string): boolean {
  if (Array.isArray(ex.correctAnswer)) return ex.correctAnswer.includes(chosen);
  return chosen === ex.correctAnswer;
}

type AnswerState = 'pending' | 'correct' | 'wrong';

// ─── Constantes de filtre ─────────────────────────────────────────────────────

const TYPE_LABELS: Record<ExerciseType, string> = {
  conjugaison:  'Conjugaison',
  grammaire:    'Grammaire',
  prononciation: 'Prononciation',
  ecoute:       'Écoute',
  association:  'Association',
  ordre_mots:   'Ordre',
};

const TYPE_ICONS: Record<ExerciseType, string> = {
  conjugaison:  '🔤',
  grammaire:    '📜',
  prononciation: '🔊',
  ecoute:       '👂',
  association:  '🔗',
  ordre_mots:   '🔀',
};

const TYPE_COLORS: Record<ExerciseType, string> = {
  conjugaison:  '#1F5F8B',
  grammaire:    '#6B4C2A',
  prononciation: '#3FB8AF',
  ecoute:       '#9B86C4',
  association:  '#607A53',
  ordre_mots:   '#C66B3D',
};

const LEVEL_LABEL: Record<string, string> = {
  debutant:      'Débutant',
  elementaire:   'Élémentaire',
  intermediaire: 'Intermédiaire',
  avance:        'Avancé',
};

const LEVEL_COLOR: Record<string, string> = {
  debutant:      '#607A53',
  elementaire:   '#1F5F8B',
  intermediaire: '#C76543',
  avance:        '#8B1E1E',
};

// ─── Carte d'exercice ─────────────────────────────────────────────────────────

interface ExerciseCardProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  answered: AnswerState;
  style?: ViewStyle;
}

function ExerciseCard({ exercise, onAnswer, answered, style }: ExerciseCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const typeColor = TYPE_COLORS[exercise.type];
  const isAnswered = answered !== 'pending';

  const handleChoice = (label: string) => {
    if (isAnswered) return;
    const correct = checkAnswer(exercise, label);
    setSelected(label);
    onAnswer(correct);
  };

  const handleReveal = () => {
    if (isAnswered) return;
    setRevealed(true);
    onAnswer(true); // révélation = neutre, on compte comme "répondu"
  };

  const correctLabel =
    Array.isArray(exercise.correctAnswer)
      ? exercise.correctAnswer[0]
      : exercise.correctAnswer;

  return (
    <View style={[styles.card, { borderLeftColor: typeColor }, style]}>
      {/* Badges d'en-tête */}
      <View style={styles.cardMeta}>
        <View style={[styles.typePill, { backgroundColor: typeColor + '22', borderColor: typeColor + '55' }]}>
          <Text style={styles.typePillIcon}>{TYPE_ICONS[exercise.type]}</Text>
          <Text style={[styles.typePillText, { color: typeColor }]}>
            {TYPE_LABELS[exercise.type]}
          </Text>
        </View>
        <View
          style={[
            styles.levelPill,
            { backgroundColor: (LEVEL_COLOR[exercise.level] ?? '#607A53') + '18' },
          ]}
        >
          <Text style={[styles.levelPillText, { color: LEVEL_COLOR[exercise.level] ?? '#607A53' }]}>
            {LEVEL_LABEL[exercise.level] ?? exercise.level}
          </Text>
        </View>
      </View>

      {/* Prompt */}
      <Text style={styles.prompt}>{exercise.prompt}</Text>

      {/* PronunciationPlayer pour les exercices de prononciation avec une cible */}
      {exercise.type === 'prononciation' && exercise.targetArabizi && (
        <PronunciationPlayer
          arabic={exercise.targetArabic ?? ''}
          arabizi={exercise.targetArabizi}
          style={styles.player}
        />
      )}

      {/* Choix multiples */}
      {exercise.choices && exercise.choices.length > 0 && (
        <View style={styles.choices}>
          {exercise.choices.map((c, idx) => {
            const label = choiceLabel(c);
            const isSelected = selected === label;
            const isCorrectChoice = label === correctLabel;
            const showAsCorrect = isAnswered && isCorrectChoice;
            const showAsWrong = isAnswered && isSelected && !isCorrectChoice;

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleChoice(label)}
                disabled={isAnswered}
                activeOpacity={0.7}
                style={[
                  styles.choiceBtn,
                  showAsCorrect && styles.choiceBtnCorrect,
                  showAsWrong && styles.choiceBtnWrong,
                  !isAnswered && styles.choiceBtnIdle,
                ]}
              >
                {/* Arabizi + arabe si disponibles */}
                <View style={styles.choiceContent}>
                  <Text
                    style={[
                      styles.choicePrimary,
                      showAsCorrect && styles.choiceTextCorrect,
                      showAsWrong && styles.choiceTextWrong,
                    ]}
                  >
                    {label}
                  </Text>
                  {c.arabic && c.arabizi && (
                    <Text style={[styles.choiceArabic, showAsCorrect && styles.choiceTextCorrect]}>
                      {c.arabic}
                    </Text>
                  )}
                  {c.french && c.arabizi && (
                    <Text style={styles.choiceFrench}>{c.french}</Text>
                  )}
                </View>
                {showAsCorrect && <Text style={styles.choiceIcon}>✓</Text>}
                {showAsWrong && <Text style={styles.choiceIcon}>✗</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Ordre des mots */}
      {exercise.type === 'ordre_mots' && exercise.tokens && !isAnswered && (
        <View style={styles.tokensBlock}>
          <Text style={styles.tokensLabel}>Tokens à réordonner :</Text>
          <View style={styles.tokens}>
            {exercise.tokens.map((tok, i) => (
              <View key={i} style={[styles.token, { borderColor: typeColor + '55' }]}>
                <Text style={[styles.tokenText, { color: typeColor }]}>{tok}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={handleReveal}
            style={[styles.revealBtn, { borderColor: typeColor }]}
          >
            <Text style={[styles.revealBtnText, { color: typeColor }]}>
              Voir l'ordre correct
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Réponse révélée (ordre des mots) */}
      {exercise.type === 'ordre_mots' && revealed && (
        <View style={styles.revealResult}>
          <Text style={styles.revealResultLabel}>Ordre correct :</Text>
          <Text style={styles.revealResultText}>{correctLabel}</Text>
        </View>
      )}

      {/* Explication — s'affiche après réponse */}
      {isAnswered && exercise.explanation && (
        <View
          style={[
            styles.explanation,
            answered === 'correct' ? styles.explanationCorrect : styles.explanationReveal,
          ]}
        >
          <Text style={styles.explanationIcon}>
            {answered === 'correct' ? '✅' : answered === 'wrong' ? '💡' : '👁️'}
          </Text>
          <Text style={styles.explanationText}>{exercise.explanation}</Text>
        </View>
      )}
    </View>
  );
}

// ─── Bannière de score ────────────────────────────────────────────────────────

interface ScoreBannerProps {
  total: number;
  answered: number;
  correct: number;
}

function ScoreBanner({ total, answered, correct }: ScoreBannerProps) {
  const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const progressWidth = answered > 0 ? `${Math.round((answered / total) * 100)}%` : '0%';

  return (
    <View style={styles.scoreBanner}>
      <View style={styles.scoreRow}>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreNum}>{answered}</Text>
          <Text style={styles.scoreLabel}>répondus</Text>
        </View>
        <View style={styles.scoreDivider} />
        <View style={styles.scoreItem}>
          <Text style={[styles.scoreNum, { color: Theme.rawColors.olive[400] }]}>{correct}</Text>
          <Text style={styles.scoreLabel}>corrects</Text>
        </View>
        <View style={styles.scoreDivider} />
        <View style={styles.scoreItem}>
          <Text style={[styles.scoreNum, { color: Theme.rawColors.terracotta[400] }]}>
            {answered > 0 ? `${pct}%` : '—'}
          </Text>
          <Text style={styles.scoreLabel}>réussite</Text>
        </View>
      </View>

      {/* Barre de progression */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: progressWidth as any }]} />
      </View>
      <Text style={styles.progressLabel}>{answered} / {total} exercices</Text>
    </View>
  );
}

// ─── Écran principal ──────────────────────────────────────────────────────────

type TypeFilter = 'tous' | ExerciseType;

export default function ExercicesScreen() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('tous');
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  const filtered = useMemo(() => {
    if (typeFilter === 'tous') return exercises;
    return exercises.filter((e) => e.type === typeFilter);
  }, [typeFilter]);

  const handleAnswer = useCallback((id: string, correct: boolean) => {
    setAnswers((prev) => {
      if (prev[id] !== undefined) return prev; // déjà répondu
      return { ...prev, [id]: correct ? 'correct' : 'wrong' };
    });
  }, []);

  // Stats sur les exercices filtrés
  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    for (const ex of filtered) {
      const state = answers[ex.id];
      if (state !== undefined) {
        answered++;
        if (state === 'correct') correct++;
      }
    }
    return { total: filtered.length, answered, correct };
  }, [filtered, answers]);

  const filterOptions: FilterOption<TypeFilter>[] = [
    { label: 'Tous', value: 'tous', icon: '🎯' },
    ...Object.entries(TYPE_LABELS).map(([type, label]) => ({
      label: label as string,
      value: type as ExerciseType,
      icon: TYPE_ICONS[type as ExerciseType],
    })),
  ];

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Exercices"
        subtitle="120 exercices de darija tunisien"
        accentColor={Theme.rawColors.terracotta[400]}
      />

      <ScoreBanner {...stats} />

      <FilterPills
        options={filterOptions}
        activeValue={typeFilter}
        onChange={setTypeFilter}
        style={styles.filters}
      />

      {filtered.length === 0 ? (
        <EmptyState
          emoji="🔍"
          title="Aucun exercice"
          description="Changez le filtre pour voir les exercices."
        />
      ) : (
        <View style={styles.list}>
          {filtered.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              answered={answers[ex.id] ?? 'pending'}
              onAnswer={(correct) => handleAnswer(ex.id, correct)}
              style={styles.exerciseCard}
            />
          ))}
        </View>
      )}
    </ScreenContainer>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  // Score banner
  scoreBanner: {
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    marginBottom: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    gap: Theme.spacing[2],
    ...Theme.shadows.sm,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  scoreItem: {
    alignItems: 'center',
    gap: 2,
  },
  scoreNum: {
    fontSize: 24,
    fontWeight: '800',
    color: Theme.colors.textPrimary,
  },
  scoreLabel: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    fontWeight: '500',
  },
  scoreDivider: {
    width: 1,
    height: 32,
    backgroundColor: Theme.colors.borderLight,
  },
  progressTrack: {
    height: 6,
    backgroundColor: Theme.rawColors.sand[300],
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    backgroundColor: Theme.rawColors.terracotta[400],
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  // Filters
  filters: {
    marginBottom: Theme.spacing[4],
  },
  // List
  list: {
    gap: Theme.spacing[4],
    paddingBottom: Theme.spacing[4],
  },
  exerciseCard: {},
  // Exercise card
  card: {
    backgroundColor: Theme.rawColors.sand[50] ?? Theme.rawColors.sand[100],
    borderRadius: Theme.radii.lg,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    borderLeftWidth: 4,
    padding: Theme.spacing[4],
    gap: Theme.spacing[3],
    ...Theme.shadows.sm,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
    flexWrap: 'wrap',
  },
  typePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
    borderWidth: 1,
  },
  typePillIcon: {
    fontSize: 11,
  },
  typePillText: {
    fontSize: 11,
    fontWeight: '700',
  },
  levelPill: {
    paddingHorizontal: Theme.spacing[2],
    paddingVertical: 3,
    borderRadius: Theme.radii.full,
  },
  levelPillText: {
    fontSize: 10,
    fontWeight: '600',
  },
  prompt: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    fontWeight: '500',
    lineHeight: 22,
  },
  player: {
    marginTop: 2,
  },
  // Choices
  choices: {
    gap: Theme.spacing[2],
  },
  choiceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[3],
    borderWidth: 1.5,
    gap: Theme.spacing[2],
  },
  choiceBtnIdle: {
    backgroundColor: Theme.rawColors.sand[200],
    borderColor: Theme.colors.borderLight,
  },
  choiceBtnCorrect: {
    backgroundColor: '#D6EFD8',
    borderColor: '#4CAF50',
  },
  choiceBtnWrong: {
    backgroundColor: '#FDECEA',
    borderColor: '#E53935',
  },
  choiceContent: {
    flex: 1,
    gap: 1,
  },
  choicePrimary: {
    fontSize: 14,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
  },
  choiceArabic: {
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
  choiceFrench: {
    fontSize: 11,
    color: Theme.colors.textMuted,
    fontStyle: 'italic',
  },
  choiceTextCorrect: {
    color: '#2E7D32',
  },
  choiceTextWrong: {
    color: '#C62828',
  },
  choiceIcon: {
    fontSize: 16,
    fontWeight: '700',
  },
  // Ordre des mots
  tokensBlock: {
    gap: Theme.spacing[2],
  },
  tokensLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  tokens: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing[2],
  },
  token: {
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: 6,
    borderRadius: Theme.radii.sm,
    backgroundColor: Theme.rawColors.sand[200],
    borderWidth: 1,
  },
  tokenText: {
    fontSize: 14,
    fontWeight: '600',
  },
  revealBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: Theme.spacing[4],
    paddingVertical: Theme.spacing[2],
    borderRadius: Theme.radii.full,
    borderWidth: 1.5,
    marginTop: Theme.spacing[1],
  },
  revealBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  revealResult: {
    gap: 4,
  },
  revealResultLabel: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  revealResultText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E7D32',
  },
  // Explication
  explanation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Theme.spacing[2],
    padding: Theme.spacing[3],
    borderRadius: Theme.radii.md,
  },
  explanationCorrect: {
    backgroundColor: '#F1F8F1',
  },
  explanationReveal: {
    backgroundColor: Theme.rawColors.sand[100],
  },
  explanationIcon: {
    fontSize: 16,
  },
  explanationText: {
    flex: 1,
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 18,
  },
});
