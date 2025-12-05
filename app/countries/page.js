import { fetchCountriesSummary } from "@/lib/countries";

import DisplayCountries from "@/components/display-countries/display-countries";

export default async function CoutriesPage() {
  const data = await fetchCountriesSummary();

  return <DisplayCountries initialCountries={data} />;
}
