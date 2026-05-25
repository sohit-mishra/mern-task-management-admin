import api from "./api";

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const forgotPassword = (email) =>
  api.post("/auth/forgetPassword", { email });

export const resetPassword = ({ token, password }) =>
  api.post("/auth/resetPassword", { token, password });
