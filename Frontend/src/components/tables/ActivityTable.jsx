import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDateTime } from "@/utils/formatDate";

export default function ActivityTable({ activities = [] }) {
  if (!activities.length) return <p className="rounded-lg border p-6 text-sm text-muted-foreground">No activity found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Action</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity._id}>
            <TableCell className="font-medium">{activity.action}</TableCell>
            <TableCell>{activity.user?.name || "Current user"}</TableCell>
            <TableCell>{activity.task?.title || "-"}</TableCell>
            <TableCell>{formatDateTime(activity.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
