import { ACTION_TYPES } from './actionTypes';

export const loginUser = ({ user, isInit = false }) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGGED_USER,
      payload: user,
    });
    if (!isInit) {
      localStorage.setItem('loggedUserId', user?.email);
      localStorage.setItem('loggedUser', JSON.stringify(user));
    }
  };
};

export const logOutUser = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGGED_USER,
      payload: {},
    });
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
    dispatch({
      type: ACTION_TYPES.ACCESS_SENT,
      payload: false,
    });
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUserId');
    sessionStorage.removeItem(btoa('fullAccess'));
    localStorage.removeItem('accessSent');
  };
};
