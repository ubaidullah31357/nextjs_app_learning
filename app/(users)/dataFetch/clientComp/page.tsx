"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ClientDataFetch = (): React.ReactNode => {
  const [userInfo, setUserInfo] = useState({});
  const query = useSearchParams();
  const name = query.get("name");

  useEffect(() => {
    const getUserData = async () => {
      const nameDataRes = await fetch(`https://api.genderize.io/?name=${name}`);
      const userData = await nameDataRes.json();
      console.log(userData);
      setUserInfo(userData);
    };
    getUserData();
  }, []);

  return (
    <>
      <h1>Name - {userInfo.name}</h1>
    </>
  );
};

export default ClientDataFetch;
