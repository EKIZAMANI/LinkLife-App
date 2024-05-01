import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Login from "./components/login/page";
import Register from "./components/register/page"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
title: "Link Life",
description: "Website Donor Darah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar/>
      <Register/>
      {/* <div>{children}</div> */}
      </body>
    </html>
  )
}
