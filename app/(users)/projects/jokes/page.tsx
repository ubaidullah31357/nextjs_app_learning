"use client";

import React, { useEffect, useState } from "react";

const JokesGenerator = (): React.ReactNode => {
  const [jokes, setJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJokes = async (): Promise<void> => {
    const jokesRes = await fetch(URL);
    const jokesData = await jokesRes.json();
    setJokes(jokesData);
  };
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <>
      <div className="h-1/2 w-1/2 p-9 bg-teal-100 rounded-lg flex flex-col items-center justify-center gap-2 shadow-amber-500 shadow-sm ">
        <h1 className="text-lg text-bold">Random Joke Generator</h1>
        <p className="setup">{jokes.setup}</p>
        {showJokes ? (
          <button
            className="rounded-sm p-2 bg-amber-500 text-white"
            onClick={() => setShowJokes(false)}
          >
            Reveal
          </button>
        ) : (
          <>
            <p className="punchline">{jokes.punchline}</p>
            <button
              className="rounded-sm p-2 bg-amber-500 text-white"
              onClick={() => setShowJokes(true)}
            >
              Hide Punchline
            </button>
          </>
        )}
        <button
          className="m-3 rounded-sm px-3 bg-white text-amber-900"
          onClick={() => getJokes()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default JokesGenerator;
