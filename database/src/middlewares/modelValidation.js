const { ClientError } = require('../errors');

module.exports = (req, res, next) => {
	const { model } = req.params;
	const models = ['Character', 'Film', 'Planet'];
	if (models.includes(model)) return next();
	else {
		throw new ClientError(`Error...!!! Los modelos son: ${models} `, 401);
	}
};
