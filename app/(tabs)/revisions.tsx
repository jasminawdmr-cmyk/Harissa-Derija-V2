import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Flashcard } from '@/components/common/Flashcard';
import { ProgressBar } from '@/components/common/ProgressBar';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { StatTile } from '@/components/common/StatTile';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useReviewSession } from '@/hooks/useReviewSession';

/**
 * Écran Réviser — héberge la session de flashcards + accès au Quiz.
 * Délègue toute la logique au hook useReviewSession (moteur + persistance).
 * Pilier « Réviser » de la V2 : regroupe flashcards et quiz (quiz accessible ici
 * puisqu'il n'est plus un onglet de premier niveau).
 */
export default function RevisionsScreen() {
  const router = useRouter();
  const {
    phase,
    currentCard,
    currentIndex,
    totalCards,
    answer,
    stats,
    restart,
  } = useReviewSession();

  return (
    <ScreenContainer scrollable={phase !== 'active'}>
      <ScreenHeader
        title="Réviser"
        subtitle="Réactivez ce que vous avez appris"
        accentColor={Theme.rawColors.azure[400]}
      />

      {/* Accès Quiz — toujours disponible (le quiz n'est plus un onglet) */}
      {(phase === 'empty' || phase === 'finished') && (
        <Card
          variant="subtle"
          style={styles.quizEntry}
          onPress={() => router.push('/quiz')}
        >
          <Text style={styles.quizEntryEmoji}>🏆</Text>
          <View style={styles.quizEntryText}>
            <Text style={styles.quizEntryTitle}>Tester avec un quiz</Text>
            <Text style={styles.quizEntrySubtitle}>
              Questions variées pour vérifier vos acquis
            </Text>
          </View>
          <Text style={styles.quizEntryChevron}>›</Text>
        </Card>
      )}

      {/* Chargement */}
      {phase === 'loading' && (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Theme.colors.primary} />
          <Text style={styles.loadingText}>Préparation de votre session…</Text>
        </View>
      )}

      {/* Rien à réviser */}
      {phase === 'empty' && (
        <EmptyState
          emoji="🧠"
          title="Vous êtes à jour"
          description="Rien à revoir pour l'instant — profitez-en. Vos cartes reviendront au bon moment, juste avant que la mémoire ne s'efface."
        />
      )}

      {/* Session active */}
      {phase === 'active' && currentCard && (
        <View style={styles.sessionContainer}>
          {/* Progression de la session */}
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>
              {currentIndex + 1} / {totalCards}
            </Text>
            <ProgressBar
              progress={(currentIndex + 1) / totalCards}
              height={6}
              style={styles.progressBar}
            />
          </View>

          {/* Carte courante */}
          <Flashcard card={currentCard} onAnswer={answer} />
        </View>
      )}

      {/* Session terminée */}
      {phase === 'finished' && stats && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsEmoji}>🎉</Text>
          <Text style={styles.resultsTitle}>Session terminée !</Text>
          <Text style={styles.resultsSubtitle}>
            {stats.totalCards} cartes révisées en{' '}
            {Math.max(1, Math.round(stats.durationSeconds / 60))} min
          </Text>

          {/* Statistiques de la session */}
          <View style={styles.statsRow}>
            <StatTile
              icon="✓"
              value={String(stats.correctCount)}
              label="su"
              accentColor={Theme.colors.secondary}
            />
            <StatTile
              icon="~"
              value={String(stats.hesitantCount)}
              label="hésité"
              accentColor={Theme.rawColors.warning}
            />
            <StatTile
              icon="✗"
              value={String(stats.incorrectCount)}
              label="à revoir"
              accentColor={Theme.rawColors.error}
            />
          </View>

          <View style={styles.xpBanner}>
            <Text style={styles.xpText}>+{stats.xpEarned} XP</Text>
            {stats.newlyMasteredIds.length > 0 && (
              <Text style={styles.masteredText}>
                {stats.newlyMasteredIds.length} carte
                {stats.newlyMasteredIds.length > 1 ? 's' : ''} maîtrisée
                {stats.newlyMasteredIds.length > 1 ? 's' : ''} ✨
              </Text>
            )}
          </View>

          <Button
            label="Nouvelle session"
            onPress={restart}
            fullWidth
            style={styles.restartButton}
          />
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  quizEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    marginBottom: Theme.spacing[4],
  },
  quizEntryEmoji: {
    fontSize: 26,
  },
  quizEntryText: {
    flex: 1,
  },
  quizEntryTitle: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  quizEntrySubtitle: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
  },
  quizEntryChevron: {
    fontSize: 26,
    color: Theme.colors.textMuted,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Theme.spacing[20],
    gap: Theme.spacing[4],
  },
  loadingText: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
  },
  sessionContainer: {
    gap: Theme.spacing[5],
  },
  progressHeader: {
    gap: Theme.spacing[2],
  },
  progressText: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  progressBar: {
    width: '100%',
  },
  resultsContainer: {
    alignItems: 'center',
    paddingTop: Theme.spacing[8],
    gap: Theme.spacing[3],
  },
  resultsEmoji: {
    fontSize: 56,
  },
  resultsTitle: {
    ...TextStyles.screenTitle,
    color: Theme.colors.textPrimary,
  },
  resultsSubtitle: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: Theme.spacing[3],
  },
  statsRow: {
    flexDirection: 'row',
    gap: Theme.spacing[3],
    alignSelf: 'stretch',
  },
  xpBanner: {
    alignItems: 'center',
    backgroundColor: Theme.rawColors.olive[50],
    borderRadius: Theme.radii.lg,
    paddingVertical: Theme.spacing[4],
    paddingHorizontal: Theme.spacing[6],
    marginTop: Theme.spacing[3],
    alignSelf: 'stretch',
    gap: Theme.spacing[1],
  },
  xpText: {
    ...TextStyles.sectionTitle,
    color: Theme.rawColors.olive[600],
  },
  masteredText: {
    ...TextStyles.bodySmall,
    color: Theme.rawColors.olive[500],
  },
  restartButton: {
    marginTop: Theme.spacing[4],
    alignSelf: 'stretch',
  },
});
