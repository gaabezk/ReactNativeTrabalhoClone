import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface Card {
  foto: any;
  nome: string;
}

export const DispoCard = ({foto, nome}: Card) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.img} source={foto} />
      </TouchableOpacity>

      <View>
        <Text style={styles.texto}>{nome}</Text>
      </View>
    </View>
  );
};
