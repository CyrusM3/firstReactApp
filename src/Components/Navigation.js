/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import hero from "../images/img1.jpg";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="hero"></div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Product</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div>
        <h1>
          Let's <span className="text">Explore</span> The World
        </h1>
      </div>
    </div>
  );
};

export default Navigation;
