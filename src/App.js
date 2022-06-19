import React from "react";

import "./App.css";

import { Navbar, Hero, AppSlider, Cards } from "./components";

import { apps } from "./data/apps";
import { services } from "./data/services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppSlider apps={apps} />
      <Cards data={services} heading="Services" />
    </div>
  );
};

export default App;
