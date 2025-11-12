import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // initialize from localStorage
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // persist choice
  }, [isDark]);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle theme-controller"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      {isDark ? (
        <Moon size={20} className="text-blue-400" />
      ) : (
        <Sun size={20} className="text-yellow-500" />
      )}
    </label>
  );
};

export default ThemeToggle;
