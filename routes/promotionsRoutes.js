const express = require('express');
const router = express.Router();
const promotionsController = require('../controllers/promotionsController');

router.get('/', promotionsController.getPromotions);

module.exports = router;
