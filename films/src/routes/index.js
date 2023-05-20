const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/', controllers.getFilms);
router.post('/', middlewares.caracterValidation, controllers.createFilms);

module.exports = router;
