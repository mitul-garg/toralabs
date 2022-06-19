import React from "react";

import "./styles.css";

const Card = ({ name, icon, features }) => {
  return (
    <div className="card">
      <span className="card-icon">{icon}</span>
      <h3 className="card-title">{name}</h3>
      <ul className="card-list">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
