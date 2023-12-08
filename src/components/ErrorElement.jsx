import React from "react";
import errorImage from "../assets/404-image.svg";
import { NavLink } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="error-section">
      <div className="error-content">
        <div className="error-left">
          <img src={errorImage} className="error-image" />
        </div>
        <div className="error-right">
          <h1 className="error-right-header">Lost in space?</h1>
          <p className="error-left-description">
            It looks like that page doesn't exist <br />
            please check the URL and try again.{" "}
          </p>
          <NavLink to="/" className="error-button">
            Go Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ErrorElement;
