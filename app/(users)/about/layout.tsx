import { JSX } from "react/jsx-runtime";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <nav>User About Navbar</nav>
      <section>{children}</section>
    </>
  );
}
