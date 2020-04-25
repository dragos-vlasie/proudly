import axios from "axios";
import { GET_ERRORS, GET_TASKS, GET_USERS, GET_USERS_TASKS } from "./types";

// Register User
export const getUsersAction = () => dispatch => {
  axios
    .get("/api/users/")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get Users tasks
export const getTasksByUserIdAction = id => dispatch => {
  console.log("id", id);
  axios
    .get(`/api/tasks/${id}/`)
    .then(res => {
      dispatch({
        type: GET_USERS_TASKS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//get task date
export const getTasksAction = () => dispatch => {
  axios
    .get("/api/tasks/")
    .then(res => {
      dispatch({
        type: GET_TASKS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
