import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Divider } from '@/components/common/Divider';
import { ProgressBar } from '@/components/common/ProgressBar';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useUserProgress } from '@/hooks/useUserProgress';
import { getMasteryToken } from '@/lib/Theme';

export default function ProfilScreen() {
  const { stats, wordProgress, resetProgress } = useUserProgress();

  const globalStats = [
    { emoji: '🔥', value: String(stats?.currentStreak ?? 0), label: 'jours' },
    { emoji: '⭐', value: String(stats?.totalXP ?? 0), label: 'XP total' },
    { emoji: '📝', value: String(stats?.wordsLearned ?? 0), label: 'mots' },
    { emoji: '🏆', value: String(stats?.quizzesTaken ?? 0), label: 'quiz' },
  ];

  const masteryBuckets = computeMasteryBuckets(wordProgress);

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Profil"
        subtitle="Votre parcours en tunisien"
        accentColor="#D6A658"
      />

      {/* Avatar & identité */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>🌿</Text>
        </View>
        <Text style={styles.displayName}>Apprenant·e</Text>
        <Text style={styles.memberSince}>Bienvenue dans votre parcours ✦</Text>
      </View>

      {/* Statistiques globales */}
      <View style={styles.statsGrid}>
        {globalStats.map((stat) => (
          <Card key={stat.label} variant="subtle" style={styles.statCard}>
            <Text style={styles.statEmoji}>{stat.emoji}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </Card>
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* Répartition de la maîtrise */}
      <Text style={styles.sectionTitle}>Maîtrise du vocabulaire</Text>
      <Card elevated style={styles.progressCard}>
        {masteryBuckets.map((bucket, i) => (
          <View key={bucket.token.label}>
            <View style={styles.levelRow}>
              <View style={styles.levelLabelRow}>
                <Text style={styles.levelDot}>{bucket.token.icon}</Text>
                <Text style={styles.levelLabel}>{bucket.token.label}</Text>
              </View>
              <Text style={styles.levelPercent}>{bucket.count}</Text>
            </View>
            <ProgressBar
              progress={bucket.ratio}
              color={bucket.token.main}
              style={styles.levelBar}
            />
            {i < masteryBuckets.length - 1 && (
              <View style={styles.levelSpacer} />
            )}
          </View>
        ))}
      </Card>

      <Divider style={styles.divider} />

      {/* Paramètres */}
      <Text style={styles.sectionTitle}>Paramètres</Text>

      <Card style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Objectif quotidien</Text>
            <Text style={styles.settingValue}>10 minutes par jour</Text>
          </View>
          <Button
            label="Modifier"
            onPress={() => {}}
            variant="ghost"
            size="sm"
          />
        </View>

        <Divider style={styles.inlineDivider} />

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Text style={styles.settingValue}>Rappel quotidien</Text>
          </View>
          <Switch
            value={false}
            onValueChange={() => {}}
            trackColor={{
              false: Theme.colors.borderMedium,
              true: Theme.colors.primary,
            }}
            thumbColor="#FDFCF8"
          />
        </View>
      </Card>

      <Divider style={styles.divider} />

      {/* À propos */}
      <Text style={styles.sectionTitle}>À propos</Text>
      <Card variant="subtle" style={styles.aboutCard}>
        {/* Logo Blablalouni inline */}
        <View style={styles.aboutLogoRow}>
          <Text style={styles.aboutLogoBlabla}>blabla</Text>
          <Text style={styles.aboutLogoLouni}>louni</Text>
        </View>
        <Text style={styles.aboutBody}>
          Apprendre le tunisien dialectal — conçu pour la diaspora et les
          francophones passionnés de culture tunisienne.
        </Text>
        <Text style={styles.aboutVersion}>Version 1.0.0 · Sans connexion</Text>
      </Card>

      <Button
        label="Réinitialiser la progression"
        onPress={() => {
          void resetProgress();
        }}
        variant="outline"
        fullWidth
        style={styles.resetButton}
      />
    </ScreenContainer>
  );
}

function computeMasteryBuckets(
  wordProgress: Record<string, { masteryLevel: number }>
) {
  const entries = Object.values(wordProgress);
  const total = Math.max(1, entries.length);
  const scores = [0, 1, 2, 3, 5];
  return scores.map((score) => {
    const token = getMasteryToken(score);
    const count = entries.filter(
      (e) => getMasteryToken(e.masteryLevel).label === token.label
    ).length;
    return { token, count, ratio: count / total };
  });
}

const styles = StyleSheet.create({
  avatarSection: {
    alignItems: 'center',
    marginBottom: Theme.spacing[6],
    gap: Theme.spacing[2],
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: Theme.radii.full,
    backgroundColor: '#EDE0C4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D6A658',
  },
  avatarEmoji: { fontSize: 36 },
  displayName: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    fontWeight: '800',
  },
  memberSince: {
    ...TextStyles.bodySmall,
    color: '#D6A658',
    fontWeight: '500',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Theme.spacing[3],
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Theme.spacing[3],
    gap: Theme.spacing[1],
  },
  statEmoji: { fontSize: 18 },
  statValue: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
    fontWeight: '800',
  },
  statLabel: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    textAlign: 'center',
  },
  divider: { marginVertical: Theme.spacing[5] },
  sectionTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing[3],
    fontWeight: '700',
  },
  progressCard: { gap: Theme.spacing[1] },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Theme.spacing[1],
  },
  levelLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[2],
  },
  levelDot: { fontSize: 12 },
  levelLabel: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
  },
  levelPercent: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
  levelBar: { marginBottom: Theme.spacing[1] },
  levelSpacer: { height: Theme.spacing[3] },
  settingsCard: { gap: Theme.spacing[1] },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Theme.spacing[2],
  },
  settingLabel: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  settingValue: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textMuted,
    marginTop: 2,
  },
  inlineDivider: { marginVertical: Theme.spacing[2] },
  aboutCard: { gap: Theme.spacing[2] },
  aboutLogoRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Theme.spacing[1],
  },
  aboutLogoBlabla: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F1712',
    letterSpacing: -0.5,
  },
  aboutLogoLouni: {
    fontSize: 22,
    fontWeight: '800',
    color: '#C76543',
    letterSpacing: -0.5,
  },
  aboutBody: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  aboutVersion: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
    marginTop: Theme.spacing[1],
  },
  resetButton: {
    marginTop: Theme.spacing[4],
    marginBottom: Theme.spacing[4],
  },
});
