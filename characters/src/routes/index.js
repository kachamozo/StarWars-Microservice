const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middlewares');
const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto

router.get('/', controllers.getCharacters);
router.post('/', middleware.caracterValidation, controllers.createCharacter);

module.exports = router;
