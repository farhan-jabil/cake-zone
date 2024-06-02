import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarBottom from "./components/Navbar/NavbarBottom";
import NavbarTop from "./components/Navbar/NavbarTop";
import Home from "./pages/Home";
import About from "./pages/About";
import MenuPricing from "./pages/MenuPricing";
import MasterPages from "./pages/MasterPages";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavbarTop />
        <NavbarBottom />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu-pricing" element={<MenuPricing/>}/>
          <Route path="/master-pages" element={<MasterPages/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
