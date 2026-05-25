const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { unAuthorizedResponse , errorResponse} = require("../utils/responseHandler");
const env = require("../config/env")

const protect = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            unAuthorizedResponse();
        }

        const decoded = jwt.verify(decoded, env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        errorResponse();
    }
}

module.exports = protect;