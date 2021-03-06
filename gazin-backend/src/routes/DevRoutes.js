const express = require('express');
const router = express.Router();

const DevController = require('../controller/DevController');

router.post('/', DevController.create);
router.put('/:id', DevController.update);
router.get('/:id', DevController.getById);
router.get('/', DevController.getAll);
router.delete('/:id', DevController.delete);

module.exports = router;
