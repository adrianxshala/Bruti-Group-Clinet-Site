
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AppleSlider from "./components/Sllider";
import Products from "./components/Services";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppleSlider />
      <Products />
      <Footer />
    </div>
  );
}
