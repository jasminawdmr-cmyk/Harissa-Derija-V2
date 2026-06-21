import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { CircularProgressPercent } from '@/components/common/CircularProgress';
import { StatTile } from '@/components/common/StatTile';
import { SessionCard } from '@/components/common/SessionCard';
import { DailyGoalCard } from '@/components/common/DailyGoalCard';
import { StreakStrip } from '@/components/common/StreakStrip';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useHomeData } from '@/hooks/useHomeData';

/**
 * Écran Accueil — tableau de bord quotidien de l'apprenant.
 * Affiche progression globale, objectif du jour, session à venir et série.
 */
export default function AccueilScreen() {
  const router = useRouter();
  const data = useHomeData();

  const greeting = getGreeting();

  const handleStartSession = () => {
    router.push('/revisions');
  };

  return (
    <ScreenContainer>
      <ScreenHeader
        title={greeting}
        subtitle="Prêt pour votre tunisien du jour ?"
        accentColor={Theme.colors.primary}
      />

      {/* ── Carte session du jour (CTA principal) ──────────────────────── */}
      <SessionCard
        cardsToReview={data.cardsToReview}
        estimatedMinutes={data.estimatedMinutesToday}
        onStart={handleStartSession}
        style={styles.block}
      />

      {/* ── Progression globale + temps estimé ─────────────────────────── */}
      <View style={[styles.progressRow, styles.block]}>
        <View style={styles.progressCircle}>
          <CircularProgressPercent
            progress={data.globalProgress}
            size={120}
            strokeWidth={10}
          />
        </View>
        <View style={styles.progressText}>
          <Text style={styles.progressLabel}>Progression globale</Text>
          <Text style={styles.progressDescription}>
            Votre maîtrise du vocabulaire, consolidée jour après jour.
          </Text>
        </View>
      </View>

      {/* ── Statistiques rapides ───────────────────────────────────────── */}
      <View style={[styles.statsRow, styles.block]}>
        <StatTile
          icon="🧠"
          value={String(data.cardsToReview)}
          label="à revoir"
          accentColor={Theme.colors.primary}
        />
        <StatTile
          icon="⏱️"
          value={`${data.estimatedMinutesToday}`}
          label="min aujourd'hui"
          accentColor={Theme.rawColors.azure[400]}
        />
        <StatTile
          icon="🔥"
          value={String(data.currentStreak)}
          label="jours de suite"
          accentColor={Theme.colors.streak}
        />
      </View>

      {/* ── Objectif quotidien ─────────────────────────────────────────── */}
      <DailyGoalCard
        minutesDone={data.minutesDoneToday}
        goalMinutes={data.dailyGoalMinutes}
        style={styles.block}
      />

      {/* ── Série de jours ─────────────────────────────────────────────── */}
      <Text style={styles.sectionTitle}>Votre semaine</Text>
      <StreakStrip
        days={data.weekDays}
        currentStreak={data.currentStreak}
        style={styles.block}
      />
    </ScreenContainer>
  );
}

/** Salutation contextuelle selon l'heure */
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Sbeh el khir';   // Bonjour (matin)
  if (hour < 18) return 'Aslema';          // Salut (journée)
  return 'Msa el khir';                    // Bonsoir
}

const styles = StyleSheet.create({
  block: {
    marginBottom: Theme.spacing[5],
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[4],
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    ...Theme.shadows.sm,
  },
  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    flex: 1,
    gap: Theme.spacing[1],
  },
  progressLabel: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  progressDescription: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Theme.spacing[3],
  },
  sectionTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing[3],
  },
});
