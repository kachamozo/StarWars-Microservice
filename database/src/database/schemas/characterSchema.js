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

// estos metodos estaticos que devuelven la informacion ya pupulada y solo tenemos q llamar la funcion
// Cada uno usa su popio modelo de esquema y popula diferentes colecciones ademas utiliza los metodos de mongoose
characterSchema.statics.list = async function () {
	return await this.find()
		.populate('homeworld', ['_id', 'name'])
		.populate('films', ['_id', 'title']);
};

characterSchema.statics.getById = async function (id) {
	return await this.findById(id)
		.populate('homeworld', ['_id', 'name'])
		.populate('films', ['_id', 'title']);
};

characterSchema.statics.insert = async function (character) {
	return await this.create(character);
};

characterSchema.statics.updateById = async function (id, character) {
	return await this.findByIdAndUpdate(id, character);
};

characterSchema.statics.delete = async function (id) {
	return await this.findByIdAndRemove(id);
};

module.exports = characterSchema;
