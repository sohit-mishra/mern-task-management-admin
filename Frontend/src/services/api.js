import { API_BASE_URL } from "@/utils/constants";
import { getStorage, removeStorage } from "@/utils/storage";

const buildHeaders = (headers = {}) => {
  const token = getStorage("token");

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };
};

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: buildHeaders(options.headers),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401) {
      removeStorage("user");
      removeStorage("token");
    }

    throw new Error(payload.message || "Request failed");
  }

  return payload;
};

export const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  put: (endpoint, data) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (endpoint) =>
    request(endpoint, {
      method: "DELETE",
    }),
};

export default api;
