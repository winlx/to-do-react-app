import React, { useReducer, useMemo } from 'react';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Divider from 'antd/lib/divider';
import 'antd/lib/divider/style/css';
import AddingTast from './components/AddingTast';
import ToDoList from './components/ToDoList/ToDoList';
import reducer from './state/reducer';
import './App.css';

const initialState = {};

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const sortedTasks = useMemo(
    () => {
      const arr = Object.values(tasks);
      return arr.sort((a, b) => a.sortOrder - b.sortOrder);
    },
    [tasks],
  );

  return (
    <Card
      // title="To-do app"
      className="to-do-app"
    >
      <Divider>Добавление задачи</Divider>
      <AddingTast
        dispatch={dispatch}
      />
      <Divider>Список задач</Divider>
      <ToDoList
        tasks={sortedTasks}
        dispatch={dispatch}
      />
    </Card>
  );
}

export default App;
