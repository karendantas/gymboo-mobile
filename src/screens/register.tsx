import Logo from '@/assets/icons/logo.svg';
import { View } from 'react-native';

import { PetNameSelector } from '@/components/registerFlow/petNameSelector';
import { Link } from 'expo-router';

export function Register() {
  return (
    <View className="bg-base flex-1 justify-center items-center px-5">
      <Logo />

      {/* <RegisterForm /> */}
      {/* <GoalSelector /> */}
      {/* <TimeSelector /> */}
      {/* <WeightHeightSelector /> */}
      {/* <PetSelector /> */}

      <PetNameSelector />

      <Link
        href={'/(zShared)/(auth)/login'}
        className="text-md text-primary-dark mt-6"
      >
        Já tem cadastro? Faça login!
      </Link>
    </View>
  );
}
