const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    action: {
        type: String,
        required: true,
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        default: null,
    },
}, { timestamps: true });

const Activity = mongoose.model('ActivityLog', activityLogSchema);

module.exports = Activity;