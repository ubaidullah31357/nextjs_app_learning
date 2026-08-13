"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface UserInfo {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

const ClientDataFetch = (): React.ReactNode => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
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
  }, [name]);

  return (
    <>
      <h1>Name - {userInfo?.name}</h1>
    </>
  );
};

export default ClientDataFetch;
