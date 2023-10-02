const Characters = require('../data');
const { response } = require('../utils');

//Como el index de data retorna funciones dentro de un objeto, podemos SIMULAR UN MODELO
// Es asincrono por que si no me trae un array vacio

module.exports = async (req, res) => {
	const character = req.body;
	const newCharacter = await Characters.insert(character);
	response(res, 201, newCharacter);
};
