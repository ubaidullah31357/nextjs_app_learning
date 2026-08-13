"use client";

import { useSearchParams } from "next/navigation";

export default function ProductsList() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const pages = searchParams.getAll("page");

  return (
    <>
      <h1>useSearchParams:</h1>

      <p>Inside: {searchParams.toString()}</p>
      <p>Inside Category: {category}</p>
      <p>Inside Sort: {sort}</p>

      <p>
        Inside Pages:{" "}
        {pages.map((page, index) => (
          <span key={index}>{page}, </span>
        ))}
      </p>
    </>
  );
}
