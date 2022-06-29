import React from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "./style";

interface Card{
    foto: any,
    nome: string
}

export const DispoCard = ({foto,nome}: Card) => {
    return (
        <View>

            <View style={Styles.card}>
                <Image style={Styles.img} source={foto}/>
            </View>

            <View>
                <Text style={Styles.texto}>{nome}</Text>
            </View>
           
        </View>
    )
}