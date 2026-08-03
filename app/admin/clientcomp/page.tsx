"use client";

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    let fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setPostData(data);
      return data;
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Client Component:</h1>
      <button className="bg-teal-500 text-black">Show Posts</button>

      <ul className="grid grid-cols-3 m-5">
        {postData.map(
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
}
