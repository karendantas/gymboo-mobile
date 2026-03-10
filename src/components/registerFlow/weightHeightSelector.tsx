import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../button';
import { Input } from '../input';

export function WeightHeightSelector() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  return (
    <View className="gap-4 mx-5 pt-6">
      <Text className="font-semibold text-3xl text-primary-dark text-center">
        Quais são suas medidas?
      </Text>

      <View className="mt-8 gap-6">
        <Input
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          placeholderTextColor="#9CA3AF"
        />

        <Input
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <Button
        width="100%"
        onPress={() => console.log({ weight, height })}
        style={{ marginBottom: 20 }}
      >
        <Button.Text>Próximo passo</Button.Text>
      </Button>
    </View>
  );
}
