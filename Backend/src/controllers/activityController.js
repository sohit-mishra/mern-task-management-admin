const ActivityLog = require("../models/ActivityLog");
const { successResponse, errorResponse } = require("../utils/responseHandler");


const getAllActivities = async (req, res) => {
    try {
        const activities = await ActivityLog.find()
            .populate("user", "name email role")
            .populate("task")
            .sort({ createdAt: -1 });

        return successResponse(res, 200, "Activities fetched successfully", {
            count: activities.length,
            activities,
        });

    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}
const getMyActivities = async (req, res) => {
    try {
        const activities = await ActivityLog.find({
            user: req.user._id,
        }).populate("task").sort({ createdAt: -1 });

        return successResponse(res, 200, "My activities fetched successfully", {
            count: activities.length,
            activities,
        });
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}
module.exports = { getAllActivities, getMyActivities };