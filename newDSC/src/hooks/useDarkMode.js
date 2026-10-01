import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("dark-mode") === "enabled");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
  }, [isDark]);

  return [isDark, setIsDark];
}