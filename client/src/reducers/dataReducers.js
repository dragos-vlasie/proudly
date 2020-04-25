import {
  DELETE_TASK,
  GET_TASKS,
  GET_USERS,
  GET_USERS_TASKS,
  POST_POINT,
  POST_TASKS
} from "../actions/types";
const initialState = {};

const addPoint = (state, id) => {
  state.tasks.forEach(task => {
    if (task._id === id) {
      task.points++;
    }
  });
  console.log("addPoint -> state.tasks;", state.tasks);
  return state.tasks;
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case GET_USERS_TASKS:
      console.log("GET_USERS_TASKS", action.payload);
      return {
        ...state,
        tasks: action.payload
      };
    case POST_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case POST_POINT:
      return {
        ...state,
        tasks: addPoint(state, action.payload)
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(tasks => tasks._id !== action.payload)
      };
    default:
      return state;
  }
}
