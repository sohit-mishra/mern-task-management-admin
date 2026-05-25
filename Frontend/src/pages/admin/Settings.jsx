

import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DashboardLayout title="Admin Settings">
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm text-muted-foreground">Current theme: {theme}</p>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </DashboardLayout>
  );
}
