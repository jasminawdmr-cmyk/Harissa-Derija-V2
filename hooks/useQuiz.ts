import { useState, useCallback, useMemo } from 'react';
import {
  generateQuiz,
  type GeneratedQuestion,
} from '@/services/quizGenerator';

/**
 * /hooks/useQuiz.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pilote un quiz : génération des questions, suivi des réponses, score final.
 * Les questions proviennent du quizGenerator (données locales uniquement).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type QuizPhase = 'active' | 'finished' | 'empty';

export interface QuizAnswerRecord {
  questionId: string;
  correct: boolean;
  pointsEarned: number;
}

interface UseQuizReturn {
  phase: QuizPhase;
  currentQuestion: GeneratedQuestion | null;
  currentIndex: number;
  totalQuestions: number;
  /** Soumet une réponse et retourne si elle est correcte */
  submitAnswer: (isCorrect: boolean, points: number) => void;
  /** Passe à la question suivante (ou termine) */
  next: () => void;
  /** Score total accumulé */
  score: number;
  /** Nombre de bonnes réponses */
  correctCount: number;
  /** Historique des réponses */
  answers: QuizAnswerRecord[];
  /** Relance un nouveau quiz */
  restart: () => void;
}

const MAX_QUESTIONS = 10;

export function useQuiz(): UseQuizReturn {
  const [questions, setQuestions] = useState<GeneratedQuestion[]>(() =>
    generateQuiz(MAX_QUESTIONS)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);

  const phase: QuizPhase = useMemo(() => {
    if (questions.length === 0) return 'empty';
    if (currentIndex >= questions.length) return 'finished';
    return 'active';
  }, [questions.length, currentIndex]);

  const submitAnswer = useCallback(
    (isCorrect: boolean, points: number) => {
      const question = questions[currentIndex];
      if (!question) return;
      setAnswers((prev) => [
        ...prev,
        {
          questionId: question.id,
          correct: isCorrect,
          pointsEarned: isCorrect ? points : 0,
        },
      ]);
    },
    [questions, currentIndex]
  );

  const next = useCallback(() => {
    setCurrentIndex((i) => i + 1);
  }, []);

  const restart = useCallback(() => {
    setQuestions(generateQuiz(MAX_QUESTIONS));
    setCurrentIndex(0);
    setAnswers([]);
  }, []);

  const score = useMemo(
    () => answers.reduce((sum, a) => sum + a.pointsEarned, 0),
    [answers]
  );

  const correctCount = useMemo(
    () => answers.filter((a) => a.correct).length,
    [answers]
  );

  return {
    phase,
    currentQuestion:
      phase === 'active' ? questions[currentIndex] ?? null : null,
    currentIndex,
    totalQuestions: questions.length,
    submitAnswer,
    next,
    score,
    correctCount,
    answers,
    restart,
  };
}
