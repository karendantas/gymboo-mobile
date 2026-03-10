import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../button';

import BluePet from '@/assets/Gymboos/blue.svg';
import PinkPet from '@/assets/Gymboos/pink.svg';
import RedPet from '@/assets/Gymboos/red.svg';
import YellowPet from '@/assets/Gymboos/yellow.svg';

export function PetSelector() {
  type pets = 'yellow' | 'red' | 'blue' | 'pink';

  const [pet, setPet] = useState<pets>('yellow');

  const petsList: pets[] = ['yellow', 'red', 'blue', 'pink'];

  function getPetImage(color: string) {
    switch (color) {
      case 'yellow':
        return <YellowPet />;
      case 'red':
        return <RedPet />;
      case 'blue':
        return <BluePet />;
      case 'pink':
        return <PinkPet />;
    }
  }
  return (
    <View className="gap-4 mx-5 pt-6">
      <Text className="font-semibold text-3xl text-primary-dark text-center">
        Escolha seu Gymboo
      </Text>

      <View className="flex-row gap-4 flex-wrap items-center">
        {petsList.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`${pet === item && 'bg-base-medium'} items-center justify-center rounded-lg`}
            onPress={() => setPet(item)}
          >
            {getPetImage(item)}
          </TouchableOpacity>
        ))}
      </View>
      <Button width="100%" style={{ marginBottom: 20 }}>
        <Button.Text>Próximo passo</Button.Text>
      </Button>
    </View>
  );
}
