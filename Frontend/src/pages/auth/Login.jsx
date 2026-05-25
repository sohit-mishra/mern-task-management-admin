// src/pages/auth/Login.jsx

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// import loginBanner from "@/assets/images/login-banner.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-muted p-10">
        {/* <img
          src={loginBanner}
          alt="Login Banner"
          className="w-full max-w-xl object-contain"
        /> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-none shadow-2xl">
          <CardContent className="p-8 space-y-6">

            {/* HEADER */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome Back
              </h1>

              <p className="text-muted-foreground text-sm">
                Login to manage your tasks & dashboard
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* EMAIL */}
              <div className="space-y-2">
                <Label>Email Address</Label>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <Label>Password</Label>

                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-11"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* BUTTON */}
              <Button className="w-full h-11 text-base">
                Login
              </Button>
            </form>

            {/* FOOTER */}
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <span className="text-primary cursor-pointer hover:underline">
                Register
              </span>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;