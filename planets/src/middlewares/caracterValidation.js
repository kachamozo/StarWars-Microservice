const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
	const { name } = req.body;
	if (name) return next();
	else throw new ClientError('No existe el nombre', 401);
};
