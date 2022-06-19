import React from "react";

import "./App.css";

import { Navbar, Hero, AppSlider, Cards, About, Footer } from "./components";

import { apps } from "./data/apps";
import { services } from "./data/services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppSlider apps={apps} id="products" />
      <Cards data={services} heading="Services" />
      <About />
      <Footer />
    </div>
  );
};

export default App;
