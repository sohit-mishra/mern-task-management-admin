import Footer from "@/components/layout/Footer";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <main className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl rounded-2xl border bg-card p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Contact Us
            </h1>

            <p className="mt-3 text-muted-foreground">
              Have questions, suggestions, or need support? We'd love to hear from you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center">
              <User className="mx-auto mb-3 h-8 w-8" />
              <h3 className="font-semibold">Author</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sohit Mishra
              </p>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <Mail className="mx-auto mb-3 h-8 w-8" />
              <h3 className="font-semibold">Email</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                contact@example.com
              </p>
            </div>

            <div className="rounded-xl border p-6 text-center">
              <MessageSquare className="mx-auto mb-3 h-8 w-8" />
              <h3 className="font-semibold">Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Available for project-related assistance.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-muted p-6 text-center">
            <h3 className="text-lg font-semibold">
              Need Help?
            </h3>

            <p className="mt-2 text-muted-foreground">
              For project support, bug reports, feature requests, or general
              inquiries, please reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}