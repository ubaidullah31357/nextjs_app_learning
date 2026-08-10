import { Suspense } from "react";
import ServerComp from "./serverComp/page";
import LoadSuspense from "./serverComp/Load";

const SuspenseLoader = async () => {
  return (
    <div className="grid grid-cols-2 items-center h-full w-full p-20">
      <div className=" bg-teal-300 p-10">
        <h1>Static Data Loaded.</h1>
        <br />
        <p>
          I am the Static Data that loads synchronously but the other component
          is Async which have to wait for 3s to render. In the mean while, we
          can show the load suspense component. (for the child component.)
        </p>
      </div>
      <Suspense fallback={<LoadSuspense />}>
        <ServerComp />
      </Suspense>
    </div>
  );
};

export default SuspenseLoader;
