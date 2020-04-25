import axios from "axios";
import { GET_ERRORS, POST_POINT, POST_TASKS } from "./types";

// Post a new Task
export const addTaskAction = newTask => dispatch => {
  axios
    .post("/api/tasks/", newTask)
    .then(res => {
      console.log("res", res);
      dispatch({
        type: POST_TASKS,
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

// Post a new point
export const postPointAction = id => dispatch => {
  axios
    .post(`/api/tasks/${id}/points`)
    .then(res => {
      dispatch({
        type: POST_POINT,
        payload: id
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
