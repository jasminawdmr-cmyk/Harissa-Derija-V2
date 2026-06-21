import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { CircularProgressPercent } from '@/components/common/CircularProgress';
import { StatTile } from '@/components/common/StatTile';
import { SessionCard } from '@/components/common/SessionCard';
import { DailyGoalCard } from '@/components/common/DailyGoalCard';
import { StreakStrip } from '@/components/common/StreakStrip';
import { DailyExpressionCard } from '@/components/common/DailyExpressionCard';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useHomeData } from '@/hooks/useHomeData';

export default function AccueilScreen() {
  const router = useRouter();
  const data = useHomeData();
  const greeting = getGreeting();

  const handleStartSession = () => {
    router.push('/revisions');
  };

  return (
    <ScreenContainer>
      {/* ── Logo Blablalouni + salutation ─────────────────────────────── */}
      <View style={styles.logoHeader}>
        <View style={styles.logoRow}>
          <Text style={styles.logoBlabla}>blabla</Text>
          <Text style={styles.logoLouni}>louni</Text>
        </View>
        <Text style={styles.tagline}>Parle tunisien ✦</Text>
      </View>

      <View style={styles.greetingRow}>
        <Text style={styles.greeting}>{greeting}</Text>
        <View style={styles.greetingAccent} />
      </View>

      {/* ── Expression du jour ────────────────────────────────────────── */}
      <DailyExpressionCard isPlaceholder style={styles.block} />

      {/* ── Carte session du jour (CTA principal) ─────────────────────── */}
      <SessionCard
        cardsToReview={data.cardsToReview}
        estimatedMinutes={data.estimatedMinutesToday}
        onStart={handleStartSession}
        style={styles.block}
      />

      {/* ── Progression globale ───────────────────────────────────────── */}
      <View style={[styles.progressRow, styles.block]}>
        <View style={styles.progressCircle}>
          <CircularProgressPercent
            progress={data.globalProgress}
            size={110}
            strokeWidth={9}
          />
        </View>
        <View style={styles.progressText}>
          <Text style={styles.progressLabel}>Progression globale</Text>
          <Text style={styles.progressDescription}>
            Votre maîtrise du tunisien, consolidée jour après jour.
          </Text>
        </View>
      </View>

      {/* ── Statistiques rapides ──────────────────────────────────────── */}
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

      {/* ── Objectif quotidien ────────────────────────────────────────── */}
      <DailyGoalCard
        minutesDone={data.minutesDoneToday}
        goalMinutes={data.dailyGoalMinutes}
        style={styles.block}
      />

      {/* ── Série de jours ────────────────────────────────────────────── */}
      <Text style={styles.sectionTitle}>Votre semaine</Text>
      <StreakStrip
        days={data.weekDays}
        currentStreak={data.currentStreak}
        style={styles.block}
      />
    </ScreenContainer>
  );
}

/** Salutation contextuelle selon l'heure — en tunisien validé */
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Sbeh el khir 🌅';   // Bonjour (matin)
  if (hour < 18) return 'Aaslema 👋';          // Salut (journée)
  return 'Msa el khir 🌙';                      // Bonsoir
}

const styles = StyleSheet.create({
  logoHeader: {
    alignItems: 'flex-start',
    marginBottom: Theme.spacing[2],
    paddingTop: Theme.spacing[2],
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logoBlabla: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1F1712',
    letterSpacing: -1,
    lineHeight: 40,
  },
  logoLouni: {
    fontSize: 36,
    fontWeight: '800',
    color: '#C76543',
    letterSpacing: -1,
    lineHeight: 40,
  },
  tagline: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8C8070',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[3],
    marginBottom: Theme.spacing[5],
    marginTop: Theme.spacing[3],
  },
  greeting: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    fontWeight: '700',
  },
  greetingAccent: {
    flex: 1,
    height: 2,
    backgroundColor: '#EDE0C4',
    borderRadius: Theme.radii.full,
  },
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
