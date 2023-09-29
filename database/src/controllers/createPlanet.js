const { Planet } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id, name, diameter, climate, residents, films } = req.body;
	const data = await Planet.insert({
		_id: id,
		name,
		diameter,
		climate,
		residents,
		films,
	});
	response(res, 200, data);
};
