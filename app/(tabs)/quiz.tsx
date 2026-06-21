import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { QuizChoiceQuestion } from '@/components/common/QuizChoiceQuestion';
import { QuizOrderQuestion } from '@/components/common/QuizOrderQuestion';
import { ProgressBar } from '@/components/common/ProgressBar';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useQuiz } from '@/hooks/useQuiz';

/**
 * Écran Quiz — teste les connaissances via 4 types de questions générées
 * à partir des données locales (vocabulaire, verbes, dialogues).
 *
 * États : écran d'accueil → quiz en cours → écran de résultats.
 */
export default function QuizScreen() {
  const [started, setStarted] = useState(false);
  const quiz = useQuiz();

  // ── Écran d'accueil du quiz ───────────────────────────────────────────
  if (!started) {
    return (
      <ScreenContainer>
        <ScreenHeader
          title="Quiz"
          subtitle="Testez vos connaissances en tunisien"
          accentColor={Theme.rawColors.terracotta[400]}
        />

        <Card elevated style={styles.introCard}>
          <Text style={styles.introTitle}>Quiz mixte</Text>
          <Text style={styles.introText}>
            Un mélange de questions à choix multiple, de traductions, de
            conjugaisons et de phrases à remettre dans l'ordre.
          </Text>

          <View style={styles.typesList}>
            {QUIZ_TYPES.map((t) => (
              <View key={t.label} style={styles.typeRow}>
                <View style={styles.typeDot} />
                <Text style={styles.typeLabel}>{t.label}</Text>
              </View>
            ))}
          </View>
        </Card>

        {quiz.totalQuestions > 0 ? (
          <Button
            label={`Commencer (${quiz.totalQuestions} questions)`}
            onPress={() => setStarted(true)}
            fullWidth
            style={styles.startButton}
          />
        ) : (
          <EmptyState
            emoji="📭"
            title="Pas encore de quiz"
            description="Ajoutez du vocabulaire pour générer des questions."
          />
        )}
      </ScreenContainer>
    );
  }

  // ── Résultats ─────────────────────────────────────────────────────────
  if (quiz.phase === 'finished') {
    const percent =
      quiz.totalQuestions > 0
        ? Math.round((quiz.correctCount / quiz.totalQuestions) * 100)
        : 0;

    return (
      <ScreenContainer>
        <ScreenHeader title="Résultats" accentColor={Theme.rawColors.terracotta[400]} />

        <View style={styles.resultsContainer}>
          <Text style={styles.resultsEmoji}>
            {percent >= 80 ? '🏆' : percent >= 50 ? '👍' : '💪'}
          </Text>
          <Text style={styles.resultsScore}>
            {quiz.correctCount} / {quiz.totalQuestions}
          </Text>
          <Text style={styles.resultsPercent}>{percent}% de réussite</Text>

          <ProgressBar
            progress={percent / 100}
            height={10}
            color={percent >= 50 ? Theme.colors.secondary : Theme.colors.primary}
            style={styles.resultsBar}
          />

          <View style={styles.xpBanner}>
            <Text style={styles.xpText}>+{quiz.score} XP</Text>
          </View>

          <Button
            label="Rejouer"
            onPress={() => {
              quiz.restart();
            }}
            fullWidth
            style={styles.replayButton}
          />
          <Button
            label="Retour"
            onPress={() => setStarted(false)}
            variant="ghost"
            fullWidth
          />
        </View>
      </ScreenContainer>
    );
  }

  // ── Question en cours ─────────────────────────────────────────────────
  const question = quiz.currentQuestion;
  if (!question) {
    return (
      <ScreenContainer>
        <ScreenHeader title="Quiz" accentColor={Theme.rawColors.terracotta[400]} />
        <EmptyState emoji="📭" title="Aucune question disponible" />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Quiz"
        accentColor={Theme.rawColors.terracotta[400]}
      />

      {/* Progression */}
      <View style={styles.progressHeader}>
        <Text style={styles.progressText}>
          Question {quiz.currentIndex + 1} / {quiz.totalQuestions}
        </Text>
        <ProgressBar
          progress={(quiz.currentIndex + 1) / quiz.totalQuestions}
          height={6}
        />
      </View>

      {/* Rendu selon le type de question */}
      {question.kind === 'remise_ordre' ? (
        <QuizOrderQuestion
          question={question}
          onSubmit={quiz.submitAnswer}
          onNext={quiz.next}
        />
      ) : (
        <QuizChoiceQuestion
          question={question}
          onSubmit={quiz.submitAnswer}
          onNext={quiz.next}
        />
      )}
    </ScreenContainer>
  );
}

const QUIZ_TYPES = [
  { label: 'Choix multiple' },
  { label: 'Traduction' },
  { label: 'Compléter une conjugaison' },
  { label: 'Remettre une phrase en ordre' },
];

const styles = StyleSheet.create({
  introCard: {
    alignItems: 'center',
    gap: Theme.spacing[2],
    marginBottom: Theme.spacing[5],
  },
  introTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  introText: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  typesList: {
    alignSelf: 'stretch',
    gap: Theme.spacing[2],
    marginTop: Theme.spacing[3],
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    backgroundColor: Theme.rawColors.sand[100],
    borderRadius: Theme.radii.md,
    paddingVertical: Theme.spacing[3],
    paddingHorizontal: Theme.spacing[4],
  },
  typeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Theme.rawColors.terracotta[300],
  },
  typeLabel: {
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
  },
  startButton: {
    marginTop: Theme.spacing[2],
  },
  progressHeader: {
    gap: Theme.spacing[2],
    marginBottom: Theme.spacing[5],
  },
  progressText: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  resultsContainer: {
    alignItems: 'center',
    paddingTop: Theme.spacing[8],
    gap: Theme.spacing[2],
  },
  resultsEmoji: {
    fontSize: 56,
  },
  resultsScore: {
    ...TextStyles.screenTitle,
    fontSize: 40,
    color: Theme.colors.textPrimary,
  },
  resultsPercent: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    marginBottom: Theme.spacing[3],
  },
  resultsBar: {
    alignSelf: 'stretch',
    marginBottom: Theme.spacing[3],
  },
  xpBanner: {
    backgroundColor: Theme.rawColors.olive[50],
    borderRadius: Theme.radii.lg,
    paddingVertical: Theme.spacing[4],
    paddingHorizontal: Theme.spacing[8],
    marginVertical: Theme.spacing[3],
  },
  xpText: {
    ...TextStyles.sectionTitle,
    color: Theme.rawColors.olive[600],
  },
  replayButton: {
    alignSelf: 'stretch',
    marginTop: Theme.spacing[2],
  },
});
