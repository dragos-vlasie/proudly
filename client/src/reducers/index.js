import { combineReducers } from "redux";
import authReducer from "./authReducers";
import dataReducers from "./dataReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  data: dataReducers,
  errors: errorReducer
});
