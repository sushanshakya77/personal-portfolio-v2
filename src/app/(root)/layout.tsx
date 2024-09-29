import { useEffect } from "react";
import Navbar from "../../pages/shared/Navbar";
import { Footer } from "@/src/pages/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
