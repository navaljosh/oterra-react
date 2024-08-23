import { ACTION_TYPES } from './actionTypes';

export const loginUser = ({ user, isInit = false }) => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGGED_USER,
      payload: user,
    });
    if(!isInit){
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
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUserId');
  };
};
