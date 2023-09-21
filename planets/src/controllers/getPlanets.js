const Planets = require('../data');
const { response } = require('../utils');

//Como el index de data retorna funciones dentro de un objeto, podemos SIMULAR UN MODELO
// Es asincrono por que si no me trae un array vacio

module.exports = async (req, res) => {
	const planets = await Planets.list();
	response(res, 200, planets);
};
