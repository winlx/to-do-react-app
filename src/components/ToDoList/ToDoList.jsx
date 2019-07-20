import React from 'react';
import Task from './components/Task';

export default function ToDoList(props) {
  return props.tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      dispatch={props.dispatch}
    />
  ));
}
