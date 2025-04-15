"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder button until the component is mounted
    return (
      <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full" suppressHydrationWarning>
          <SunIcon
            className={`h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all ${
              theme === "dark" ? "-rotate-90 scale-0" : ""
            }`}
          />
          <MoonIcon
            className={`absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all ${
              theme === "dark" ? "rotate-0 scale-100" : ""
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}