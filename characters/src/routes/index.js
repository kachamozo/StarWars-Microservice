const express = require('express');
const characters = require('../controllers');

const router = express.Router();

router.get('/', characters.getCharacters);
router.post('/', characters.createCharacter);

module.exports = router;
