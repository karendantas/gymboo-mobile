import { Button } from '@/components/button';

import P from '@/assets/icons/profile.svg';
import { Header } from '@/components/header';
import { Input } from '@/components/input';
import { useTheme } from '@/hooks/useTheme';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';

export function Home() {
  const { setTheme, theme } = useTheme();

  const navigation = useNavigation();
  return (
    <>
      <Header
        title="Karen"
        description="Acompanhe seu gymboo e seu progresso aqui!"
      />
      <View className="mx-5 flex-1 justify-center mt-5 gap-y-3">
        <Button
          onPress={() =>
            theme == 'default' ? setTheme('softBlue') : setTheme('default')
          }
        >
          <Button.Text> Teste </Button.Text>
          <Button.Icon icon={P} />
        </Button>
        <Button
          variant="secondary"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Button.Icon icon={P} />
          <Button.Text> Teste </Button.Text>
        </Button>

        <Input placeholder="Teste" icon={P} />
      </View>
    </>
  );
}
