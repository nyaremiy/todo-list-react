import { createSlice } from '@reduxjs/toolkit';
import store from 'store';

const initialState = {
  todos: store.get('todos') || []
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    addTodoByCompleted: (state, action) => {
      state.todos = action.payload;
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, addTodoByCompleted, toggleCompletedTodo, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
