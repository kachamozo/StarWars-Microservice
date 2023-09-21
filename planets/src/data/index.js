const planets = require('./planets.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: async () => planets,
	create: async () => {
		throw Error('Error desde data');
	},
};
