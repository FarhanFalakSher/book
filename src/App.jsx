import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
import GetTheBookPreOrder from "./pages/GetTheBook";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path ="/theme" element={<Theme/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/order" element={<GetTheBookPreOrder/>}/>
      </Routes>
    </>
  );
}

export default App;
