import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function UserTable({ users = [], onDelete, onStatusChange }) {
  if (!users.length) return <p className="rounded-lg border p-6 text-sm text-muted-foreground">No users found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell><Badge variant="outline">{user.role}</Badge></TableCell>
            <TableCell>
              <select value={user.status || "Active"} onChange={(event) => onStatusChange?.(user._id, event.target.value)} className="h-8 rounded-md border bg-background px-2 text-sm">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </TableCell>
            <TableCell className="text-right">
              <Button size="icon-sm" variant="destructive" onClick={() => onDelete?.(user._id)}><Trash2 /></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
