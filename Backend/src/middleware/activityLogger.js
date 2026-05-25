const ActivityLog = require("../models/ActivityLog");

const logActivity = async(userId, action, taskId=null)=>{
    await ActivityLog.create({
    user: userId,
    action,
    task: taskId,
  });
}
module.exports = logActivity;