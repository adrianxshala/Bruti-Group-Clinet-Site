import Hero from "./components/Hero";
import Products from "./components/Services";
import AboutSection from "./components/About";
import Slider from "./components/Slider";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Products />
      <AboutSection />
      <Contact />
    </div>
  );
}
