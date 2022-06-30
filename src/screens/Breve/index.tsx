import React from 'react';
import {Text, View} from 'react-native';
import {ModalAtrib} from '../../modais/ModalAtrib';
import { styles } from './style';

export const Breve = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.breve}>EM BREVE...</Text>
      <ModalAtrib texto="Em breve..." />
    </View>
  );
};

