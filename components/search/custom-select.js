"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./custom-select.module.css";

export default function CustomSelect({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={classes.customSelect}>
      <button
        className={classes.selectBtn}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        {selected}{" "}
        <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
      </button>

      {open && (
        <ul
          className={classes.optionsList}
          role="listbox"
          aria-activedescendant={selected}
        >
          {options.map((option) => (
            <li
              key={option}
              id={option}
              role="option"
              aria-selected={selected === option}
              tabIndex={0}
              className={classes.option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                onSelect(option === "All" ? "" : option);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(option);
                  setOpen(false);
                  onSelect(option === "All" ? "" : option);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
