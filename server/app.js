const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const express = require('express');
const cors = require('cors');

const port = 3001;

const app = express();
app.use(express.json())
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






app.post('/users', (req, res) => {
    knex('users').insert(req.body)
        .then(data => res.send({ message: 'user created' }))  
})
app.post('/organization', (req, res) => {
    knex('organization').insert(req.body)
        .then(data => res.send({ message: 'organization created' }))  
})
app.post('/additional', (req, res) => {
    knex('additional').insert(req.body)
        .then(data => res.send({ message: 'additional info added' }))  
})
app.post('/annual_training', (req, res) => {
    knex('annual_training').insert(req.body)
        .then(data => res.send({ message: 'training added' }))  
})
app.post('/medical', (req, res) => {
    knex('medical').insert(req.body)
        .then(data => res.send({ message: 'medical info added' }))  
})
app.post('/evaluations', (req, res) => {
    knex('evaluations').insert(req.body)
        .then(data => res.send({ message: 'eval added' }))  
})
app.post('/special_skills', (req, res) => {
    knex('special_skills').insert(req.body)
        .then(data => res.send({ message: 'skill added' }))  
})
app.post('/static_skills', (req, res) => {
    knex('static_skills').insert(req.body)
        .then(data => res.send({ message: 'skill added' }))  
})








app.listen(port, (request, response) => {
    console.log(`App is listening at port ${port}`);
})

