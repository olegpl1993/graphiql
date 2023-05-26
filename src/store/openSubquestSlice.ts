import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const openSubquestSlice = createSlice({
  name: 'openSubquest',
  initialState: {
    openSubquest: false,
  },
  reducers: {
    setOpenSubquest(state, action: PayloadAction<boolean>) {
      state.openSubquest = action.payload;
    },
  },
});

export const { setOpenSubquest } = openSubquestSlice.actions;
export default openSubquestSlice.reducer;
