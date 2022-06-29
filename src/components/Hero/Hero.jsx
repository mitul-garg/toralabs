import React from "react";

import heroImg from "../../assets/hero.svg";
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
          {socialLinks.map(({ id, icon, link, email }) => (
            <li key={id} className="social-link">
              {!email ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {icon}
                </a>
              ) : (
                <a
                  href={`mailto:${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {icon}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a href="#contact" className="hero-btn-anchor">
          <button className="hero-btn">Get In Touch</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
