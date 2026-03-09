import { useAuth } from '@/hooks/useAuth';
import { useRouter, useSegments } from 'expo-router';
import { ReactNode, useEffect } from 'react';

export function RouteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const segments = useSegments();

  const { isAuthenticated } = useAuth();

  const inAuthGroup = segments[0] === '(zShared)';

  useEffect(() => {
    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/(zShared)/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/(drawer)/(tabs)/home');
    }
  }, [isAuthenticated, segments]);

  return children;
}
