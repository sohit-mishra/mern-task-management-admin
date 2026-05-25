# 🚀 Task Manager Backend API

A complete backend API for Task Management System built using:

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Role-Based Authorization
- Activity Logging
- Forgot Password Mail System

---

# 📌 Features

✅ User Authentication  
✅ JWT Login System  
✅ Role-Based Access Control  
✅ Forgot Password & Reset Password  
✅ Create / Update / Delete Tasks  
✅ Admin Dashboard APIs  
✅ Activity Tracking System  
✅ Protected Routes Middleware  
✅ Error Handling Middleware  
✅ MongoDB Integration  
✅ Nodemailer Email Service

---

# 📁 Project Structure

```bash
backend/
│
├── src/
│   ├── config/
│   │   ├── env.js
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   ├── adminController.js
│   │   └── activityController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── activityLogger.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Task.js
│   │   └── ActivityLog.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   │   ├── adminRoutes.js
│   │   ├── activityRoutes.js
│   │   └── index.js
│   │
│   ├── services/
│   │   └── mailService.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── responseHandler.js
│   │   └── permissions.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repository_url>
```

---

## 2️⃣ Move to Project Folder

```bash
cd backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# 🌐 Base URL

```bash
http://localhost:5000/api
```

---

# 🔐 Authentication Routes

## ✅ Register User

### POST

```bash
/api/auth/register
```

### Body

```json
{
  "name": "Sohit",
  "email": "sohit@gmail.com",
  "password": "123456"
}
```

---

## ✅ Login User

### POST

```bash
/api/auth/login
```

### Body

```json
{
  "email": "sohit@gmail.com",
  "password": "123456"
}
```

---

## ✅ Forgot Password

### POST

```bash
/api/auth/forgetPassword
```

### Body

```json
{
  "email": "sohit@gmail.com"
}
```

---

## ✅ Reset Password

### POST

```bash
/api/auth/resetPassword
```

### Body

```json
{
  "token": "reset_token",
  "password": "newpassword"
}
```

---

# ✅ Task Routes

> Protected Routes

## Authorization Header

```bash
Authorization: Bearer TOKEN
```

---

## ✅ Create Task

### POST

```bash
/api/task
```

### Body

```json
{
  "title": "Complete Backend",
  "description": "Finish APIs",
  "status": "Pending"
}
```

---

## ✅ Get My Tasks

### GET

```bash
/api/task
```

---

## ✅ Update Task

### PUT

```bash
/api/task/:id
```

### Body

```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "status": "Completed"
}
```

---

## ✅ Delete Task

### DELETE

```bash
/api/task/:id
```

---

# 📋 Activity Routes

> Protected Routes

---

## ✅ Get My Activities

### GET

```bash
/ api/activity/my
```

---

## ✅ Get All Activities (Admin Only)

### GET

```bash
/api/activity/all
```

---

# 👨‍💻 Admin Routes

> Admin Access Required

---

## ✅ Get All Users

### GET

```bash
/api/admin/users
```

---

## ✅ Delete User

### DELETE

```bash
/api/admin/users/:id
```

---

## ✅ Update User Status

### PUT

```bash
/api/admin/users/:id/status
```

### Body

```json
{
  "status": "Inactive"
}
```

---

## ✅ Get All Tasks

### GET

```bash
/api/admin/tasks
```

---

## ✅ Delete Any Task

### DELETE

```bash
/api/admin/tasks/:id
```

---

# 🧩 Environment Variables

Create `.env` file:

```env
# ======================
# APP
# ======================

APP_NAME=Task Manager API
APP_VERSION=1.0.0
NODE_ENV=development

# ======================
# SERVER
# ======================

APP_PORT=5000

# ======================
# DATABASE
# ======================

MONGODB_URI=mongodb://127.0.0.1:27017/task-manager

# ======================
# JWT
# ======================

JWT_SECRET_KEY=my_super_secret_key
JWT_EXPIRES_IN=7d

# ======================
# URLS
# ======================

FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000

# ======================
# EMAIL
# ======================

EMAIL_SERVICE=gmail
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

---

# 📦 Required Packages

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken cors nodemailer
```

---

# 📦 Development Packages

```bash
npm install --save-dev nodemon
```

---

# 🛡️ User Roles

| Role  | Permissions |
|-------|-------------|
| User  | Manage Own Tasks |
| Admin | Manage All Users & Tasks |

---

# 📄 Sample Success Response

```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {}
}
```

---

# ❌ Sample Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# 🔐 JWT Authorization Header

```bash
Authorization: Bearer your_token_here
```

---

# 🧠 Activity Logs

Activities tracked:

- TASK_CREATED
- TASK_UPDATED
- TASK_DELETED
- USER_LOGIN
- PASSWORD_RESET

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Nodemailer
- bcryptjs

---

# 👨‍💻 Author

## Sohit

Task Manager Backend API Project