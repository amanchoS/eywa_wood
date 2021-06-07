import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from './api';


function TodoView () {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchTask = () => api.getTask(id).then(setTask);
    
    useEffect(() => {
      setLoading(true);
      fetchTask()
        .catch(setError)
        .finally(() => {
          setLoading(false);
  
        });
    }, []);
    if (loading || !task) {
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
        <div>
            <h2>{task.title}</h2>
            {task.isCompleted ? (
                <div>Task was completed</div>
            ) : (
                <div> Task was not completed yet  </div>

            )}

            
            
        </div>
    );


}


export default TodoView;