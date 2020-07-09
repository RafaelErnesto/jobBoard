const express = require('express');
const app = express();
const cors = require('cors');
const { promisify } = require("util");
const redis = require("redis");

app.use(cors());
const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);

app.get('/jobs', (req,res) => {
    getAsync('github')
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error.message)
    })
})

app.listen(3000,() => {
    console.log('Api is listening on port 3000');
});