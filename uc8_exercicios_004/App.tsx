import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Tarefas from './components/Tarefas';
import AdicionarTarefa from './components/AdicionarTarefa';
import { v4 as uuidv4 } from 'react-native-uuid/dist/v4';



export default function App() {

  interface ITarefas{
    id: string,
    title: string,
    description: string,
    isCompleted: boolean
  }

  let listaExemplo = [
    {
      id: '1',
      title: 'Tarefa 1',
      description: 'Descricao da tarefa 1',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Tarefa 1',
      description: 'Descricao da tarefa 1',
      isCompleted: false
    },
    {
      id: '3',
      title: 'Tarefa 1',
      description: 'Descricao da tarefa 1',
      isCompleted: false
    },
    {
      id: '4',
      title: 'Tarefa 1',
      description: 'Descricao da tarefa 1',
      isCompleted: false
    },
    {
      id: '5',
      title: 'Tarefa 1',
      description: 'Descricao da tarefa 1',
      isCompleted: false
    },


  ]

  const [tarefas, setTarefas] = useState<ITarefas[]>([])


  function adicionarTarefa(title: string) {
    let novaTarefa : ITarefas= {
      id: uuidv4(),
      title,
      description: '',
      isCompleted: false
    }

    setTarefas([...tarefas, novaTarefa]);
    // console.log(tarefas)
  }

  function removerTarefa(id: string){
    let listaSemATarefa = tarefas.filter(objeto => objeto.id !== id);

    setTarefas(listaSemATarefa)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTarefas}>
        <Text style={styles.tiutlo}>Minhas Tarefas</Text>
        <AdicionarTarefa adicionarTarefa={adicionarTarefa}/>
        {/* <Text>{textoInserido}</Text> */}
        <Tarefas tarefas={tarefas} removerTarefa={removerTarefa}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    display: 'flex',
    gap: 15,
    justifyContent: 'center',
  },

  containerTarefas: {
    maxWidth: 400,
    width: 10000,
    backgroundColor: '#f0f0f0',
    padding: 15,
    flex: 1,
    paddingTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    // justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',

  },

  tiutlo: {
    fontWeight: 'bold',
    fontSize: 30
  },

});
