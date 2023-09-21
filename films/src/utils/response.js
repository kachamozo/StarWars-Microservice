// manejador de  respuestas, aqui podemos normalizar los datos, estructurar como se va devolver la respuesta json y agregar nueva informacion

module.exports = (res, statusCode, data) => {
	res.status(statusCode).json({
		error: false,
		data,
	});
};
