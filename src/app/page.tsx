"use client";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import SponsoredVideoSection from "@/src/components/SponsoredVideo";
import { mockVideos } from "@/src/mocks/mockvideos";
import FourVideoSection from "@/src/components/video/theFour";
// import "animate.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <SponsoredVideoSection video={mockVideos[0]} />
      <FourVideoSection />
    </main>
  );
}
