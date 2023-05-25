import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const variableSlice = createSlice({
  name: 'variable',
  initialState: {
    variable: '',
  },
  reducers: {
    setVariable(state, action: PayloadAction<string>) {
      state.variable = action.payload;
    },
  },
});

export const { setVariable } = variableSlice.actions;
export default variableSlice.reducer;
