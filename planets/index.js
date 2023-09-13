const server = require('./src/server');

const PORT = 8003;

async function conect() {
	server.listen(PORT);
	console.log(`Escuchando en el puerto ${PORT}`);
}

conect();
