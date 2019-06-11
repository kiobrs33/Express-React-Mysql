const express = require('express');
const router = express.Router();
const vistorsController = require('../controllers/frepassesController');

router.get('/', vistorsController.show);
router.get('/:id', vistorsController.showOne);
router.post('/', vistorsController.create);
router.put('/:id', vistorsController.update);
router.delete('/:id', vistorsController.delete);
module.exports = router;
