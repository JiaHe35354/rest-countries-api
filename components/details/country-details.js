import Link from "next/link";
import Image from "next/image";

import classes from "./country-details.module.css";

export default function CountryDetailsPage({ data, firstNativeName }) {
  return (
    <div className={classes["detail-container"]}>
      <div className={classes["country-box"]}>
        <div className={classes["image-box"]}>
          <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} />
        </div>

        <div className={classes.details}>
          <h2>{data.name.common}</h2>

          <div className={classes.info}>
            <div className={classes["info-left"]}>
              <p>
                <span>Native Name: </span>
                {firstNativeName}
              </p>
              <p>
                <span>Population: </span>
                {data.population.toLocaleString()}
              </p>
              <p>
                <span>Region: </span>
                {data.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {data.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {data.capital}
              </p>
            </div>

            <div className={classes["info-right"]}>
              <p>
                <span>Top Level Domain: </span>
                {data.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.values(data.currencies)
                  .map((currency) => currency.name)
                  .join(" ")}
              </p>
              <p className={classes.language}>
                <span>Languages: </span>
                {Object.values(data.languages).join(", ")}
              </p>
            </div>
          </div>

          {data.borderCountries.length > 0 && (
            <p className={classes["border-countries"]}>
              <span>Border Countries: </span>
              <span className={classes["border-links"]}>
                {data.borderCountries.map((b) => (
                  <Link
                    href={`/countries/${b.code.toLowerCase()}`}
                    key={b.code}
                    className={classes.link}
                  >
                    {b.name}
                  </Link>
                ))}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
