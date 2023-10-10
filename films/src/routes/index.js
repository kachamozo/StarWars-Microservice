const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto
router.get('/', controllers.getFilms);
router.get('/:id', controllers.getFilmById);
router.post('/', middlewares.filmValidation, controllers.createFilm);
router.put('/:id', controllers.updateFilm);
router.delete('/:id', controllers.deleteFilm);

module.exports = router;
