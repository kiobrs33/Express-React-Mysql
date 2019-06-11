const express = require('express');
const router = express.Router();
const frepassController = require('../controllers/frepassesController');

router.get('/', frepassController.show);
router.get('/:id', frepassController.showOne);
router.post('/', frepassController.create);
router.put('/:id', frepassController.update);
router.delete('/:id', frepassController.delete);
module.exports = router;
