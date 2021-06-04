import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';


function App() {
  return (
    <div className="app">
      <h1>Todo application</h1>
      <TodoForm />

      <div className="todo-list">
        <TodoItem title="First item"/>
        <TodoItem title="Second item" isCompleted/>
        <TodoItem title="Third item" isCompleted />
      </div>
    </div>
  );
}

export default App;
