import React from "react";

const SingleUserPost = async (props: any): Promise<React.ReactNode> => {
  const user = await props.params;

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
