import axios from "axios";
import { DELETE_TASK, GET_ERRORS } from "./types";

// Register User
export const deleteTaskAction = (id, userId) => dispatch => {
  axios
    .delete(`/api/accounts/${id}/${userId}`)
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
