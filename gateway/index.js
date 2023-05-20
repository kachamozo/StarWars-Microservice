const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const PORT = 8000;

app.use(
	'/characters',
	createProxyMiddleware({
		target: 'http://localhost:8001',
		// desde aqui el gateway modifica los headers hacia las distintos microservicios
		changeOrigin: true,
	})
);

app.use(
	'/films',
	createProxyMiddleware({
		target: 'http://localhost:8002',
		// desde aqui el gateway modifica los headers hacia las distintos microservicios
		changeOrigin: true,
	})
);

app.use(
	'/planets',
	createProxyMiddleware({
		target: 'http://localhost:8003',
		// desde aqui el gateway modifica los headers hacia las distintos microservicios
		changeOrigin: true,
	})
);

app.use('*', (req, res) => {
	res.status(404).send('Not found');
});

app.listen(PORT, () => {
	console.log(`Gateway escuchando en el puerto ${PORT}`);
});
