const Characters = require('../data');
const { response } = require('../utils');

//Como el index de data retorna funciones dentro de un objeto, podemos SIMULAR UN MODELO

module.exports = async (req, res) => {
	const newCharacter = await Characters.create();
	response(res, 201, newCharacter);
};
