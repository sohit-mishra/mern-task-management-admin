
import { Mail, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function UserCard({ user }) {
  return (
    <Card className="rounded-lg">
      <CardContent className="flex items-center gap-4">
        <div className="grid size-11 place-items-center rounded-lg bg-muted text-sm font-semibold">
          {user?.name?.slice(0, 2)?.toUpperCase() || "US"}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{user?.name || "Unknown user"}</p>
          <p className="flex items-center gap-1 truncate text-sm text-muted-foreground">
            <Mail className="size-3.5" />
            {user?.email || "No email"}
          </p>
        </div>
        <Badge variant="outline" className="gap-1">
          <ShieldCheck className="size-3" />
          {user?.role || "User"}
        </Badge>
      </CardContent>
    </Card>
  );
}
