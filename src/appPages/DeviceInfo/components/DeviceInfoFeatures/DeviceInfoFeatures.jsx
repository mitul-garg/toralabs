import React from "react";

import { deviceInfoFeatures } from "../../../../data/deviceInfoFeatures";
import { IoLogoYoutube } from "react-icons/io5";

import "./styles.css";

const DeviceInfoFeatures = () => {
  return (
    <div className="device-info-features" id="features">
      <h2 className="device-info-heading">Features</h2>
      <div className="device-info-features-content">
        Device Info is a user-friendly Android application that gives you
        complete and detailed information about your mobile device with best
        user-interface. Device Info is packed with many features to give you all
        info regarding software and hardware of your android device.
      </div>
      <div className="device-info-cards-container">
        {deviceInfoFeatures.map(({ id, name, desc, icon }) => (
          <div key={id} className="maincontainer">
            <div className="back">{desc}</div>
            <div className="front">
              <div className="icon-holder">{icon}</div>
              <h2>{name}</h2>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.youtube.com/watch?v=iIRDG23SS6s"
        target="_blank"
        rel="noopener noreferrer"
        className="device-info-features-button"
      >
        <span>Watch Video</span> <IoLogoYoutube />
      </a>
    </div>
  );
};

export default DeviceInfoFeatures;
