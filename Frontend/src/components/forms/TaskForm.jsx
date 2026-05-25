import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TaskForm({ initialValues, onSubmit, loading = false }) {
  const [form, setForm] = useState({
    title: initialValues?.title || "",
    description: initialValues?.description || "",
    status: initialValues?.status || "Pending",
  });

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); onSubmit?.(form); }}>
      <div className="space-y-2">
        <Label>Title</Label>
        <Input name="title" required value={form.title} onChange={update} />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>
        <textarea name="description" value={form.description} onChange={update} className="min-h-28 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="space-y-2">
        <Label>Status</Label>
        <select name="status" value={form.status} onChange={update} className="h-10 w-full rounded-lg border bg-background px-3 text-sm">
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>
      <Button disabled={loading}>{loading ? "Saving..." : "Save Task"}</Button>
    </form>
  );
}
