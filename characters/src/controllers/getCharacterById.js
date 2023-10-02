const Characters = require('../data');
const { response } = require('../utils');

//Como el index de data retorna funciones dentro de un objeto, podemos SIMULAR UN MODELO
// Es asincrono por que si no me trae un array vacio

module.exports = async (req, res) => {
	const { id } = req.params;
	const characterById = await Characters.getById(id);
	response(res, 200, characterById);
};
