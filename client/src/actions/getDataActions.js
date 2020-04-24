import axios from "axios";
import { GET_ERRORS, GET_USERS } from "./types";

// Register User
export const getUsersAction = () => dispatch => {
  axios
    .get("/api/users/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//get task date
export const getTasksAction = () => dispatch => {
  axios
    .get("/api/users/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
