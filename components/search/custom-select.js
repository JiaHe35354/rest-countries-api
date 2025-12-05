"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./custom-select.module.css";

export default function CustomSelect({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={classes.customSelect}>
      <button className={classes.selectBtn} onClick={() => setOpen(!open)}>
        {selected}{" "}
        <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
      </button>

      {open && (
        <ul className={classes.optionsList}>
          {options.map((option) => (
            <li
              key={option}
              className={classes.option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                onSelect(option);
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
