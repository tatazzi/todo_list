import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import {useDispatch} from 'react-redux';
import {addTodo} from '../reducers/todoSlice';

const Home = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Text style={styles.hearderTitle}>Tarefas</Text>
        <Input onChangeText={setTodo} value={todo} />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <TodoList />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  hearderTitle: {
    marginVertical: 52,
    fontSize: 54,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 10,
    marginBottom: 32,
    height: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  todoList: {
    flex: 1,
    padding: 18,
  },
});
export default Home;
