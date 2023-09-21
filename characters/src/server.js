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

// Manejador de errores de express lo debemos sobreescribir mediante una clase extendida de error, porque por default envia mucha informacion al cliente y nos pueden hackear
// Ademas podemos modificar el status code por defecto de express(500 internal error)

server.use((err, req, res, next) => {
	res.status(err.statusCode || 500).json({
		error: true,
		message: err.message,
	});
});

module.exports = server;
