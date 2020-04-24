import { GET_USERS } from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        return: action.payload
      };
    default:
      return state;
  }
}
