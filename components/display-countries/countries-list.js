import CountryCard from "./country-card";

import classes from "./display-countries.module.css";

export default function CountriesList({ countries }) {
  return (
    <section className="container">
      <ul className={classes.cards}>
        {countries.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </ul>
    </section>
  );
}
