import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
} from './actionTypes';

export function addTask(taskDesc) {
  return {
    type: ADD_TASK,
    payload: taskDesc,
  };
}

export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}

export function removeTask(taskId) {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
}
