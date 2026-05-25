import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Unauthorized() {
  return (
    <div className="grid min-h-screen place-items-center bg-background p-4 text-center">
      <div>
        <h1 className="text-4xl font-semibold">Unauthorized</h1>
        <p className="mt-3 text-muted-foreground">You do not have permission to view this page.</p>
        <Button asChild className="mt-6"><Link to="/dashboard">Back to Dashboard</Link></Button>
      </div>
    </div>
  );
}
