import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import LoginForm from "@/components/forms/LoginForm";
import { loginUser } from "@/services/authService";
import useAuth from "@/hooks/useAuth";
import { errorToast, successToast } from "@/utils/toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      setLoading(true);
      const response = await loginUser(form);
      const token = response.data;
      login({ email: form.email, name: form.email.split("@")[0], role: "User" }, token);
      successToast(response.message || "Login successful");
      navigate("/dashboard");
    } catch (error) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden items-center justify-center bg-muted p-10 lg:flex">
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-semibold">Task Manager</h1>
          <p className="text-muted-foreground">Plan work, track progress, and keep activity visible.</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-none shadow-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
              <p className="text-sm text-muted-foreground">Login to manage your dashboard</p>
            </div>
            <LoginForm onSubmit={handleSubmit} loading={loading} />
            <div className="text-center text-sm text-muted-foreground">
              <Link to="/forgotpassword" className="text-primary hover:underline">Forgot password?</Link>
              <span className="mx-2">.</span>
              <Link to="/register" className="text-primary hover:underline">Create account</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
