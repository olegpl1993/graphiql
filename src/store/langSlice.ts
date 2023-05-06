import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
