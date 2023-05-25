import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loads: false,
  },
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loads = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
