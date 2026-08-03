import { JSX } from "react/jsx-runtime";
import React from "react";
import "../globals.css";
import Navigation from "./_components/navigation";

function RootLayout({
  children,
  notifications,
  feed,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  feed: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div>{children}</div>
        <div>{notifications}</div>
        <div>{feed}</div>
      </body>
    </html>
  );
}

export default RootLayout;
