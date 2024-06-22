import "./App.css";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import NavbarTop from "./components/Navbar/NavbarTop";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import MenuPricing from "./components/Sections/MenuPricing";
import MasterPages from "./components/Sections/MasterPages";
import Service from "./components/Sections/Service";
import Testimonial from "./components/Sections/Testimonial";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <>
        <NavbarTop />
        <NavbarBottom />
        <Hero/>
        <About/>
        <MenuPricing/>
        <Service/>
        <MasterPages/>
        <Testimonial/>
        <Contact/>
    </>
  );
}

export default App;
