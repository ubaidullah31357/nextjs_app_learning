import { JSX } from "react/jsx-runtime";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <nav>Admin About Navbar</nav>
      <section>{children}</section>
    </>
  );
}
