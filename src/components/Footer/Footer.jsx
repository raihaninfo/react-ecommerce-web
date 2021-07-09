import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <p className="text-white text-center my-3">
            &copy; 2021. All Rights Reserve, Made With{" "}
            <span className="love">❤</span> by{" "}
            <a
              target="blank"
              className="text-white"
              href="http://github.com/raihaninfo"
            >
              Raihan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
