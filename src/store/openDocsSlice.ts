import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const openDocsSlice = createSlice({
  name: 'openDocs',
  initialState: {
    openDocs: false,
  },
  reducers: {
    setOpenDocs(state, action: PayloadAction<boolean>) {
      state.openDocs = action.payload;
    },
  },
});

export const { setOpenDocs } = openDocsSlice.actions;
export default openDocsSlice.reducer;
