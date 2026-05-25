import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UserStatusModal({ open, user, status, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur">
      <Card className="w-full max-w-sm rounded-lg">
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Update user status</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Set {user?.name || "this user"} to {status}.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
            <Button onClick={onConfirm}>Update</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
