"use client";

import React, { use } from "react";

const SingleProfile = (props: any): React.ReactNode => {
  const user: {
    username: string;
  } = use(props.params);
  console.log(props, user);

  return (
    <>
      <h1>Dynamic Routing:</h1>
      <p>user: {user.username}</p>
    </>
  );
};

export default SingleProfile;
