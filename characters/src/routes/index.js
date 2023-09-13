const { Router } = require('express');
const characters = require('../controllers');
const router = Router();

router.get('/', characters.getCharacters);
router.post('/', characters.createCharacter);

module.exports = router;
