import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    addTextInput: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { addTextInput } = textInputSlice.actions;
export default textInputSlice.reducer;
