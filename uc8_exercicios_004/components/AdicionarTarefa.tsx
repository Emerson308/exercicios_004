import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AdicionarTarefa(props: any){

    const [textoInserido, setTextoInserido] = useState('');
    

    return (
        <View style={styles.adicionarTarefa}>
            <TextInput style={styles.inputTask} value={textoInserido} onChangeText={(novoTexto) => setTextoInserido(novoTexto)} placeholder='Digite algo aqui'/>
            <Button onPress={() => {
                props.adicionarTarefa(textoInserido);
                setTextoInserido('');
            }} title="  +  "></Button>
        </View>
    )
}


const styles = StyleSheet.create({

    adicionarTarefa: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },

    btnTarefa: {
        padding: 5,
        // display: 'flex',
        // paddingLeft: 10,
        // paddingRight: 10,
    },

    inputTask: {
        borderWidth: 1,
        // height: 50,
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 15,
        padding: 8,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: '#000000',
      }
    })