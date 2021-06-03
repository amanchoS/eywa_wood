# Labs 02

## Prerequisites

- IDE / Code editor
- Git
- Docker
- Node v14+
- npm v6
- Postman

More details & installation instructions are posted on MS Teams.

## Task 02.01 - Setup a skeleton app

Create a new directory called `server` in your repository.

Initialize a new npm project **in this directory** with:

```sh
npm init
```

Answer to all questions. When in doubt, click enter to use the default value.

Once the project is created, check out the newly created `package.json` file and add a new property to this file:

```json
"type": "module",
```

This is required to use the `import` syntax in node v14.

The next step is to add dependencies to your project:

```sh
npm install express
```

Create a new file `app.js`, and inside it setup a basic express application returning `Hello World` for every `GET /` request.

An example `app.js` file may look like this:

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('The app is listining at http://localhost:4000');
});
```

Test your application by running a command in the terminal:

```sh
node app.js
```

If the app started correctly, you should see a message in the terminal with an URL.

Visit it with your browser, and you should see a `Hello World!` message.

**Important notice!** When committing your code, make sure you do not commit the contents of the `node_modules` directory! One way of doing this is by adding it to the `.gitignore` file. This is a one-time per project thing. An example contents of a `.gitignore` located in the root of your repository file may look like this:

```
**/node_modules/
```

When done, commit and push your changes to the GitHub repository.

## Task 02.02 - Create a basic CRUD API application

Continue your project created in the previous task.

Add route handlers typical for a simple CRUD API application, that is responsibe for managing Tasks in a TODO list:

- `GET /api/tasks` - returns a list of tasks
- `POST /api/tasks` - add a new task to the list
- `GET /api/tasks/:id` - return data for task with `id`
- `PUT /api/tasks/:id` - update data of a task with `id`
- `DELETE /api/tasks/:id` - remove the task with `id`

The routes should accept and return JSON.

In the beginning, each route should return a `501 Not Implemented` response if the feature is not yet implemented.

Example code may look like this:

```js
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.status(501);
  res.send('Not implemented!');
});

app.post('/api/tasks', (req, res) => {
  res.status(501);
  res.send('Not implemented!');
});

app.get('/api/tasks/:id', (req, res) => {
  res.status(501);
  res.send('Not implemented!');
});

app.put('/api/tasks/:id', (req, res) => {
  res.status(501);
  res.send('Not implemented!');
});

app.delete('/api/tasks/:id', (req, res) => {
  res.status(501);
  res.send('Not implemented!');
});
```

Implement at least one route to pass this exercise.

Example code to get you started:

```js
const tasks = [
  {
    id: 'ID1',
    title: 'Clean out the house',
  },
  {
    id: 'ID2',
    title: 'Take out the trash',
  },
  {
    id: 'ID3',
    title: 'Learn express.js',
  },
];

app.get('/api/tasks', (req, res) => {
  res.status(200).send(tasks);
});

app.post('/api/tasks', (req, res) => {
  // Note: we put any data received from the client into our "database".
  // This kind of behavior is a bad practice and considered unsafe.
  const newTask = req.body;
  tasks.push(newTask);

  res.status(201).send('Created new task');
});

app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);

  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).send('Not found!');
  }
});
```

When done, commit and push your changes.

### Extra task (optional) - Refactor `tasks` model

For an additional point, refactor the `tasks` model.

Use the [Express Router](https://expressjs.com/en/4x/api.html#router) with all the methods related to tasks features and store them in a new, separate file, e.g., `tasks.js`.

Export the router instance from the file, import it in the main `app.js` file, and register it to keep the same behavior.