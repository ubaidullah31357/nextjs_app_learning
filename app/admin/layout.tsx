import "../globals.css";
import Navigation from "./components/navigation";
// import { Roboto, Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Ubaid Ullah | Web dev",
    template: "%s | Quantum Verse",
  },
  description: "Full Stack Web Developer",
  authors: [
    { name: "Ubaid Ullah" },
    { name: "QuantumVerse", url: "quantumverse.dev" },
  ],
  keywords: ["Nextjs", "Reactjs", "Fullstack"],
  icons: {
    icon: "/Picture1.jpg",
  },
  metadataBase: new URL("https://quantumverse.dev"),
  openGraph: {
    title: "Quantum Verse",
    description: "Hire us for fullstack apps",
    url: "https://quantumverse.dev",
    siteName: "Quantum Verse",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 600,
        alt: "Globe logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Verse",
    description: "Learn web dev",
    creator: "@quantumverse",
    images: ["/next"],
  },
};

// const roboto = Roboto({
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

// const workSans = Work_Sans({
//   subsets: ["latin"],
//   variable: "--font-work-sans",
// });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${roboto.variable} ${workSans.variable}`}> */}
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
