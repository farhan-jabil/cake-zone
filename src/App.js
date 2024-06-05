import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      {/* <Router> */}
        <NavbarTop />
        <NavbarBottom />
        {/* <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu-pricing" element={<MenuPricing/>}/>
          <Route path="/master-pages" element={<MasterPages/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
