import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      >
        <header className="text-center">Welcome to Next.js playground</header>

        <NavBar />
        {children}
        <footer className="text-center">Trying out</footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
