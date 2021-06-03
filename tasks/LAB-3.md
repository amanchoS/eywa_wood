# Labs 03

## Prerequisites

- Tooling and work from labs 02
- Azure account
- MongoDB Compass

More details & installation instructions are posted on MS Teams.

## Task 03.01 - Create Cosmos DB database (with MongoDB API)

1. log in to [Azure Portal](https://portal.azure.com/).  
   _You may need to activate your student subscription if you have not done this before_
1. Go to Azure Cosmos DB service page.
1. Create a new database
   - Use your student subscription. You may need to create a resource group if not done before.
   - **Choose MongoDB as the API type!**
   - Location does not matter, but I recommend a near datacenter, e.g., Germany West Central
   - **Use the 4.0 version of the API**
   - With other options, when not sure, leave the defaults
   - Create the database and wait for the process to finish
1. Once created, choose your new database from the list and check what options Azure gives you out of the box
1. Go to `Settings > Connection String` and copy the `PRIMARY CONNECTION STRING` value.
   - **This string contains the password to your database! You must keep it in secret!** Otherwise, anybody who knows your string will be able to read and modify your database.
1. Open the MongoDB Compass app and use the connection string from the previous step to establish the connection.
1. Create a new database (with either Azure Data Explorer or Compass). You can call it `labs`.
1. Create a new collection and call it `tasks`.

Optionally, you can play and add some documents to the collection.

## Task 03.02 - Install node MongoDB driver and establish a connection to the database

Inside your project directory from labs 02 (the `server` directory), execute the npm command to add a new dependency:

```
npm install mongodb
```

Once the package is installed, you can import it into your app. For readability, you should do it in a new file called `db.js`.

Example contents of such file could look like this:

```
import mongodb from 'mongodb';

const connectionString = 'mongodb://...';

const client = new mongodb.MongoClient(connectionString, {
  useUnifiedTopology: true,
});

export default client;
```

The next step would be to connect to the database when the app is running.
One way of doing this could be changing startup code in app.js:

```
import client from './db.js';

app.listen(4000, async () => {
  console.log('Server is ready');

  await client.connect();
  console.log('Database is ready');
});
```

## Task 03.03 - Use database in the tasks route handlers

Once we have a connection in our app, we can finally read and save data in our persistent database.

The goal of this task is to refactor all tasks route handlers to query and store data in MongoDB instead of a temporary in-memory array.

Example implementation of a route handler may look like this:

```
router.get('/', async (req, res) => {
  // Get the collection object
  const tasksCollection = client.db('labs').collection('tasks');
  // Query for all of the data and convert cursor to an array
  const tasks = await tasksCollection.find().toArray();

  res.send(tasks);
});
```

Using [MongoDB nodejs driver documentation](https://docs.mongodb.com/drivers/node/master/fundamentals/crud/), refactor other router handlers to support all CRUD operations for tasks.