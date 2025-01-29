import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Smoothscroll from "./components/Smoothscroll";
import Loader from "./components/Loader";
import Pagetransition from "./components/Pageransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// const geographmed=localFont({src:'./geographwebmedium.ttf',variable:'--font-geograph-med',subsets: ["latin"]})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <Navbar/> */}
        {/* <Smoothscroll> */}
        {children}
        {/* </Smoothscroll> */}
        <Footer/>
        <Loader/>
        <Pagetransition/>
      </body>
    </html>
  );
}
