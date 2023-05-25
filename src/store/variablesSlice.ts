import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const variablesSlice = createSlice({
  name: 'variables',
  initialState: {
    variables: '',
  },
  reducers: {
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
  },
});

export const { setVariables } = variablesSlice.actions;
export default variablesSlice.reducer;
