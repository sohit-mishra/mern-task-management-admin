import { BarChart3, ClipboardList, Home, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const userLinks = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/my-tasks", label: "My Tasks", icon: ClipboardList },
  { to: "/settings", label: "Settings", icon: Settings },
];

const adminLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: Home },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/tasks", label: "Tasks", icon: ClipboardList },
  { to: "/admin/activity-logs", label: "Activity", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ className = "hidden lg:block" }) {
  const { user } = useAuth();
  const links = user?.role?.toLowerCase() === "admin" ? adminLinks : userLinks;

  return (
    <aside className={`${className} min-h-screen w-64 border-r bg-card p-4`}>
      <div className="mb-8 text-lg font-semibold">Task Manager</div>
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`
            }
          >
            <Icon className="size-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
