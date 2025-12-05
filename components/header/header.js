"use client";

import useTheme from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import classes from "./header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${classes.header}`}>
      <h1 className={classes["heading-primary"]}>Where in the world?</h1>

      <button className={classes["theme-btn"]} onClick={toggleTheme}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} className={classes["theme-icon"]} />
        ) : (
          <FontAwesomeIcon icon={faSun} className={classes["theme-icon"]} />
        )}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
