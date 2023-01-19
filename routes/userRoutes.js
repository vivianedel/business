const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);
router.post('/', userController.postUser);
router.post('/auth', userController.userAuth);

module.exports = router;