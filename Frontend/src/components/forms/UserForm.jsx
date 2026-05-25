import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UserForm({ initialValues, onSubmit }) {
  const [form, setForm] = useState({
    name: initialValues?.name || "",
    email: initialValues?.email || "",
    status: initialValues?.status || "Active",
  });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); onSubmit?.(form); }}>
      <div className="space-y-2">
        <Label>Name</Label>
        <Input name="name" value={form.name} onChange={update} />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input name="email" type="email" value={form.email} onChange={update} />
      </div>
      <div className="space-y-2">
        <Label>Status</Label>
        <select name="status" value={form.status} onChange={update} className="h-10 w-full rounded-lg border bg-background px-3 text-sm">
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <Button>Save User</Button>
    </form>
  );
}
