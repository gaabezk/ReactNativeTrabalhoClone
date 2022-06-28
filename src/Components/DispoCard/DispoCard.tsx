import React from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "./style";

export const DispoCard = (props) => {
    return (
        <View>

            <View style={Styles.card}>
                <Image style={Styles.img} source={props.foto}/>
            </View>

            <View>
                <Text style={Styles.texto}>{props.nome}</Text>
            </View>
           
        </View>
    )
}