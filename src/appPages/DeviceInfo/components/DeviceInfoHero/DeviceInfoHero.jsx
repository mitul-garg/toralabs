import React from "react";

import heroImg from "../../../../assets/device-info/hero.svg";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import "./styles.css";

const DeviceInfoHero = () => {
  return (
    <div className="device-info-hero">
      <img src={heroImg} alt="DeviceInfo" className="device-info-hero-img" />
      <div className="device-info-hero-content">
        <h2>
          Device Info <br /> System & HW Info
        </h2>
        <div className="device-info-hero-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.toralabs.deviceinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="device-info-hero-button"
          >
            Download <IoLogoGooglePlaystore />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfoHero;

// https://www.youtube.com/watch?v=iIRDG23SS6s
