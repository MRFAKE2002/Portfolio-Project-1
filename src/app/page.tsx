//! Components
import About from "@/components/About";
import Hero from "@/components/Hero";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import KeyMetrics from "@/components/KeyMetrics";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <KeyMetrics />
      <Stack />
    </>
  );
}
