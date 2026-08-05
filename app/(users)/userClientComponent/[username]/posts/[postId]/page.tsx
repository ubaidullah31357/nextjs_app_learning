"use client";
import React, { use } from "react";

const SingleUserPost = (props: any): React.ReactNode => {
  const user: {
    username: string;
    postId: string;
  } = use(props.params);

  return (
    <>
      <h1>Nested Dynamic Routing:</h1>
      <p>
        User: {user.username}, Post id: {user.postId}
      </p>
    </>
  );
};

export default SingleUserPost;
