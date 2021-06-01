import express from 'express';

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

router.get('/', (req,res) => {
    res.send(tasks);
});

router.post('/', (req,res) => {

    const newTask = req.body;
    
    tasks.push(newTask);

    console.log(newTask);


    res.status(201).send('Task added');
});

router.get('/:id', (req,res) => {
    const task = tasks.find(task => task.id === req.params.id);

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