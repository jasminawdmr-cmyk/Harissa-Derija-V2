import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';
import { Badge } from './Badge';
import { Button } from './Button';
import type { GeneratedQuestion } from '@/services/quizGenerator';

/**
 * Question de quiz à choix multiple.
 * Couvre les types 'qcm', 'traduction' et 'conjugaison' (même UI).
 *
 * Comportement :
 *   - L'apprenant sélectionne une option
 *   - À la validation, la bonne/mauvaise réponse est colorée
 *   - L'explication apparaît, puis le bouton "Continuer"
 */

interface QuizChoiceQuestionProps {
  question: GeneratedQuestion;
  /** Appelé à la validation avec le résultat */
  onSubmit: (isCorrect: boolean, points: number) => void;
  /** Appelé pour passer à la question suivante */
  onNext: () => void;
}

const KIND_LABELS: Record<string, string> = {
  qcm: 'Choix multiple',
  traduction: 'Traduction',
  conjugaison: 'Conjugaison',
};

export function QuizChoiceQuestion({
  question,
  onSubmit,
  onNext,
}: QuizChoiceQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [validated, setValidated] = useState(false);

  // Réinitialise à chaque nouvelle question
  useEffect(() => {
    setSelected(null);
    setValidated(false);
  }, [question.id]);

  const correctAnswer = question.answer as string;

  const handleValidate = () => {
    if (selected === null) return;
    const isCorrect = selected === correctAnswer;
    setValidated(true);
    onSubmit(isCorrect, question.points);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <View style={styles.container}>
      {/* En-tête : type + points */}
      <View style={styles.header}>
        <Badge
          label={KIND_LABELS[question.kind] ?? 'Question'}
          variant="azure"
        />
        <Text style={styles.points}>{question.points} pts</Text>
      </View>

      {/* Énoncé */}
      <View style={styles.promptZone}>
        <Text style={styles.prompt}>{question.prompt}</Text>
        {question.subtitle ? (
          <Text style={styles.subtitle}>{question.subtitle}</Text>
        ) : null}
      </View>

      {/* Options */}
      <View style={styles.options}>
        {question.options.map((option, index) => {
          const isThisSelected = selected === option;
          const isThisCorrect = option === correctAnswer;

          // Couleurs selon l'état — on compose des tableaux de styles (pattern RN)
          // pour éviter le rétrécissement de type littéral de StyleSheet.create.
          const optionStyles: any[] = [styles.option];
          const textStyles: any[] = [styles.optionText];

          if (validated) {
            if (isThisCorrect) {
              optionStyles.push(styles.optionCorrect);
              textStyles.push(styles.optionTextStrong);
            } else if (isThisSelected) {
              optionStyles.push(styles.optionWrong);
              textStyles.push(styles.optionTextStrong);
            }
          } else if (isThisSelected) {
            optionStyles.push(styles.optionSelected);
          }

          return (
            <TouchableOpacity
              key={index}
              style={optionStyles}
              onPress={() => !validated && setSelected(option)}
              activeOpacity={validated ? 1 : 0.7}
              disabled={validated}
            >
              <Text style={textStyles}>{option}</Text>
              {validated && isThisCorrect && (
                <Text style={styles.markCorrect}>✓</Text>
              )}
              {validated && isThisSelected && !isThisCorrect && (
                <Text style={styles.markWrong}>✗</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Explication après validation */}
      {validated && question.explanation ? (
        <View
          style={[
            styles.explanation,
            isCorrect ? styles.explanationCorrect : styles.explanationWrong,
          ]}
        >
          <Text style={styles.explanationTitle}>
            {isCorrect ? '✓ Correct !' : '✗ Pas tout à fait'}
          </Text>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      ) : null}

      {/* Actions */}
      {!validated ? (
        <Button
          label="Valider"
          onPress={handleValidate}
          disabled={selected === null}
          fullWidth
        />
      ) : (
        <Button label="Continuer" onPress={onNext} fullWidth />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing[4],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  points: {
    ...TextStyles.label,
    color: Theme.colors.textMuted,
  },
  promptZone: {
    gap: Theme.spacing[2],
  },
  prompt: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
  },
  subtitle: {
    ...TextStyles.darijaWord,
    fontSize: 26,
    color: Theme.colors.primary,
    textAlign: 'center',
    marginTop: Theme.spacing[2],
  },
  options: {
    gap: Theme.spacing[3],
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.md,
    borderWidth: 1.5,
    borderColor: Theme.colors.borderLight,
    paddingVertical: Theme.spacing[4],
    paddingHorizontal: Theme.spacing[4],
    ...Theme.shadows.sm,
  },
  optionSelected: {
    borderColor: Theme.colors.primary,
    backgroundColor: Theme.rawColors.sand[100],
  },
  optionCorrect: {
    borderColor: Theme.colors.secondary,
    backgroundColor: Theme.rawColors.olive[50],
  },
  optionWrong: {
    borderColor: Theme.rawColors.error,
    backgroundColor: 'rgba(200, 64, 64, 0.05)',
  },
  optionText: {
    ...TextStyles.button,
    color: Theme.colors.textPrimary,
    flex: 1,
  },
  optionTextStrong: {
    fontWeight: '700',
  },
  markCorrect: {
    color: Theme.colors.secondary,
    fontWeight: '700',
    fontSize: 18,
  },
  markWrong: {
    color: Theme.rawColors.error,
    fontWeight: '700',
    fontSize: 18,
  },
  explanation: {
    borderRadius: Theme.radii.md,
    padding: Theme.spacing[4],
    gap: Theme.spacing[1],
  },
  explanationCorrect: {
    backgroundColor: Theme.rawColors.olive[50],
  },
  explanationWrong: {
    backgroundColor: Theme.rawColors.sand[100],
  },
  explanationTitle: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
  },
  explanationText: {
    ...TextStyles.bodySmall,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
});
