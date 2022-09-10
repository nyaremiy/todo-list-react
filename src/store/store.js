import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './../features/todo/todoSlice';
import textInputSlice from './../features/textInput/textInputSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    textInput: textInputSlice
  }
});
