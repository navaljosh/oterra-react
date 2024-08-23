import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';
import { loadState } from './localStorage.utils';
import { ACTION_TYPES } from './actionTypes';
const persistedState = loadState();

const store = configureStore({
  reducer: appReducer,
});

store.dispatch({
  type: ACTION_TYPES.LOGGED_USER,
  payload: persistedState,
});

export default store;
