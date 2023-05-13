import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    success: false,
    isOpenSnackbar: false,
    snackbarMessage: '',
  },
  reducers: {
    changeSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
    changeIsOpenSnackbar(state, action: PayloadAction<boolean>) {
      state.isOpenSnackbar = action.payload;
    },
    changeSnackbarMessage(state, action: PayloadAction<string>) {
      state.snackbarMessage = action.payload;
    },
  },
});

export const { changeSuccess, changeIsOpenSnackbar, changeSnackbarMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer;
