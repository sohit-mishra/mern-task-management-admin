# Task Manager

A full-stack task management application with user authentication, role-based access, task management, admin dashboards, activity logs, and password reset support.

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Radix UI / shadcn-style components
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- Nodemailer

## Project Structure

```text
Assigment/
|-- Backend/
|   |-- src/
|   |   |-- config/
|   |   |-- controllers/
|   |   |-- middleware/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- services/
|   |   |-- utils/
|   |   `-- app.js
|   |-- .env
|   |-- package.json
|   `-- server.js
|
|-- Frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |-- context/
|   |   |-- hooks/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- utils/
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |   `-- routes.jsx
|   |-- package.json
|   `-- vite.config.js
|
|-- package.json
`-- README.md
```

## Features

- User registration and login
- JWT-based authentication
- Role-based authorization for users and admins
- Create, update, delete, and view tasks
- Admin user management
- Admin task monitoring
- Activity logging
- Forgot password and reset password support
- Protected frontend routes

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

Install root dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd Backend
npm install
```

Install frontend dependencies:

```bash
cd ../Frontend
npm install
```

## Environment Variables

Create a `.env` file inside the `Backend` folder:

```env
APP_NAME=Task Manager API
APP_VERSION=1.0.0
NODE_ENV=development
APP_PORT=5000

MONGODB_URI=mongodb://127.0.0.1:27017/task-manager

JWT_SECRET_KEY=your_secret_key
JWT_EXPIRES_IN=7d

FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:5000

EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_PORT=587
```

## Run the Project

Run backend and frontend together from the root folder:

```bash
npm run dev
```

Run only the backend:

```bash
cd Backend
npm run dev
```

Run only the frontend:

```bash
cd Frontend
npm run dev
```

Default URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- API base URL: `http://localhost:5000/api`

## Backend API Routes

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/forgetPassword` | Request password reset |
| POST | `/api/auth/resetPassword` | Reset password |

### Tasks

These routes require an authorization token.

```text
Authorization: Bearer <token>
```

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/task` | Create a task |
| GET | `/api/task` | Get logged-in user's tasks |
| PUT | `/api/task/:id` | Update a task |
| DELETE | `/api/task/:id` | Delete a task |

### Activity

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/activity/my` | Get logged-in user's activity logs |
| GET | `/api/activity/all` | Get all activity logs as admin |

### Admin

These routes require admin access.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/admin/users` | Get all users |
| DELETE | `/api/admin/users/:id` | Delete a user |
| PUT | `/api/admin/users/:id/status` | Update user status |
| GET | `/api/admin/tasks` | Get all tasks |
| DELETE | `/api/admin/tasks/:id` | Delete any task |

## Example Request Bodies

### Register

```json
{
  "name": "Sohit",
  "email": "sohit@example.com",
  "password": "123456"
}
```

### Login

```json
{
  "email": "sohit@example.com",
  "password": "123456"
}
```

### Create Task

```json
{
  "title": "Complete project",
  "description": "Finish frontend and backend work",
  "status": "Pending"
}
```

## Available Scripts

### Root

```bash
npm run dev
```

Starts backend and frontend together.

### Backend

```bash
npm run dev
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Author

Sohit Mishra
