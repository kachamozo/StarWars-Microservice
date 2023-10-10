const planets = require('./planets.json');

const axios = require('axios');

// mediante esta funcion importamos un json y devolvemos un objeto js
// utilizamos estos datos de prueba para desarrolar toda la logica y luego conectemos con la base de datos

module.exports = {
	// list: async () => planets,
	// create: async () => {
	// 	throw Error('Error asincrono desde data');
	// },

	// Aqui conectamos con el microservicio de database que tiene el puerto 8004 ya que database se conecta con mongo y nos devuelve los datos ya formateados
	// Para trabajar de forma local http://localhost:8004/Planet
	list: async () => {
		const results = await axios.get('http://database:8004/Planet');
		return results.data;
	},

	getById: async (id) => {
		const results = await axios.get(`http://database:8004/Planet/${id}`);
		return results.data;
	},

	insert: async (planet) => {
		const results = await axios.post('http://database:8004/Planet', planet);
		return results.data;
	},

	updateById: async (id, planet) => {
		const results = await axios.put(
			`http://database:8004/Planet/${id}`,
			planet
		);
		return results.data;
	},

	delete: async (id) => {
		const results = await axios.delete(`http://database:8004/Planet/${id}`);
		return results.data;
	},
};
