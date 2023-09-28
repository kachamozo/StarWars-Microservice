const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
	_id: String,
	name: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: { type: String, enum: ['male', 'female', 'none'] },
	homeworld: { type: String, ref: 'Planet' }, //referencia al id de planets
	films: [{ type: String, ref: 'Film' }], //referencia al id de films
});

module.exports = characterSchema;
