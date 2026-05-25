import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskForm from "@/components/forms/TaskForm";

export default function CreateTaskModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur">
      <Card className="w-full max-w-lg rounded-lg">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Create Task</CardTitle>
          <Button size="icon-sm" variant="ghost" onClick={onClose}><X /></Button>
        </CardHeader>
        <CardContent>
          <TaskForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
