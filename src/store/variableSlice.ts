import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  value: string;
}

const initialState: InitialState = {
  value: '',
};

const variableSlice = createSlice({
  name: 'variable',
  initialState,
  reducers: {
    setVariable(state, { payload: { value } }: PayloadAction<InitialState>) {
      state.value = value;
    },
  },
});

export const { setVariable } = variableSlice.actions;
export default variableSlice.reducer;
