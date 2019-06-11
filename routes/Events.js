const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');

router.get('/', eventController.show);
router.get('/:id', eventController.showOne);
router.post('/', eventController.create);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.delete);
module.exports = router;
