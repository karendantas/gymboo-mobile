import Logo from '@/assets/icons/logo.svg';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Text, View } from 'react-native';

import Lock from '@/assets/icons/lock.svg';
import { Link } from 'expo-router';

export function Register() {
  return (
    <View className="bg-base flex-1 justify-center items-center px-5">
      <Logo />

      <View className="gap-4 mx-5 pt-6">
        <Input placeholder="Email" />
        <Input placeholder="Senha" icon={Lock} secureTextEntry />
        <Button width="100%">
          <Button.Text> Continuar </Button.Text>
        </Button>
      </View>

      <Text>
        {' '}
        Já tem cadastro? Faça login{' '}
        <Link href={'/(zShared)/(auth)/login'}>aqui</Link>{' '}
      </Text>
    </View>
  );
}
