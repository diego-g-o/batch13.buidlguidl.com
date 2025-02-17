"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";


const SwitchTheme = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDarkMode = resolvedTheme === "dark";
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  
    return (
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-900" />}
        </button>
      </div>
    );
  };
export default SwitchTheme;

