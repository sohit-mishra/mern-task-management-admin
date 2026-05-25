const express = require("express");
const router = express.Router();
const activity = require('../routes/activityRoutes');
const admin = require("../routes/adminRoutes");
const auth = require("../routes/authRoutes");
const task = require("../routes/taskRoutes");

router.use('/auth', auth);
router.use('/admin', admin);
router.use('/activity', activity);
router.use('/task', task);

module.exports = router;