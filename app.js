import express from 'express';
import tasksRouter from './tasks.js';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Good evening, my Lord!');
});

app.use('/api/tasks', tasksRouter);


app.listen(4000, () => {
    console.log('Server is ready to use');
});

