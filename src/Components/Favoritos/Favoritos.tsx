import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

interface Card{
    foto?: any,
    foto2?: any,
    nome?: string,
    nome2?: string,
}

export const Favoritos = ({foto,foto2,nome,nome2}: Card) => {
    return (
        <TouchableOpacity style={Styles.container}>

            <Text style={Styles.text}>{nome}</Text>
            <Text style={Styles.text2}>{nome2}</Text>

            <View style={Styles.images}>
                <Image style={Styles.foto} source={foto}/>
                <Image style={Styles.foto2} source={foto2}/>
            </View>
            
        </TouchableOpacity>
    )
}