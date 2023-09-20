const { catchedAsync } = require('../utils');

// catchedAsync recibe una funcion como parametro por tanto le pasamos las funciones de los controladores

module.exports = {
	getCharacters: catchedAsync(require('./getCharacters')),
	createCharacter: catchedAsync(require('./createCharacter')),
};
