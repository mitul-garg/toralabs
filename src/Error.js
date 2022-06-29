import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error">
      <h3>Oops! You have reached a page that does not exist!</h3>
      <Link to="/">
        <button className="error-page-button">Travel Back Home</button>
      </Link>
    </div>
  );
};
