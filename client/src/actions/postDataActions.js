import axios from "axios";
import { GET_ERRORS, POST_POINT, POST_TASKS } from "./types";

// Post a new Task
export const addTaskAction = newTask => dispatch => {
  axios
    .post("/api/accounts/", newTask)
    .then(res => {
      dispatch({
        type: POST_TASKS,
        payload: res.data
      });
    }) // re-direct to login on successful register
    .catch(err => {
      console.log("err", err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Post a new point
export const postPointAction = (userId, taskId) => dispatch => {
  axios
    .post(`/api/accounts/${userId}/${taskId}/points`)
    .then(res => {
      dispatch({
        type: POST_POINT,
        payload: userId
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
