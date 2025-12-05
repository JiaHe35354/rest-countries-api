import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classes from "./search-filter.module.css";
import CustomSelect from "./custom-select";

export default function SearchFilter({ onSearch, onSelect }) {
  return (
    <div className={`${classes["search-filter"]} container`}>
      <div className={`${classes["search-bar"]}`}>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className={`${classes["search-btn"]}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${classes["search-icon"]}`}
          />
        </button>
      </div>

      <CustomSelect onSelect={onSelect} />
    </div>
  );
}
