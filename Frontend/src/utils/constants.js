export const USER_ROLES = {
    ADMIN :"admin",
    User:'user',
}

export const TASK_STATUS = {
    PENDING :"pending",
    IN_PROGRES:'in-progress',
    COMPLETED: 'completed',
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL  || "http://localhost:5000/api";

