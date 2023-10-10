const { Film } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id } = req.params;
	const { title, director, characters, planets } = req.body;
	await Film.updateById(id, {
		title,
		director,
		characters,
		planets,
	});
	const data = await Film.getById(id);
	response(res, 200, data);
};
