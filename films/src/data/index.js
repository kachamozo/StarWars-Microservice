const films = require('./films.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: async () => {
		return films;
	},
	create: async () => {
		throw new Error('Error database');
	},
};
