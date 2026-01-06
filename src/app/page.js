import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutContact />
      <Footer />
    </>
  );
}
