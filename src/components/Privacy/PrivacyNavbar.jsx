import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/ToraLabs-Logo-Blue.png";
import { IoHome } from "react-icons/io5";

import "./styles.css";

const PrivacyNavbar = () => {
  return (
    <div className="privacy-navbar">
      <div className="privacy-left-nav">
        <img src={logo} alt="Toralabs" className="privacy-nav-logo" />
        <h1>ToraLabs</h1>
      </div>
      <div className="privacy-right-nav">
        <Link to="/" className="privacy-nav-link">
          <span>Home</span>
          <IoHome />
        </Link>
      </div>
    </div>
  );
};

export default PrivacyNavbar;
