import axios from "axios";
import {
  EDIT_CUPS,
  EDIT_SUBTASKS,
  EDIT_TASK,
  GET_ERRORS,
  POST_POINT,
  POST_TASKS
} from "./types";

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

// edit Task
export const editTaskAction = (userId, id, taskData) => dispatch => {
  axios
    .post(`/api/accounts/${userId}/${id}/`, taskData)
    .then(res => {
      dispatch({
        type: EDIT_TASK,
        payload: { task: taskData.name, id: id }
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// edit subTask
export const editSubTaskAction = (userId, id, subTaskData) => dispatch => {
  axios
    .post(`/api/accounts/${userId}/${id}/`, subTaskData)
    .then(res => {
      dispatch({
        type: EDIT_SUBTASKS,
        payload: { subTask: subTaskData, id: id }
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Edit water cup value
export const editCupsValueAction = (userId, cupsValueData) => dispatch => {
  axios
    .post(`api/users/${userId}/`, cupsValueData)
    .then(res => {
      dispatch({
        type: EDIT_CUPS,
        payload: { cupsValueData, userId }
      });
    }) // re-direct to login on successful register
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
