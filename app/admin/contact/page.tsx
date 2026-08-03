import { JSX } from "react";

export const metadata = {
  title: "Contact Page",
  description: "This is my contact page",
  authors: [
    { name: "Ubaid Ullah" },
    { name: "QuantumVerse", url: "quantumverse.dev" },
  ],
  keywords: ["fullstack", "webdev", "nextjs"],
};

function Contact(): JSX.Element {
  return <h1>Admin Contact Page</h1>;
}
export default Contact;
