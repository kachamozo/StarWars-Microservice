const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.getCharacters);
router.post('/', controllers.createCharacter);

module.exports = router;
