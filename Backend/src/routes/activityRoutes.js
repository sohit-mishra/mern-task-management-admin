const express = require('express');
const router = express.Router();
const {getAllActivities,getMyActivities} = require("../controllers/activityController");
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

router.use(protect);

router.get("/all",protect,adminOnly,getAllActivities);
router.get("/my",protect,getMyActivities);

module.exports = router;