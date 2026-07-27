import "../globals.css";
import Navigation from "./components/navigation";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
