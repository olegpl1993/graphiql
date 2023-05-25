import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    resp: '',
  },
  reducers: {
    setResponse(state, action: PayloadAction<string>) {
      state.resp = action.payload;
    },
  },
});

export const { setResponse } = responseSlice.actions;
export default responseSlice.reducer;
