import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/utils/formatDate";

export default function TaskTable({ tasks = [], onDelete }) {
  if (!tasks.length) return <p className="rounded-lg border p-6 text-sm text-muted-foreground">No tasks found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task._id}>
            <TableCell className="font-medium">{task.title}</TableCell>
            <TableCell><Badge variant="outline">{task.status}</Badge></TableCell>
            <TableCell>{formatDate(task.createdAt)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button asChild size="icon-sm" variant="outline"><Link to={`/edit-task/${task._id}`}><Pencil /></Link></Button>
                <Button size="icon-sm" variant="destructive" onClick={() => onDelete?.(task._id)}><Trash2 /></Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
