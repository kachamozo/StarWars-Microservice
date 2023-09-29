const { catchedAsync } = require('../utils');

module.exports = {
	getAll: catchedAsync(require('./getAll')),
	getById: catchedAsync(require('./getById')),
	createCharacter: catchedAsync(require('./createCharacter')),
	deleteById: catchedAsync(require('./deleteById')),
};
