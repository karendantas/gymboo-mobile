import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../button';
import { Input } from '../input';

export function PetNameSelector() {
  return (
    <View className="gap-4 mx-5 pt-6">
      <Text className="font-semibold text-3xl text-primary-dark text-center">
        De um nome ao seu Gymboo
      </Text>
      <Text className="text-center">
        Ele será seu parceiro, cuide bem dele!
      </Text>

      <Input placeholder="Escolha um nome" />

      <Button width="100%" style={{ marginBottom: 20 }}>
        <Button.Text>Finalizar</Button.Text>
      </Button>
    </View>
  );
}
