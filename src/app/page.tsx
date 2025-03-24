import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Products from "./components/Services";
import Footer from "./components/footer";
import AboutSection from "./components/About";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
     <Slider/>
      <Products />
      <AboutSection />
      <Footer />
    </div>
  );
}
