const express = require('express');
const morgan = require('morgan');
const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use('/characters', require('./routes'));

module.exports = server;
