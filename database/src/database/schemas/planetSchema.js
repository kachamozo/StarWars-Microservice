const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
	_id: String,
	name: String,
	rotation_period: String,
	orbital_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	residents: [{ type: String, ref: 'Character' }], //hace referencia a la coleccion de characters
	films: [{ type: String, ref: 'Film' }], //hace referencia a la colecciond de films
});

// estos metodos estaticos que devuelven la informacion ya pupulada y solo tenemos q llamar la funcion
// Cada uno usa su popio modelo de esquema y popula diferentes colecciones ademas utiliza los metodos de mongoose
planetSchema.statics.list = async function () {
	return await this.find()
		.populate('residents', ['_id', 'name'])
		.populate('films', ['_id', 'title']);
};

planetSchema.statics.getById = async function (id) {
	return await this.findById(id)
		.populate('residents', ['_id', 'name'])
		.populate('films', ['_id', 'title']);
};

planetSchema.statics.insert = async function (planet) {
	return await this.create(planet);
};

planetSchema.statics.updateById = async function (id, character) {
	return await this.findByIdAndUpdate(id, character);
};

planetSchema.statics.delete = async function (id) {
	return await this.findByIdAndRemove(id);
};

module.exports = planetSchema;
