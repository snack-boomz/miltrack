const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();

app.use(cors());

app.get('/users', (request, response) => {
    knex.select('*')
    .from('users')
    .then(data => response.send(data));
})
app.get('/organization', (request, response) => {
    knex.select('*')
    .from('organization')
    .then(data => response.send(data));
})
app.get('/additional', (request, response) => {
    knex.select('*')
    .from('additional')
    .then(data => response.send(data));
})
app.get('/annual_training', (request, response) => {
    knex.select('*')
    .from('annual_training')
    .then(data => response.send(data));
})
app.get('/medical', (request, response) => {
    knex.select('*')
    .from('medical')
    .then(data => response.send(data));
})
app.get('/evaluations', (request, response) => {
    knex.select('*')
    .from('evaluations')
    .then(data => response.send(data));
})
app.get('/special_skills', (request, response) => {
    knex.select('*')
    .from('special_skills')
    .then(data => response.send(data));
})
app.get('/static_skills', (request, response) => {
    knex.select('*')
    .from('static_skills')
    .then(data => response.send(data));
})


app.listen(port, (request, response) => {
    console.log(`App is listening at port ${port}`);
})

