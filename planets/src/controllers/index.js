const { catchedAsync } = require('../utils');

// catchedAsync recibe una funcion como parametro por tanto le pasamos las funciones de los controladores

module.exports = {
	getPlanets: catchedAsync(require('./getPlanets')),
	getPlanetById: catchedAsync(require('./getPlanetById')),
	createPlanet: catchedAsync(require('./createPlanet')),
	updatePlanet: catchedAsync(require('./updatePlanet')),
	deletePlanet: catchedAsync(require('./deletePlanet')),
};
