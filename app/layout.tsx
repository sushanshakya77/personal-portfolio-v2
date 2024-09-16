import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "sushan shakya.",
  description: "Sushan Shakya portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
