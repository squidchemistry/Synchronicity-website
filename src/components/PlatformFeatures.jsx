// src/pages/PlatformFeatures.jsx

import React from "react";
import "./PlatformFeatures.css";

const features = [
  {
    title: "Real-Time Crypto Data",
    description:
      "Stay up-to-date with accurate, live market data pulled from trusted APIs like CoinGecko. Track coins, market caps, and price movements in real-time.",
    icon: "💹",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Get intelligent recommendations based on your portfolio and market trends. Our AI analyzes data to help you make informed decisions.",
    icon: "🤖",
  },
  {
    title: "Smart Portfolio Tracking",
    description:
      "Manage your crypto assets with ease. Synchronicity helps you monitor growth, profit/loss, and asset allocation—all in one place.",
    icon: "📊",
  },
  {
    title: "User-Centric Design",
    description:
      "Enjoy a sleek, modern interface that’s designed to make crypto finance easy and engaging—whether you're a beginner or a pro.",
    icon: "🎯",
  },
  {
    title: "Custom Alerts",
    description:
      "Set intelligent alerts for market prices, trends, and portfolio shifts. Never miss an opportunity or critical movement again.",
    icon: "🔔",
  },
  {
    title: "Educational Resources",
    description:
      "Learn the world of crypto and AI finance through integrated educational tools built right into the platform.",
    icon: "📚",
  },
];

const PlatformFeatures = () => {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <h1 className="features-title">🚀 Platform Features</h1>
        <p className="features-subtitle">
          Discover how Synchronicity is revolutionizing the crypto experience
          with AI-powered tools and user-friendly innovation.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
