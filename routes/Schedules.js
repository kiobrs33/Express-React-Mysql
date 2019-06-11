const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedulesController');

router.get('/', scheduleController.show);
router.get('/:id', scheduleController.showOne);
router.post('/', scheduleController.create);
router.put('/:id', scheduleController.update);
router.delete('/:id', scheduleController.delete);
module.exports = router;
