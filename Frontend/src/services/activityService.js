import api from "./api";

export const getMyActivities = () => api.get("/activity/my");

export const getAllActivities = () => api.get("/activity/all");
