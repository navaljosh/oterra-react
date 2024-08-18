import { ACTION_TYPES } from './actionTypes';

const initialState = {
  selectedApp: {},
  appSelected: false,
  fullAccess: false
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
    default:
      return state;
  }
}
