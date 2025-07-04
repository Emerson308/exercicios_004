import { View, Text, ScrollView, Button } from "react-native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";


export default function Tarefas(props: any){

    // console.log(props.tarefas.length)

    return (
        <View style={styles.containerTarefas}>
            <Text style={styles.subTitle}>Suas Tarefas:</Text>
            <ScrollView style={styles.tarefas}>
                {   
                    props.tarefas.length == 0
                    ? <Text style={styles.nenhumaTarefa}>Nenhuma tarefa adicionada ainda. Comece a organizar</Text>
                    : props.tarefas.map((tarefa: any, index: number) => (
                        // {console.log(tarefa)}
                        <View key={tarefa.id} style={styles.tarefa}>
                            <Text style={styles.textoTarefa}>{tarefa['title']}</Text>
                            <Button onPress={() => props.removerTarefa(tarefa.id)} title="Excluir"></Button>
                        </View>
                        
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTarefas: {
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#000',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    textoTarefa: {
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },

    tarefa: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        height: 50,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 15,
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    tarefas: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        backgroundColor: 'white',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 30, 
    },

    nenhumaTarefa: {
        textAlign: 'center',
        fontSize: 18,
        color: '#707070'

    }
})