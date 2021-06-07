# Labs 07

## Prerequisites

- Tooling and work from previous labs

## Task 07.01 Install and configure React Router.

React Router is a collection of navigational components that compose declaratively with your application.

Go to the client app (`labs-xxxxx/client`) and add it as a dependency to the project:

```
npm install react-router-dom
```

Then add the `BrowserRouter` component high in your render tree, e.g., in `index.js`:

```
// ...
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Task 07.02 Reorganize the app and add additional routes.

Currently, everything related to the TODO list is located in `App.js`.  
Refactor the code responsible for rendering and managing the list into a separate component, e.g. `TodoList.js`.

Then, render it conditionally using the `Switch` and `Route` components from `react-router-dom`.

Add essential navigation links in your app using the `Link` components so you can easily switch between routes.

Once the setup is complete, add new routes, e.g., a welcome page or information about the author.

Whenever stuck, you can always refer to the [React Router documentation](https://reactrouter.com/web/guides/quick-start).

## Task 07.03 Add a new view with full-page details of the task.

Create routes dynamically based on the ID of the task that displays full-page information about a task.

Those routes should display a new component that you have to create now - `TodoView.js`.

This component should make a new request only about a single task, based on the ID in the URL.

Task items in the listing should link to this details page.