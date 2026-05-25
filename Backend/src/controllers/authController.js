const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken  = require('../utils/generateToken');
const logActivity = require("../middleware/activityLogger");
const { successResponse, errorResponse } = require('../utils/responseHandler');
const sendMail = require('../services/mailService');
const crypto = require("crypto");
const env = require('../config/env');


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const checkUserExisting = await User.findOne({ email }).select("-password");

        if (checkUserExisting) {
            return errorResponse(res, 400, "User Already Exists!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return successResponse(res, 201, "User Registered Successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkUserExisting = await User.findOne({ email });

        if (!checkUserExisting) {
            return errorResponse(res, 404, "User Not Found!");
        }

        const isMatch = await bcrypt.compare(password, checkUserExisting.password);

        if (!isMatch) {
            return errorResponse(res, 400, "Invalid Credentials!");
        }

        const token = generateToken(checkUserExisting);

        return successResponse(res, 200, "Login Successful", token, {
            _id: checkUserExisting._id,
            name: checkUserExisting.name,
            email: checkUserExisting.email,
            role: checkUserExisting.role,
        });

    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}


const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const checkUserExisting = await User.findOne({ email });

        if (!checkUserExisting) {
            return errorResponse(res, 404, "User Not Found!");
        }

        const resetToken = crypto.randomBytes(32).toString("hex");

        checkUserExisting.resetPasswordToken = resetToken;
        checkUserExisting.resetPasswordExpire =
            Date.now() + 10 * 60 * 1000;

        await checkUserExisting.save();

        const resetUrl = `${env.FRONTEND_URL}/reset-password/${resetToken}`;

        const checkSend = await sendMail({
            to: checkUserExisting.email,
            subject: "Reset Password",
            html: `
            <div style="font-family: Arial;">
               <h2>Forgot Password</h2>
                <p>Click below link to reset your password:</p>
          <a href="${resetUrl}">
            Reset Password
          </a>
          <p>This link expires in 10 minutes.</p>
        </div>`,
        });

        if (!checkSend) {
            return errorResponse(res, 500, "Email Not Sent!");
        }

        return successResponse(res, 200, "Password Reset Link Sent Successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}

const resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpire: { $gt: Date.now() },
        })

        if (!user) {
            return errorResponse(res, 400, "Invalid or Expired Token!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        return successResponse(res, 200, "Password Reset Successfully");
    } catch (error) {
        errorResponse(res, 500, error.message || "Something went wrong");
    }
}



module.exports = { register, login, forgetPassword, resetPassword };