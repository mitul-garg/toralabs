import React, { useState } from "react";

import questions from "../../../../data/deviceInfoQuestions";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./styles.css";

const DeviceInfoFAQs = () => {
  const [curr, setCurr] = useState(-1);

  const openFAQ = (id) => {
    setCurr(id);
  };

  const closeFAQ = () => {
    setCurr(-1);
  };

  return (
    <div className="device-info-faqs" id="faqs">
      <h2 className="device-info-heading">FAQs</h2>
      <div className="questions-holder">
        {questions.map(({ id, title, info }) => (
          <div className="faq" key={id}>
            <div className="faq-header">
              <h4>{title}</h4>
              {id !== curr && (
                <AiOutlinePlus
                  onClick={() => openFAQ(id)}
                  className="faq-icon"
                />
              )}
              {id === curr && (
                <AiOutlineMinus onClick={closeFAQ} className="faq-icon" />
              )}
            </div>
            <div className="faq-content">{id === curr && <p>{info}</p>}</div>
          </div>
        ))}
      </div>
      <a
        href="https://toralabs.in/privacy-policy/device-info"
        target="_blank"
        rel="noopener noreferrer"
        className="privacy-policy-faq-button"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default DeviceInfoFAQs;
