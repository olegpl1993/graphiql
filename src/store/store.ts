import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';
import userReducer from './userSlice';
import snackbarReducer from './snackbarSlice';

const store = configureStore({
  reducer: {
    langState: langReducer,
    userState: userReducer,
    snackbarState: snackbarReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
