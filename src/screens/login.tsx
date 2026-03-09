import Logo from '@/assets/icons/logo.svg';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { View } from 'react-native';

import Lock from '@/assets/icons/lock.svg';
import { Link } from 'expo-router';

export function Login() {
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

      <Link
        href={'/(zShared)/(auth)/register'}
        className="text-md text-primary-dark mt-6"
      >
        Não tem cadastro? Crie sua conta agora!
      </Link>
    </View>
  );
}
