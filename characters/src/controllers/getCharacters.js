const Characters = require('../data');

//simula un modelo

async function list(req, res) {
	const characters = await Characters.list();
	res.status(200).send(characters);
}

module.exports = list;
