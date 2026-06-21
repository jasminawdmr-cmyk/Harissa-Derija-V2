/**
 * Store utilisateur — gestion de la progression et du profil.
 * Architecture simple basée sur des hooks React + AsyncStorage (V1).
 * Évolutif vers Zustand ou Redux en V2 si nécessaire.
 */

import { UserProfile, UserStats, WordProgress, LessonProgress } from '@/types';

// Valeurs par défaut
export const DEFAULT_USER_PROFILE: UserProfile = {
  id: 'local_user',
  createdAt: new Date().toISOString(),
  displayName: undefined,
  motivations: [],
  dailyGoalMinutes: 10,
  notificationsEnabled: false,
};

export const DEFAULT_USER_STATS: UserStats = {
  totalXP: 0,
  currentStreak: 0,
  longestStreak: 0,
  lessonsCompleted: 0,
  wordsLearned: 0,
  wordsReviewed: 0,
  quizzesTaken: 0,
  totalTimeMinutes: 0,
  lastActivityAt: new Date().toISOString(),
};

// Calcul de l'XP gagnée
export const XP_REWARDS = {
  LESSON_COMPLETE: 20,
  QUIZ_PERFECT: 30,
  QUIZ_PASS: 15,
  WORD_MASTERED: 5,
  DAILY_STREAK: 10,
} as const;

// Helpers
export function calculateMasteryLevel(
  correctCount: number,
  incorrectCount: number
): 0 | 1 | 2 | 3 | 4 | 5 {
  if (correctCount === 0) return 0;
  const ratio = correctCount / Math.max(1, correctCount + incorrectCount);
  if (correctCount >= 10 && ratio >= 0.9) return 5;
  if (correctCount >= 7 && ratio >= 0.8) return 4;
  if (correctCount >= 5 && ratio >= 0.7) return 3;
  if (correctCount >= 3 && ratio >= 0.6) return 2;
  return 1;
}

export function calculateNextReview(masteryLevel: number): Date {
  const intervals = [1, 2, 4, 7, 14, 30]; // jours
  const days = intervals[Math.min(masteryLevel, intervals.length - 1)];
  const next = new Date();
  next.setDate(next.getDate() + days);
  return next;
}

export function isStreakActive(lastActivityAt: string): boolean {
  const last = new Date(lastActivityAt);
  const now = new Date();
  const diffMs = now.getTime() - last.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours < 48; // Tolérance de 48h pour le streak
}
