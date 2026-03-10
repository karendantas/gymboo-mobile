import { View } from 'react-native';
import { Button } from '../button';
import { Input } from '../input';

import Lock from '@/assets/icons/lock.svg';
export function RegisterForm() {
  return (
    <View className="gap-4 mx-5 pt-6">
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Username" />
      <Input placeholder="Senha" icon={Lock} secureTextEntry />
      <Input placeholder="Confirme sua senha" icon={Lock} secureTextEntry />
      <Button width="100%">
        <Button.Text> Continuar </Button.Text>
      </Button>
    </View>
  );
}
