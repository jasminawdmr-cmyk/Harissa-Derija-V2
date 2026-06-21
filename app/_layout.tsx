import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Theme } from '@/lib/Theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={Theme.colors.backgroundPrimary} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
