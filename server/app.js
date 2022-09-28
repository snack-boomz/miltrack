const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    knex.select('users')
    .select('*')
    .then(data => response.send(data));
})

app.listen(port, (request, response) => {
    console.log(`App is listening at port ${port}`);
})

