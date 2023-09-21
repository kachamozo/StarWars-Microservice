const { ClientError } = require('../utils/error');

module.exports = (req, res, next) => {
	const { name } = req.body;
	if (name) return next();
	else {
		throw new ClientError(
			'Falta el nombre, Error desde caracterValidation',
			401
		);
	}
};
