const express = require('express');
const router = express.Router();
const classController = require('../controllers/classesController');

router.get('/', classController.show);
router.get('/:id', classController.showOne);
router.post('/', classController.create);
router.put('/:id', classController.update);
router.delete('/:id', classController.delete);
module.exports = router;
