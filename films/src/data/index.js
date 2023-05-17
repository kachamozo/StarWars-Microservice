const films = require('./films.json');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: () => {
		return films;
	},
};
