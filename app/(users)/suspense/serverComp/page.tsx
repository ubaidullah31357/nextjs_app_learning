const ServerComp = async () => {
  await new Promise((resolve): void => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return (
    <>
      <h1 className="bg-blue-200 p-25">Async Data Fetched in 3s.</h1>
    </>
  );
};

export default ServerComp;
