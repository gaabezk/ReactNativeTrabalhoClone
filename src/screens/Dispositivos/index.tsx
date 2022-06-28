import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { DispoCard } from "../../Components/DispoCard/DispoCard";
import { Styles } from "./style";
import Cenas from '../../assets/images/Cenas.png'
import EchoEALEXA from '../../assets/images/EchoEAlexa.png'
import TodosDispo from '../../assets/images/TodosDispo.png'
import Plugues from '../../assets/images/Plugues.png'
import Adicionar from '../../assets/images/BotaoAdicionar.png'
export const Dispositivos = () => {
    return (
        <View style={Styles.container}>

            <View style={Styles.nav}>
                <Text style={Styles.navTexto} >DISPOSITIVOS</Text>
                <Image style={Styles.botaoAdic} source={Adicionar}/>
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <DispoCard foto={EchoEALEXA} nome='Echo e Alexa'/>
                <DispoCard foto={Plugues} nome='Plugues'/>
                <DispoCard foto={Cenas} nome='Cenas'/>
                <DispoCard foto={TodosDispo} nome='Todos os dispositivos'/>
            </ScrollView>

            <View style={Styles.favoritos}>
                <Text style={Styles.favoritosText}>Favoritos</Text>
                <Text style={Styles.editar}>Editar</Text>
            </View>

        </View>
    )
}