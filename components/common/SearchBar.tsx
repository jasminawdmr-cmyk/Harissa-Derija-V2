import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native';
import { Theme, TextStyles } from '@/lib/Theme';

/**
 * Barre de recherche réutilisable.
 * Affiche une icône, un champ texte et un bouton effacer quand non vide.
 */

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Chercher…',
  style,
}: SearchBarProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.textMuted}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        clearButtonMode="never"
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => onChangeText('')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.clearButton}
        >
          <Text style={styles.clearIcon}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.backgroundCard,
    borderRadius: Theme.radii.md,
    borderWidth: 1,
    borderColor: Theme.colors.borderLight,
    paddingHorizontal: Theme.spacing[3],
    height: 48,
  },
  icon: {
    fontSize: 16,
    marginRight: Theme.spacing[2],
  },
  input: {
    flex: 1,
    ...TextStyles.body,
    color: Theme.colors.textPrimary,
    height: '100%',
  },
  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Theme.rawColors.neutral[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearIcon: {
    fontSize: 11,
    color: Theme.colors.textSecondary,
    fontWeight: '700',
  },
});
