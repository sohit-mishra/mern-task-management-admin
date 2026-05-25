const dotenv = require("dotenv");
dotenv.config();
const env = {
    MONGO_URI: process.env.MONGODB_URI,
    PORT: process.env.APP_PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET_KEY,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    NODE_ENV: process.env.NODE_ENV || 'development',
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.APP_VERSION,
    LOG_LEVEL: process.env.LOG_LEVEL,
    LOG_FILE_PATH: process.env.LOG_FILE_PATH,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
}

module.exports = env;