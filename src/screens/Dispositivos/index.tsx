import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {DispoCard} from '../../components/DispoCard/DispoCard';
import {styles} from './style';
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
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navTexto}>DISPOSITIVOS</Text>
        <TouchableOpacity>
          <Image style={styles.botaoAdic} source={Adicionar} />
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <DispoCard foto={EchoEALEXA} nome="Echo e Alexa" />
        <DispoCard foto={PlugueB} nome="Plugues" />
        <DispoCard foto={Cenas} nome="Cenas" />
        <DispoCard foto={TodosDispo} nome="All Devices" />
      </ScrollView>

      <View style={{flex: 50}}>
        <View style={styles.favoritos}>
          <Text style={styles.BoldText}>Favoritos</Text>
          <TouchableOpacity>
            <Text style={styles.editar}>Editar</Text>
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

      <View style={styles.card}>
        <Text style={styles.BoldText}>Grupos</Text>
        <TouchableOpacity>
          <Image style={styles.cardImg} source={Card} />
        </TouchableOpacity>
        <Text style={styles.grupoNome}>Quarto</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.ultimoTexto}>SUAS SKILLS DE CASA INTELIGENTE</Text>
      </TouchableOpacity>
    </View>
  );
};
