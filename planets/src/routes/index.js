const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = express.Router();

router.get('/', controllers.getPlanets);
router.post('/', middlewares.caracterValidation, controllers.createPlanet);

module.exports = router;
