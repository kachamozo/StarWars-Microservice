const { Router } = require('express');
const characters = require('../controllers');
const router = Router();

// solo importamos una sola ves el index de controllers y usamos como un objeto

router.get('/', characters.getCharacters);
router.post('/', characters.createCharacter);

module.exports = router;
