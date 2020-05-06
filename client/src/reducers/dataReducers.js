import {
  DELETE_TASK,
  EDIT_CUPS,
  EDIT_TASK,
  GET_TASKS,
  GET_USERS,
  GET_USERS_TASKS,
  POST_POINT,
  POST_TASKS
} from "../actions/types";
const initialState = {
  tasks: [],
  data: []
};

// const addPoint = (state, id) => {
//   state.tasks.forEach(task => {
//     if (task._id === id) {
//       task.points++;
//     }
//   });
//   console.log("addPoint -> state.tasks;", state.tasks);
//   return state.tasks;
// };

const updateTask = (state, payload) => {
  state.tasks.forEach(task => {
    if (task._id === payload.id) {
      console.log(" task.name", task.name);
      task.name = payload.task;
    }
  });
  return state.tasks;
};

const updateCups = (state, payload) => {
  console.log("updateCups -> state.users", state.users);
  state.users.forEach(user => {
    console.log("updateCups -> user", user._id);
    if (user._id === payload.userId) {
      user.cupsOfWater = parseInt(payload.cupsValueData.value);
    }
  });
  console.log("updateCups -> state.users", state.users);
  return state.users;
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
      return {
        ...state,
        tasks: action.payload
      };
    case POST_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks
      };
    case POST_POINT:
      return {
        ...state
        // points: addPoint(state, action.payload)
      };
    case EDIT_TASK:
      console.log("action.payload", action.payload);
      return {
        ...state,
        tasks: updateTask(state, action.payload)
      };
    case EDIT_CUPS:
      return {
        ...state,
        users: updateCups(state, action.payload)
      };
    case DELETE_TASK:
      console.log(state);
      return {
        ...state,
        tasks: state.tasks.filter(tasks => tasks._id !== action.payload)
      };
    default:
      return state;
  }
}
