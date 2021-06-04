function TodoItem({ title, isCompleted }) {
  return (
    <div 
      className="todo-item"
      style={{
        textDecoration: isCompleted ? 'line-through' : '',
      }}>
      {title}
      <div>
        <button>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
}


export default TodoItem;