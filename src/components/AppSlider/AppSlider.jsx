import React, { useState, useEffect } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

import "./styles.css";

const AppSlider = ({ apps }) => {
  const [data, setData] = useState(apps);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section" id="products">
      <div className="title">
        <h2>Products</h2>
      </div>
      <div className="section-center">
        {data.map((item, itemIndex) => {
          const { id, image, name, desc, link } = item;
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="item-img" />
              <>
                <h4>{name}</h4>
                <a href={link}>
                  <IoLogoGooglePlaystore className="icon" />
                </a>
                {name === "Device Info" && (
                  <a
                    href="https://toralabs.in/device-info"
                    style={{ marginLeft: "20px" }}
                  >
                    <GoLinkExternal className="icon" />
                  </a>
                )}
              </>
              <p className="text">{desc}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default AppSlider;
