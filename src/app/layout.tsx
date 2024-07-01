import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Manager",
  description: "Inventory Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex">
          <SideBar />
          <section className="w-full">
            <NavBar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
