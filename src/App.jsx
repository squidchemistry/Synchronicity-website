// filepath: c:\Users\shres\Desktop\Synchronicity-website\synchronicity\src\App.jsx
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/PlatformFeatures";
import Contact from "./components/Contact";
import LiveCrypto from "./pages/LiveCrypto";
import CryptoData from "./components/CryptoData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <CryptoData />
      <Contact />
      <Analytics />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-crypto" element={<LiveCrypto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
