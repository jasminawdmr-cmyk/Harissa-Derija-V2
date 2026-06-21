import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * Rangée de pastilles de filtre, horizontalement défilable.
 * Générique : fonctionne avec n'importe quel ensemble de valeurs.
 */

export interface FilterOption<T extends string> {
  label: string;
  value: T;
  /** Emoji optionnel affiché avant le label */
  icon?: string;
}

interface FilterPillsProps<T extends string> {
  options: FilterOption<T>[];
  activeValue: T;
  onChange: (value: T) => void;
  /** Couleur de la pastille active (défaut : primaire) */
  activeColor?: string;
  style?: ViewStyle;
}

export function FilterPills<T extends string>({
  options,
  activeValue,
  onChange,
  activeColor = Theme.colors.primary,
  style,
}: FilterPillsProps<T>) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={[styles.container, style]}
    >
      {options.map((opt) => {
        const active = opt.value === activeValue;
        return (
          <TouchableOpacity
            key={opt.value}
            onPress={() => onChange(opt.value)}
            activeOpacity={0.75}
            style={[
              styles.pill,
              active && { backgroundColor: activeColor, borderColor: activeColor },
            ]}
          >
            {opt.icon ? <Text style={styles.icon}>{opt.icon}</Text> : null}
            <Text style={[styles.label, active && styles.labelActive]}>
              {opt.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  content: {
    gap: Theme.spacing[2],
    paddingVertical: 2,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing[1],
    paddingHorizontal: Theme.spacing[3],
    paddingVertical: Theme.spacing[2],
    borderRadius: Theme.radii.full,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    backgroundColor: Theme.colors.backgroundCard,
  },
  icon: {
    fontSize: 14,
  },
  label: {
    ...TextStyles.buttonSmall,
    color: Theme.colors.textSecondary,
  },
  labelActive: {
    color: Theme.colors.textOnAccent,
  },
});
