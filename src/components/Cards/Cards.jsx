import React from "react";

import "./styles.css";

import Card from "./Card/Card";

const Cards = ({ data, heading }) => {
  return (
    <div className="cards-container">
      <h2>{heading}</h2>
      <div className="cards">
        {data.map(({ id, name, icon, features }) => (
          <Card key={id} name={name} icon={icon} features={features} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
