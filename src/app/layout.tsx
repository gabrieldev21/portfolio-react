import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio-web",
  description: "Project to make our portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen min-w-screen bg-gradient-to-r from-cyan-500 to-indigo-500`}
      >
        <Header />
        <main className="[&>main]:flex">{children}</main>
      </body>
    </html>
  );
}
