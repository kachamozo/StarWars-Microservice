const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/', controllers.getCharacters);
router.post('/', middlewares.caracterValidation, controllers.createCharacter);

module.exports = router;
