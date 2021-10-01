const express = require('express');
const router = require('./users/router');
const cors = require('cors');
const helmet = require('helmet');
const { logger } = require('./middleware');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api', logger, router);

server.get('/', (req, res) => {
    res.send(`<h1>deploy</h1>`);
});

module.exports = server;