import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    value: '',
  },
  reducers: {
    setResponse(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setResponse } = responseSlice.actions;
export default responseSlice.reducer;
