import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Rings } from "react-loader-spinner";

import { socialLinks } from "../../data/socialLinks";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import contactImg from "../../assets/contact.png";

import "./styles.css";

const Footer = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    );

    setLoading(false);
    setSent(true);
  };

  return (
    <div id="contact" className="footer">
      <img src={contactImg} alt="contact" className="contact-img" />
      <div className="contact">
        <h2>Get In Touch</h2>
        {loading ? (
          <Rings height="100" width="100" color="#cecac3" />
        ) : (
          <>
            {sent ? (
              <div className="sent-message">
                <h3>Message Sent. We will get back to you soon!</h3>
                <button onClick={() => setSent(false)}>Send Another!</button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="form-control"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                    required
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="message"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" value="Send" className="submit-btn">
                  Submit
                </button>
              </form>
            )}
          </>
        )}
      </div>
      <ul className="social-links">
        {socialLinks.map(({ id, icon, link }) => (
          <li key={id} className="social-link">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="copyright">
        <AiOutlineCopyrightCircle /> ToraLabs Copyright{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
