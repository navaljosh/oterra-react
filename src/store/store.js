import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';
import { checkAccess, checkAccessSent, loadState } from './localStorage.utils';
import { ACTION_TYPES } from './actionTypes';
const persistedState = loadState();
const access = checkAccess();
const accessSent = checkAccessSent();

const store = configureStore({
  reducer: appReducer,
});

store.dispatch({
  type: ACTION_TYPES.LOGGED_USER,
  payload: persistedState,
});

store.dispatch({
  type: ACTION_TYPES.FULL_ACCESS,
  payload: access,
});

store.dispatch({
  type: ACTION_TYPES.ACCESS_SENT,
  payload: accessSent,
});

export default store;
