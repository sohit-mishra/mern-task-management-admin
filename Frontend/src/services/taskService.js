import api from "./api";

export const createTask = (data) => api.post("/task", data);

export const getMyTasks = () => api.get("/task");

export const updateTask = (id, data) => api.put(`/task/${id}`, data);

export const deleteTask = (id) => api.delete(`/task/${id}`);
