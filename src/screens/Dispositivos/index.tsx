import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {DispoCard} from '../../components/DispoCard/DispoCard';
import {Styles} from './style';
import Card from '../../assets/images/Quarto.png';
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
          <Text style={Styles.BoldText}>Favoritos</Text>
          <TouchableOpacity>
            <Text style={Styles.editar}>Editar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Favoritos
            nome="Sonoff"
            nome2="Desativado"
            foto={PlugueC}
            foto2={pontos}
          />
          <Favoritos nome="Echo Dot de Gabriel" foto={echo} />
          <Favoritos nome="Adicionar  novo favorito" foto={AdicionarB} />
        </ScrollView>
      </View>

      <View style={Styles.card}>
        <Text style={Styles.BoldText}>Grupos</Text>
        <TouchableOpacity>
          <Image style={Styles.cardImg} source={Card} />
        </TouchableOpacity>
        <Text style={Styles.grupoNome}>Quarto</Text>
      </View>
      <TouchableOpacity>
        <Text style={Styles.ultimoTexto}>SUAS SKILLS DE CASA INTELIGENTE</Text>
      </TouchableOpacity>
    </View>
  );
};
