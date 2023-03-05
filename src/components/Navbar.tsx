import React, { FC } from "react";
import "./Navbar.css";
import deltSigCrest from "../assets/deltSigCrest.png";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={deltSigCrest} alt="deltSigCrest" className="deltSigCrest" />
        <span className="logo-text">Delta Sigma Delta</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
