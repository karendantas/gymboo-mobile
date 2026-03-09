import { AuthProvider } from '@/contexts/authContext';
import { ThemeProvider } from '@/contexts/themeContext';
import '@/global.css';
import { RouteGuard } from '@/Guards/routeGuard';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <RouteGuard>
        <ThemeProvider>
          <RootLayoutNav />
        </ThemeProvider>
      </RouteGuard>
    </AuthProvider>
  );
}

export function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(zShared)" options={{ headerShown: false }} />
    </Stack>
  );
}
