const { Film } = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const { id, title, director, characters, planets } = req.body;
	const data = await Film.insert({
		_id: id,
		title,
		director,
		characters,
		planets,
	});
	response(res, 200, data);
};
