
import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/utils/formatDate";

export default function TaskCard({ task, onDelete }) {
  const status = task?.status || "Pending";

  return (
    <Card className="rounded-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle>{task?.title || "Untitled task"}</CardTitle>
          <Badge variant={status === "Completed" ? "secondary" : "outline"}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {task?.description || "No description added."}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            {formatDate(task?.createdAt)}
          </span>
          <div className="flex gap-2">
            <Button asChild size="icon-sm" variant="outline" title="Edit task">
              <Link to={`/edit-task/${task?._id}`}>
                <Pencil />
              </Link>
            </Button>
            <Button
              size="icon-sm"
              variant="destructive"
              title="Delete task"
              onClick={() => onDelete?.(task?._id)}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
