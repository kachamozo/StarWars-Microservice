const { Character } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id, name, height, mass, homeworld, films } = req.body;
	const data = await Character.insert({
		_id: id,
		name,
		height,
		mass,
		homeworld,
		films,
	});
	response(res, 200, data);
};
