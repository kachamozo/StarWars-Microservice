const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto
router.get('/', controllers.getPlanets);
router.get('/:id', controllers.getPlanetById);
router.post('/', middlewares.planetValidation, controllers.createPlanet);
router.put('/:id', controllers.updatePlanet);
router.delete('/:id', controllers.deletePlanet);

module.exports = router;
