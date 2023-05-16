const characters = require('../data/characters.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

function list(req, res) {
	res.status(200).send(characters);
}

function nombres(req, res) {
	res.status(200).send('lista de nombes');
}
module.exports = list;
