const ClientError = require('./ClientError');

// Esta parte es como un middleware cuando no existe el endPoint(chartersssq) nos direcciona aqui

module.exports = (req, res) => {
	throw new ClientError('Not Found', 404);
};
