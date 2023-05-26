import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const headersVariablesSlice = createSlice({
  name: 'headersVariables',
  initialState: {
    headersVariables: false,
  },
  reducers: {
    setHeadersVariables(state, action: PayloadAction<boolean>) {
      state.headersVariables = action.payload;
    },
  },
});

export const { setHeadersVariables } = headersVariablesSlice.actions;
export default headersVariablesSlice.reducer;
