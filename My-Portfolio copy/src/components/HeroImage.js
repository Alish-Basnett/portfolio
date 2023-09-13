/* eslint-disable jsx-a11y/alt-text */
import "./HeroImageStyles.css";

import React from "react";
import IntroImg from "../assets/mask-bg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} />{" "}
      </div>{" "}
      <div className="content">
        <p> Hi, I 'M A STUDENT</p> <h1> BSC. COMPUTING </h1>{" "}
        <div>
          <Link to="/project" className="btn">
            Projects{" "}
          </Link>{" "}
          <Link to="/contact" className="btn btn-light">
            Contact{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default HeroImage;
