const planets = require('./planets.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: async () => {
		return planets;
	},
	create: async () => {
		throw new Error('Error al crear planeta');
	},
};
