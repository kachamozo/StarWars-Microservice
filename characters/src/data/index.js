const characters = require('./characters.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: async () => {
		return characters;
	},
	create: async () => {
		throw new Error('Error de index en data');
	},
};
