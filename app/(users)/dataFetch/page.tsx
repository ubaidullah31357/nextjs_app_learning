import React from "react";

interface PropsType {
  searchParams: Promise<{
    name?: string;
    [key: string]: string | string[] | undefined; // Fallback index signature
  }>;
}
const DataFetch = async ({
  searchParams,
}: PropsType): Promise<React.ReactNode> => {
  const query = await searchParams;
  const name = query?.name || "name not specified";

  const nameDataRes = await fetch(`https://api.genderize.io/?name=${name}`);
  const nameData = await nameDataRes.json();
  console.log(nameData);
  return (
    <>
      <h1>Name - {nameData.name}</h1>
    </>
  );
};

export default DataFetch;
