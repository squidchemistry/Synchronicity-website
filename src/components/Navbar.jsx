import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Synchronicity
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/live-crypto" className="nav-item">Live Crypto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
