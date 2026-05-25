
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="mt-4 text-muted-foreground">
          Task Manager is a MERN-style project for users and admins. Users can manage their own tasks, while admins can monitor users, tasks, and activity logs.
        </p>
      </main>
      <Footer />
    </div>
  );
}
