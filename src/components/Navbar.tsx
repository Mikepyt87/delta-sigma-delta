import React, { useState } from "react";
import "./NavBar.css";
import deltSigCrest from "../assets/deltSigCrest.png";

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={deltSigCrest} alt="Logo" className="logo" />
        <h1 className="logo-text">Delta Sigma Delta</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${showMenu && "show"}`}>
        <li className="nav-item">
          <a href="/">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="/about">JOIN</a>
        </li>
        <li className="nav-item">
          <a href="/services">MEMBERS</a>
        </li>
        <li className="nav-item">
          <a href="/contact">GET INVOLVED</a>
        </li>
        <li className="nav-item">
          <a href="/contact">FOUNDATION</a>
        </li>
        <li className="nav-item">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
