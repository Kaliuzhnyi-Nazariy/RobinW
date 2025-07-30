import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Geist, Geist_Mono, Sen } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import WriteMe from "@/components/WriteMe/WriteMe";
import Footer from "@/components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Philosophy from "@/components/Philosophy/Philosophy";
import Skillset from "@/components/Skillset/Skillset";
import Sponsors from "@/components/Sponsors/Sponsors";
import MyProjects from "@/components/MyProjects/MyProjects";
import Instagram from "@/components/Instagram/Instagram";
import Dribbble from "@/components/Dribbble/Dribbble";
import Reviews from "@/components/Reviews/Reviews";
import Photography from "@/components/Photography/Photography";
import Head from "next/head";

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

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div
      className={`${sen.className} ${geistSans.className} ${geistMono.className} font-sans min-h-screen `}
    >
      <Head>
        <title>Robin.W</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Hero />
        <Experience />
        <Philosophy />
        <Skillset />
        <Sponsors />
        <MyProjects />
        <Instagram />
        <Dribbble />
        <Reviews />
        <Photography />
        <WriteMe />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
