const Films = require('../data');
const { response } = require('../utils');

// simula un modelo

async function getFilms(req, res) {
	const films = await Films.list();
	response(res, 200, films);
}

module.exports = getFilms;
