import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';
import userReducer from './userSlice';
import snackbarReducer from './snackbarSlice';
import queryReducer from './querySlice';
import responseReducer from './responseSlice';
import variableReducer from './variablesSlice';
import loadingReducer from './loadingSlice';
import headersReducer from './headersSlice';
import openDocsReducer from './openDocsSlice';
import openSubquestReducer from './openSubquestSlice';
import headersVariablesReducer from './headersVariablesSlice';

const store = configureStore({
  reducer: {
    langState: langReducer,
    userState: userReducer,
    snackbarState: snackbarReducer,
    queryState: queryReducer,
    responseState: responseReducer,
    variableState: variableReducer,
    loadingState: loadingReducer,
    headersState: headersReducer,
    openDocsState: openDocsReducer,
    openSubquestState: openSubquestReducer,
    headersVariablesState: headersVariablesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
