const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.getFilms);

module.exports = router;
