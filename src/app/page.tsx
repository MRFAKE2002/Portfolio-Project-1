//! Components
import About from "@/components/About";
import Hero from "@/components/Hero";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import KeyMetrics from "@/components/KeyMetrics";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <KeyMetrics />
      <Stack />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
