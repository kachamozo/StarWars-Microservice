const { ClientError } = require('../errors');

// usamos el manejador de errores personalizado

module.exports = (req, res, next) => {
	const { title } = req.body;
	if (title) return next();
	else {
		throw new ClientError(
			'Falta el nombre, error desde caracter validation',
			401
		);
	}
};
