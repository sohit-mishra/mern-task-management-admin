import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import RegisterForm from "@/components/forms/RegisterForm";
import { registerUser } from "@/services/authService";
import { errorToast, successToast } from "@/utils/toast";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      setLoading(true);
      const response = await registerUser(form);
      successToast(response.message || "Account created");
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
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <p className="mt-2 text-sm text-muted-foreground">Start managing your tasks.</p>
          </div>
          <RegisterForm onSubmit={handleSubmit} loading={loading} />
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
