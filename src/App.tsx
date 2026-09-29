import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showreel from "./components/Showreel";
import Testimonials from "./components/Testimonials";
import VideoModal from "./components/VideoModal";
import Work from "./components/Work";
import type { VideoItem } from "./types";

export default function App() {
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Showreel onPlay={setPlaying} />
        <Services />
        <Work onPlay={setPlaying} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <VideoModal item={playing} onClose={() => setPlaying(null)} />
    </>
  );
}
