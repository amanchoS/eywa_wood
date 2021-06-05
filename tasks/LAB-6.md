# Labs 06

## Prerequisites

- Tooling and work from previous labs

## Task 06.01 - Create basic tests for client app components.

Use basic testing setup prepared in CRA, with Jest and React Testing Library.

Example test suit:

```
// TodoItem.test.js:

import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('Todo item', () => {
  test('buttons are visible', () => {
    render(<TodoItem title="Test item" />);

    const doneButton = screen.getByText('Done');
    const deleteButton = screen.getByText('Delete');

    expect(doneButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});

```

You can create similar tests for your other components.

## Task 06.02 Use ESLint to ensure code quality.

For the client app, ESLint is already set up by CRA.

Add an `eslint src` command to the package.json script's section for easier use.

For the server app, install ESLint as a development dependency:

```
npm install eslint --dev
```

And configure it, an example `.eslint.json` file may look like this:

```
{
  "env": {
    "node": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "extends": [
    "eslint:recommended"
  ]
}
```

## Task 06.03 Run tests in the Continuous Integration process.

Invoke test runs prepared above as steps in the GitHub actions workflow.

You can change your existing hello workflow into a test workflow.