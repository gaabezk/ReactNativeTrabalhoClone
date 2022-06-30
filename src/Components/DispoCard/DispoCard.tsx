import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';

interface Card {
  foto: any;
  nome: string;
}

export const DispoCard = ({foto, nome}: Card) => {
  return (
    <View>
      <TouchableOpacity style={Styles.card}>
        <Image style={Styles.img} source={foto} />
      </TouchableOpacity>

      <View>
        <Text style={Styles.texto}>{nome}</Text>
      </View>
    </View>
  );
};
