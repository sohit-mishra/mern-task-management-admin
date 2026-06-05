import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PublicNavbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <Link to="/" className="font-semibold text-lg">
        Task Manager
      </Link>

      <nav className="flex items-center gap-2">
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link to="/about">About</Link>
        </Button>

        <Button asChild variant="ghost">
          <Link to="/contact">Contact</Link>
        </Button>

        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </nav>
    </header>
  );
}