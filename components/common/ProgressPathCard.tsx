import React from 'react';
import { View, Text, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { Theme } from '@/lib/Theme';
import { TextStyles } from '@/lib/Typography';

export interface PathStep {
  id: string;
  label: string;
  emoji?: string;
  status: 'done' | 'current' | 'upcoming';
}

interface ProgressPathCardProps {
  steps: PathStep[];
  title?: string;
  style?: ViewStyle;
}

export function ProgressPathCard({
  steps,
  title,
  style,
}: ProgressPathCardProps) {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.path}
      >
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            {/* Nœud */}
            <View style={styles.stepCol}>
              <View
                style={[
                  styles.node,
                  step.status === 'done' && styles.nodeDone,
                  step.status === 'current' && styles.nodeCurrent,
                  step.status === 'upcoming' && styles.nodeUpcoming,
                ]}
              >
                {step.status === 'done' ? (
                  <Text style={styles.nodeCheckmark}>✓</Text>
                ) : step.emoji ? (
                  <Text style={styles.nodeEmoji}>{step.emoji}</Text>
                ) : (
                  <Text style={styles.nodeNumber}>{idx + 1}</Text>
                )}
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  step.status === 'current' && styles.stepLabelCurrent,
                  step.status === 'upcoming' && styles.stepLabelUpcoming,
                ]}
                numberOfLines={2}
              >
                {step.label}
              </Text>
            </View>

            {/* Connecteur */}
            {idx < steps.length - 1 ? (
              <View
                style={[
                  styles.connector,
                  steps[idx + 1].status !== 'upcoming' && styles.connectorDone,
                ]}
              />
            ) : null}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const NODE_SIZE = 40;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    ...Theme.shadows.sm,
  },
  title: {
    ...TextStyles.sectionTitle,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing[4],
    fontSize: 16,
  },
  path: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: Theme.spacing[2],
    gap: 0,
  },
  stepCol: {
    alignItems: 'center',
    width: 72,
    gap: Theme.spacing[2],
  },
  node: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Theme.colors.borderMedium,
    backgroundColor: Theme.colors.backgroundCard,
  },
  nodeDone: {
    backgroundColor: '#607A53',
    borderColor: '#607A53',
  },
  nodeCurrent: {
    backgroundColor: '#C76543',
    borderColor: '#C76543',
  },
  nodeUpcoming: {
    backgroundColor: Theme.colors.backgroundSecondary,
    borderColor: Theme.colors.borderLight,
  },
  nodeCheckmark: {
    color: '#FDFCF8',
    fontWeight: '700',
    fontSize: 16,
  },
  nodeEmoji: {
    fontSize: 18,
  },
  nodeNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: Theme.colors.textMuted,
  },
  stepLabel: {
    ...TextStyles.caption,
    textAlign: 'center',
    color: Theme.colors.textSecondary,
    lineHeight: 14,
  },
  stepLabelCurrent: {
    color: '#C76543',
    fontWeight: '600',
  },
  stepLabelUpcoming: {
    color: Theme.colors.textMuted,
  },
  connector: {
    height: 2,
    width: 24,
    marginTop: NODE_SIZE / 2 - 1,
    backgroundColor: Theme.colors.borderMedium,
  },
  connectorDone: {
    backgroundColor: '#607A53',
  },
});
