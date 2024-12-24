import { ThemeToggle } from "@/components/theme-toggle";
import { ClipboardList } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ClipboardList className="h-6 w-6" />
            <span className="text-xl font-bold">Multi-Step Form</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}