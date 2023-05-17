const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

router.get('/', controllers.getPlanets);

module.exports = router;
