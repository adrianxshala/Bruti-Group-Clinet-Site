
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AppleSlider from "./components/Sllider";
import Products from "./components/Services";
import Footer from "./components/footer";
import About from "./components/About";
import AboutSection from "./components/About";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppleSlider />
      <Products />
      <AboutSection />
      <Footer />
    </div>
  );
}
