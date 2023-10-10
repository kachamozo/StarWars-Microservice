const { Character } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id } = req.params;
	const { name, height, mass, homeworld, films } = req.body;
	await Character.updateById(id, {
		name,
		height,
		mass,
		homeworld,
		films,
	});
	const data = await Character.getById(id);
	response(res, 200, data);
};
