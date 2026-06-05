import Footer from "@/components/layout/Footer";
import PublicNavbar from "@/components/layout/PublicNavbar";
import {
  ClipboardList,
  ShieldCheck,
  Activity,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <main className="min-h-[calc(100vh-56px)] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Task Manager
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Task Manager is a modern MERN-based task management platform
              designed to help teams and individuals organize work, track
              progress, and improve productivity through a centralized dashboard.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-6">
              <ClipboardList className="mb-4 h-10 w-10" />
              <h3 className="text-lg font-semibold">Task Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create, update, organize, and monitor tasks efficiently.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <ShieldCheck className="mb-4 h-10 w-10" />
              <h3 className="text-lg font-semibold">Role-Based Access</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure access control for admins and regular users.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Activity className="mb-4 h-10 w-10" />
              <h3 className="text-lg font-semibold">Activity Tracking</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Monitor user activity and maintain detailed audit logs.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Users className="mb-4 h-10 w-10" />
              <h3 className="text-lg font-semibold">User Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Manage users, permissions, and account activities from one place.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16 rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>

            <p className="mt-4 text-muted-foreground">
              Our goal is to simplify task management for organizations and
              teams by providing a clean, secure, and scalable platform.
              Whether you're managing personal tasks or coordinating a large
              team, Task Manager helps keep everything organized and accessible.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}