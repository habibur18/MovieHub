"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering the component during SSR

  if (resolvedTheme === "dark") {
    return (
      <button className="p-2 rounded-lg">
        <Image
          onClick={() => setTheme("light")}
          src="/icons/moon.svg"
          width="24"
          height="24"
          alt="Light mode"
        />
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button className="p-2 rounded-lg">
        <Image
          onClick={() => setTheme("dark")}
          src="/icons/sun.svg"
          width="24"
          height="24"
          alt="Dark mode"
        />
      </button>
    );
  }
}
