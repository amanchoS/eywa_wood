# Labs 11

## Prerequisites

- Tooling and work from previous labs

## Task 11.01 Ensure there are no credentials in the code.

It is very important [to don't store credentials in the code](https://12factor.net/config).

We leave some secrets or configuration hardcoded in the codebase during previous labs, e.g., MongoDB's connection string.

Check your app for such occurrences and replace all of them with environment variables.
Remember to set up your local environment to use those values again and use them in CI/CD process.

For the server app, install and use the [`dotenv` package](https://github.com/motdotla/dotenv#readme).
Then for local development, you can make use of the `.env` file and for production set variables in the Azure App Service.
Add the `.env` file to `.gitignore`, as you must not commit this file!

For the client app [CRA already supports this feature](https://create-react-app.dev/docs/adding-custom-environment-variables) and you may also make use of it if feasible.

## Task 11.02 Validate request parameters.

Currently, the server app will accept any parameters in the request and insert them directly into the database.
This is an obvious security concern and should be fixed.

The server should never trust data from the client-side, as a malicious user could easily forge the request.

There are multiple ways of performing the data validation and sanitization:

- You can check all properties manually.
- You can use a schema and validator, e.g., JSON Schema with ajv, which are used on the client.
- Use a designated package like `express-validator`.
  - Useful links:
    - https://express-validator.github.io/docs/index.html
    - https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/

In all cases, the goal of this task is to verify all of the data before putting it in the database.