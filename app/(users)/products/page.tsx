import React from "react";

interface PageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    page?: string;
    [key: string]: string | string[] | undefined; // Fallback index signature
  }>;
}

const Products = async ({
  searchParams,
}: PageProps): Promise<React.ReactNode> => {
  const searchParam = await searchParams;

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || "1";
  return (
    <>
      <h1>
        searchParams for Filtering, Sorting, Pagination, Search and Dynamic
        Deals:
      </h1>
      <div>
        <p>Category: {category}</p>
        <p>Sort: {sort}</p>
        <p>Page: {page}</p>
      </div>
    </>
  );
};

export default Products;
