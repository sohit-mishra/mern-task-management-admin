const User = require('../models/User');
const Task = require("../models/Task");
const {successResponse , errorResponse }= require("../utils/responseHandler");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password").sort({ createdAt: -1 });
        return successResponse(res, 200, "Users fetched successfully", users);
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return errorResponse(res, 404, "User not found");
        }

        await Task.deleteMany({
            createdBy: user._id,
        });

        await User.findByIdAndDelete(req.params.id);
        return successResponse(res, 200, "User deleted successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const updateUserStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const user = await User.findById(req.params.id);

        if (!user) {
            return errorResponse(res, 404, "User not found");
        }

        user.status = status;
        await user.save();
        return successResponse(res, 200, "User status updated successfully", user);
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const getAllTasks = async (req, res) => {
    try {

        const tasks = await Task.find()
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 });

        return successResponse(res, 200, "Tasks fetched successfully", tasks);

    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const deleteAnyTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return errorResponse(res, 404, "Task not found");
        }

        await Task.findByIdAndDelete(req.params.id);
        return successResponse(res,200,"Task deleted successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

module.exports = { getAllUsers, deleteUser, updateUserStatus, getAllTasks, deleteAnyTask };