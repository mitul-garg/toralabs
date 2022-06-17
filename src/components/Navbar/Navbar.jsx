import React, { useState } from "react";

import logo from "../../assests/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import "./styles.css";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);

  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <img src={logo} alt="Toralabs" className="nav-logo" />
          <h1>ToraLabs</h1>
        </div>
        <div className="right-nav">
          <div className="drawer-icons">
            <GiHamburgerMenu
              className={openDrawer ? "hamburger hidden" : "hamburger"}
              onClick={toggleDrawer}
            />
            <GrClose
              className={openDrawer ? "close-icon" : "close-icon hidden"}
              onClick={toggleDrawer}
            />
          </div>
          <ul className="nav-links">
            <li>About</li>
            <li>Apps</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <ul className={openDrawer ? "down-drawer" : "down-drawer hidden"}>
        <li>About</li>
        <li>Apps</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default Navbar;
