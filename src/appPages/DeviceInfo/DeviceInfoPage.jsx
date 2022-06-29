import React from "react";

import "./styles.css";

import {
  DeviceInfoHero,
  DeviceInfoFeatures,
  DeviceInfoSlider,
  DeviceInfoStats,
  DeviceInfoFAQs,
} from "./components";
import { Wave } from "./components/Divider";

const DeviceInfoPage = () => {
  return (
    <div>
      <Wave color="white" />
      <DeviceInfoHero />
      <DeviceInfoFeatures />
      <DeviceInfoSlider />
      <DeviceInfoStats /> {/* reviews and stats both in this component */}
      <DeviceInfoFAQs />
    </div>
  );
};

export default DeviceInfoPage;
