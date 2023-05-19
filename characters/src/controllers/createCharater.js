const Characters = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const newCharacters = await Characters.create();
	response(res, 201, newCharacters);
};
