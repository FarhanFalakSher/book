import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./pages/Navbar";
// import About from "./pages/About";
import Author from "./pages/Author";
// import Contact from "./pages/Contact";
import GetTheBookPreOrder from "./pages/GetTheBook";
import Footer from "./pages/Footer";

function App() {
  // Initialise AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/author" element={<Author />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/order" element={<GetTheBookPreOrder />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
