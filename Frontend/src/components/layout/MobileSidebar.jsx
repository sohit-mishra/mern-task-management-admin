import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

export default function MobileSidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur lg:hidden">
      <div className="relative w-72 max-w-[85vw] bg-card shadow-xl">
        <Button className="absolute right-3 top-3" size="icon-sm" variant="ghost" onClick={onClose}>
          <X />
        </Button>
        <Sidebar className="block" />
      </div>
    </div>
  );
}
