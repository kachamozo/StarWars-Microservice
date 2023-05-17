const films = require('../data/films.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

function getFilms(req, res) {
	res.status(200).send(films);
}

module.exports = getFilms;
