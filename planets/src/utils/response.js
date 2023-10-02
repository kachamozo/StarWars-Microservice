// manejador de  respuestas, aqui podemos normalizar los datos pero la data ya viene formateada desde el microservicio de database

module.exports = (res, statusCode, data) => {
	res.status(statusCode).send(data);
};
