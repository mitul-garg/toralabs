import React from "react";

import "./styles.css";

import { DeviceInfoHero, DeviceInfoFeatures } from "./components";
import { Wave } from "./components/Divider";

const DeviceInfoPage = () => {
  return (
    <div>
      <Wave color="white" />
      <DeviceInfoHero />
      <DeviceInfoFeatures />
    </div>
  );
};

export default DeviceInfoPage;
