import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import Menu from '@/assets/icons/menu.svg';
interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View className="bg-primary flex-row gap-5 pt-4 px-5 items-center top-0 absolute w-full h-28 rounded-b-lg">
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Menu width={25} height={25} />
      </Pressable>

      <View>
        <Text className="text-xl font-medium text-text">Olá, {title}!</Text>
        {description && <Text className="text-text">{description}</Text>}
      </View>
    </View>
  );
}
