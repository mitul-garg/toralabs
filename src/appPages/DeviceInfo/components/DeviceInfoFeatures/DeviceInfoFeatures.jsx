import React from "react";

import { deviceInfoFeatures } from "../../../../data/deviceInfoFeatures";
import { IoLogoYoutube } from "react-icons/io5";

import image_memory from "../../../../assets/device-info/features/image_memory.png";
import image_network from "../../../../assets/device-info/features/image_network.png";
import image_widget from "../../../../assets/device-info/features/image_widget.png";
import image_export_details from "../../../../assets/device-info/features/image_export_details.png";
import image_colorful_collage from "../../../../assets/device-info/features/image_colorful_collage.png";
import image_language_collage from "../../../../assets/device-info/features/image_language_collage.png";

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

      <div className="divider" />

      <div className="features-desc-ss-holder">
        <div className="feature-ss-container">
          <img src={image_memory} className="feature-ss-img ss-img-mobile" />
          <div className="feature-ss-content">
            <h2>Memory Info</h2>
            <p>
              This app is unique among all other device info apps, as we provide
              Z-RAM details on approximately every smartphone. Other than that,
              we show live RAM consumption status, System Storage, Internal
              Storage, External Storage. Also, we show info regarding RAM type
              and its bandwidth and channels. We are constantly updating our
              database to include more devices for this info.
            </p>
          </div>
          <img src={image_memory} className="feature-ss-img ss-img-desktop" />
        </div>
        <div className="feature-ss-container">
          <img src={image_network} className="feature-ss-img" />
          <div className="feature-ss-content">
            <h2>Network Info</h2>
            <p>
              View info related to your Wi-fi or Network. We also provide the
              SIM info. Get details about your IPv4 address, IPv6 address, MAC
              address, Subnet masks, Gateway, Link Speed, Signal Strength,
              Frequency and much more. If you want more features on this
              particular section, connect with us. We would love to hear your
              feedback.
            </p>
          </div>
        </div>
        <div className="feature-ss-container">
          <img src={image_widget} className="feature-ss-img ss-img-mobile" />
          <div className="feature-ss-content">
            <h2>Detailed Widgets Description</h2>
            <p>
              Do you want to know what changes on your smartphone on the go.
              Introducing a brand new widgets that has the Battery Temperature,
              Voltage, RAM, Internal Storage, System Storage, CPU Usage and
              current CPU Frequency in MHz. Along with that, you can update the
              data in widgets anytime, with a single click on Refresh Button.
              Widgets automatically updates in every 30 min.
            </p>
          </div>
          <img src={image_widget} className="feature-ss-img ss-img-desktop" />
        </div>
        <div className="feature-ss-container">
          <img src={image_export_details} className="feature-ss-img" />
          <div className="feature-ss-content">
            <h2>Export Data (Text/PDF)</h2>
            <p>
              Now you can export all the information shown by Device info to a
              PDF file or a Text file. Customize what information is needed to
              export and then you can share it with your friends. Also, you can
              use this document as a Professional document of your device. Note
              that, we support many languages chosen from language picker while
              exporting data to a Text file, but while exporting in PDF format
              we only support English at the present moment.
            </p>
          </div>
        </div>
        <div className="feature-ss-container">
          <img
            src={image_language_collage}
            className="feature-ss-img ss-img-mobile"
          />
          <div className="feature-ss-content">
            <h2>Global Language Support</h2>
            <p>
              Do you speak English? No. Don't worry. We support 15 major global
              languages to show the data. The languages supported by us are
              عربي, 中国人, Nederlands, English, français, Deutsche, Ελληνικά,
              हिन्दी, Bahasa Indonesia, Italiano, 日本語, Português, русский,
              Español, Tiếng Việt. If you're unable to find your native
              language, connect on email and we will add it asap. Also, you can
              contribute in translations of the strings and get your name
              featured in the app.
            </p>
          </div>
          <img
            src={image_language_collage}
            className="feature-ss-img ss-img-desktop"
          />
        </div>
        <div className="feature-ss-container">
          <img
            src={image_colorful_collage}
            className="feature-ss-img collage"
          />
          <div className="feature-ss-content">
            <h2>Perform Service Tests</h2>
            <p>
              Thinking if the hardware of your device is operating perfectly?
              You have never bothered to check them right? Don't worry, we have
              got you covered. Device Info can test your smartphone hardware for
              faults and consistencies. As for now, it supports tests for
              Display, Multi-touch, Flashlight, Loudspeaker, Ear Speaker, Ear
              Proximity, Light Sensor, Accelerometer, Vibration, Wi-Fi,
              Bluetooth, Fingerprint, Volume Buttons. These tests require few
              permissions to work effectively. So, grant the permissions if
              asked and check your device in and out.
            </p>
          </div>
        </div>
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
