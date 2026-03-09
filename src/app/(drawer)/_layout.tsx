import { useTheme } from '@/hooks/useTheme';
import { COLORS } from '@/theme/colors';
import { Drawer } from 'expo-router/drawer';

import BellIcon from '@/assets/icons/bell.svg';
import HomeIcon from '@/assets/icons/home.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import SettingsIcon from '@/assets/icons/settings.svg';

export default function DrawerLayout() {
  const { theme } = useTheme();

  const themeColors = {
    default: {
      background: COLORS.neutral[100],
      active: COLORS.pink[700],
      inactive: COLORS.gray[700],
    },
    softBlue: {
      background: COLORS.neutral[100],
      active: COLORS.blue[500],
      inactive: COLORS.gray[700],
    },
  };

  const colors = themeColors[theme];

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.background,
          width: 280,
        },
        drawerActiveTintColor: colors.active,
        drawerInactiveTintColor: colors.inactive,
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Início',
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'Perfil',
          title: 'Perfil',
          drawerIcon: ({ color, size }) => (
            <ProfileIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Configurações',
          title: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <SettingsIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          drawerLabel: 'Notificações',
          title: 'Notificações',
          drawerIcon: ({ color, size }) => (
            <BellIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
