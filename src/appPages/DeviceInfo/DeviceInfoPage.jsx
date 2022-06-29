import React from "react";

import "./styles.css";

import {
  DeviceInfoHero,
  DeviceInfoFeatures,
  DeviceInfoSlider,
  DeviceInfoStats,
} from "./components";
import { Wave } from "./components/Divider";

const DeviceInfoPage = () => {
  return (
    <div>
      <Wave color="white" />
      <DeviceInfoHero />
      <DeviceInfoFeatures />
      <DeviceInfoSlider />
      <DeviceInfoStats />
    </div>
  );
};

export default DeviceInfoPage;
