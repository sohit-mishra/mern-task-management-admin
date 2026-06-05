const express = require('express');
const router = express.Router();
const {register , login, forgetPassword , resetPassword, profile} = require('../controllers/authController');
const protect = require("../middleware/authMiddleware");

router.post('/register', register);
router.post('/login', login);
router.post('/forgetPassword', forgetPassword);
router.post('/resetPassword', resetPassword);
router.get("/me",protect, profile);

module.exports = router;