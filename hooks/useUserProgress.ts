import { useState, useEffect, useCallback } from 'react';
import { UserProfile, UserStats, WordProgress, LessonProgress } from '@/types';
import { storage, StorageKeys } from '@/services/storage';
import {
  DEFAULT_USER_PROFILE,
  DEFAULT_USER_STATS,
  calculateMasteryLevel,
  calculateNextReview,
  isStreakActive,
  XP_REWARDS,
} from '@/store/userStore';

interface UseUserProgressReturn {
  profile: UserProfile | null;
  stats: UserStats | null;
  wordProgress: Record<string, WordProgress>;
  lessonProgress: Record<string, LessonProgress>;
  isLoading: boolean;
  // Actions
  initUser: () => Promise<void>;
  recordWordSeen: (wordId: string, correct: boolean) => Promise<void>;
  recordLessonComplete: (lessonId: string, score: number) => Promise<void>;
  getWordsDueForReview: () => WordProgress[];
  resetProgress: () => Promise<void>;
}

export function useUserProgress(): UseUserProgressReturn {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [wordProgress, setWordProgress] = useState<Record<string, WordProgress>>({});
  const [lessonProgress, setLessonProgress] = useState<Record<string, LessonProgress>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Chargement initial
  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    setIsLoading(true);
    try {
      const [p, s, wp, lp] = await Promise.all([
        storage.get<UserProfile>(StorageKeys.USER_PROFILE),
        storage.get<UserStats>(StorageKeys.USER_STATS),
        storage.get<Record<string, WordProgress>>(StorageKeys.WORD_PROGRESS),
        storage.get<Record<string, LessonProgress>>(StorageKeys.LESSON_PROGRESS),
      ]);
      setProfile(p ?? DEFAULT_USER_PROFILE);
      setStats(s ?? DEFAULT_USER_STATS);
      setWordProgress(wp ?? {});
      setLessonProgress(lp ?? {});
    } finally {
      setIsLoading(false);
    }
  };

  const initUser = useCallback(async () => {
    const newProfile = { ...DEFAULT_USER_PROFILE, createdAt: new Date().toISOString() };
    await storage.set(StorageKeys.USER_PROFILE, newProfile);
    await storage.set(StorageKeys.USER_STATS, DEFAULT_USER_STATS);
    setProfile(newProfile);
    setStats(DEFAULT_USER_STATS);
  }, []);

  const recordWordSeen = useCallback(
    async (wordId: string, correct: boolean) => {
      const existing = wordProgress[wordId];
      const now = new Date().toISOString();
      const newCorrect = (existing?.correctCount ?? 0) + (correct ? 1 : 0);
      const newIncorrect = (existing?.incorrectCount ?? 0) + (correct ? 0 : 1);
      const mastery = calculateMasteryLevel(newCorrect, newIncorrect);
      const nextReview = calculateNextReview(mastery);

      const updated: WordProgress = {
        wordId,
        seenCount: (existing?.seenCount ?? 0) + 1,
        correctCount: newCorrect,
        incorrectCount: newIncorrect,
        lastSeenAt: now,
        masteryLevel: mastery,
        nextReviewAt: nextReview.toISOString(),
      };

      const newWordProgress = { ...wordProgress, [wordId]: updated };
      setWordProgress(newWordProgress);
      await storage.set(StorageKeys.WORD_PROGRESS, newWordProgress);
    },
    [wordProgress]
  );

  const recordLessonComplete = useCallback(
    async (lessonId: string, score: number) => {
      const now = new Date().toISOString();
      const existing = lessonProgress[lessonId];

      const updatedLesson: LessonProgress = {
        lessonId,
        completedAt: now,
        score,
        attempts: (existing?.attempts ?? 0) + 1,
      };

      const newLessonProgress = { ...lessonProgress, [lessonId]: updatedLesson };
      setLessonProgress(newLessonProgress);
      await storage.set(StorageKeys.LESSON_PROGRESS, newLessonProgress);

      // Mettre à jour les stats
      if (stats) {
        const xpGain = score >= 80 ? XP_REWARDS.QUIZ_PERFECT : XP_REWARDS.LESSON_COMPLETE;
        const newStats: UserStats = {
          ...stats,
          totalXP: stats.totalXP + xpGain,
          lessonsCompleted: stats.lessonsCompleted + (existing?.completedAt ? 0 : 1),
          lastActivityAt: now,
        };
        setStats(newStats);
        await storage.set(StorageKeys.USER_STATS, newStats);
      }
    },
    [lessonProgress, stats]
  );

  const getWordsDueForReview = useCallback((): WordProgress[] => {
    const now = new Date();
    return (Object.values(wordProgress) as WordProgress[]).filter(
      (wp) => new Date(wp.nextReviewAt) <= now
    );
  }, [wordProgress]);

  const resetProgress = useCallback(async () => {
    await storage.clearAll();
    setProfile(DEFAULT_USER_PROFILE);
    setStats(DEFAULT_USER_STATS);
    setWordProgress({});
    setLessonProgress({});
  }, []);

  return {
    profile,
    stats,
    wordProgress,
    lessonProgress,
    isLoading,
    initUser,
    recordWordSeen,
    recordLessonComplete,
    getWordsDueForReview,
    resetProgress,
  };
}
