import React from "react";

import { deviceInfoFeatures } from "../../../../data/deviceInfoFeatures";

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
      <h2 className="device-info-heading">Watch Detailed Video</h2>
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/iIRDG23SS6s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DeviceInfoFeatures;
