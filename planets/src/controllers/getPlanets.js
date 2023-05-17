const planets = require('../data/planets.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

function getPlanets(req, res) {
	res.status(200).send(planets);
}

module.exports = getPlanets;
