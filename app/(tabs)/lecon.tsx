import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '@/components/layout/ScreenContainer';
import { ScreenHeader } from '@/components/layout/ScreenHeader';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { WordCard } from '@/components/common/WordCard';
import { VerbCard } from '@/components/common/VerbCard';
import { GrammarRuleCard } from '@/components/common/GrammarRuleCard';
import { ProgressBar } from '@/components/common/ProgressBar';
import { EmptyState } from '@/components/common/EmptyState';
import { Divider } from '@/components/common/Divider';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';
import { useDailyLesson } from '@/hooks/useDailyLesson';
import { useFavorites } from '@/hooks/useFavorites';
import { useWordMastery } from '@/hooks/useWordMastery';
import { StorageKeys } from '@/services/storage';
import { LEVEL_LABELS, LEVEL_BADGE_VARIANT } from '@/utils/levels';
import { formatDuration } from '@/utils';

/**
 * Écran Leçon du jour — dynamique.
 * La leçon et son contenu (mots, verbes, règles) proviennent de useDailyLesson,
 * qui résout tout depuis les données centralisées. Aucun contenu codé en dur.
 */
export default function LeconScreen() {
  const { lesson, words, verbs, rules } = useDailyLesson();
  const { isFavorite, toggleFavorite } = useFavorites();
  const wordFavorites = useFavorites(StorageKeys.FAVORITE_WORDS);
  const { getMastery } = useWordMastery();

  // Aucune leçon disponible dans les données
  if (!lesson) {
    return (
      <ScreenContainer>
        <ScreenHeader
          title="Leçon du jour"
          subtitle="Un apprentissage ciblé, chaque jour"
          accentColor={Theme.rawColors.olive[400]}
        />
        <EmptyState
          emoji="📖"
          title="Aucune leçon pour le moment"
          description="Les leçons apparaîtront ici dès que le contenu sera disponible."
        />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Leçon du jour"
        subtitle="Un apprentissage ciblé, chaque jour"
        accentColor={Theme.rawColors.olive[400]}
      />

      {/* En-tête de la leçon */}
      <Card elevated style={styles.lessonHeader}>
        <View style={styles.metaRow}>
          <Badge
            label={LEVEL_LABELS[lesson.level]}
            variant={LEVEL_BADGE_VARIANT[lesson.level]}
          />
          <Badge label={formatDuration(lesson.estimatedMinutes)} variant="sand" />
        </View>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        {lesson.titleArabic ? (
          <Text style={styles.lessonTitleDarija}>{lesson.titleArabic}</Text>
        ) : null}
        <Text style={styles.lessonDescription}>{lesson.description}</Text>

        {/* Progression de la leçon : mots maîtrisés (score >= 3) */}
        {words.length > 0 && (
          <View style={styles.progressZone}>
            <ProgressBar
              progress={
                words.filter((w) => (getMastery(w.id) ?? 0) >= 3).length /
                words.length
              }
              height={8}
              color={Theme.colors.secondary}
            />
            <Text style={styles.progressLabel}>
              {words.filter((w) => (getMastery(w.id) ?? 0) >= 3).length} /{' '}
              {words.length} mots maîtrisés
            </Text>
          </View>
        )}
      </Card>

      {/* Note culturelle si présente */}
      {lesson.culturalNote ? (
        <Card variant="subtle" style={styles.cultureCard}>
          <Text style={styles.cultureLabel}>🌍 Note culturelle</Text>
          <Text style={styles.cultureText}>{lesson.culturalNote}</Text>
        </Card>
      ) : null}

      {/* Section Vocabulaire */}
      {words.length > 0 && (
        <View style={styles.section}>
          <Divider label={`Vocabulaire · ${words.length}`} />
          <View style={styles.list}>
            {words.map((word) => (
              <WordCard
                key={word.id}
                word={word}
                masteryScore={getMastery(word.id)}
                isFavorite={wordFavorites.isFavorite(word.id)}
                onToggleFavorite={wordFavorites.toggleFavorite}
              />
            ))}
          </View>
        </View>
      )}

      {/* Section Verbes */}
      {verbs.length > 0 && (
        <View style={styles.section}>
          <Divider label={`Verbes · ${verbs.length}`} />
          <View style={styles.list}>
            {verbs.map((verb) => (
              <VerbCard
                key={verb.id}
                verb={verb}
                isFavorite={isFavorite(verb.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </View>
        </View>
      )}

      {/* Section Grammaire */}
      {rules.length > 0 && (
        <View style={styles.section}>
          <Divider label={`Grammaire · ${rules.length}`} />
          <View style={styles.list}>
            {rules.map((rule) => (
              <GrammarRuleCard key={rule.id} rule={rule} />
            ))}
          </View>
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  lessonHeader: {
    gap: Theme.spacing[2],
  },
  metaRow: {
    flexDirection: 'row',
    gap: Theme.spacing[2],
  },
  lessonTitle: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  lessonTitleDarija: {
    ...TextStyles.body,
    color: Theme.colors.secondary,
    fontWeight: '700',
  },
  lessonDescription: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  progressZone: {
    marginTop: Theme.spacing[2],
    gap: Theme.spacing[1],
  },
  progressLabel: {
    ...TextStyles.caption,
    color: Theme.colors.textMuted,
  },
  cultureCard: {
    marginTop: Theme.spacing[4],
    gap: Theme.spacing[1],
  },
  cultureLabel: {
    ...TextStyles.label,
    color: Theme.colors.textSecondary,
  },
  cultureText: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  section: {
    marginTop: Theme.spacing[5],
    gap: Theme.spacing[3],
  },
  list: {
    gap: Theme.spacing[3],
  },
});
