const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
	_id: String,
	title: String,
	opening_crawl: String,
	director: String,
	producer: String,
	release_date: Date,
	characters: [{ type: String, ref: 'Character' }], //hace referencia a la coleccion de characters
	planets: [{ type: String, ref: 'Planet' }], // hace referencia a la coleccion de planets
});

// estos metodos estaticos que devuelven la informacion ya pupulada y solo tenemos q llamar la funcion
// Cada uno usa su popio modelo de esquema y popula diferentes colecciones ademas utiliza los metodos de mongoose
filmSchema.statics.list = async function () {
	return await this.find()
		.populate('characters', ['_id', 'name'])
		.populate('planets', ['_id', 'name']);
};

filmSchema.statics.getById = async function (id) {
	return await this.findById(id)
		.populate('characters', ['_id', 'name'])
		.populate('planets', ['_id', 'name']);
};

filmSchema.statics.insert = async function (film) {
	return await this.create(film);
};

filmSchema.statics.updateById = async function (id, character) {
	return await this.findByIdAndUpdate(id, character);
};

filmSchema.statics.delete = async function (id) {
	return await this.findByIdAndRemove(id);
};

module.exports = filmSchema;
