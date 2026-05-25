frontend/
│
├── public/
│   ├── logo.png
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── login-banner.png
│   │   │   ├── empty-state.png
│   │   │   └── dashboard-bg.png
│   │   │
│   │   └── icons/
│   │
│   ├── components/
│   │   │
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── table.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── input.jsx
│   │   │   ├── textarea.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── sheet.jsx
│   │   │   ├── form.jsx
│   │   │   ├── select.jsx
│   │   │   ├── avatar.jsx
│   │   │   ├── toast.jsx
│   │   │   └── skeleton.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── MobileSidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── StatsCard.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── UserCard.jsx
│   │   │   └── AnalyticsCard.jsx
│   │   │
│   │   ├── tables/
│   │   │   ├── UserTable.jsx
│   │   │   ├── TaskTable.jsx
│   │   │   ├── ActivityTable.jsx
│   │   │   └── DashboardTable.jsx
│   │   │
│   │   ├── charts/
│   │   │   ├── AnalyticsChart.jsx
│   │   │   ├── TaskStatusChart.jsx
│   │   │   ├── UserGrowthChart.jsx
│   │   │   └── ActivityChart.jsx
│   │   │
│   │   ├── modals/
│   │   │   ├── CreateTaskModal.jsx
│   │   │   ├── EditTaskModal.jsx
│   │   │   ├── DeleteModal.jsx
│   │   │   └── UserStatusModal.jsx
│   │   │
│   │   ├── forms/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── UserForm.jsx
│   │   │
│   │   ├── loaders/
│   │   │   ├── PageLoader.jsx
│   │   │   ├── TableLoader.jsx
│   │   │   └── CardLoader.jsx
│   │   │
│   │   └── routes/
│   │       ├── ProtectedRoute.jsx
│   │       ├── AdminRoute.jsx
│   │       └── PublicRoute.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   ├── TaskMonitoring.jsx
│   │   │   ├── ActivityLogs.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── user/
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── MyTasks.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── EditTask.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── errors/
│   │   │   ├── NotFound.jsx
│   │   │   ├── Unauthorized.jsx
│   │   │   └── ServerError.jsx
│   │   │
│   │   └── common/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── TaskContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useTasks.js
│   │   ├── useAdmin.js
│   │   └── useTheme.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── taskService.js
│   │   ├── adminService.js
│   │   └── activityService.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── permissions.js
│   │   ├── formatDate.js
│   │   ├── storage.js
│   │   ├── toast.js
│   │   └── helpers.js
│   │
│   ├── lib/
│   │   └── utils.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── animations.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── routes.jsx
│
├── .env
├── .gitignore
├── components.json
├── jsconfig.json
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── yarn.lock

