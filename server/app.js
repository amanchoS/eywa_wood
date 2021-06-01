import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Good evening, my Lord!');
});

app.listen(4000, () => {
    console.log('Server is ready to use');
});

