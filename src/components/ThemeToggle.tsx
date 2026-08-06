"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";

    setDark(!dark);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 border border-white/20 dark:border-black/20"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}