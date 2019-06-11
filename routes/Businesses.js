const express = require('express');
const router = express.Router();
const businessController = require('../controllers/busineesesController');

router.get('/', businessController.show);
router.get('/:id', businessController.showOne);
router.post('/', businessController.create);
router.put('/:id', businessController.update);
router.delete('/:id', businessController.delete);
module.exports = router;
