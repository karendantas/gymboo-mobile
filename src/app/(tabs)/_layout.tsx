import { useTheme } from '@/hooks/useTheme';
import { COLORS } from '@/theme/colors';
import { Tabs } from 'expo-router';

import DropIcon from '@/assets/icons/drop.svg';
import DumbellIcon from '@/assets/icons/dumbell.svg';
import HomeIcon from '@/assets/icons/home.svg';
import PetIcon from '@/assets/icons/pet.svg';

export default function TabsLayout() {
  const { theme } = useTheme();

  const themeColors = {
    default: {
      active: COLORS.pink[700],
      inactive: COLORS.neutral[100],
      background: COLORS.pink[300],
    },
    softBlue: {
      active: COLORS.blue[500],
      inactive: COLORS.neutral[100],
      background: COLORS.blue[300],
    },
  };

  const currentColors = themeColors[theme];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentColors.active,
        tabBarInactiveTintColor: currentColors.inactive,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: currentColors.background,
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
