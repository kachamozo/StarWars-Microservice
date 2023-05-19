module.exports = async (req, res) => {
	throw new Error('hubo un error al crear un personaje');
	res.status(201).send('personaje creado');
};
