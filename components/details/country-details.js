import Link from "next/link";

import classes from "./country-details.module.css";

export default function CountryDetailsPage({ data }) {
  const firstNativeName =
    Object.values(data.names.native ?? {})[0]?.common ?? "N/A";

  return (
    <div className={classes["detail-container"]}>
      <div className={classes["country-box"]}>
        <div className={classes["image-box"]}>
          <img src={data.flag.url_svg} alt={`Flag of ${data.names.common}`} />
        </div>

        <div className={classes.details}>
          <h2>{data.names.common}</h2>

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
                {data.capitals[0].name}
              </p>
            </div>

            <div className={classes["info-right"]}>
              <p>
                <span>Top Level Domain: </span>
                {data.tlds[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {data.currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p className={classes.language}>
                <span>Languages: </span>
                {data.languages.map((lan) => lan.name).join(", ")}
              </p>
            </div>
          </div>

          {data.borderCountries?.length > 0 && (
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
