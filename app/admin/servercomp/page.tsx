const ServerComponent = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Server Component:</h1>

      <ul className="grid grid-cols-3 m-5">
        {data.map(
          (element: {
            body: string;
            id: number;
            title: string;
            userId: string;
          }): React.ReactNode => {
            return <li key={element.id}>{element.body}</li>;
          },
        )}
      </ul>
    </>
  );
};

export default ServerComponent;
