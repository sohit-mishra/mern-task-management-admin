
import { Link } from "react-router-dom";
import { CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-14 items-center justify-between border-b px-4">
        <Link to="/" className="font-semibold">Task Manager</Link>
        <nav className="flex gap-2">
          <Button asChild variant="ghost"><Link to="/about">About</Link></Button>
          <Button asChild variant="ghost"><Link to="/contact">Contact</Link></Button>
          <Button asChild><Link to="/login">Login</Link></Button>
        </nav>
      </header>
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_420px] lg:items-center">
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Task Manager</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Manage daily tasks, monitor activity, and keep admin workflows organized from one dashboard.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/register">Get Started</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/login">Login</Link></Button>
          </div>
        </section>
        <section className="grid gap-3">
          {[
            { title: "Task tracking", icon: ClipboardList },
            { title: "Role based access", icon: ShieldCheck },
            { title: "Activity history", icon: CheckCircle2 },
          ].map(({ title, icon: Icon }) => (
            <Card key={title} className="rounded-lg">
              <CardContent className="flex items-center gap-3">
                <Icon className="size-5" />
                <span className="font-medium">{title}</span>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
