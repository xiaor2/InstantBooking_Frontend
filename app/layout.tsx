import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import SearchModal from "./components/modals/SearchModal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModel";
import AddPropertyModal from "./components/modals/AddPropertyModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookIt",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-28">
        {children}
        </div>
        <LoginModal />
        <SearchModal />
        <SignupModal />
        <AddPropertyModal />
      </body>
    </html>
  );
}
