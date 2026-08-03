import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function Navigation(): JSX.Element {
  return (
    <header className="flex justify-around">
      <div className="logo text-teal-600">Logo Here</div>
      <nav>
        <ul className="flex flex-row gap-4 list-none">
          <li className="flex flex-row">
            <Link href="/">Home</Link>
          </li>
          <li className="flex flex-row">
            <Link href="/about">About</Link>
          </li>
          <li className="flex flex-row">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="flex flex-row">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// this file is inside a "Private Folder", can't be accessed via url
