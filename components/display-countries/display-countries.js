"use client";

import { useEffect, useState } from "react";
import SearchFilter from "../search/search-filter";
import CountriesList from "./countries-list";
import LoadMoreBtn from "../button/load-more-btn";

export default function DisplayCountries({ initialCountries }) {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  function handleSearch(value) {
    setSearch(value);
    setVisibleCount(10);
  }

  function handleRegion(value) {
    setRegion(value);
    setVisibleCount(10);
  }

  const filteredCountries = initialCountries
    .filter((c) => (region === "" ? true : c.region === region))
    .filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()));

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const canLoadMore = visibleCount < filteredCountries.length;

  function loadMore() {
    setVisibleCount((prev) => prev + 10);
  }

  return (
    <>
      <SearchFilter onSelect={handleRegion} onSearch={handleSearch} />
      <CountriesList countries={visibleCountries} />

      {canLoadMore && <LoadMoreBtn onLoad={loadMore} />}
    </>
  );
}
