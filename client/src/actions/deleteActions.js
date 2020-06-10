import axios from "axios";
import { DELETE_SUB_TASK, DELETE_TASK, GET_ERRORS } from "./types";

// Register User
export const deleteTaskAction = (id, userId) => dispatch => {
  axios
    .delete(`/api/accounts/${id}/${userId}`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteSubTaskAction = (id, userId) => dispatch => {
  axios
    .delete(`/api/accounts/${id}/${userId}`)
    .then(res => {
      dispatch({
        type: DELETE_SUB_TASK,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
