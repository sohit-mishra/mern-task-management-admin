const express = require('express');
const router = express.Router();
const {register , login, forgetPassword , resetPassword} = require('../controllers/authController');

router.post('register', register);
router.post('login', login);
router.post('forgetPassword', forgetPassword);
router.post('resetPassword', resetPassword);

module.exports = router;