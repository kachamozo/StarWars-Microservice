const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto

router.get('/', controllers.getCharacters);
router.post('/', middlewares.caracterValidation, controllers.createCharacter);

module.exports = router;
