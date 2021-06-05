import express from 'express';
import  mongodb from 'mongodb';
import {getCollection} from './db.js';

const router = express.Router();


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

router.get('/', async (req,res) => {
    const tasksCollection = getCollection('tasks');
    const taskDocs = await tasksCollection.find({}).toArray();
    res.send(taskDocs);
});

router.post('/', async (req,res) => {
    const tasksCollection = getCollection('tasks');


    const newTask = req.body;
    console.log(newTask);
  
    try {
      await tasksCollection.insertOne(newTask);
      res.status(201).send('Task added');
    } catch (e) {
      res.status(500).send('Unknown Error');
    }
});

router.get('/:id', async (req,res) => {
    const tasksCollection = getCollection('tasks');
    const taskId = mongodb.ObjectID(req.params.id);
    
    const task = await tasksCollection.findOne({ _id: taskId });
    

    if (task) {
        res.send(task);
    } else {
        res.status(404).send('Not Found');
    }

});


router.put('/:id', async (req,res) => {
  const tasksCollection = getCollection('tasks');
  const taskID = mongodb.ObjectID(req.params.id);
  const taskChanges = req.body;
  console.log(taskChanges);

  const task = await tasksCollection.updateOne(
    { _id: taskID },
    { $set: taskChanges},
  );

  if (task) {
    res.send('Task was updated');
  } else {
     res.status(404).send('Task with this ID not founded');
  }
});


router.delete('/:id', async (req,res) => {
  const tasksCollection = getCollection('tasks');
  const taskID = mongodb.ObjectID(req.params.id);
  const task = await tasksCollection.deleteOne({ _id: taskID });

  if (task) {
    res.send('Delete request completed');
  } else {
     res.status(404).send('Task with this ID not founded');
  }

});


export default router;