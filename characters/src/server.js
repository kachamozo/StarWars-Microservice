const express = require('express');
const morgan = require('morgan');
const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use('/characters', require('./routes'));

// Esta parte es como un middleware cuando no existe el endPoint(chartersssq) nos direcciona aqui
server.use('*', (req, res) => {
	res.status(404).send('Not found');
});

module.exports = server;
