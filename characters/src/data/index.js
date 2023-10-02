const characters = require('./characters.json');
const axios = require('axios');

// mediante esta funcion importamos un json y devolvemos un objeto js

module.exports = {
	list: async () => {
		const results = await axios.get('http://localhost:8004/Character');
		return results.data;
	},

	getById: async (id) => {
		const results = await axios.get(`http://localhost:8004/Character/${id}`);
		return results.data;
	},

	insert: async (character) => {
		const results = await axios.post(
			`http://localhost:8004/Character`,
			character
		);
		return results.data;
	},

	delete: async (id) => {
		const results = await axios.delete(`http://localhost:8004/Character/${id}`);
		return results.data;
	},
};
