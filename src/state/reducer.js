import nanoid from 'nanoid';
import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
} from './actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK: {
      const arr = Object.values(state);
      arr.sort((a, b) => a.sortOrder - b.sortOrder);
      const sortOrder = arr.length ? arr[arr.length - 1].sortOrder + 1 : 1;
      const taskId = nanoid();

      return {
        ...state,
        [taskId]: {
          id: taskId,
          desc: action.payload,
          sortOrder,
          isFinished: false,
        },
      };
    }

    case EDIT_TASK: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...newState[action.payload.id],
        ...action.payload,
      };

      return newState;
    }

    case REMOVE_TASK: {
      const newState = { ...state };
      delete newState[action.payload];

      return newState;
    }

    default:
      throw new Error(`Такого экшена "${action.type}" не существует.`);
  }
}
