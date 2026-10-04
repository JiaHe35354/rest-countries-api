"use server";

export async function fetchCountriesSummary() {
  const allCountries = [];
  const limit = 100;
  let offset = 0;
  let more = true;

  while (more) {
    const response = await fetch(
      `${process.env.API_URL}?limit=${limit}&offset=${offset}&response_fields=names.common,codes.alpha_3,population,region,capitals,flag`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch countries summary.");
    }

    const result = await response.json();

    allCountries.push(...result.data.objects);

    more = result.data.meta.more;
    offset += limit;
  }

  return allCountries;
}

export async function fetchCountryDetail(code) {
  const response = await fetch(
    `${process.env.API_URL}/codes.alpha_3/${code.toUpperCase()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country details.");
  }

  const result = await response.json();

  const country = result.data.objects[0];

  let borderCountries = [];

  if (country.borders?.length > 0) {
    const bordersRes = await fetch(
      `${process.env.API_URL}/borders/${country.codes.alpha_3}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!bordersRes.ok) {
      throw new Error("Failed to fetch border countries.");
    }

    const bordersResult = await bordersRes.json();

    borderCountries = bordersResult.data.objects.map((border) => ({
      code: border.codes.alpha_3,
      name: border.names.common,
    }));
  }

  return {
    ...country,
    borderCountries,
  };
}
