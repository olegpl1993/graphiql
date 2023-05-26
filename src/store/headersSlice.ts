import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const headersSlice = createSlice({
  name: 'headers',
  initialState: {
    headers: '',
  },
  reducers: {
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const { setHeaders } = headersSlice.actions;
export default headersSlice.reducer;
