import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { Navbar, Hero, AppSlider, Cards, About, Footer } from "./components";
import { Wave } from "./appPages/DeviceInfo/components/Divider";
import PrivacyNavbar from "./components/Privacy/PrivacyNavbar";
import { WebsitePrivacy } from "./components/Privacy";

import { Error } from "./Error";

import DeviceInfoPage from "./appPages/DeviceInfo/DeviceInfoPage";

import { homeLinks, deviceInfoLinks } from "./data/links";
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
                <Navbar links={homeLinks} heading="ToraLabs" />
                <Wave color="white" />
                <Hero />
                <AppSlider apps={apps} id="products" />
                <Cards data={services} heading="Services" />
                <About />
                <Footer />
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
                  <Wave color="#171137" />
                  {component}
                  <Footer />
                </>
              }
            />
          ))}

          <Route
            exact
            path="/device-info"
            element={
              <>
                <Navbar links={deviceInfoLinks} heading="Device Info" />
                <DeviceInfoPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/privacy-policy"
            exact
            element={
              <>
                <PrivacyNavbar />
                <WebsitePrivacy />
                <Footer />
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <PrivacyNavbar />
                <Error />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
