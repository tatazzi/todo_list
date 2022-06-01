import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({onChangeText, value}) => {
  return (
    <TextInput
      autoCorrect={false}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
      placeholder="Digite uma nova tarefa"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default Input;
