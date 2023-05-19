const Characters = require('../data');
const { response } = require('../utils');

//simula un modelo

async function list(req, res) {
	const characters = await Characters.list();
	response(res, 200, characters);
}

module.exports = list;
