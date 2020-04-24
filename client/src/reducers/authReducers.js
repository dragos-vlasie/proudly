import {
  SET_CURRENT_USER,
  USER_LOADING,
  USER_LOGGIN_SUCCESS
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload)
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
