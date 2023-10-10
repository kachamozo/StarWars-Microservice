const characters = require('./characters.json');
const axios = require('axios');

// mediante esta funcion importamos un json y devolvemos un objeto js
// utilizamos estos datos de prueba para desarrolar toda la logica y luego conectemos con la base de datos

module.exports = {
	// list: async () => characters,
	// create: async () => {
	// 	throw Error('Error asincrono desde data');
	// },

	// Aqui conectamos con el microservicio de database que tiene el puerto 8004 ya que database se conecta con mongo y nos devuelve los datos ya formateados
	// Para trabajar de forma local http://localhost:8004/Character
	list: async () => {
		const results = await axios.get('http://database:8004/Character');
		return results.data;
	},

	getById: async (id) => {
		const results = await axios.get(`http://database:8004/Character/${id}`);
		return results.data;
	},

	insert: async (character) => {
		const results = await axios.post(
			'http://database:8004/Character',
			character
		);
		return results.data;
	},

	updateById: async (id, character) => {
		const results = await axios.put(
			`http://database:8004/Character/${id}`,
			character
		);
		return results.data;
	},

	delete: async (id) => {
		const results = await axios.delete(`http://database:8004/Character/${id}`);
		return results.data;
	},
};
