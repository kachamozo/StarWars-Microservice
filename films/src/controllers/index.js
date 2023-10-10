const { catchedAsync } = require('../utils');

// catchedAsync recibe una funcion como parametro por tanto le pasamos las funciones de los controladores

module.exports = {
	getFilms: catchedAsync(require('./getFilms')),
	getFilmById: catchedAsync(require('./getFilmById')),
	createFilm: catchedAsync(require('./createFilm')),
	updateFilm: catchedAsync(require('./updateFilm')),
	deleteFilm: catchedAsync(require('./deleteFilm')),
};
