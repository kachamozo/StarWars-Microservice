const express = require('express');
const characters = require('../controllers');

const router = express.Router();

router.get('/', characters.getCharacters);

module.exports = router;
