const store = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { model } = req.params;
	const { id, name, height, mass, homeworld, films } = req.body;
	const data = await store[model].insert({
		_id: id,
		name,
		height,
		mass,
		homeworld,
		films,
	});
	response(res, 200, data);
};
