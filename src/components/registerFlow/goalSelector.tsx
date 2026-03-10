import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../button';

export function GoalSelector() {
  const goalDays = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
    'Domingo',
  ];

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  function addDay(day: string) {
    if (selectedDays.includes(day)) {
      setSelectedDays((state) => state.filter((item) => item !== day));
    } else {
      setSelectedDays((state) => [...state, day]);
    }
  }

  return (
    <View className="gap-4 mx-5 pt-6">
      <Text className="font-semibold text-3xl text-primary-dark text-center">
        Defina sua meta
      </Text>
      <Text className="text-center">
        Seleciona os dias que pretende ser exercitar
      </Text>

      <View className="w-full gap-5 flex-wrap flex-row">
        {goalDays.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`${selectedDays.includes(item) ? 'bg-blue-500' : 'bg-blue-300'} px-7 py-2 rounded-full`}
            onPress={() => addDay(item)}
          >
            <Text> {item} </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-center font-medium">
        <Text className="font-bold text-3xl text-blue-500">
          {selectedDays.length}
        </Text>{' '}
        dias por semana!
      </Text>

      <Button width="100%">
        <Button.Text> Continuar </Button.Text>
      </Button>
    </View>
  );
}
