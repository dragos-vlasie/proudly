import axios from "axios";
import { DELETE_TASK, GET_ERRORS } from "./types";

// Register User
export const deleteTaskAction = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
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
