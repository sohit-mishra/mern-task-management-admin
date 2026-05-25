import api from "./api";

export const getAllUsers = () => api.get("/admin/users");

export const deleteUser = (id) => api.delete(`/admin/users/${id}`);

export const updateUserStatus = (id, status) =>
  api.put(`/admin/users/${id}/status`, { status });

export const getAllTasks = () => api.get("/admin/tasks");

export const deleteAnyTask = (id) => api.delete(`/admin/tasks/${id}`);
