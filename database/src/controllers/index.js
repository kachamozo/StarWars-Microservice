const { catchedAsync } = require('../utils');

module.exports = {
	getAll: catchedAsync(require('./getAll')),
	getById: catchedAsync(require('./getById')),
	createCharacter: catchedAsync(require('./createCharacter')),
	createFilm: catchedAsync(require('./createFilm')),
	createPlanet: catchedAsync(require('./createPlanet')),
	deleteById: catchedAsync(require('./deleteById')),
};
