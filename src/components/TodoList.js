import React from 'react';
import {ScrollView} from 'react-native';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <ScrollView>
      {todos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} id={todo.id} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
