import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-background p-4 text-center">
      <div>
        <h1 className="text-5xl font-semibold">404</h1>
        <p className="mt-3 text-muted-foreground">Page not found.</p>
        <Button asChild className="mt-6"><Link to="/">Go Home</Link></Button>
      </div>
    </div>
  );
}
