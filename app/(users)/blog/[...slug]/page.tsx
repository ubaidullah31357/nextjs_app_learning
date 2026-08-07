import React from "react";

const CatchAllRouter = async (props: any): Promise<React.ReactNode> => {
  const { slug } = await props.params;
  console.log(slug);
  return (
    <>
      <h1>CatchAll Dynamic Routers:</h1>
      <p>
        {slug.map((singleRoute: string): React.ReactNode => {
          return <span>{singleRoute} </span>;
        })}
      </p>
    </>
  );
};

export default CatchAllRouter;
