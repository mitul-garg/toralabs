import React from "react";

import aboutImg from "../../assets/about.svg";

import "./styles.css";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <img src={aboutImg} alt="Mrudul Tora" className="about-img" />
      <p>
        I, Mrudul Tora, Founder @ ToraLabs believe in action, progress and
        growth. We have already achieved many milestones in our active years,
        currently, crossing 1M+ installs on Google Play Store, and 2M+ across
        all over internet. We are determined to serve people with our hard-work
        and dedication. We love to convert your dreams into real-world
        applications! <br />
        Website Developed by :{" "}
        <a
          href="https://mitul-garg.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mitul-credits"
        >
          Mitul Garg
        </a>
      </p>
    </div>
  );
};

export default About;
