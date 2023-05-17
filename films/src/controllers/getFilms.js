const Films = require('../data');

// simula un modelo

async function getFilms(req, res) {
	const films = Films.list();
	res.status(200).send(films);
}

module.exports = getFilms;
