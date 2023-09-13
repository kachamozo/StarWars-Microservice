const server = require('./src/server');

const PORT = 8002;

async function conect() {
	await server.listen(PORT);
	console.log(`Escuchando en el puerto ${PORT}`);
}
conect();
