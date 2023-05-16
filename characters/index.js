const server = require('./src/server');

const PORT = 8001;

server.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});
