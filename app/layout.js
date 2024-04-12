import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";
import "./globals.css";
import Footer from "./Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Premier Stay Ventures</title>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Sidebar/>
        <main className="flex-grow ml-64">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
