const express = require('express');
const planets = require('../controllers');
const router = express.Router();

router.get('/', planets.getPlanets);

module.exports = router;
