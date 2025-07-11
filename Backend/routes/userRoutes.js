const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.createUser);
router.get('/users-list', userController.getAllUsers);

module.exports = router;
