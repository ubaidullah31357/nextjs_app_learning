"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const ProductsList = (): React.ReactNode => {
  const searchParam = useSearchParams();
  console.log("Inner:", searchParam);
  const category = searchParam.get("category");
  const sort = searchParam.get("sort");
  const pages = searchParam.getAll("page");

  console.log(category, sort, pages);

  return (
    <>
      <br />
      <h1>useSearchParams:</h1>
      <p>Inside: {searchParam}</p>
      <p>Inside Category: {category}</p>
      <p>Inside Sort: {sort}</p>
      <p>
        Inside Pages:{" "}
        {pages.map((page) => {
          return <span>{page},</span>;
        })}
      </p>
    </>
  );
};

export default ProductsList;
