const DataFetch = async () => {
  await new Promise<void>((resolve): void => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return <h1>Data Fetching</h1>;
};

export default DataFetch;
