import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Staff from "./Pages/staff/Staff";
import Staff1 from "./Pages/staff/1";
import Staff2 from "./Pages/staff/2";
import Staff3 from "./Pages/staff/3";
import Staff4 from "./Pages/staff/4";
import Works from "./Pages/works/Works";
import Services from "./Pages/services/Services";
import Service1 from "./Pages/services/1";
import Service2 from "./Pages/services/2";
import Service3 from "./Pages/services/3";
import Service4 from "./Pages/services/4";
import Products from "./Pages/products/Products"
import Product1 from "./Pages/products/1"
import Product2 from "./Pages/products/2"
import Product3 from "./Pages/products/3"
import Product4 from "./Pages/products/4"
import Contact from "./Pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff1" element={<Staff1 />} />
        <Route path="/staff2" element={<Staff2 />} />
        <Route path="/staff3" element={<Staff3 />} />
        <Route path="/staff3" element={<Staff4 />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
