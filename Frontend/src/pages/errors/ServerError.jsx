import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ServerError() {
  return (
    <div className="grid min-h-screen place-items-center bg-background p-4 text-center">
      <div>
        <h1 className="text-4xl font-semibold">Server Error</h1>
        <p className="mt-3 text-muted-foreground">Something went wrong. Please try again later.</p>
        <Button asChild className="mt-6"><Link to="/">Go Home</Link></Button>
      </div>
    </div>
  );
}
