"use client";

import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";

export default function CustomSideFooter() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-4 w-full">
      <div className="w-full flex items-center justify-start">
        <Switch
          id="theme-toggle"
          checked={theme === "dark"}
          onCheckedChange={handleTheme}
        />
      </div>
    </div>
  );
}
