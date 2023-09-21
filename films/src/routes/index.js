const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto
router.get('/', controllers.getFilms);
router.post('/', middlewares.caracterValidation, controllers.createFilm);

module.exports = router;
