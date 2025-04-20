// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">🌀 About Synchronicity</h1>

        <p>
          <strong>Synchronicity</strong> is a forward-thinking startup at the
          intersection of <strong>Artificial Intelligence</strong> and{" "}
          <strong>Cryptocurrency</strong>, founded with the vision of creating
          a more seamless, intelligent, and intuitive experience for individuals
          navigating the digital finance world.
        </p>

        <p>
          The name "Synchronicity" reflects our core philosophy — creating
          meaningful connections between systems, data, and users that seem
          almost magical in their timing and relevance. Our platform connects AI
          and blockchain to provide solutions that align with your financial
          goals and digital experiences.
        </p>

        <p>
          Whether you're tracking live crypto prices, analyzing trends, or
          building a trading portfolio, Synchronicity offers a dynamic and clean
          user interface tailored for all levels.
        </p>

        <p>
          One of our pillars is real-time data — synced directly from trusted
          sources like CoinGecko, contextualized using AI analytics and
          personalized recommendations.
        </p>

        <p>
          With a sleek UI, intelligent alerts, curated portfolios, and
          educational tools, Synchronicity makes decentralized finance
          approachable and insightful.
        </p>

        <p>
          Our vision is to develop AI agents that autonomously manage your
          crypto assets based on your goals and risk profile — 24/7 intelligent
          investing.
        </p>

        <p>
          Built by passionate minds in tech and blockchain, we collaborate
          globally to ensure Synchronicity is secure, innovative, and
          future-ready.
        </p>

        <p className="about-highlight">
          Synchronicity is more than a platform — it’s a movement toward
          intelligent, transparent, and empowering crypto finance.
        </p>

        <h3 className="about-closing">
          Welcome to the future of intelligent crypto. Welcome to Synchronicity.
        </h3>
      </div>
    </section>
  );
};

export default About;
