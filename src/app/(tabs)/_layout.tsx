import { Tabs } from 'expo-router';

import DropIcon from '@/assets/icons/drop.svg';
import DumbellIcon from '@/assets/icons/dumbell.svg';
import HomeIcon from '@/assets/icons/home.svg';
import PetIcon from '@/assets/icons/pet.svg';
import { useTheme } from '@/hooks/useTheme';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primaryDark,
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} width={25} height={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarIcon: ({ color }) => (
            <DumbellIcon color={color} width={25} height={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="pet"
        options={{
          tabBarIcon: ({ color }) => (
            <PetIcon color={color} width={25} height={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="hydration"
        options={{
          tabBarIcon: ({ color }) => (
            <DropIcon color={color} width={25} height={25} />
          ),
        }}
      />
    </Tabs>
  );
}
