/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="hero"></div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="#">Travel</a>
        </li>
        <li className="nav-item">
          <a href="#">Offer</a>
        </li>
        <li className="nav-item">
          <a href="#">Story</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
      <div>
        <h1>
          Let's <span className="text">Explore</span> The World
        </h1>
      </div>
    </div>
  );
};

export default Navigation;
