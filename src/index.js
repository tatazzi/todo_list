import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input from './components/input';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hearderTitle}>Tarefas</Text>
      <Input />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hearderTitle: {
    marginVertical: 52,
    fontSize: 54,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    height: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
});
export default Home;
