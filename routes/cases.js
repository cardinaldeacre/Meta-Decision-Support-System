const express = require('express');
const router = express.Router();
const CaseController = require('../controllers/CaseController');

// create case
router.post('/cases', CaseController.create);
// get cases by user_id
router.get('/user/:user_id/cases', CaseController.index);

module.exports = router;
