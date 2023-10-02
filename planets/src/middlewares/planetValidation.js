const { ClientError } = require('../errors');

// usamos el manejador de errores personalizado
module.exports = (req, res, next) => {
	const { name } = req.body;
	if (name) return next();
	else {
		throw new ClientError(
			'Falta el nombre, Error desde caracter validation',
			401
		);
	}
};
