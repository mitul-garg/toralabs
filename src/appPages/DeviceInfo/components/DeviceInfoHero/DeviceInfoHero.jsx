import React from "react";

import heroImg from "../../../../assets/device-info/home.webp";
import heroRightImg from "../../../../assets/device-info/hero.svg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./styles.css";

const DeviceInfoHero = () => {
  return (
    <div className="device-info-hero">
      <img src={heroImg} alt="DeviceInfo" className="device-info-hero-img" />
      <div className="device-info-hero-content">
        <div className="device-info-hero-content-left">
          <h2>
            Device Info
            <br />
            View System & HW Info
          </h2>
          <div className="device-info-hero-btn-container">
            <a
              href="https://play.google.com/store/apps/details?id=com.toralabs.deviceinfo"
              target="_blank"
              rel="noopener noreferrer"
              className="device-info-hero-button"
            >
              Download{" "}
              <IoLogoGooglePlaystore className="device-info-hero-btn-icon" />
            </a>
            <a
              href="https://toralabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="device-info-hero-button"
            >
              Home <FaExternalLinkAlt className="device-info-hero-btn-icon" />
            </a>
          </div>
        </div>
        <img
          src={heroRightImg}
          alt="DeviceInfo"
          className="device-info-hero-right-img"
        />
      </div>
    </div>
  );
};

export default DeviceInfoHero;

// https://www.youtube.com/watch?v=iIRDG23SS6s
