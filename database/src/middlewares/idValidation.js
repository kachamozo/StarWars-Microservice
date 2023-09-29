const { ClientError } = require('../errors');

module.exports = (req, res, next) => {
	const { id } = req.params;
	const idNumber = parseInt(id);

	if (!Number.isInteger(idNumber))
		throw new ClientError('Error...!!! El id tiene que ser un numero', 401);

	return next();
};
