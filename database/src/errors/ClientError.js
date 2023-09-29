// Manejador de errores de express lo debemos sobreescribir mediante una clase extendida de error, porque por default envia mucha informacion al cliente y nos pueden hackear
// Creamos nuestros propios errores extendiendo de Error de express, el constructor es como una nueva funcion que recibe mensaje y statusCode
// el mensaje no modificamos nada y le pasamos directo con super. El estatus code lo podemos personalizar

class ClientError extends Error {
	constructor(message, statusCode = 400) {
		super(message);
		this.statusCode = statusCode;
	}
}

module.exports = ClientError;
