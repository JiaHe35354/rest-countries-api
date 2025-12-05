export async function fetchCountriesSummary() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,capital"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries summary.");
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export async function fetchCountryDetail(code) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country details.");
  }

  const country = await response.json();

  let borderCountries = [];

  if (country.borders && country.borders.length > 0) {
    const bordersRes = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
        ","
      )}&fields=name,cca3`
    );

    const bordersData = await bordersRes.json();

    borderCountries = bordersData.map((b) => ({
      code: b.cca3,
      name: b.name.common,
    }));

    console.log(country, borderCountries);
  }
  return { ...country, borderCountries };
}
