const { Router } = require('express');
const characters = require('../controllers');
const middleware = require('../middleware');
const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto

router.get('/', characters.getCharacters);
router.post('/', middleware.caracterValidation, characters.createCharacter);

module.exports = router;
