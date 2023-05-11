import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    langState: langReducer,
    userState: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
