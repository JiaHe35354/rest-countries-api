"use client";

export default function CountriesError(error) {
  return (
    <div className="error">
      <h2>An error occurred</h2>
      <p>{error.message}</p>
    </div>
  );
}
