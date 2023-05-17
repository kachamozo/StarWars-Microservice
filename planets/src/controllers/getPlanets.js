const Planets = require('../data');

// simula un modelo

async function getPlanets(req, res) {
	const planets = await Planets.list();
	res.status(200).send(planets);
}

module.exports = getPlanets;
