import React, { useState } from "react";

import logo from "../../assets/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import "./styles.css";

const Navbar = ({ links, heading }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);

  const handleNavClick = () => {
    toggleDrawer();
  };

  // useEffect(() => {
  //   let drawer = setInterval(() => {
  //     setOpenDrawer(false);
  //   }, 5000);
  //   return () => clearInterval(drawer);
  // }, [openDrawer]);

  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <img src={logo} alt="Toralabs" className="nav-logo" />
          <h1>{heading}</h1>
        </div>
        <div className="right-nav">
          <div className="drawer-icons">
            <GiHamburgerMenu
              className={openDrawer ? "hamburger icon-hidden" : "hamburger"}
              onClick={toggleDrawer}
            />
            <GrClose
              className={openDrawer ? "close-icon" : "close-icon icon-hidden"}
              onClick={toggleDrawer}
            />
          </div>
          <ul className="nav-links">
            {links.map(({ id, name, href }) => (
              <li key={id} className="link">
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className={openDrawer ? "down-drawer" : "down-drawer hidden"}>
        {links.map(({ id, name, href }) => (
          <li key={id} className="link">
            <a href={href} onClick={handleNavClick}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
