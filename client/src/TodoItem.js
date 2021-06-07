import { Link } from 'react-router-dom';



function TodoItem({ taskID, title, isCompleted, onCompleted, onDelete }) {
  return (
    <div 
      className="todo-item"
      style={{
        textDecoration: isCompleted ? 'line-through' : '',
      }}>
      {title}
      <div>
        <Link to= {`/task/${taskID}`}>
          <button>View</button> 
        </Link>
        <button onClick={onCompleted}>Done</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}


export default TodoItem;