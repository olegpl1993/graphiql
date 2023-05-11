import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    isAuth: false,
  },
  reducers: {
    changeUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
    changeIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { changeUser, changeIsAuth } = userSlice.actions;
export default userSlice.reducer;
