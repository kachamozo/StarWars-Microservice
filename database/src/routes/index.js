const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/:model', middlewares.modelValidation, controllers.getAll);
router.get(
	'/:model/:id',
	middlewares.modelValidation,
	middlewares.idValidation,
	controllers.getById
);
router.post('/Character', controllers.createCharacter);
router.post('/Film', controllers.createFilm);
router.post('/Planet', controllers.createPlanet);
router.put('/Character/:id', controllers.updateCharacter);
router.put('/Film/:id', controllers.updateFilm);
router.put('/Planet/:id', controllers.updatePlanet);
router.delete('/:model/:id', middlewares.idValidation, controllers.deleteById);

module.exports = router;
