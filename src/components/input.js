import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Input = () => {
  return (
    <TextInput style={styles.input} placeholder="Digite uma nova tarefa" />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 52,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Input;
