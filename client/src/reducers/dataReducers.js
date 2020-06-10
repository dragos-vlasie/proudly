import {
  DELETE_SUB_TASK,
  DELETE_TASK,
  EDIT_CUPS,
  EDIT_SUBTASKS,
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
      task.name = payload.task;
      console.log("updateTask -> payload.task", payload.task);
    }
  });
  return state.tasks;
};

const updateCups = (state, payload) => {
  state.users.forEach(user => {
    if (user._id === payload.userId) {
      user.cupsOfWater = parseInt(payload.cupsValueData.value);
    }
  });
  return state.users;
};

const updateSubTasks = (state, payload) => {
  console.log("updateSubTasks -> payload", payload);
  console.log("updateSubTasks -> state.tasks;", state.tasks);
  let subTask;
  payload.tasks.forEach(task => {
    if (task._id === payload.id) {
      subTask = task.subTasks[task.subTasks.length - 1];
    }
  });
  state.tasks.forEach(task => {
    if (task._id === payload.id) {
      task.subTasks.push(subTask);
    }
  });
  return state.tasks;
};

const deleteSubTask = (state, payload) => {
  const subtaskId = payload.split("|")[0];
  const taskId = payload.split("|")[1];
  let newState = state;

  let subTaskArray;
  const test = newState.tasks.forEach(task => {
    if (task._id === taskId) {
      subTaskArray = task.subTasks.filter(subTask => subTask._id !== subtaskId);
    }
  });
  console.log("deleteSubTask -> test", test);

  console.log("deleteSubTask -> newState", newState);

  console.log("deleteSubTask -> state.tasks", state.tasks);
  return subTaskArray;
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
      return {
        ...state,
        tasks: state.tasks.filter(tasks => tasks._id !== action.payload)
      };
    case DELETE_SUB_TASK:
      return {
        ...state,
        tasks: state.tasks,
        subTasks: deleteSubTask(state, action.payload)
      };
    case EDIT_SUBTASKS:
      return {
        ...state,
        tasks: updateSubTasks(state, action.payload)
      };
    default:
      return state;
  }
}

// import {
//   DELETE_SUB_TASK,
//   DELETE_TASK,
//   EDIT_CUPS,
//   EDIT_SUBTASKS,
//   EDIT_TASK,
//   GET_TASKS,
//   GET_USERS,
//   GET_USERS_TASKS,
//   POST_POINT,
//   POST_TASKS
// } from "../actions/types";
// const initialState = {
//   tasks: [],
//   data: []
// };

// // const addPoint = (state, id) => {
// //   state.tasks.forEach(task => {
// //     if (task._id === id) {
// //       task.points++;
// //     }
// //   });
// //   console.log("addPoint -> state.tasks;", state.tasks);
// //   return state.tasks;
// // };

// const updateSubTasks = (state, payload) => {
//   console.log("updateSubTasks -> payload", payload);
//   console.log("updateSubTasks -> state.tasks;", state.tasks);
//   let subTask;
//   payload.tasks.forEach(task => {
//     if (task._id === payload.id) {
//       subTask = task.subTasks[task.subTasks.length - 1];
//     }
//   });
//   state.tasks.forEach(task => {
//     if (task._id === payload.id) {
//       task.subTasks.push(subTask);
//     }
//   });
//   return state.tasks;
// };

// const updateTask = (state, payload) => {
//   state.tasks.forEach(task => {
//     if (task._id === payload.id) {
//       task.name = payload.task;
//       console.log("updateTask -> payload.task", payload.task);
//     }
//   });
//   return state.tasks;
// };

// const updateCups = (state, payload) => {
//   state.users.forEach(user => {
//     if (user._id === payload.userId) {
//       user.cupsOfWater = parseInt(payload.cupsValueData.value);
//     }
//   });
//   return state.users;
// };

// const deleteSubTask = (state, payload) => {
//   const subtaskId = payload.split("|")[0];
//   const taskId = payload.split("|")[1];
//   //  = state.tasks.forEach(task => {
//   //   if (task._id === taskId) {
//   //     task.subTasks.filter(subTask => subTask._id !== subtaskId);
//   //   }
//   // });
//   let test = state.tasks.filter(tasks => tasks._id === taskId);
//   let anotherTest = test.subTasks.filter(subTask => subTask._id !== subtaskId);

//   console.log("deleteSubTask -> anotherTest", anotherTest);
//   console.log("deleteSubTask -> test", test);

//   return state.tasks;
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case GET_USERS:
//       return {
//         ...state,
//         users: action.payload
//       };
//     case GET_TASKS:
//       return {
//         ...state,
//         tasks: action.payload
//       };
//     case GET_USERS_TASKS:
//       return {
//         ...state,
//         tasks: action.payload
//       };
//     case POST_TASKS:
//       return {
//         ...state,
//         tasks: action.payload.tasks
//       };
//     case POST_POINT:
//       return {
//         ...state
//         // points: addPoint(state, action.payload)
//       };
//     case EDIT_TASK:
//       return {
//         ...state,
//         tasks: updateTask(state, action.payload)
//       };
//     case EDIT_CUPS:
//       return {
//         ...state,
//         users: updateCups(state, action.payload)
//       };
//     case DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter(tasks => tasks._id !== action.payload)
//       };
//     case DELETE_SUB_TASK:
//       return {
//         ...state,
//         tasks: deleteSubTask(state, action.payload)
//       };
//     case EDIT_SUBTASKS:
//       return {
//         ...state,
//         tasks: updateSubTasks(state, action.payload)
//       };
//     default:
//       return state;
//   }
// }
