const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const {getAllUsers, deleteUser, updateUserStatus, getAllTasks, deleteAnyTask} = require('../controllers/adminController');

router.use(protect, adminOnly);

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id/status", updateUserStatus);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", deleteAnyTask);

module.exports = router;