import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

interface CardProps {
  key?: string | number;
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  elevated?: boolean;
  variant?: 'default' | 'accent' | 'subtle';
}

export function Card({
  children,
  style,
  onPress,
  elevated = false,
  variant = 'default',
}: CardProps) {
  const cardStyle = [
    styles.base,
    variant === 'accent' && styles.accent,
    variant === 'subtle' && styles.subtle,
    elevated && Theme.shadows.md,
    !elevated && Theme.shadows.sm,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        activeOpacity={0.85}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

// ─── Card.Title ───────────────────────────────────────────────────────────────

interface CardTitleProps {
  children?: React.ReactNode;
  style?: TextStyle;
}

function CardTitle({ children, style }: CardTitleProps) {
  return (
    <Text style={[styles.title, style]} numberOfLines={2}>
      {children}
    </Text>
  );
}

// ─── Card.Body ────────────────────────────────────────────────────────────────

function CardBody({ children, style }: CardTitleProps) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

// ─── Card.Row ─────────────────────────────────────────────────────────────────

interface CardRowProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  justify?: 'start' | 'end' | 'between' | 'center';
}

function CardRow({ children, style, justify = 'between' }: CardRowProps) {
  const justifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    center: 'center',
  } as const;

  return (
    <View
      style={[
        styles.row,
        { justifyContent: justifyMap[justify] },
        style,
      ]}
    >
      {children}
    </View>
  );
}

// Attacher les sous-composants
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Row = CardRow;

const styles = StyleSheet.create({
  base: {
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.lg,
    padding: Theme.spacing[4],
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
  },
  accent: {
    backgroundColor: Theme.colors.primary,
    borderColor: 'transparent',
  },
  subtle: {
    backgroundColor: Theme.rawColors.sand[100],
    borderColor: Theme.colors.borderLight,
  },
  title: {
    ...TextStyles.cardTitle,
    color: Theme.colors.textPrimary,
    marginBottom: Theme.spacing[1],
  },
  body: {
    ...TextStyles.body,
    color: Theme.colors.textSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
