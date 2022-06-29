import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const ModalAtrib = () => {

    const [visibilidade,setVisi] = useState<boolean>(true)

    return <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={()=>{
            setVisi(false)
        }}
        visible={visibilidade}
    >
        <View style={styles.modal}>
            <TouchableOpacity onPress={()=> setVisi(false)}>
                <Text style={styles.text}>
                    Fred
                </Text>
            </TouchableOpacity>
        </View>
    </Modal>
}