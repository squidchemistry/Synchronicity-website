import React from "react";
import logo from "../assets/logo.png";
import "./Hero.css";

const Hero = () => {
  const scrollToAbout = () => {
    const targetSection = document.querySelector("#about");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Element with id='about' not found.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={logo} alt="Synchronicity logo" className="hero-logo" />
        <h1 className="hero-title">Synchronicity</h1>
        <p className="hero-subtitle">Where AI meets Cryptocurrency</p>
        <button
          className="hero-button"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
        >
          Explore Platform
        </button>
      </div>
    </section>
  );
};

export default Hero;
