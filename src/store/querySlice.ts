import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    value: 'query {}',
  },
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
