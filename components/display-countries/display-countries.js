"use client";

import { useEffect, useState } from "react";
import SearchFilter from "../search/search-filter";
import CountriesList from "./countries-list";
import LoadMoreBtn from "../button/load-more-btn";

export default function DisplayCountries({ initialCountries }) {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    setVisibleCount(20);
  }, [region, search]);

  const filteredCountries = initialCountries
    .filter((c) => (region === "" ? true : c.region === region))
    .filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()));

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const canLoadMore = visibleCount < filteredCountries.length;

  function loadMore() {
    setVisibleCount((prev) => prev + 20);
  }

  return (
    <>
      <SearchFilter onSelect={setRegion} onSearch={setSearch} />
      <CountriesList countries={visibleCountries} />

      {canLoadMore && <LoadMoreBtn onLoad={loadMore} />}
    </>
  );
}
