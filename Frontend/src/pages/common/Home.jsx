import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import PublicNavbar from "@/components/layout/PublicNavbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <main className="min-h-[calc(90vh-56px)]">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full border px-4 py-1 text-sm font-medium">
                🚀 Modern Task Management Platform
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-6xl">
                Manage Tasks
                <span className="block text-primary">
                  Smarter & Faster
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Organize tasks, track progress, manage teams, and monitor
                activities from one powerful dashboard designed for
                productivity and collaboration.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/register">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Task Tracking",
                  icon: ClipboardList,
                  desc: "Track and manage tasks efficiently.",
                },
                {
                  title: "Role-Based Access",
                  icon: ShieldCheck,
                  desc: "Secure permissions for admins and users.",
                },
                {
                  title: "Activity Logs",
                  icon: Activity,
                  desc: "Monitor actions and history in real time.",
                },
                {
                  title: "User Management",
                  icon: Users,
                  desc: "Manage team members and permissions.",
                },
              ].map(({ title, icon: Icon, desc }) => (
                <Card key={title} className="rounded-2xl">
                  <CardContent className="flex items-start gap-4 p-6">
                    <Icon className="h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-muted-foreground">Tasks Managed</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">1K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-muted-foreground">Uptime</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-muted-foreground">Availability</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}