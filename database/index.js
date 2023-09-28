const server = require('./src/server');

const PORT = 8004;

async function connect() {
	await server.listen(PORT);
	console.log(`Database escuchando en el puerto ${PORT}`);
}

connect();
