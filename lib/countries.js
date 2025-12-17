"use server";

export async function fetchCountriesSummary() {
  const response = await fetch(
    `${process.env.API_URL}/all?fields=cca3,flags,name,population,region,capital`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries summary.");
  }

  const data = await response.json();

  return data;
}

export async function fetchCountryDetail(code) {
  const response = await fetch(
    `${process.env.API_URL}/alpha/${code}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`,
    { next: { revalidate: 3600 } }
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
  }
  return { ...country, borderCountries };
}
