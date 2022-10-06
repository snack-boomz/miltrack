const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const express = require('express');
const cors = require('cors');

const port = 3001;

const app = express();
app.use(express.json())
app.use(cors());


app.get('/users', (req, res) => {
    knex.select('*')
    .from('users')
    .then(data => res.send(data));
})
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('users')
    .where({ id: id })
    .then(data => res.send(data));
})

app.get('/organization', (req, res) => {
    knex.select('*')
    .from('organization')
    .then(data => res.send(data));
})
app.get('/organization/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('organization')
    .where({ id: id })
    .then(data => res.send(data));
})

app.get('/additional', (req, res) => {
    knex.select('*')
    .from('additional')
    .then(data => res.send(data));
})
app.get('/additional/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('additional')
    .where({ id: id })
    .then(data => res.send(data));
})

app.get('/annual_training', (req, res) => {
    knex.select('*')
    .from('annual_training')
    .then(data => res.send(data));
})
app.get('/annual_training/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('annual_training')
    .where({ users_id: id })
    .then(data => res.send(data));
})

app.get('/medical', (req, res) => {
    knex.select('*')
    .from('medical')
    .then(data => res.send(data));
})
app.get('/medical/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('medical')
    .where({ users_id: id })
    .then(data => res.send(data));
})

app.get('/evaluations', (req, res) => {
    knex.select('*')
    .from('evaluations')
    .then(data => res.send(data));
})
app.get('/evaluations/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('evaluations')
    .where({ id: id })
    .then(data => res.send(data));
})

app.get('/special_skills', (req, res) => {
    knex.select('*')
    .from('special_skills')
    .then(data => res.send(data));
})
app.get('/special_skills/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('special_skills')
    .where({ id: id })
    .then(data => res.send(data));
})

app.get('/static_skills', (req, res) => {
    knex.select('*')
    .from('static_skills')
    .then(data => res.send(data));
})
app.get('/static_skills/:id', (req, res) => {
    const { id } = req.params;
    knex.select('*')
    .from('static_skills')
    .where({ id: id })
    .then(data => res.send(data));
})


// ━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━


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


// ━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━


app.patch('/users/:id', (req, res) => {
    knex('users')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/organization/:id', (req, res) => {
    knex('organization')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/additional/:id', (req, res) => {
    knex('additional')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/annual_training/:id', (req, res) => {
    knex('annual_training')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/medical/:id', (req, res) => {
    knex('medical')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/evaluations/:id', (req, res) => {
    knex('evaluations')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/special_skills/:id', (req, res) => {
    knex('special_skills')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})
app.patch('/static_skills/:id', (req, res) => {
    knex('static_skills')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'user updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})


// ━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━


app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    knex('users')
        .where({ id: id })
        .del()
        .then(res.send({message: 'member deleted'}))
})
app.delete('/organization/:id', (req, res) => {
    const { id } = req.params;
    knex('organization')
        .where({ id: id })
        .del()
        .then(res.send({message: 'organization deleted'}))
})
app.delete('/additional/:id', (req, res) => {
    const { id } = req.params;
    knex('additional')
        .where({ id: id })
        .del()
        .then(res.send({message: 'info deleted'}))
})
app.delete('/annual_training/:id', (req, res) => {
    const { id } = req.params;
    knex('annual_training')
        .where({ id: id })
        .del()
        .then(res.send({message: 'training deleted'}))
})
app.delete('/medical/:id', (req, res) => {
    const { id } = req.params;
    knex('medical')
        .where({ id: id })
        .del()
        .then(res.send({message: 'medical deleted'}))
})
app.delete('/evaluations/:id', (req, res) => {
    const { id } = req.params;
    knex('evaluations')
        .where({ id: id })
        .del()
        .then(res.send({message: 'evaluations deleted'}))
})
app.delete('/special_skills/:id', (req, res) => {
    const { id } = req.params;
    knex('special_skills')
        .where({ id: id })
        .del()
        .then(res.send({message: 'skill deleted'}))
})
app.delete('/static_skills/:id', (req, res) => {
    const { id } = req.params;
    knex('static_skills')
        .where({ id: id })
        .del()
        .then(res.send({message: 'skill deleted'}))

})


app.listen(port, (req, res) => {
    console.log(`App is listening at port ${port}`);
})

