import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resetPassword } from "@/services/authService";
import { errorToast, successToast } from "@/utils/toast";

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ token: params.token || "", password: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await resetPassword(form);
      successToast(response.message || "Password reset");
      navigate("/login");
    } catch (error) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-background p-4">
      <Card className="w-full max-w-md rounded-lg">
        <CardContent className="space-y-6 p-8">
          <h1 className="text-2xl font-semibold">Reset Password</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Reset Token</Label>
              <Input name="token" required value={form.token} onChange={update} />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input name="password" type="password" required value={form.password} onChange={update} />
            </div>
            <Button className="w-full" disabled={loading}>{loading ? "Updating..." : "Reset Password"}</Button>
          </form>
          <Link to="/login" className="block text-center text-sm text-primary hover:underline">Back to login</Link>
        </CardContent>
      </Card>
    </div>
  );
}
