const { catchedAsync } = require('../utils');

module.exports = {
	getAll: catchedAsync(require('./getAll')),
	getById: catchedAsync(require('./getById')),
	createCharacter: catchedAsync(require('./createCharacter')),
	createFilm: catchedAsync(require('./createFilm')),
	createPlanet: catchedAsync(require('./createPlanet')),
	updateCharacter: catchedAsync(require('./updateCharacter')),
	updateFilm: catchedAsync(require('./updateFilm')),
	updatePlanet: catchedAsync(require('./updatePlanet')),
	deleteById: catchedAsync(require('./deleteById')),
};
