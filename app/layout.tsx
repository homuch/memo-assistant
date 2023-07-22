import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memorizer",
  description: "a web app for learning things better",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-min flex-col m-6">
          <h1 className="text-5xl align-middle justify-center flex">
            Long-term Memory Ehancement!
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
