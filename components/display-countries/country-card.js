import Link from "next/link";
import Image from "next/image";
import classes from "./display-countries.module.css";

export default function CountryCard({ country }) {
  return (
    <li key={country.cca3} className={classes.card}>
      <Link
        href={`/countries/${country.cca3.toLowerCase()}`}
        className={classes.link}
      >
        <div className={classes["image-box"]}>
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            fill
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>

        <div className={classes["text-box"]}>
          <h2>{country.name.common}</h2>
          <p>
            <span className={classes["text-bold"]}>Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className={classes["text-bold"]}>Region:</span>{" "}
            {country.region}
          </p>
          <p>
            <span className={classes["text-bold"]}>Capital:</span>{" "}
            {country.capital}
          </p>
        </div>
      </Link>
    </li>
  );
}
