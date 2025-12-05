"use client";

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(null);

  function applyDark() {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  function applyLight() {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  // Set initial color mode on load
  useEffect(() => {
    const saved = localStorage.getItem("colorMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    let initialTheme;

    if (saved === "dark") {
      applyDark();
      initialTheme = "dark";
    } else if (saved === "light") {
      applyLight();
      initialTheme = "light";
    } else {
      // Follow system preference
      if (prefersDark.matches) {
        applyDark();
        initialTheme = "dark";
        localStorage.setItem("colorMode", "dark");
      } else {
        applyLight();
        initialTheme = "light";
        localStorage.setItem("colorMode", "light");
      }
    }

    setTheme(initialTheme);

    const listener = (e) => {
      if (e.matches) {
        applyDark();
        setTheme("dark");
        localStorage.setItem("colorMode", "dark");
      } else {
        applyLight();
        setTheme("light");
        localStorage.setItem("colorMode", "light");
      }
    };

    prefersDark.addEventListener("change", listener);

    // Cleanup on unmount
    return () => prefersDark.removeEventListener("change", listener);
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      applyLight();
      setTheme("light");
      localStorage.setItem("colorMode", "light");
    } else {
      applyDark();
      setTheme("dark");
      localStorage.setItem("colorMode", "dark");
    }
  }

  return { theme, toggleTheme };
}
