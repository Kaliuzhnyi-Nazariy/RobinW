import Image from "next/image";
import { Geist, Geist_Mono, Sen } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights you need
});

export default function Home() {
  return (
    <div
      className={`${sen.className} ${geistSans.className} ${geistMono.className} font-sans min-h-screen `}
    >
      <Header />
      <Hero />
    </div>
  );
}
