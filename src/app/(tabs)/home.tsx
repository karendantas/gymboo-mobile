import { useTheme } from '@/hooks/useTheme';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  const { toggleTheme, theme } = useTheme();
  return (
    <SafeAreaView>
      <Button title="mudar cor" onPress={() => toggleTheme(1)} />
    </SafeAreaView>
  );
}
