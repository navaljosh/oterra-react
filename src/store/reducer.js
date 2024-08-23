import { ACTION_TYPES } from './actionTypes';

const initialState = {
  selectedApp: {},
  appSelected: false,
  fullAccess: false,
  selectedVariant: 'yellow',
  showMenu: false,
  loggedUser: {},
  awsUserData: {}
};
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.APP_SELECTED: {
      return {
        ...state,
        appSelected: action.payload,
      };
    }
    case ACTION_TYPES.SELECTED_APP: {
      return {
        ...state,
        selectedApp: action.payload,
      };
    }
    case ACTION_TYPES.FULL_ACCESS: {
      return {
        ...state,
        fullAccess: action.payload,
      };
    }
    case ACTION_TYPES.SELECTED_VARIANT: {
      return {
        ...state,
        selectedVariant: action.payload,
      };
    }
    case ACTION_TYPES.LOGGED_USER: {
      return {
        ...state,
        loggedUser: action.payload,
      };
    }
    case ACTION_TYPES.SHOW_MENU: {
      return {
        ...state,
        showMenu: action.payload,
      };
    }
    case ACTION_TYPES.AWS_USER_DATA: {
      return {
        ...state,
        awsUserData: action.payload,
      };
    }
    case ACTION_TYPES.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
