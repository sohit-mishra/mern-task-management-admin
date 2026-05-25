import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from '@/components/routes/ProtectedRoute'
import AdminRoute from '@/components/routes/AdminRoute'
import PublicRoute from '@/components/routes/PublicRoute';

import Home from '@/pages/common/Home'
import About from '@/pages/common/About'
import Contact from '@/pages/common/Contact'

import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword'

import UserDrashboard from '@/pages/user/UserDashboard';
import MyTasks from '@/pages/user/MyTasks';
import CreateTask from '@/pages/user/CreateTask';
import EditTask from '@/pages/user/EditTask';
import Profile from '@/pages/user/Profile';
import UserSettings from '@/pages/user/Settings';

import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import TaskMonitoring from '@/pages/admin/TaskMonitoring';
import ActivityLogs from '@/pages/admin/ActivityLogs';
import Analytics from '@/pages/admin/Analytics';
import AdminSettings from '@/pages/admin/Settings';

import NotFound from '@/pages/errors/NotFound';
import Unauthorized from '@/pages/errors/Unauthorized';
import ServerError from '@/pages/errors/ServerError';

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Route>

            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<UserDrashboard />} />
                <Route path="/my-tasks" element={<MyTasks />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/edit-task/:id" element={<EditTask />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<UserSettings />} />
            </Route>

            <Route element={<AdminRoute />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<UserManagement />} />
                <Route path="/admin/tasks" element={<TaskMonitoring />} />
                <Route path="/admin/activity-logs" element={<ActivityLogs />} />
                <Route path="/admin/analytics" element={<Analytics />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
            </Route>

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;
