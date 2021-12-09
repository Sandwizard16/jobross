import React from "react";
import headerImage from "../assets/headerImage.svg";
import "../css/header.css";

const Header = () => {
  return (
    <div className="section">
      <div className="intro-header">
        <div className="intro-content">
          <div className="intro-text">
            <div className="heading-jumbo">JobRoss</div>
            <br></br>
            <div className="paragraph-bigger">
              Find your dream job in just a few clicks!
            </div>
          </div>
          <br></br>
          <button className="button">Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
