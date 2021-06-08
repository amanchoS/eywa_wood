# Labs 09

## Prerequisites

- Tooling and work from previous labs

## Task 09.01 Setup uniforms in the client app

Go to https://uniforms.tools/docs/installation and install the desired packages.

It could look like this:

```
npm install uniforms uniforms-bridge-json-schema uniforms-material
```

In the case of the JSONSchema, you will also need to install the `ajv` package that will be used for validation:

```
npm install ajv
```

## Task 09.02 Create a schema for the Todo item

Design the intended schema for the Todo item. Besides the title and completed, you can add additional fields like description, due date, assigned person, etc. You can be creative.

You can use the documentation as a reference on how to build a JSON schema and use it along ajv to create a uniforms bridge: https://uniforms.tools/docs/tutorials-basic-uniforms-usage

## Task 09.03 Use the schema to render the form in the TodoView component.

Use the newly created schema to render the form in the TodoView component.

Send an update request to the backend when the form is submitted.