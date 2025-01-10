import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";


import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-geist-monstserrat",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${geistSans.variable} geist-sans`}>
      <Navbar />
       <Component {...pageProps} />
       <Footer />
    </main>
  );
}
