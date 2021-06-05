import {useState, useEffect } from 'react';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';


const getTasks = () => {
  return fetch('http://localhost:4000/api/tasks').then((response) => 
    response.json(),
  );
  
};


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);


  const setCompleted = (id, isCompleted) => {
    fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isCompleted,
      }),
    })
    .then(() => {
      getTasks().then((data) => setTasks(data));
    })
    .catch((err) => console.error(err));
  };

  const deleteTask = (id) => {

    fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: 'delete',
    })
      .then(() => {
        getTasks().then((data) => setTasks(data));
      })
      .catch((err) => console.error(err));
  };

  const addTask = (title) => {
    fetch('http://localhost:4000/api/tasks', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        isCompleted: false,
      }),
    })
    .then(() => {
      getTasks().then((data) => setTasks(data));
    })
    .catch((err) => console.error(err));
  };

  return (
    <div className="app">
      <h1>Todo application</h1>
      <TodoForm addTask={addTask} />

      <div className="todo-list">

        {tasks.map((task) => (
          <TodoItem
            key={task._id}
            title={task.title}
            isCompleted={task.isCompleted}
            onCompleted={() => setCompleted(task._id, !task.isCompleted)}
            onDelete={() => deleteTask(task._id)}
          />

        ))}
      </div>
    </div>
  );
}

export default App;
