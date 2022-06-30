import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface texto {
  texto: string;
}

export const ModalAtrib = ({texto}: texto) => {
  const [visibilidade, setVisi] = useState<boolean>(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setVisi(false);
      }}
      visible={visibilidade}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={() => setVisi(false)}>
          <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
