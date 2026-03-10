import { useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../button';

export function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [modalVisible, setModalVisible] = useState(false);

  const times = Array.from({ length: 48 }, (_, i) => {
    const hours = Math.floor(i / 2)
      .toString()
      .padStart(2, '0');
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hours}:${minutes}`;
  });

  return (
    <View className="gap-4 mx-5 pt-6">
      <Text className="font-semibold text-3xl text-primary-dark text-center">
        Defina um horário de treinos
      </Text>
      <Text className="text-center">Enviaremos notificações</Text>

      <View className="my-6">
        <Text className="text-base-dark mb-2 ml-1">Horário selecionado</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="flex-row items-center justify-between p-4 rounded-2xl bg-base-medium"
          activeOpacity={0.7}
        >
          <Text className="text-xl font-medium text-primary-dark">
            {selectedTime}
          </Text>
        </TouchableOpacity>
      </View>

      <Button width="100%">
        <Button.Text>Continuar</Button.Text>
      </Button>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-base-medium rounded-t-3xl p-6 h-1/2">
            <Text className="text-lg font-bold text-center mb-4">
              Escolha o horário
            </Text>

            <FlatList
              data={times}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`p-4 rounded-xl mb-2 ${selectedTime === item ? 'border border-primary-dark' : 'bg-base-dark'}`}
                  onPress={() => {
                    setSelectedTime(item);
                    setModalVisible(false);
                  }}
                >
                  <Text
                    className={`text-center text-lg ${selectedTime === item ? 'font-bold text-primary-dark' : 'text-text'}`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
