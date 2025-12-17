import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classes from "./search-filter.module.css";
import CustomSelect from "./custom-select";

export default function SearchFilter({ onSearch, onSelect }) {
  return (
    <div className={`${classes["search-filter"]} container`}>
      <div className={`${classes["search-bar"]}`}>
        <label htmlFor="country-search" className={classes["visually-hidden"]}>
          Search for a country
        </label>
        <input
          type="text"
          id="country-search"
          placeholder="Search for a country..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className={`${classes["search-btn"]}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${classes["search-icon"]}`}
          />
          <span className={classes["sr-only"]}>Search</span>
        </button>
      </div>

      <CustomSelect onSelect={onSelect} />
    </div>
  );
}
