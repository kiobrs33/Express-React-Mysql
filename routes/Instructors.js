const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorsController');

router.get('/', instructorController.show);
router.get('/:id', instructorController.showOne);
router.post('/', instructorController.create);
router.put('/:id', instructorController.update);
router.delete('/:id', instructorController.delete);
module.exports = router;
