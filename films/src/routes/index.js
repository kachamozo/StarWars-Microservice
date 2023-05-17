const express = require('express');
const films = require('../controllers');

const router = express.Router();

router.get('/', films.getFilms);

module.exports = router;
