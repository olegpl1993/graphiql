import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Languages } from '../types';

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang(state, action: PayloadAction<Languages>) {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
