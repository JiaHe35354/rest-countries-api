import Link from "next/link";
import Image from "next/image";
import classes from "./display-countries.module.css";

export default function CountryCard({ country }) {
  return (
    <li className={classes.card}>
      <Link
        href={`/countries/${country.codes.alpha_3.toLowerCase()}`}
        className={classes.link}
      >
        <div className={classes["image-box"]}>
          {country.flag?.url_svg ? (
            <Image
              src={country.flag.url_svg}
              alt={`Flag of ${country.names.common}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <span>{country.flag?.emoji ?? "🏳️"}</span>
          )}
        </div>

        <div className={classes["text-box"]}>
          <h2>{country.names.common}</h2>
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
            {country.capitals?.[0]?.name ?? "N/A"}
          </p>
        </div>
      </Link>
    </li>
  );
}
