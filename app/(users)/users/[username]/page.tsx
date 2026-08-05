import React from "react";

const SingleProfile = async (props: any): Promise<React.ReactNode> => {
  const user = await props.params;
  console.log(props, user);

  return (
    <>
      <h1>Dynamic Routing:</h1>
      <p>user: {user.username}</p>
    </>
  );
};

export default SingleProfile;
