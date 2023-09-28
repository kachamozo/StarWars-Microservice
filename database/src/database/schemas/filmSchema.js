const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
	_id: String,
	title: String,
	opening_crawl: String,
	director: String,
	producer: String,
	release_date: Date,
	characters: [{ type: String, ref: 'Character' }],
	planets: [{ type: String, ref: 'Planet' }],
});

module.exports = filmSchema;
