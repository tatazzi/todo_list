import {createSlice} from '@reduxjs/toolkit';
let nextTodoId = 1000;

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({id: nextTodoId++, title: action.payload});
    },
    removeTodo(state, action) {
      state.splice(
        state.findIndex(el => {
          return el.id === action.payload;
        }),
        1,
      );
    },
  },
});
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
