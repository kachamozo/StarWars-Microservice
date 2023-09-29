// Funciones de orden suprior son aquellas que reciben otra funcion como parametros y retornan una funcion mejorada
// La funcion que recibimos es async por tanto podemos atrapar el error con el catch y mandarlo al manejador de errores de express

// Cuando solo hay una funcion  directamente podemos exportarlo

module.exports = (fn) => {
	return function (req, res, next) {
		fn(req, res).catch((error) => {
			next(error);
		});
	};
};
