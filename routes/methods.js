const express = require('express');
const router = express.Router();
const MethodController = require('../controllers/MethodController');

// get all method
router.get('/methods', MethodController.index);
router.post('/methods', MethodController.create);

module.exports = router;
