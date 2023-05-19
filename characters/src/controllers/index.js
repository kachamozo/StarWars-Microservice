// catchedAsync recibe una funcion como parametro por tanto le pasamos las funciones de los controladores

const { catchedAsync } = require('../utils');

module.exports = {
	getCharacters: catchedAsync(require('./getCharacters')),
	createCharacter: catchedAsync(require('./createCharater')),
};
