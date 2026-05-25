const { errorResponse, successResponse } = require("../utils/responseHandler");
const logActivity = require("../middleware/activityLogger");
const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (!title) {
            return errorResponse(res, 400, "Title is required");
        }

        const task = await Task.create({ title, description, status, createdBy: req.user._id, });
        await logActivity(req.user._id, "TASK_CREATED", task._id);
        return successResponse(res, 201, "Task created successfully", task);
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const getMyTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.user._id, }).sort({ createdAt: -1 });
        return successResponse(res, 200, "Tasks fetched successfully", tasks);
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ id: req.params.id, createdBy: req.user._id });
        if (!task) {
            return errorResponse(res, 404, "Task not found")
        }
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, });
        await logActivity(req.user._id, "TASK_UPDATED", task._id);
        return successResponse(res, 200, "Task updated successfully", updatedTask);
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ id: req.params.id, createdBy: req.user._id });
        if (!task) {
            return errorResponse(res, 404, "Task not found")
        }
        await Task.findByIdAndDelete(id);
        await logActivity(req.user._id, "Task_Deleted");
        successResponse(res, 200, "Task deleted successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

module.exports = { createTask, getMyTasks, updateTask, deleteTask };