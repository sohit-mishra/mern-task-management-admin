import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPassword } from "@/services/authService";
import { errorToast, successToast } from "@/utils/toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await forgotPassword(email);
      successToast(response.message || "Reset link sent");
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
          <div>
            <h1 className="text-2xl font-semibold">Forgot Password</h1>
            <p className="mt-2 text-sm text-muted-foreground">Enter your email to receive a reset link.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <Button className="w-full" disabled={loading}>{loading ? "Sending..." : "Send Reset Link"}</Button>
          </form>
          <Link to="/login" className="block text-center text-sm text-primary hover:underline">Back to login</Link>
        </CardContent>
      </Card>
    </div>
  );
}
