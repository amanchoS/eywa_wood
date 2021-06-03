import mongodb from 'mongodb';

const connectionString = 
'mongodb://amancho-labs:tdYFz7f4uB1KCKkHy97tlwPCrq7NMiWpAZg7tD0M0Kr8IKEqxe5enYdpE3JQTgJieqsiF1oq69OG5yMzSHpvBA==@amancho-labs.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@amancho-labs@';

const client = new mongodb.MongoClient(connectionString, {
  useUnifiedTopology: true,
});


export const getCollection = (name) => client.db('labs').collection(name);
export default client;