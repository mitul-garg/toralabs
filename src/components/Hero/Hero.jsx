import React from "react";

import heroImg from "../../assets/hero.png";
import { socialLinks } from "../../data/socialLinks";
import "./styles.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="hero" className="hero-img" />
      <div className="hero-content">
        <div className="hero-para">
          One man company.
          <br />
          <span>Let's change the world together!</span>
        </div>
        <ul className="social-links">
          {socialLinks.map(({ id, icon, link }) => (
            <li key={id} className="social-link">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <button className="hero-btn">Get In Touch</button>
      </div>
    </div>
  );
};

export default Hero;
