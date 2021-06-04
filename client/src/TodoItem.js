function TodoItem({ title, isCompleted, onCompleted, onDelete }) {
  return (
    <div 
      className="todo-item"
      style={{
        textDecoration: isCompleted ? 'line-through' : '',
      }}>
      {title}
      <div>
        <button onClick={onCompleted}>Done</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}


export default TodoItem;