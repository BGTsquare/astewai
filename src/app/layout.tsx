import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import User from "@/components/ui/auth/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astewai - Digital Bookstore",
  description: "A modern full-stack digital bookstore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* --- Start of New Header --- */}
        <header className="border-b">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              Astewai
            </Link>
            {/* The User component will show Sign In or Sign Out */}
            <User /> 
          </nav>
        </header>
        {/* --- End of New Header --- */}

        {children}
      </body>
    </html>
  );
}