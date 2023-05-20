const Planets = require('../data');
const { response } = require('../utils');

// simula un modelo

async function getPlanets(req, res) {
	const planets = await Planets.list();
	response(res, 200, planets);
}

module.exports = getPlanets;
