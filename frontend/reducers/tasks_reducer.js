import {RECEIVE_TASK} from '../actions/task_actions';

const default_tasks = {1: {title: "test_task"}}


const TasksReducer = (state = default_tasks, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      const new_state = merge({}, state, task)
    default:
      return state;
  }
}

export default TasksReducer;
