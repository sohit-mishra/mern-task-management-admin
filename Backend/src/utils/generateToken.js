const jwt = require('jsonwebtoken');
const env = require('../config/env');

const generateToken = (user) => {
    try {
        const token = jwt.sign({ id: user._id, role: user.role },
            env.JWT_SECRET_KEY, { expiresIn: env.JWT_EXPIRES_IN });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = generateToken;