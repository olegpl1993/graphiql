import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const urlSlice = createSlice({
  name: 'url',
  initialState: {
    url: 'https://rickandmortyapi.com/graphql',
  },
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
});

export const { setUrl } = urlSlice.actions;
export default urlSlice.reducer;
