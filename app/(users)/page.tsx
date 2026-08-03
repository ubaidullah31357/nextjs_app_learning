import Image from "next/image";
import author from "../../public/Picture1.jpg";

export default function Home() {
  return (
    <>
      <h1>User Home Page</h1>
      <div className="flex flex-col items-center p-5 m-10 shadow-2xl w-80 h-80 bg-amber-50 hover:-translate-y-3 hover:scale-105">
        <div className="rounded-full bg-amber-300 w-32 h-32">
          <Image
            // must assign src, width, height and alt
            width={200}
            height={200}
            src="/Picture1.jpg"
            alt="author"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="p-5 flex flex-col items-center">
          <h3 className="text-lg font-bold">Image Component</h3>
          <p className="text-md font-normal">With Tailwind CSS</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="flex flex-col items-center p-5 m-10 shadow-2xl w-80 h-80 bg-amber-50 hover:-translate-y-3 hover:scale-105 relative">
        <Image
          // fill: fill overall parent element, but the parent must be relative, fixed
          // src: must be imported incase of setting placeholder
          // quality: increases image quality, default is 75
          // priority: loads only when the user visits the image (lazy loading)
          // placeholder: incase of weak internet, blurDataURL must be specified
          fill={true}
          src={author}
          alt="author"
          // quality={100}
          priority={false}
          placeholder="blur"
          // blurDataURL=""
        />
      </div>
    </>
  );
}
