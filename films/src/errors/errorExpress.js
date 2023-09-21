// Manejador de errores de express lo debemos sobreescribir mediante una clase extendida de error, porque por default envia mucha informacion al cliente y nos pueden hackear
// Ademas podemos modificar el status code por defecto de express(500 internal error)

module.exports = (err, req, res, next) => {
	res.status(err.statusCode || 500).json({
		error: true,
		message: err.message,
	});
};
