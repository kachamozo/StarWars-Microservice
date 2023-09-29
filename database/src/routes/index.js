const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const { Character } = require('../database');

const router = Router();

router.get('/:model', middlewares.modelValidation, controllers.getAll);
router.get(
	'/:model/:id',
	middlewares.modelValidation,
	middlewares.idValidation,
	controllers.getById
);
router.post('/:model', controllers.createCharacter);
router.delete('/:model/:id', middlewares.idValidation, controllers.deleteById);

module.exports = router;
