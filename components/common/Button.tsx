import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  labelStyle,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[
        styles.base,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost'
            ? Theme.colors.primary
            : Theme.colors.textOnAccent
          }
        />
      ) : (
        <View style={styles.inner}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <Text
            style={[
              styles.label,
              styles[`label_${variant}`],
              styles[`labelSize_${size}`],
              labelStyle,
            ]}
          >
            {label}
          </Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: Theme.radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.45,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: Theme.spacing[2],
  },
  iconRight: {
    marginLeft: Theme.spacing[2],
  },

  // Variantes
  variant_primary: {
    backgroundColor: Theme.colors.primary,
    ...Theme.shadows.accent,
  },
  variant_secondary: {
    backgroundColor: Theme.colors.secondary,
    ...Theme.shadows.sm,
  },
  variant_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Theme.colors.primary,
  },
  variant_ghost: {
    backgroundColor: 'transparent',
  },
  variant_danger: {
    backgroundColor: Theme.rawColors.error,
  },

  // Tailles
  size_sm: {
    height: Theme.layout.buttonHeightSmall,
    paddingHorizontal: Theme.spacing[4],
  },
  size_md: {
    height: Theme.layout.buttonHeight,
    paddingHorizontal: Theme.spacing[6],
  },
  size_lg: {
    height: 60,
    paddingHorizontal: Theme.spacing[8],
  },

  // Labels
  label: {
    ...TextStyles.button,
  },
  label_primary: {
    color: Theme.colors.textOnAccent,
  },
  label_secondary: {
    color: Theme.colors.textOnAccent,
  },
  label_outline: {
    color: Theme.colors.primary,
  },
  label_ghost: {
    color: Theme.colors.primary,
  },
  label_danger: {
    color: Theme.rawColors.neutral[0],
  },
  labelSize_sm: {
    ...TextStyles.buttonSmall,
  },
  labelSize_md: {
    ...TextStyles.button,
  },
  labelSize_lg: {
    fontSize: 17,
    fontWeight: '600' as const,
  },
});
