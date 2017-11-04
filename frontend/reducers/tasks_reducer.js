import {RECEIVE_TASK} from '../actions/task_actions';

//probably want to get taks from a database;

const default_tasks = {
                         byTitle: [
                                    {id: 1, title: "test_task"},
                                    {id: 2, title: "second task"}
                                  ],
                         byBoard: {one: [1], two: [2], three: []}
                       };


const TasksReducer = (state = default_tasks, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      //now it won't be as simple,
      // const new_state = merge({}, state, task)
    default:
      return state;
  }
}

export default TasksReducer;
