import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface Card {
  foto?: any;
  foto2?: any;
  nome?: string;
  nome2?: string;
}

export const Favoritos = ({foto, foto2, nome, nome2}: Card) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text2}>{nome2}</Text>

      <View style={styles.images}>
        <Image style={styles.foto} source={foto} />
        <Image style={styles.foto2} source={foto2} />
      </View>
    </TouchableOpacity>
  );
};
