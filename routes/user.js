const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/', userController.Login);
router.post('/changePassword', userController.changePassword);

module.exports = router;