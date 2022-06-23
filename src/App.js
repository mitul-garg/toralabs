import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { Navbar, Hero, AppSlider, Cards, About, Footer } from "./components";
import PrivacyNavbar from "./components/Privacy/PrivacyNavbar";

import { apps } from "./data/apps";
import { services } from "./data/services";
import { privacyRoutes } from "./data/privacyRoutes";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <AppSlider apps={apps} id="products" />
                <Cards data={services} heading="Services" />
                <About />
              </>
            }
          />
          {privacyRoutes.map(({ id, to, component }) => (
            <Route
              key={id}
              exact
              path={`/privacy-policy/${to}`}
              element={
                <>
                  <PrivacyNavbar />
                  {component}
                </>
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
