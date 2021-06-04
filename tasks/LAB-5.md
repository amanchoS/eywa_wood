# Labs 05

## Prerequisites

- Tooling and work from labs-03 & labs-04

## Task 05.01 - Add support for CORS in the backend app

Add CORS package to the server project:

```
npm install cors
```

Add new middleware in `app.js`:

```
import cors from 'cors';

// (…)

app.use(cors());
```

Test the implementation by making requests with the browser.

## Task 05.02 - Use tasks CRUD APIs in the client app

Use Fetch API to fetch data from the backend server prepared during labs-03.

Store tasks data in local state, replacing the previous implementation.

Data should be loaded inside an `useEffect` hook.

Adding new tasks, editing existing ones, and deleting them should also be implemented with the backend REST methods instead of local implementation.
