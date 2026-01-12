import { Button } from '@/components/button';

import P from '@/assets/icons/profile.svg';
import { Input } from '@/components/input';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';

export default function Screen() {
  const { setTheme, theme } = useTheme();

  return (
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
        onPress={() =>
          theme == 'default' ? setTheme('softBlue') : setTheme('default')
        }
      >
        <Button.Icon icon={P} />
        <Button.Text> Teste </Button.Text>
      </Button>

      <Input placeholder="Teste" icon={P} />
    </View>
  );
}
