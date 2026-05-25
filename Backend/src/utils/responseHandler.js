const successResponse = (res, statusCode = 200, message, data) => {
    return res.status(statusCode).json({
        success: true,
        message: message || "Request Successful",
        data: data || null,
        pagination: data && data.pagination ? data.pagination : null,
        total: data && data.total ? data.total : null,
        limit: data && data.limit ? data.limit : null,
    });
};

const errorResponse = (res, statusCode = 500, message) => {
  return res.status(statusCode).json({
    message: message || "Internal Server Error",
    success: false,
  });
};

const unAuthorizedResponse = (res, statusCode = 401, message) => {
  return res.status(statusCode).json({
    success: false,
    message: message || "unauthorized access",
  });
};

module.exports = {
  successResponse,
  errorResponse,
  unAuthorizedResponse,
};
