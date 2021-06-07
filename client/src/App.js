import { Switch, Route, Link } from 'react-router-dom';

import TodoList from './TodoList.js';
import TodoView from './TodoView.js';




function App() {


  return (
    <div className="app">
      <h1>Todo Application</h1>

      <hr />
      <Link to="/">Home</Link> | <Link to="/list">Todo List</Link>
      <hr />

      <Switch>
        <Route path="/list">
          <TodoList />
        </Route>
        <Route path="/task/:id">
          <TodoView />
        </Route>
        <Route path="/">
          <h3>Welcome to Todo application</h3>        
        </Route>
      </Switch>
    </div>
  );
}

export default App;
