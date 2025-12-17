import { fetchCountryDetail } from "@/lib/countries";
import Back from "@/components/back/back";
import CountryDetailsPage from "@/components/details/country-details";

export default async function CountryDetailPage({ params }) {
  const { slug } = await params;

  const data = await fetchCountryDetail(slug);

  const nativeNames = data.name.nativeName;
  console.log(nativeNames);
  const firstNativeName = nativeNames
    ? Object.values(nativeNames)[0].common
    : "N/A";

  return (
    <div className="container">
      <Back parent="/countries" />

      <CountryDetailsPage data={data} firstNativeName={firstNativeName} />
    </div>
  );
}
