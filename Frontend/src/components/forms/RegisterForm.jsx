import { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm({ onSubmit, loading = false }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); onSubmit?.(form); }}>
      {[{ name: "name", icon: User, type: "text" }, { name: "email", icon: Mail, type: "email" }, { name: "password", icon: Lock, type: "password" }].map(({ name, icon: Icon, type }) => (
        <div key={name} className="space-y-2">
          <Label className="capitalize">{name}</Label>
          <div className="relative">
            <Icon className="absolute left-3 top-3.5 size-4 text-muted-foreground" />
            <Input name={name} type={type} required className="h-11 pl-10" value={form[name]} onChange={update} />
          </div>
        </div>
      ))}
      <Button className="h-11 w-full" disabled={loading}>{loading ? "Creating account..." : "Create Account"}</Button>
    </form>
  );
}
