import React from "react";

import "./App.css";

import { Navbar, Hero, AppSlider } from "./components";

import { apps } from "./data/apps";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppSlider apps={apps} />
    </div>
  );
};

export default App;
