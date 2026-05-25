import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({ onSubmit, loading = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); onSubmit?.(form); }}>
      <div className="space-y-2">
        <Label>Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 size-4 text-muted-foreground" />
          <Input name="email" type="email" required placeholder="Enter your email" className="h-11 pl-10" value={form.email} onChange={update} />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 size-4 text-muted-foreground" />
          <Input name="password" type={showPassword ? "text" : "password"} required placeholder="Enter your password" className="h-11 pl-10 pr-10" value={form.password} onChange={update} />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-muted-foreground">
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>
      <Button className="h-11 w-full text-base" disabled={loading}>{loading ? "Logging in..." : "Login"}</Button>
    </form>
  );
}
