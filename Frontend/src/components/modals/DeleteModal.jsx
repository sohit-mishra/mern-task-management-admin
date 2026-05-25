import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DeleteModal({ open, title = "Delete item?", description = "This action cannot be undone.", onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur">
      <Card className="w-full max-w-sm rounded-lg">
        <CardContent className="space-y-4 pt-2">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
            <Button variant="destructive" onClick={onConfirm}>Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
