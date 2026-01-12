import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

import P from '@/assets/icons/profile.svg';
import { useTheme } from '@/hooks/useTheme';

export default function Screen() {
  const { setTheme, theme } = useTheme();
  return (
    <SafeAreaView>
      <Button
        onPress={() =>
          theme == 'default' ? setTheme('softBlue') : setTheme('default')
        }
      >
        <Button.Icon icon={P} />
        <Button.Text> Teste </Button.Text>
      </Button>
    </SafeAreaView>
  );
}
