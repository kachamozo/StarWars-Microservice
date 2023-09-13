const Films = require('../data');

// Es asincrono por que si no me trae un array vacio
module.exports = async (req, res) => {
	const films = await Films.list();
	res.status(200).json(films);
};
