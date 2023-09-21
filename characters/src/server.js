const express = require('express');
const morgan = require('morgan');
const errors = require('./errors');

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use('/characters', require('./routes'));

// Esta parte es como un middleware cuando no existe el endPoint(chartersssq) nos direcciona aqui
server.use('*', errors.errorNotFound);

// Manejador de errores de express lo debemos sobreescribir mediante una clase extendida de error, porque por default envia mucha informacion al cliente y nos pueden hackear
// Ademas podemos modificar el status code por defecto de express(500 internal error)
server.use(errors.errorExpress);

module.exports = server;
