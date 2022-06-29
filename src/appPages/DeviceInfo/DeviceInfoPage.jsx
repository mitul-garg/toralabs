import React from "react";

import "./styles.css";

import {
  DeviceInfoHero,
  DeviceInfoFeatures,
  DeviceInfoSlider,
} from "./components";
import { Wave } from "./components/Divider";

const DeviceInfoPage = () => {
  return (
    <div>
      <Wave color="white" />
      <DeviceInfoHero />
      <DeviceInfoFeatures />
      <DeviceInfoSlider />
    </div>
  );
};

export default DeviceInfoPage;
