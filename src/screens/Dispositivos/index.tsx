import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {DispoCard} from '../../components/DispoCard/DispoCard';
import {Styles} from './style';
import Cenas from '../../assets/images/Cenas.png';
import EchoEALEXA from '../../assets/images/EchoEAlexa.png';
import TodosDispo from '../../assets/images/TodosDispo.png';
import PlugueB from '../../assets/images/Plugues.png';
import PlugueC from '../../assets/images/PluguesCinza.png';
import pontos from '../../assets/images/3pontos.png';
import Adicionar from '../../assets/images/BotaoAdicionar.png';
import echo from '../../assets/images/EchoDot.png';
import AdicionarB from '../../assets/images/BotaoAdicionarAzul.png';
import {Favoritos} from '../../components/Favoritos/Favoritos';

export const Dispositivos = () => {
  return (
    <View style={Styles.container}>

      <View style={Styles.nav}>
        <Text style={Styles.navTexto}>DISPOSITIVOS</Text>
        <TouchableOpacity>
            <Image style={Styles.botaoAdic} source={Adicionar} />
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <DispoCard foto={EchoEALEXA} nome="Echo e Alexa" />
        <DispoCard foto={PlugueB} nome="Plugues" />
        <DispoCard foto={Cenas} nome="Cenas" />
        <DispoCard foto={TodosDispo} nome="All Devices" />
      </ScrollView>

      {/* <ModalAtrib/> */}

      <View style={{flex: 50}}>
        <View style={Styles.favoritos}>
          <Text style={Styles.favoritosText}>Favoritos</Text>
          <TouchableOpacity>
            <Text style={Styles.editar}>Editar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Favoritos nome="Sonoff"nome2="desativado"foto={PlugueC}foto2={pontos}/>
          <Favoritos nome="Echo Dot de Gabriel" foto={echo} />
          <Favoritos nome="Adicionar  novo favorito" foto={AdicionarB} />
        </ScrollView>
      </View>

      <View style={{flex: 60}}>
        
      </View>
    </View>
  );
};
