import {useState, useEffect } from 'react';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';
import * as api from './api';


function TodoList () {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchTasks = () => api.getTasks().then(setTasks);
    
    useEffect(() => {
      setLoading(true);
      fetchTasks()
        .catch(setError)
        .finally(() => {
          setLoading(false);
  
        });
    }, []);
  
  
    const setCompleted = (id, isCompleted) => {
      setLoading(true);
      api
        .setCompletedTask(id, isCompleted)
        .then(() => fetchTasks())
        .catch(setError)
        .finally(() => {
          setLoading(false);
  
        });
    };
  
    const deleteTask = (id) => {
      setLoading(true);
      api
      .deleteTask(id)
      .then(() => fetchTasks())
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
    };
  
    const addTask = (title) => {
      setLoading(true);
      api
      .addTask(title)
      .then(() => fetchTasks())
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
    };
  
    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
       );
    }
    
    if (error && error.message) {
      return (
        <div>
          <h1 style = {{ color: 'red' }}>{error.message}</h1>
        </div>
       );
    }

    return (
        <main>
            
            <TodoForm addTask={addTask} />

            <div className="todo-list">   

                {tasks.map((task) => (
                <TodoItem
                key={task._id}
                title={task.title}
                taskID = {task._id}
                isCompleted={task.isCompleted}
                onCompleted={() => setCompleted(task._id, !task.isCompleted)}
                onDelete={() => deleteTask(task._id)}
                />

                ))}
            </div>
        </main>
    );
  
}

export default TodoList;