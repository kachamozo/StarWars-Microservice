const { catchedAsync } = require('../utils');

// catchedAsync recibe una funcion como parametro por tanto le pasamos las funciones de los controladores

module.exports = {
	getCharacters: catchedAsync(require('./getCharacters')),
	getCharacterById: catchedAsync(require('./getCharacterById')),
	createCharacter: catchedAsync(require('./createCharacter')),
	deleteCharacter: catchedAsync(require('./deleteCharacter')),
};
