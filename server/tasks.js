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

router.put('/:id', (req,res) => {
    res.status(501).send('Not implemented');
});

router.delete('/:id', (req,res) => {
    res.status(501).send('Not implemented');
});


export default router;