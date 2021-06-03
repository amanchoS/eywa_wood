# Labs 04

## Prerequisites

- Tooling and work from labs-03

## Task 04.01 - Create a CRA project

Inside the root directory of your project (so inside `labs-xxxxxx/`, not `labs-xxxxxx/client`):

```
npx create-react-app client --use-npm
```

This can take up to few minutes, but once it's done, you should see a new directory called `client`.

To run the project, first go to this `client` directory:

```
cd client
```

and then run the start command:

```
npm start
```

After a while, you should see the CRA interface in the terminal.
Using your browser, go to the URL mentioned in the message, e.g., http://localhost:3000.

If you can see the spinning React logo, everything is fine, and you can add, commit and push your changes.
Protip: It may be more convenient to execute git commands in the repository root.

## Task 04.02 - Create a basic TODO list UI

Replace the contents of `client/src/index.css` file with css code from [this file](./index.css).
You may customize the CSS code further if you want to.

Then, remove the `App.css` file from the `client/src/` directory and remove the code importing it from `App.js`. We won't need this file anymore.
If you have errors after deleting this file, make sure the code changes are saved, refresh the browser, and/or re-run the `npm start` command.

This will provide basic styling for our components so that we can focus on the markup now.

Replace contents of `client/src/App.js` file with JSX markup with some tasks, e.g.:

```jsx
function App() {
  return (
    <div className="app">
      <h1>My Todo List</h1>

      <form className="todo-form">
        <input type="text" placeholder="Add new task…" />
      </form>

      <div className="todo-list">
        <div className="todo-item">
          Item 1
          <div>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="todo-item" style={{ textDecoration: 'line-through' }}>
          Item 2
          <div>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="todo-item">
          Item 3
          <div>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

As there is much repetition, the next step would be to split UI into components and extract `TodoForm` and `TodoItem` React components.

Example solution could look like this:

```jsx
// TodoForm.js file:
function TodoForm() {
  return (
    <form className="todo-form">
      <input type="text" placeholder="Add new task…" />
    </form>
  );
}

export default TodoForm;
```

```jsx
// TodoItem.js file:
function TodoItem({ title, isCompleted }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
      {title}
      <div>
        <button>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
```

```jsx
// App.js file:
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';

function App() {
  return (
    <div className="app">
      <h1>My Todo List</h1>

      <TodoForm />

      <div className="todo-list">
        <TodoItem title="Task 1" />
        <TodoItem title="Task 2" isCompleted />
        <TodoItem title="Task 3" />
      </div>
    </div>
  );
}

export default App;
```

Now we should have a basic, non-interactive UI for our app.

## Task 04.03 - Store and update TODO data in local state.

The next step would be to make our list dynamic and add and modify the list's contents.
For this, we will use react hooks and store data in the `state` of the `App` component.

There are many possibilities to do this, and one solution will be shown during the labs.

For inspiration or alternative solutions, please check [official React documentation](https://reactjs.org/docs/getting-started.html) and/or [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks).

Reference implementation may look like this:

```jsx
// TodoForm.js file:
function TodoForm({ addTask }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    addTask(event.target.title.value);
    form.reset();
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input name="title" type="text" placeholder="Add new task…" />
    </form>
  );
}

export default TodoForm;
```

```jsx
// TodoItem.js file:
function TodoItem({ title, isCompleted, onCompleted, onRemove }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
      {title}
      <div>
        <button onClick={onCompleted}>Done</button>
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
```

```jsx
// App.js file:
import { useState } from 'react';

import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Task 3',
      isCompleted: false,
    },
  ]);

  const addTask = (title) => {
    setTodos([
      ...todos,
      {
        id: Math.round(Math.random() * 10000),
        title,
        isCompleted: false,
      },
    ]);
  };

  const setCompleted = (id, isCompleted) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted,
        };
      }),
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>My Todo List</h1>

      <TodoForm addTask={addTask} />

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            onCompleted={() => setCompleted(todo.id, !todo.isCompleted)}
            onRemove={() => removeTask(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```