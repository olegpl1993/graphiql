import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';
import userReducer from './userSlice';
import snackbarReducer from './snackbarSlice';
import queryReducer from './querySlice';
import responseReducer from './responseSlice';
import variableReducer from './variableSlice';
import loadingReduser from './loadingSlice';

const store = configureStore({
  reducer: {
    langState: langReducer,
    userState: userReducer,
    snackbarState: snackbarReducer,
    queryState: queryReducer,
    responseState: responseReducer,
    variableState: variableReducer,
    loadingState: loadingReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
