import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ViewStyle,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '@/lib/Theme';

interface ScreenContainerProps {
  children?: React.ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  withHorizontalPadding?: boolean;
  backgroundColor?: string;
}

export function ScreenContainer({
  children,
  scrollable = true,
  style,
  contentStyle,
  withHorizontalPadding = true,
  backgroundColor = Theme.colors.backgroundPrimary,
}: ScreenContainerProps) {
  const inner = (
    <View
      style={[
        styles.content,
        withHorizontalPadding && styles.horizontalPadding,
        contentStyle,
      ]}
    >
      {children}
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor }, style]}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      {scrollable ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Theme.spacing[10],
  },
  content: {
    flex: 1,
    paddingTop: Theme.spacing[4],
  },
  horizontalPadding: {
    paddingHorizontal: Theme.layout.screenPaddingHorizontal,
  },
});
