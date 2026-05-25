import { LogOut, Menu, Moon, Sun, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/95 px-4 backdrop-blur">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu />
        </Button>
        <Link to="/" className="font-semibold">Task Manager</Link>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Button asChild variant="ghost" size="icon" title="Profile">
          <Link to="/profile">
            <User />
          </Link>
        </Button>
        {user ? (
          <Button variant="outline" onClick={handleLogout}>
            <LogOut />
            Logout
          </Button>
        ) : null}
      </div>
    </header>
  );
}
