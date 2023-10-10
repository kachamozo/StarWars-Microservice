const { Planet } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id } = req.params;
	const { name, diameter, climate, residents, films } = req.body;
	await Planet.updateById(id, {
		name,
		diameter,
		climate,
		residents,
		films,
	});
	const data = await Planet.getById(id);
	response(res, 200, data);
};
