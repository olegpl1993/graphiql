import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';

const store = configureStore({
  reducer: {
    langState: langReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
